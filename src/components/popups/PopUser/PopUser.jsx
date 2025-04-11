import PropTypes from "prop-types";
import * as S from "./styledComponents";
import { useTheme } from "../../../providers/ThemesProvider";

const PopUser = ({ showUserPopupHandler }) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const { isDark, toggleTheme } = useTheme();

  return (
    <S.HeaderPopUserSet>
      <S.PopUserSetName>{user.name}</S.PopUserSetName>
      <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
        <S.PopUserSetThemeInput
          onChange={toggleTheme}
          type="checkbox"
          name="checkbox"
          checked={isDark}
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
