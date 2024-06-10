import { useState } from 'react';
import useAuthStore from '../../store/useAuthStore';
import {
  setAccessToken,
  setMoldevId,
  setNickname,
} from '../../api/manageLocalStorage';
import { useMutation } from 'react-query';
import { postLoginApi } from '../../api/authApi';
import { CustomError } from '../../api/customError';

export const useLogin = () => {
  const { login } = useAuthStore();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { mutate: tryLogin } = useMutation(
    () => postLoginApi(email, password),
    {
      onSuccess: (data) => {
        console.log('로그인 성공 --> ', data);
        setMoldevId(data.data.data.moldevId);
        setAccessToken(data.data.data.accessToken);
        setNickname(data.data.data.nickname);
        login();
      },
      onError: (error) => {
        console.log('error : ', error);
        const customError = error as CustomError;
        if (customError.response?.status === 404) {
          setEmailError('가입되지 않은 이메일입니다.');
        } else if (customError.response?.status === 401) {
          setPasswordError('비밀번호가 일치하지 않습니다.');
        } else {
          setEmailError('알 수 없는 오류가 발생했습니다.');
        }
      },
    },
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginButtonClick = () => {
    setEmailError('');
    setPasswordError('');

    console.log('login : ', email, password);
    if (email === '') {
      setEmailError('이메일을 입력해주세요');
      return;
    } else if (password === '') {
      setPasswordError('비밀번호를 입력해주세요');
      return;
    }
    tryLogin();
  };

  return {
    email,
    handleEmailChange,
    password,
    emailError,
    passwordError,
    handlePasswordChange,
    handleLoginButtonClick,
  };
};
