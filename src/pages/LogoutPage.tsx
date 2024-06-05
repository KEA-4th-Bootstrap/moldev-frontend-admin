import React from 'react';
import RectButton from '../components/common/RectButton';

const LogoutPage = ({
  clickLogoutButton,
  clickLogoutCancelButton,
}: {
  clickLogoutButton: () => void;
  clickLogoutCancelButton: () => void;
}) => {
  return (
    <div className="fixed w-screen h-screen z-20 bg-black/50 flex items-center justify-center">
      <div className="min-w-[400px] w-1/3 max-w-[600px] px-16 py-30 bg-white rounded-modal flex flex-col items-center justify-center gap-y-30">
        <div className="w-full flex flex-col gap-y-16 items-center justify-center">
          <h1 className="text-2xl font-bold">로그아웃</h1>
          <p>관리자 페이지에서 로그아웃하시겠습니까?</p>
        </div>
        <div className="w-full flex items-center justify-center gap-x-20">
          <RectButton
            w="100%"
            h="50px"
            type="cancel"
            text="취소"
            onClick={clickLogoutCancelButton}
          />
          <RectButton
            w="100%"
            h="50px"
            type="select"
            text="로그아웃하기"
            onClick={clickLogoutButton}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
