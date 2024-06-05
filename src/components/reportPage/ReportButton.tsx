import React from 'react';

const ReportButton = ({
  type,
  onClick,
}: {
  type: 'detail' | 'edit';
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer px-20 py-8 rounded-full text-white font-bold ${type === 'detail' ? 'bg-main' : 'bg-dark-300'}`}
    >
      {type === 'detail' ? '상세내용' : '수정하기'}
    </div>
  );
};

export default ReportButton;
