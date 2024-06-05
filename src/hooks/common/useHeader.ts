import { useState } from 'react';
import { headerItemType, headerType } from '../../data/type';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';

export const useHeader = () => {
  const [hoverItem, setHoverItem] = useState<headerType | null>(null);
  const [isLogoutClicked, setIsLogoutClicked] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleMouseEnter = (item: headerType) => {
    setHoverItem(item);
  };

  const handleMouseLeave = () => {
    setHoverItem(null);
  };

  const handleClick = (item: headerType) => {
    switch (item) {
      case 'user':
        navigate('/user/list');
        break;
      case 'report':
        navigate('/report/reception');
        break;
      default:
        break;
    }
  };

  const headerUserChild: headerItemType[] = [
    {
      text: '회원 목록',
      onClick: () => navigate('/user/list'),
    },
  ];

  const headerReportChild: headerItemType[] = [
    {
      text: '신고 접수',
      onClick: () => navigate('/report/reception'),
    },
    {
      text: '처리 현황',
      onClick: () => navigate('/report/process'),
    },
  ];

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLogoutClick = () => {
    setIsLogoutClicked(true);
  };

  const clickLogouButton = () => {
    logout();
  };

  const clickLogoutCancelButton = () => {
    setIsLogoutClicked(false);
  };

  return {
    hoverItem,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    headerUserChild,
    headerReportChild,
    handleLogoClick,
    handleLogoutClick,
    isLogoutClicked,
    clickLogouButton,
    clickLogoutCancelButton,
  };
};
