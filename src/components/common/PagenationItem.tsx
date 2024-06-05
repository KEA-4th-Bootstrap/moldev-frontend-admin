import { ReactNode } from 'react';

const PagenationItem = ({
  isClicked,
  borderSide,
  onClick,
  isAble = true,
  children,
}: {
  isClicked: boolean;
  borderSide: 'left' | 'right' | 'none';
  onClick: () => void;
  isAble: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={`${borderSide === 'left' ? 'border-l' : borderSide === 'right' ? 'border-r' : 'border-none'} border-admin-gray-page ${isClicked ? 'bg-admin-gray-button text-white' : 'bg-white text-admin-gray-text'} text-14 cursor-pointer flex items-center justify-center w-[48px] h-[48px]`}
      onClick={isAble ? onClick : () => {}}
    >
      {children}
    </div>
  );
};

export default PagenationItem;
