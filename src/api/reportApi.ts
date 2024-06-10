import { reportType } from '../data/type';
import { authAxios } from './axiosInstance';

export const getNotProcessedReportList = async ({
  type,
  search,
  page,
  size,
}: {
  type?: reportType | null;
  search?: string | null;
  page?: number;
  size?: number;
}) => {
  const params: any = {};
  if (type !== null) {
    params.type = type;
  }
  if (search !== null) {
    params.search = search;
  }

  page && (params.page = page);
  size && (params.size = size);

  return authAxios.get('/api/report/not-processed', { params });
};

export const getProcessedReportList = async ({
  type,
  search,
  page,
  size,
}: {
  type?: reportType | null;
  search?: string | null;
  page?: number;
  size?: number;
}) => {
  const params: any = {};

  if (type !== null) {
    params.type = type;
  }

  if (search !== null) {
    params.search = search;
  }

  page && (params.page = page);
  size && (params.size = size);

  return authAxios.get('/api/report/processed', {
    params,
  });
};

export const patchReport = async (reportId: number) => {
  return authAxios.patch(`/api/report/${reportId}/processed`);
};

export const getReportDetail = (
  contentId: string | number,
  type: reportType,
) => {
  return authAxios.get(`/api/compose/report/detail/${contentId}?type=${type}`);
};

export const postBanUser = async (
  reportId: string | number,
  moldevId: string,
  banDays: number,
  reason: string,
) => {
  return authAxios.post(`/api/compose/user/ban/${reportId}`, {
    moldevId,
    banDays,
    reason,
  });
};
