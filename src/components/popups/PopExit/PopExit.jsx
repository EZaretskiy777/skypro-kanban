import { useContext } from "react";
import * as S from "./styledComponents";
import { ThemeContext } from "../../../pages/MainPage/MainPage";

const PopExit = () => {
  const { handlerSetShowPopExit } = useContext(ThemeContext);
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <S.PropExitTtlH2>Выйти из аккаунта?</S.PropExitTtlH2>
          </S.PopExitTtl>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitExitYes onClick={handlerSetShowPopExit}>
                <S.PopExitExitYesA href="modal/signin.html">
                  Да, выйти
                </S.PopExitExitYesA>{" "}
              </S.PopExitExitYes>
              <S.PopExitExitNo onClick={handlerSetShowPopExit}>
                <S.PopExitExitNoA href="main.html">
                  Нет, остаться
                </S.PopExitExitNoA>{" "}
              </S.PopExitExitNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};

export default PopExit;
