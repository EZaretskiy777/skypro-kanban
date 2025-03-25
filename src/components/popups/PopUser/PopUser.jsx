import PropTypes from "prop-types";
import * as S from "./styledComponents";

const PopUser = ({ showUserPopupHandler }) => {
  return (
    <S.HeaderPopUserSet id="user-set-target">
      <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
      <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
        <S.PopUserSetThemeInput
          type="checkbox"
          className="checkbox"
          name="checkbox"
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
