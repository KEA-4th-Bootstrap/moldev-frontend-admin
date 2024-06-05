import { useEffect, useState } from 'react';
import { reportItemType } from '../../data/type';

export const useReportProcess = () => {
  const totalLength = 10;
  const placeHolder = '유저명으로 검색해주세요.';
  const [inputValue, setInputValue] = useState('');
  const [filterOption, setFilterOption] = useState<{
    order: 'reported' | 'processed';
    filter: {
      post: boolean;
      comment: boolean;
    };
  }>({
    order: 'reported',
    filter: {
      post: true,
      comment: true,
    },
  });
  const [reportReceptionList, setReportReceptionList] = useState<
    reportItemType[]
  >([]);
  const [currentIdx, setCurrentIdx] = useState(1);

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onHandleOrder = (order: 'reported' | 'processed') => {
    setFilterOption({
      ...filterOption,
      order: order,
    });
  };

  const onHandleFilter = (option: 'post' | 'comment') => {
    setFilterOption({
      ...filterOption,
      filter: {
        ...filterOption.filter,
        [option]: !filterOption.filter[option],
      },
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
    onHandleOrder,
    onHandleFilter,
    totalLength,
    reportReceptionList,
    setReportReceptionList,
    currentIdx,
    setCurrentIdx,
  };
};
