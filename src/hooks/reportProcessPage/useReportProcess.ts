import { useEffect, useState } from 'react';
import { reportItemType } from '../../data/type';
import { useQuery } from 'react-query';
import { getProcessedReportList } from '../../api/reportApi';

export const useReportProcess = () => {
  const placeHolder = '유저명으로 검색해주세요.';
  const [inputValue, setInputValue] = useState('');
  const [filterOption, setFilterOption] = useState({
    post: true,
    comment: true,
  });
  const [totalLength, setTotalLength] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);

  const {
    data: reportProcessedList,
    isLoading: reportProcessedListIsLoading,
    isError: reportProcessedListIsError,
  } = useQuery<reportItemType[]>(
    ['reportProcessed', filterOption, inputValue, currentIdx],
    () =>
      getProcessedReportList({
        type:
          filterOption.post && filterOption.comment
            ? null
            : filterOption.post
              ? 'POST'
              : 'REPLY',
        search: inputValue ? inputValue : null,
        page: currentIdx,
        size: 10,
      }).then((res) => {
        console.log('신고 처리 현황 리스트 조회 원본 데이터 --> ', res);
        setTotalLength(res.data.data.pageInfo.totalElements);
        return res.data.data.reportResponseVo;
      }),
    {
      refetchOnWindowFocus: false,
      retry: 2,
      onSuccess: (data) => {
        console.log('신고 처리 현황 리스트 조회 성공 --> ', data);
      },
      onError: (error) => {
        console.log('신고 처리 현황 리스트 조회 실패 --> ', error);
      },
    },
  );

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onChangeFilterOption = (option: 'post' | 'comment') => {
    let newFilterOption = {
      ...filterOption,
      [option]: !filterOption[option],
    };

    // Ensure at least one option is true
    if (!newFilterOption.post && !newFilterOption.comment) {
      newFilterOption = {
        ...newFilterOption,
        post: true,
      };
    }

    setFilterOption(newFilterOption);
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
    reportProcessedList,
    reportProcessedListIsLoading,
    reportProcessedListIsError,
    currentIdx,
    setCurrentIdx,
  };
};
