import React from 'react';
import TitleBar from '../components/common/TitleBar';
import FilteringContainer from '../components/common/FilteringContainer';
import { useUserListPage } from '../hooks/userListPage/useUserListPage';
import TextRow from '../components/common/TextRow';
import CheckboxRow from '../components/common/CheckboxRow';
import EmptyContainer from '../components/common/EmptyContainer';
import PagenationContainer from '../components/common/PagenationContainer';
import TotalLengthContainer from '../components/common/TotalLengthContainer';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorContainer from '../components/common/ErrorContainer';
import DeletePage from './DeletePage';

const UserListPage = () => {
  const {
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
  } = useUserListPage();
  return (
    <div className="w-full min-h-full grow flex flex-col items-start justify-start">
      <TitleBar title="회원 목록" path={['회원 관리', '회원 목록']} />
      <FilteringContainer
        placeHolder={placeHolder}
        inputValue={inputValue}
        onChangeInputValue={onChangeInputValue}
        content={
          <>
            <TextRow title="정렬" desc="회원번호 내림차순으로 제공됩니다." />
            <CheckboxRow
              title="마케팅 동의"
              options={[
                {
                  isClicked: filterOption.marketingAgree,
                  text: '동의',
                  onClick: () => onChangeFilterOption('marketingAgree'),
                },
                {
                  isClicked: filterOption.marketingDisagree,
                  text: '미동의',
                  onClick: () => onChangeFilterOption('marketingDisagree'),
                },
              ]}
            />
          </>
        }
      />
      <TotalLengthContainer totalLength={totalLength} />
      <div className="w-full grow flex flex-col items-center justify-start">
        <table className="w-full table-fixed">
          <thead className="pb-8 border-b-2 border-admin-gray-border">
            <tr>
              <th className="w-[100px]">회원번호</th>
              <th className="w-[300px]">이메일</th>
              <th className="w-[300px]">몰디브아이디</th>
              <th className="w-[150px]">유저명</th>
              <th className="grow">섬 이름</th>
              <th className="w-[150px]">마케팅 동의</th>
              <th className="w-[100px]">비고</th>
            </tr>
          </thead>
          {!userList ? (
            <tbody>
              <tr>
                <td colSpan={8}>
                  {userListIsLoading ? (
                    <LoadingSpinner />
                  ) : userListIsError ? (
                    <ErrorContainer />
                  ) : (
                    <div>
                      <EmptyContainer />
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          ) : userList.length < 1 ? (
            <tbody>
              <tr>
                <td colSpan={8}>
                  <EmptyContainer />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {userList.map((user) => (
                <tr key={user.memberId}>
                  <td>{user.memberId}</td>
                  <td>{user.email}</td>
                  <td>{user.moldevId}</td>
                  <td>{user.nickname}</td>
                  <td>{user.islandName}</td>
                  <td>{user.isMarketingAgree ? '동의' : '미동의'}</td>
                  <td
                    className="text-negative cursor-pointer hover:underline underline-offset-2"
                    onClick={() => {
                      onClickDeleteUser(user);
                    }}
                  >
                    탈퇴하기
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      {userList && userList.length > 0 && (
        <PagenationContainer
          totalLength={totalLength}
          currentIdx={currentIdx}
          setCurrentIdx={setCurrentIdx}
        />
      )}
      {isDeleteOpen && selectedUser && (
        <DeletePage
          moldevId={selectedUser.moldevId}
          clickDeleteButton={onClickDeleteButton}
          clickCancelButton={onClickCancelButton}
        />
      )}
    </div>
  );
};

export default UserListPage;
