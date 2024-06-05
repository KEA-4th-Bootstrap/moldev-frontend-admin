import React from 'react';
import LoginContainer from '../components/loginPage/LoginContainer';
import IslandContainer from '../components/loginPage/IslandContainer';

const LoginPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <IslandContainer />
      <LoginContainer />
    </div>
  );
};

export default LoginPage;
