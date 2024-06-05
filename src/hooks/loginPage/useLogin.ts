import { useState } from 'react';
import useAuthStore from '../../store/useAuthStore';
import { setAccessToken } from '../../api/manageLocalStorage';

export const useLogin = () => {
  const { login } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginButtonClick = () => {
    setAccessToken('accessToken');
    login();
  };

  return {
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    handleLoginButtonClick,
  };
};
