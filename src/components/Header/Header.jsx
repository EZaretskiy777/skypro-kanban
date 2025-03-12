import { useState, useContext } from "react";
import PopUser from "../popups/PopUser/PopUser";
import * as S from "./styledComponents";
import { ThemeContext } from "../../pages/MainPage/MainPage";

const Header = () => {
  const [showUserPopup, setShowUserPopup] = useState(false);
  const showUserPopupHandler = () => {
    setShowUserPopup(!showUserPopup);
  };
  const { theme, showPopExit } = useContext(ThemeContext);

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <S.HeaderLink href="" target="_self">
              <S.HeaderLogoImg
                src={theme === "light" ? "/logo.png" : "/logo_dark.png"}
                alt="logo"
              />
            </S.HeaderLink>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtnMainNew>
              <S.HeaderBtnMainNewLink href="#popNewCard">
                Создать новую задачу
              </S.HeaderBtnMainNewLink>
            </S.HeaderBtnMainNew>
            <S.HeaderUserBtn onClick={showUserPopupHandler}>
              Ivan Ivanov
            </S.HeaderUserBtn>
            {showUserPopup && !showPopExit && (
              <PopUser showUserPopupHandler={showUserPopupHandler} />
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
