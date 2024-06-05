import React from 'react';
import { optionType } from '../../data/type';
import { ReactComponent as RadioSelected } from '../../assets/icons/icon_radio_selected.svg';
import { ReactComponent as RadioUnselected } from '../../assets/icons/icon_radio_unselected.svg';

const RadioRow = ({
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
            key={index}
            className="flex items-center gap-x-6"
            onClick={option.onClick}
          >
            {option.isClicked ? <RadioSelected /> : <RadioUnselected />}
            <div className="text-14 text-dark-100">{option.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioRow;
