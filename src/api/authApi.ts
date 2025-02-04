import { baseAxios } from './axiosInstance';

export const postReissueTokenApi = async (accessToken: string) => {
  return baseAxios.post('/api/auth/reissue', {
    accessToken: accessToken,
  });
};
/**
 * @name 로그인 API
 * @param email 로그인 이메일
 * @param password 로그인 비밀번호
 * @returns data: { memberId:number, accessToken: string }
 * @returns header : { set-cookie: Refresh_Token=string; Path=/; HttpOnly; }
 * @throws 404: Not Found
 * @throws 401: wrong password
 */
export const postLoginApi = async (email: string, password: string) => {
  return baseAxios.post('/api/auth/login', {
    email: email,
    password: password,
  });
};
