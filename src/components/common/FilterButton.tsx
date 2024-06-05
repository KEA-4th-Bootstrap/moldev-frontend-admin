import { ReactNode, useState } from 'react';
import { ReactComponent as OrderIcon } from '../../assets/icons/icon_filter.svg';

const FilterButton = ({ children }: { children: ReactNode }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div
      className="flex items-center justify-center pl-12 pr-16 h-[40px] gap-x-8 rounded-lg border border-[#E9EBEE] cursor-pointer relative"
      onClick={() => setIsFilterOpen(!isFilterOpen)}
    >
      <OrderIcon width={24} height={24} />
      <div className="text-14 text-black cursor-pointer">정렬 및 필터</div>
      <div
        className={`absolute top-[50px] -right-0 w-[330px] ${isFilterOpen ? 'flex' : 'hidden'} flex-col items-start justify-center p-20 bg-white border border-gray-50 rounded gap-y-15 cursor-default`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default FilterButton;
