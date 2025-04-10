import { useContext } from "react";
import PropTypes from "prop-types";
import * as S from "./styledComponents";
import { ThemeContext } from "../../../providers/ThemeProvider";

const PopUser = ({ showUserPopupHandler }) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const { theme, setThemeHandler } = useContext(ThemeContext);

  const checkboxHandler = (e) => {
    const isChecked = e.target.checked;
    setThemeHandler(isChecked ? "light" : "dark");
  };

  return (
    <S.HeaderPopUserSet id="user-set-target">
      <S.PopUserSetName>{user.name}</S.PopUserSetName>
      <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
        <S.PopUserSetThemeInput
          onChange={checkboxHandler}
          type="checkbox"
          name="checkbox"
          checked={theme === "light" ? true : false}
        />
      </S.PopUserSetTheme>
      <S.PopUserSetBtn onClick={showUserPopupHandler} type="button">
        <S.PopUserSetBtnLink to="/exit">Выйти</S.PopUserSetBtnLink>
      </S.PopUserSetBtn>
    </S.HeaderPopUserSet>
  );
};

PopUser.propTypes = {
  showUserPopupHandler: PropTypes.func.isRequired,
};

export default PopUser;
