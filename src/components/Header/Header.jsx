import { useState, useContext } from "react";
import PopUser from "../popups/PopUser/PopUser";
import * as S from "./styledComponents";
import { ThemeContext } from "../../providers/ThemeProvider";

const Header = () => {
  const [showUserPopup, setShowUserPopup] = useState(false);
  const showUserPopupHandler = () => {
    setShowUserPopup(!showUserPopup);
  };
  const { theme } = useContext(ThemeContext);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <S.HeaderLink to="/">
              <S.HeaderLogoImg
                src={theme === "light" ? "/logo.png" : "/logo_dark.png"}
                alt="logo"
              />
            </S.HeaderLink>
          </S.HeaderLogo>
          <S.HeaderNav>
            <S.HeaderBtnMainNew>
              <S.HeaderBtnMainNewLink to="/newcard">
                Создать новую задачу
              </S.HeaderBtnMainNewLink>
            </S.HeaderBtnMainNew>
            <S.HeaderUserBtn onClick={showUserPopupHandler}>
              {user.name}
            </S.HeaderUserBtn>
            {showUserPopup && (
              <PopUser showUserPopupHandler={showUserPopupHandler} />
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
