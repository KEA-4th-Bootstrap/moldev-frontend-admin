import React from 'react';
import { optionType } from '../../data/type';
import { ReactComponent as CheckSelected } from '../../assets/icons/icon_check_selected.svg';
import { ReactComponent as CheckUnselected } from '../../assets/icons/icon_check_unselected.svg';

const CheckboxRow = ({
  title,
  options,
}: {
  title: string;
  options: optionType[];
}) => {
  return (
    <div className="w-full flex items-start justify-around gap-x-30">
      <div className="font-semibold text-14 text-black">{title}</div>
      <div className="grow flex items-center justify-start gap-x-15 gap-y-10 flex-wrap">
        {options.map((option, index) => (
          <div
            key={`${index}-${option.text}`}
            className="flex items-center gap-x-6 cursor-pointer"
            onClick={option.onClick}
          >
            {option.isClicked ? <CheckSelected /> : <CheckUnselected />}
            <div className="text-14 text-dark-100">{option.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxRow;
