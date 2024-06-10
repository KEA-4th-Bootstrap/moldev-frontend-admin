import { useEffect, useState } from 'react';

export const usePagenation = (
  currentIdx: number,
  totalLength: number,
  setCurrentIdx: (idx: number) => void,
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalIdx = Math.ceil(totalLength / 10);
  const totalPage = Math.ceil(totalIdx / 5);

  useEffect(() => {
    console.log('currentIdx:', currentIdx);
    console.log('currentPage:', currentPage);
    console.log('totalIdx:', totalIdx);
    console.log('totalPage:', totalPage);
  }, [currentIdx, currentPage, totalIdx, totalPage]);

  const pageList = () => {
    // 1 2 3 4 5 , 6 7 8 9 10 과 같이 currentPage를 포함한 5개의 페이지를 보여주기 위한 로직
    const start = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const end = start + 4 > totalIdx ? totalIdx : start + 4;
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  };

  const onClickPage = (idx: number) => {
    setCurrentIdx(idx - 1);
  };

  const onClickFirst = () => {
    setCurrentIdx(0);
  };

  const onClickLast = () => {
    setCurrentIdx(totalIdx - 1);
  };

  const onClickPrev = () => {
    setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1);
  };

  const onClickNext = () => {
    setCurrentPage(currentPage === totalPage ? currentPage : currentPage + 1);
  };

  return {
    currentPage,
    totalIdx,
    totalPage,
    pageList,
    onClickPage,
    onClickFirst,
    onClickLast,
    onClickPrev,
    onClickNext,
  };
};
