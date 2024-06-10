import { reportItemType } from './type';

export const dummyReport: reportItemType = {
  reportId: 1,
  reportType: 'POST',
  reporterId: 'moldev',
  reporteeId: 'moldev',
  contentId: 1,
  reason: '욕설',
  reportDate: '2021-10-10',
};

export const dummyReportComment: reportItemType = {
  reportId: 2,
  reportType: 'REPLY',
  reporterId: 'moldev',
  reporteeId: 'moldev',
  contentId: 1,
  reason: '혐오 표현',
  reportDate: '2021-10-10',
};
