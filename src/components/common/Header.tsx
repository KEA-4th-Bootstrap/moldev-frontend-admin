import { ReactComponent as Logo } from '../../assets/logo/logo_text_white.svg';
import { useHeader } from '../../hooks/common/useHeader';
import HeaderItem from './HeaderItem';
import RectButton from './RectButton';
import LogoutPage from '../../pages/LogoutPage';
const Header = () => {
  const {
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
  } = useHeader();
  return (
    <>
      <div className="fixed top-0 w-screen h-[47px] px-16 bg-dark-300 flex items-center justify-between z-10">
        <Logo className="cursor-pointer" onClick={handleLogoClick} />
        <div className="flex h-full items-center justify-center">
          <HeaderItem
            text="회원 관리"
            child={headerUserChild}
            onClick={() => handleClick('user')}
            onMouseEnter={() => handleMouseEnter('user')}
            onMouseLeave={handleMouseLeave}
            isHover={hoverItem === 'user'}
          />
          <HeaderItem
            text="신고 관리"
            child={headerReportChild}
            onClick={() => handleClick('report')}
            onMouseEnter={() => handleMouseEnter('report')}
            onMouseLeave={handleMouseLeave}
            isHover={hoverItem === 'report'}
          />
        </div>
        <RectButton
          type="header"
          text="로그아웃"
          onClick={handleLogoutClick}
          fontSize={14}
          h="30px"
          w="70px"
        />
      </div>
      {isLogoutClicked && (
        <LogoutPage
          clickLogoutButton={clickLogouButton}
          clickLogoutCancelButton={clickLogoutCancelButton}
        />
      )}
    </>
  );
};

export default Header;
