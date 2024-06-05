import { useEffect, useState } from 'react';
import { userListItemType } from '../../data/type';

export const useUserListPage = () => {
  const totalLength = 23;
  const placeHolder = '유저 닉네임을 검색해주세요';
  const [inputValue, setInputValue] = useState('');
  const [filterOption, setFilterOption] = useState({
    marketingAgree: true,
    marketingDisagree: true,
  });
  const [userList, setUserList] = useState<userListItemType[]>([]);
  const [currentIdx, setCurrentIdx] = useState(1);

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    console.log(filterOption);
  }, [filterOption]);

  const onChangeFilterOption = (
    option: 'marketingAgree' | 'marketingDisagree',
  ) => {
    setFilterOption({
      ...filterOption,
      [option]: !filterOption[option],
    });
  };

  return {
    placeHolder,
    inputValue,
    onChangeInputValue,
    filterOption,
    onChangeFilterOption,
    totalLength,
    userList,
    setUserList,
    currentIdx,
    setCurrentIdx,
  };
};
