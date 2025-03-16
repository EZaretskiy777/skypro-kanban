import { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../../pages/MainPage/MainPage";
import * as S from "./styledComponents";

const PopUser = () => {
  const { setShowPopExitHandler } = useContext(ThemeContext);

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
      <S.PopUserSetBtn onClick={setShowPopExitHandler} type="button">
        <S.PopUserSetBtnA>Выйти</S.PopUserSetBtnA>
      </S.PopUserSetBtn>
    </S.HeaderPopUserSet>
  );
};

PopUser.propTypes = {
  showUserPopupHandler: PropTypes.func.isRequired,
};

export default PopUser;
