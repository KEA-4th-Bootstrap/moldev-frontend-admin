import InputContainer from './InputContainer';
import { useLogin } from '../../hooks/loginPage/useLogin';
import RectButton from '../common/RectButton';

const LoginContainer = () => {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleLoginButtonClick,
  } = useLogin();
  return (
    <div className="min-w-[640px] w-1/3 h-full flex flex-col items-center justify-center px-[110px] py-[100px] gap-y-[70px]">
      <div className="w-full h-full max-h-[670px] flex flex-col items-start justify-between">
        <div className="w-full flex flex-col gap-y-40">
          <div className="w-full flex flex-col gap-y-[15px]">
            <div className="text-48 text-black font-bold">Login</div>
            <div className="text-24 text-gray-300 whitespace-pre-wrap">
              몰디브 관리자 페이지에 오신 걸<br />
              환영합니다.
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-[70px]">
            <div className="w-full flex flex-col gap-y-20">
              <InputContainer
                name="이메일"
                type="email"
                onChange={handleEmailChange}
                value={email}
                isError={false}
                error=""
              />
              <InputContainer
                name="비밀번호"
                type="password"
                onChange={handlePasswordChange}
                value={password}
                isError={false}
                error=""
              />
            </div>
            <RectButton
              text="로그인"
              w="100%"
              h="50px"
              type="select"
              onClick={handleLoginButtonClick}
            />
          </div>
        </div>
        <div className="text-14 text-gray-200">
          새로운 관리자이신가요?
          <span className="pl-10 text-dark-300 cursor-pointer hover:underline underline-offset-4">
            관리자 추가하기
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
