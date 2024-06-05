import React from 'react';
import TitleBar from '../components/common/TitleBar';
import FilteringContainer from '../components/common/FilteringContainer';
import CheckboxRow from '../components/common/CheckboxRow';
import TotalLengthContainer from '../components/common/TotalLengthContainer';
import EmptyContainer from '../components/common/EmptyContainer';
import ReportTypeTag from '../components/reportPage/ReportTypeTag';
import ReportButton from '../components/reportPage/ReportButton';
import PagenationContainer from '../components/common/PagenationContainer';
import { useReportProcess } from '../hooks/reportProcessPage/useReportProcess';
import RadioRow from '../components/common/RadioRow';

const ReportProcessPage = () => {
  const {
    placeHolder,
    inputValue,
    onChangeInputValue,
    filterOption,
    onHandleOrder,
    onHandleFilter,
    totalLength,
    reportReceptionList,
    currentIdx,
    setCurrentIdx,
  } = useReportProcess();
  return (
    <div className="w-full min-h-full grow flex flex-col items-start justify-start">
      <TitleBar title="처리 현황" path={['신고 관리', '처리 현황']} />
      <FilteringContainer
        placeHolder={placeHolder}
        inputValue={inputValue}
        onChangeInputValue={onChangeInputValue}
        content={
          <>
            <RadioRow
              title="정렬"
              options={[
                {
                  isClicked: filterOption.order === 'reported',
                  text: '신고일자',
                  onClick: () => onHandleOrder('reported'),
                },
                {
                  isClicked: filterOption.order === 'processed',
                  text: '처리일자',
                  onClick: () => onHandleOrder('processed'),
                },
              ]}
            />
            <CheckboxRow
              title="유형"
              options={[
                {
                  isClicked: filterOption.filter.post,
                  text: '게시글',
                  onClick: () => onHandleFilter('post'),
                },
                {
                  isClicked: filterOption.filter.comment,
                  text: '댓글',
                  onClick: () => onHandleFilter('comment'),
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
              <th className="w-[100px]">유형</th>
              <th className="w-[150px]">대상유저</th>
              <th className="grow">사유</th>
              <th className="w-[150px]">신고일자</th>
              <th className="w-[150px]">처리일자</th>
              <th className="w-[150px]">처리</th>
              <th className="w-[150px]">수정</th>
            </tr>
          </thead>
          {!reportReceptionList ? (
            <tbody>
              <tr>
                <td colSpan={8}>
                  <EmptyContainer />
                </td>
              </tr>
            </tbody>
          ) : reportReceptionList.length < 1 ? (
            <tbody>
              <tr>
                <td colSpan={8}>
                  <EmptyContainer />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {reportReceptionList.map((report) => (
                <tr key={report.reportId}>
                  <td>{report.reportId}</td>
                  <td>
                    <ReportTypeTag type={report.reportType} />
                  </td>
                  <td>{report.reporteeId}</td>
                  <td>{report.reason}</td>
                  <td>{report.reportDate}</td>
                  <td>
                    <ReportButton type="edit" onClick={() => {}} />
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
    </div>
  );
};

export default ReportProcessPage;
