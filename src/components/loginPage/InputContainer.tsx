import React from 'react';

const InputContainer = ({
  name,
  type,
  onChange,
  value,
  isError,
  error,
}: {
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isError: boolean;
  error: string;
}) => {
  return (
    <div className="w-full flex flex-col gap-y-10">
      <div className="text-16 font-medium text-gray-300">{name}</div>
      <input
        className={`w-full h-[60px] bg-white flex items-center justify-start px-16 rounded-[13px] border border-gray-100 focus:outline-none focus:border-main`}
        type={type}
        onChange={onChange}
        value={value}
      />
      <div className="w-full h-[20px] flex items-center justify-start">
        {isError && <div className="text-12 text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default InputContainer;
