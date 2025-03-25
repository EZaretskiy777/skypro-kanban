import * as S from "./styledComponents";
import { useNavigate } from "react-router-dom";

const PopExit = () => {
  const navigate = useNavigate();

  const exitHandler = () => {
    localStorage.setItem("userInfo", "");
    navigate("/signin");
  };

  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <S.PropExitTtlH2>Выйти из аккаунта?</S.PropExitTtlH2>
          </S.PopExitTtl>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitExitYes>
                <S.PopExitExitYesButton onClick={exitHandler}>
                  Да, выйти
                </S.PopExitExitYesButton>
              </S.PopExitExitYes>
              <S.PopExitExitNo>
                <S.PopExitExitNoLink to="/">Нет, остаться</S.PopExitExitNoLink>
              </S.PopExitExitNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};

export default PopExit;
