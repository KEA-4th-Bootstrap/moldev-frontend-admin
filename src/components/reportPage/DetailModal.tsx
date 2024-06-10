import { reportItemType, reportProcessTypeToKoeran } from '../../data/type';
import { ReactComponent as Close } from '../../assets/icons/icon_close.svg';
import { ReactComponent as Move } from '../../assets/icons/icon_arrow_right_move.svg';
import { ReactComponent as Down } from '../../assets/icons/icon_arrow_down.svg';
import ReportTypeTag from './ReportTypeTag';
import RectButton from '../common/RectButton';
import { useReportDetailModal } from '../../hooks/common/useReportDetailModal';
import ReportProcessItem from './ReportProcessItem';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorContainer from '../common/ErrorContainer';
import EmptyContainer from '../common/EmptyContainer';

const DetailModal = ({
  report,
  onClose,
}: {
  report: reportItemType;
  onClose: () => void;
}) => {
  const {
    processType,
    isProcessOpen,
    onProcessClick,
    handleProcessType,
    reportDetail,
    isLoading,
    isError,
    handleProcessButton,
  } = useReportDetailModal(report, onClose);
  return (
    <div className="min-w-[600px] max-w-[800px] w-1/3 flex flex-col gap-y-30 items-center justify-center pt-36 px-40 rounded-modal bg-white relative">
      <Close
        width={28}
        height={28}
        className="absolute top-[20px] right-[20px] cursor-pointer"
        onClick={onClose}
      />
      <div className="font-bold text-24 text-black">신고 상세</div>
      <div className="w-full flex flex-col items-start justify-start gap-y-16">
        <div className="w-full flex items-center justify-start gap-x-20">
          <div className="font-semibold text-14 text-gray-800">유형</div>
          {report.reportType === 'POST' ? (
            <ReportTypeTag type="POST" />
          ) : (
            <ReportTypeTag type="REPLY" />
          )}
        </div>
        {!reportDetail ? (
          isLoading ? (
            <div className="w-full flex flex-col items-center justify-center">
              <LoadingSpinner />
            </div>
          ) : isError ? (
            <div className="w-full flex flex-col items-center justify-center">
              <ErrorContainer />
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center">
              <EmptyContainer />
            </div>
          )
        ) : (
          <>
            <div className="w-full flex flex-col items-start justify-start gap-y-10">
              <div className="font-semibold text-14 text-gray-800">
                신고 사유
              </div>
              <div className="w-full px-22 py-13 rounded-block bg-gray-50 font-medium flex items-center justify-start gap-x-10">
                <div className="text-gray-800">{report.reason}</div>
                {report.reportType === 'REPLY' && (
                  <>
                    <div className="bg-gray-200 h-[20px] w-px" />
                    <div className="text-gray-400">
                      {reportDetail.replyContent}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-y-10">
              <div className="font-semibold text-14 text-gray-800">
                원본 URL
              </div>
              <div className="w-full px-22 py-13 rounded-block bg-white border border-gray-50 flex items-center justify-start gap-x-10">
                <div className="grow font-medium text-14 text-gray-800">
                  {reportDetail.title}
                </div>
                <Move width={24} height={24} />
              </div>
            </div>
          </>
        )}
        <div className="w-full flex items-center justify-start gap-x-20 text-14 text-gray-800">
          <div className="font-semibold">신고 대상 계정</div>
          <div className="font-normal grow">{report.reporteeId}</div>
        </div>
        <div className="w-full flex items-center justify-start gap-x-20 text-14 text-gray-800">
          <div className="font-semibold">신고 접수 일시</div>
          <div className="font-normal grow">{report.reportDate}</div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center pt-20 pb-[25px] gap-x-20">
        <div
          className={`grow px-16 h-[40px] bg-white border border-gray-50 rounded-block ${isProcessOpen ? 'rounded-b-none' : ''} flex items-center justify-start gap-x-10 relative`}
        >
          <div
            className="w-full flex items-center justify-start cursor-pointer"
            onClick={onProcessClick}
          >
            <div className="grow font-medium text-gray-600">
              {!processType
                ? '처리 유형 선택'
                : reportProcessTypeToKoeran[processType]}
            </div>
            <Down
              className={`${
                isProcessOpen ? 'transform rotate-180' : ''
              } transition-all duration-150`}
              width={24}
              height={24}
            />
          </div>
          <div
            className={`absolute left-0 top-[39px] w-full flex flex-col items-center justify-start py-8 px-16 gap-y-10 bg-white border border-t-0 border-gray-50 rounded-block rounded-t-none overflow-hidden transition-all duration-150
          ${isProcessOpen ? 'visible max-h-[500px]' : 'invisible max-h-0'}
          `}
          >
            <ReportProcessItem
              text="반려"
              onClick={() => handleProcessType('none')}
              isClicked={processType === 'none'}
            />
            <ReportProcessItem
              text="1일 정지"
              onClick={() => handleProcessType('1')}
              isClicked={processType === '1'}
            />
            <ReportProcessItem
              text="3일 정지"
              onClick={() => handleProcessType('3')}
              isClicked={processType === '3'}
            />
            <ReportProcessItem
              text="7일 정지"
              onClick={() => handleProcessType('7')}
              isClicked={processType === '7'}
            />
            <ReportProcessItem
              text="1달 정지"
              onClick={() => handleProcessType('30')}
              isClicked={processType === '30'}
            />
            <ReportProcessItem
              text="영구 정지"
              onClick={() => handleProcessType('36500')}
              isClicked={processType === '36500'}
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-8">
          <RectButton text="취소" type="cancel" w={'90px'} onClick={onClose} />
          <RectButton
            text="처리"
            type="select"
            w={'90px'}
            onClick={handleProcessButton}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
