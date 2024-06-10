import { authAxios } from './axiosInstance';

export const getMemberList = async ({
  isMarketingAgree,
  searchMoldevId,
  page,
  size,
}: {
  isMarketingAgree: boolean | null;
  searchMoldevId: string | null;
  page: number;
  size: number;
}) => {
  const params: any = {};

  if (isMarketingAgree !== null) {
    params.marketingAgree = isMarketingAgree;
  }

  if (searchMoldevId !== null) {
    params.searchMoldevId = searchMoldevId;
  }
  page && (params.page = page);
  size && (params.size = size);

  return authAxios.get('/api/member/admin', { params });
};

export const deleteMember = async (moldevId: string) => {
  return authAxios.delete(`/api/member/${moldevId}`);
};
