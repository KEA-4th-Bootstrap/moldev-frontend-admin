import { useEffect, useState } from 'react';
import { reportItemType } from '../../data/type';
import { dummyReport, dummyReportComment } from '../../data/dummy';

export const useReportReception = () => {
  const placeHolder = '유저명으로 검색해주세요.';
  const [inputValue, setInputValue] = useState('');
  const [filterOption, setFilterOption] = useState({
    post: true,
    comment: true,
  });
  const [reportReceptionList, setReportReceptionList] = useState<
    reportItemType[]
  >([
    dummyReport,
    dummyReportComment,
    dummyReport,
    dummyReportComment,
    dummyReport,
    dummyReportComment,
    dummyReport,
    dummyReportComment,
    dummyReport,
    dummyReportComment,
    dummyReport,
    dummyReportComment,
    dummyReport,
    dummyReportComment,
  ]);
  const totalLength = reportReceptionList.length;
  const [currentIdx, setCurrentIdx] = useState(1);
  const [selectedReport, setSelectedReport] = useState<reportItemType | null>(
    null,
  );

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onChangeFilterOption = (option: 'post' | 'comment') => {
    setFilterOption({
      ...filterOption,
      [option]: !filterOption[option],
    });
  };

  useEffect(() => {
    console.log(filterOption);
  }, [filterOption]);

  return {
    placeHolder,
    inputValue,
    onChangeInputValue,
    filterOption,
    onChangeFilterOption,
    totalLength,
    reportReceptionList,
    setReportReceptionList,
    currentIdx,
    setCurrentIdx,
    selectedReport,
    setSelectedReport,
  };
};
