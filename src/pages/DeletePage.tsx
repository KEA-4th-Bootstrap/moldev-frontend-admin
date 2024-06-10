import React from 'react';
import RectButton from '../components/common/RectButton';

const DeletePage = ({
  moldevId,
  clickCancelButton,
  clickDeleteButton,
}: {
  moldevId: string;
  clickCancelButton: () => void;
  clickDeleteButton: () => void;
}) => {
  return (
    <div className="fixed left-0 top-0 w-screen h-screen z-20 bg-black/50 flex items-center justify-center">
      <div className="min-w-[400px] w-1/3 max-w-[600px] px-16 py-30 bg-white rounded-modal flex flex-col items-center justify-center gap-y-30">
        <div className="w-full flex flex-col gap-y-16 items-center justify-center">
          <h1 className="text-2xl font-bold">{`@${moldevId} 회원을`}</h1>
          <p>탈퇴시키시겠습니까?</p>
        </div>
        <div className="w-full flex items-center justify-center gap-x-20">
          <RectButton
            w="100%"
            h="50px"
            type="cancel"
            text="취소"
            onClick={clickCancelButton}
          />
          <RectButton
            w="100%"
            h="50px"
            type="select"
            text="탈퇴하기"
            onClick={clickDeleteButton}
          />
        </div>
      </div>
    </div>
  );
};

export default DeletePage;
