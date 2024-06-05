import { reportItemType } from './type';

export const dummyReport: reportItemType = {
  reportId: 1,
  reportType: 'post',
  reporterId: 'moldev',
  reporteeId: 'moldev',
  contentId: 1,
  reason: '욕설',
  reportDate: '2021-10-10',
};

export const dummyReportComment: reportItemType = {
  reportId: 2,
  reportType: 'comment',
  reporterId: 'moldev',
  reporteeId: 'moldev',
  contentId: 1,
  reason: '혐오표현',
  reportDate: '2021-10-10',
};
