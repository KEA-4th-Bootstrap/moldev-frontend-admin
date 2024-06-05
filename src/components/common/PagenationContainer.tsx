import { ReactComponent as Prev } from '../../assets/icons/icon_page_left.svg';
import { ReactComponent as Next } from '../../assets/icons/icon_page_right.svg';
import { ReactComponent as First } from '../../assets/icons/icon_page_left_end.svg';
import { ReactComponent as Last } from '../../assets/icons/icon_page_right_end.svg';
import { ReactComponent as PrevDisabled } from '../../assets/icons/icon_page_left_disable.svg';
import { ReactComponent as NextDisabled } from '../../assets/icons/icon_page_right_disable.svg';
import { ReactComponent as FirstDisabled } from '../../assets/icons/icon_page_left_end_disable.svg';
import { ReactComponent as LastDisabled } from '../../assets/icons/icon_page_right_end_disable.svg';
import PagenationItem from './PagenationItem';
import { usePagenation } from '../../hooks/common/usePagenation';

const PagenationContainer = ({
  currentIdx,
  totalLength,
  setCurrentIdx,
}: {
  currentIdx: number;
  totalLength: number;
  setCurrentIdx: (idx: number) => void;
}) => {
  const {
    currentPage,
    totalIdx,
    totalPage,
    pageList,
    onClickPage,
    onClickFirst,
    onClickLast,
    onClickPrev,
    onClickNext,
  } = usePagenation(currentIdx, totalLength, setCurrentIdx);
  return (
    <div className="w-full flex items-center justify-end py-60">
      <div className="flex items-center justify-center rounded-lg border border-admin-gray-border">
        <PagenationItem
          isClicked={false}
          borderSide="right"
          isAble={currentIdx === 1}
          onClick={onClickFirst}
        >
          {currentIdx === 1 ? (
            <FirstDisabled width={24} height={24} />
          ) : (
            <First width={24} height={24} />
          )}
        </PagenationItem>
        <PagenationItem
          isClicked={false}
          borderSide="right"
          isAble={currentPage === 1}
          onClick={onClickPrev}
        >
          {currentPage === 1 ? (
            <PrevDisabled width={24} height={24} />
          ) : (
            <Prev width={24} height={24} />
          )}
        </PagenationItem>
        {pageList().map((page) => (
          <PagenationItem
            key={page}
            isClicked={page === currentIdx}
            borderSide="right"
            onClick={() => onClickPage(page)}
            isAble={true}
          >
            {page}
          </PagenationItem>
        ))}
        <PagenationItem
          isClicked={false}
          borderSide="right"
          isAble={currentPage === totalPage}
          onClick={onClickNext}
        >
          {currentPage === totalPage ? (
            <NextDisabled width={24} height={24} />
          ) : (
            <Next width={24} height={24} />
          )}
        </PagenationItem>
        <PagenationItem
          isClicked={false}
          borderSide="none"
          isAble={currentIdx === totalIdx}
          onClick={onClickLast}
        >
          {currentIdx === totalIdx ? (
            <LastDisabled width={24} height={24} />
          ) : (
            <Last width={24} height={24} />
          )}
        </PagenationItem>
      </div>
    </div>
  );
};

export default PagenationContainer;
