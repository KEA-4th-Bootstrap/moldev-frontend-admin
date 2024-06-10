import { useEffect, useState } from 'react';
import { userListItemType } from '../../data/type';
import { useMutation, useQuery } from 'react-query';
import { deleteMember, getMemberList } from '../../api/memberApi';

export const useUserListPage = () => {
  const placeHolder = '유저 닉네임을 검색해주세요';
  const [totalLength, setTotalLength] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [filterOption, setFilterOption] = useState({
    marketingAgree: true,
    marketingDisagree: true,
  });
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<userListItemType | null>(
    null,
  );

  const {
    data: userList,
    isLoading: userListIsLoading,
    isError: userListIsError,
    refetch,
  } = useQuery<userListItemType[]>(
    ['memberList', filterOption, inputValue, currentIdx],
    () =>
      getMemberList({
        isMarketingAgree:
          filterOption.marketingAgree && filterOption.marketingDisagree
            ? null
            : filterOption.marketingAgree,
        searchMoldevId: inputValue ? inputValue : null,
        page: currentIdx,
        size: 10,
      }).then((res) => {
        console.log('멤버리스트 조회 원본 데이터 ---> ', res);
        setTotalLength(res.data.data.totalElements);
        return res.data.data.content;
      }),
    {
      refetchOnWindowFocus: false,
      retry: 2,
      onSuccess: (data) => {
        console.log('멤버리스트 조회 성공 --> ', data);
      },
      onError: (error) => {
        console.log('멤버리스트 조회 실패 --> ', error);
      },
    },
  );

  const { mutate: tryDeleteUser } = useMutation(
    (moldevId: string) => deleteMember(moldevId),
    {
      onSuccess: (data) => {
        console.log('유저 삭제 성공 --> ', data);
        setIsDeleteOpen(false);
        refetch();
        setCurrentIdx(0);
      },
      onError: (error) => {
        console.log('유저 삭제 실패 --> ', error);
      },
    },
  );

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    console.log(filterOption);
  }, [filterOption]);

  const onChangeFilterOption = (
    option: 'marketingAgree' | 'marketingDisagree',
  ) => {
    let newFilterOption = {
      ...filterOption,
      [option]: !filterOption[option],
    };

    // Ensure at least one option is true
    if (!newFilterOption.marketingAgree && !newFilterOption.marketingDisagree) {
      newFilterOption = {
        ...newFilterOption,
        marketingAgree: true,
      };
    }

    setFilterOption(newFilterOption);
  };

  const onClickDeleteUser = (user: userListItemType) => {
    setIsDeleteOpen(true);
    setSelectedUser(user);
  };

  const onClickDeleteButton = () => {
    if (selectedUser) {
      tryDeleteUser(selectedUser.moldevId);
    }
  };

  const onClickCancelButton = () => {
    setIsDeleteOpen(false);
  };

  return {
    placeHolder,
    inputValue,
    onChangeInputValue,
    filterOption,
    onChangeFilterOption,
    totalLength,
    userList,
    userListIsLoading,
    userListIsError,
    currentIdx,
    setCurrentIdx,
    onClickDeleteUser,
    isDeleteOpen,
    selectedUser,
    onClickDeleteButton,
    onClickCancelButton,
  };
};
