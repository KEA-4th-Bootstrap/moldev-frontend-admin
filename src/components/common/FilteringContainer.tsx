import React, { ReactNode } from 'react';
import SearchInput from './SearchInput';
import FilterButton from './FilterButton';

const FilteringContainer = ({
  placeHolder,
  inputValue,
  onChangeInputValue,
  content,
}: {
  placeHolder: string;
  inputValue: string;
  onChangeInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  content: ReactNode;
}) => {
  return (
    <div className="w-full flex items-center justify-between">
      <SearchInput
        placeHolder={placeHolder}
        value={inputValue}
        onChange={onChangeInputValue}
      />
      <FilterButton>{content}</FilterButton>
    </div>
  );
};

export default FilteringContainer;
