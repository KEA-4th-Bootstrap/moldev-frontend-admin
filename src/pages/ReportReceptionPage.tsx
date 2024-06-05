import React from 'react';
import TitleBar from '../components/common/TitleBar';
import FilteringContainer from '../components/common/FilteringContainer';
import { useReportReception } from '../hooks/reportReceptionPage/useReportReception';
import TextRow from '../components/common/TextRow';
import CheckboxRow from '../components/common/CheckboxRow';
import TotalLengthContainer from '../components/common/TotalLengthContainer';
import EmptyContainer from '../components/common/EmptyContainer';
import ReportTypeTag from '../components/reportPage/ReportTypeTag';
import ReportButton from '../components/reportPage/ReportButton';
import PagenationContainer from '../components/common/PagenationContainer';
import DetailModal from '../components/reportPage/DetailModal';

const ReportReceptionPage = () => {
  const {
    placeHolder,
    inputValue,
    onChangeInputValue,
    filterOption,
    onChangeFilterOption,
    totalLength,
    reportReceptionList,
    currentIdx,
    setCurrentIdx,
    selectedReport,
    setSelectedReport,
  } = useReportReception();
  return (
    <div className="w-full min-h-full grow flex flex-col items-start justify-start">
      <TitleBar title="신고 접수" path={['신고 관리', '신고 접수']} />
      <FilteringContainer
        placeHolder={placeHolder}
        inputValue={inputValue}
        onChangeInputValue={onChangeInputValue}
        content={
          <>
            <TextRow title="정렬" desc="신고번호 내림차순으로 제공됩니다." />
            <CheckboxRow
              title="유형"
              options={[
                {
                  isClicked: filterOption.post,
                  text: '게시글',
                  onClick: () => onChangeFilterOption('post'),
                },
                {
                  isClicked: filterOption.comment,
                  text: '댓글',
                  onClick: () => onChangeFilterOption('comment'),
                },
              ]}
            />
          </>
        }
      />
      <TotalLengthContainer totalLength={totalLength} />
      <div className="w-full grow flex flex-col items-center justify-start">
        <table className="w-full table-fixed">
          <thead className="pb-8 border-b-2 border-admin-gray-border">
            <tr>
              <th className="w-[100px]">신고번호</th>
              <th className="w-[200px]">유형</th>
              <th className="w-[200px]">대상유저</th>
              <th className="grow">사유</th>
              <th className="w-[200px]">신고일자</th>
              <th className="w-[150px]">상세보기</th>
            </tr>
          </thead>
          {!reportReceptionList ? (
            <tbody>
              <tr>
                <td colSpan={6}>
                  <EmptyContainer />
                </td>
              </tr>
            </tbody>
          ) : reportReceptionList.length < 1 ? (
            <tbody>
              <tr>
                <td colSpan={6}>
                  <EmptyContainer />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {reportReceptionList
                .slice((currentIdx - 1) * 10, currentIdx * 10)
                .map((report) => (
                  <tr key={report.reportId}>
                    <td>{report.reportId}</td>
                    <td className="flex items-center justify-start">
                      <ReportTypeTag type={report.reportType} />
                    </td>
                    <td>{report.reporteeId}</td>
                    <td>{report.reason}</td>
                    <td>{report.reportDate}</td>
                    <td className="flex items-center justify-start">
                      <ReportButton
                        type="detail"
                        onClick={() => {
                          setSelectedReport(report);
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          )}
        </table>
      </div>
      {reportReceptionList.length > 0 && (
        <PagenationContainer
          totalLength={totalLength}
          currentIdx={currentIdx}
          setCurrentIdx={setCurrentIdx}
        />
      )}
      {selectedReport && (
        <div className="fixed left-0 top-0 w-screen h-screen flex items-center justify-center bg-black/30">
          <DetailModal
            report={selectedReport}
            onClose={() => setSelectedReport(null)}
          />
        </div>
      )}
    </div>
  );
};

export default ReportReceptionPage;
