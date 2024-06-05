import React from 'react';
import Header from '../components/common/Header';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-between overflow-hidden">
      <Header />
      <div className="w-full grow flex flex-col items-center justify-center mt-[47px] overflow-y-scroll">
        <div className="min-w-[1150px] w-9/12 grow min-h-full flex flex-col justify-center items-center pb-60">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
