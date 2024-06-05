import React from 'react';

const TotalLengthContainer = ({ totalLength }: { totalLength: number }) => {
  return (
    <div className="w-full h-[48px] my-2 flex items-center justify-start">
      <div className="flex items-center justify-center text-14 text-admin-gray-subtext gap-x-2">
        <span className="text-main font-semibold">{totalLength}</span>개의 결과
      </div>
    </div>
  );
};

export default TotalLengthContainer;
