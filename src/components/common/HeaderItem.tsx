import React from 'react';
import { headerItemType } from '../../data/type';

const HeaderItem = ({
  text,
  child,
  onClick,
  isHover,
  onMouseEnter,
  onMouseLeave,
}: {
  text: string;
  child: headerItemType[];
  onClick: () => void;
  isHover: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  return (
    <div
      className={`flex items-center justify-center h-full px-16 text-white text-14 relative z-10 border-b-2 ${isHover ? 'border-white font-semibold' : 'border-transparent'} cursor-pointer`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div onClick={onClick}>{text}</div>
      <div
        className={`absolute top-[52px] left-1/2 -translate-x-1/2 w-[156px] flex flex-col p-8 gap-y-8 shadow-md rounded-lg bg-admin-gray-text ${
          isHover ? 'block' : 'hidden'
        }`}
      >
        {child.map((item, index) => {
          return (
            <div
              className="w-full h-[36px] flex items-center justify-center text-14 font-normal text-white bg-admin-gray-text rounded-block hover:bg-admin-gray-hover hover:font-semibold cursor-pointer"
              key={index}
              onClick={item.onClick}
            >
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderItem;
