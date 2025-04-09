import PropTypes from "prop-types";
import * as S from "./styledComponents";

const PopUser = ({ showUserPopupHandler }) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <S.HeaderPopUserSet id="user-set-target">
      <S.PopUserSetName>{user.name}</S.PopUserSetName>
      <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
        <S.PopUserSetThemeInput type="checkbox" name="checkbox" />
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
