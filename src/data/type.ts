export type buttonType = 'header' | 'cancel' | 'select';

export type headerItemType = {
  text: string;
  onClick: () => void;
};

export type headerType = 'user' | 'report';

export type optionType = {
  text: string;
  onClick: () => void;
  isClicked: boolean;
};

export type userListItemType = {
  memberId: number;
  email: string;
  moldevId: string;
  nickname: string;
  islandName: string;
  isMarketingAgree: boolean;
};

export type reportType = 'POST' | 'REPLY';

export type reportReasonType =
  | '욕설'
  | '혐오 표현'
  | '성적인 콘텐츠'
  | '폭력적인 콘텐츠'
  | '스팸'
  | '유해한 콘텐츠';
export const reportReasonToNumber = {
  욕설: 1,
  '혐오 표현': 2,
  '성적인 콘텐츠': 3,
  '폭력적인 콘텐츠': 4,
  스팸: 5,
  '유해한 콘텐츠': 6,
};
export const numberToReportReason = {
  1: '욕설',
  2: '혐오표현',
  3: '성적인 콘텐츠',
  4: '폭력적인 콘텐츠',
  5: '스팸',
  6: '유해한 콘텐츠',
};
export const reportReasonKorToEng = {
  욕설: 'PROFANITY',
  '혐오 표현': 'HATE_SPEECH',
  '성적인 콘텐츠': 'SEXUAL_CONTENT',
  '폭력적인 콘텐츠': 'VIOLENCE',
  스팸: 'SPAM',
  '유해한 콘텐츠': 'HARMFUL_CONTENT',
};

export type reportItemType = {
  reportId: number;
  reportType: reportType;
  reporterId: string;
  reporteeId: string;
  contentId: number | string;
  reason: reportReasonType;
  reportDate: string;
  processDate?: string;
};

export type reportProcessType = 'none' | '1' | '3' | '7' | '30' | '36500';

export const reportProcessTypeToKoeran = {
  none: '반려',
  '1': '1일 정지',
  '3': '3일 정지',
  '7': '7일 정지',
  '30': '30일 정지',
  '36500': '영구 정지',
};
