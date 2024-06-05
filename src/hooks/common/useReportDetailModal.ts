import { useState } from 'react';
import { reportItemType, reportProcessType } from '../../data/type';

export const useReportDetailModal = (report: reportItemType) => {
  console.log(report);
  const [processType, setProcessType] = useState<reportProcessType | null>(
    null,
  );
  const [isProcessOpen, setIsProcessOpen] = useState<boolean>(false);

  const onProcessClick = () => {
    setIsProcessOpen(!isProcessOpen);
  };

  const handleProcessType = (type: reportProcessType) => {
    setProcessType(type);
    setIsProcessOpen(false);
  };

  return {
    processType,
    isProcessOpen,
    onProcessClick,
    handleProcessType,
  };
};
