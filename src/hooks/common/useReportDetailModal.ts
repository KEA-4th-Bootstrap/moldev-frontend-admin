import { useState } from 'react';
import {
  reportItemType,
  reportProcessType,
  reportReasonKorToEng,
} from '../../data/type';
import { useMutation, useQuery } from 'react-query';
import { getReportDetail, patchReport, postBanUser } from '../../api/reportApi';

export const useReportDetailModal = (
  report: reportItemType,
  onClose: () => void,
) => {
  console.log(report);
  const [processType, setProcessType] = useState<reportProcessType | null>(
    null,
  );
  const [isProcessOpen, setIsProcessOpen] = useState<boolean>(false);

  const {
    data: reportDetail,
    isLoading,
    isError,
  } = useQuery<any>(
    ['reportDetail', report.contentId, report.reportType],
    () =>
      getReportDetail(report.contentId, report.reportType).then((res) => {
        console.log('신고 상세 조회 원본 데이터 ---> ', res);
        return res.data.data;
      }),
    {
      retry: 2,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log('신고 상세 조회 성공 --> ', data);
      },
      onError: (error) => {
        console.log('신고 상세 조회 실패 --> ', error);
      },
    },
  );

  const { mutate: tryBanUser } = useMutation(
    () =>
      postBanUser(
        report.reportId,
        report.reporteeId,
        Number(processType),
        reportReasonKorToEng[report.reason],
      ),
    {
      onSuccess: (data) => {
        console.log('유저 차단 성공 --> ', data);
        onClose();
      },
      onError: (error) => {
        console.log('유저 차단 실패 --> ', error);
      },
    },
  );

  const { mutate: cancelReport } = useMutation(
    () => patchReport(report.reportId),
    {
      onSuccess: (data) => {
        console.log('신고 반려 성공 --> ', data);
        onClose();
      },
      onError: (error) => {
        console.log('신고 반려 실패 --> ', error);
      },
    },
  );
  const onProcessClick = () => {
    setIsProcessOpen(!isProcessOpen);
  };

  const handleProcessType = (type: reportProcessType) => {
    setProcessType(type);
    setIsProcessOpen(false);
  };

  const handleProcessButton = () => {
    if (processType === 'none') {
      cancelReport();
    } else {
      tryBanUser();
    }
  };

  return {
    processType,
    isProcessOpen,
    onProcessClick,
    handleProcessType,
    reportDetail,
    isLoading,
    isError,
    handleProcessButton,
  };
};
