import { useState, useContext } from "react";
import * as S from "./styledComponents";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../services/api/api";
import { AuthContext } from "../../App";

const AuthForm = ({ isSignUp = false }) => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  const signInErrotText =
    "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.";
  const signUpErrorText =
    "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.";
  const finalErrorText = isSignUp ? signUpErrorText : signInErrotText;

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = { name: false, login: false, password: false };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError(finalErrorText);
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError(finalErrorText);
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError(finalErrorText);
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        setIsAuth(true);
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handlerNavigate = () => {
    setErrors({ name: false, login: false, password: false });
    setError("");
    setFormData({ name: "", login: "", password: "" });
    navigate(isSignUp ? "/signin" : "/signup");
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <S.ModalTtlH2>{isSignUp ? "Регистрация" : "Вход"}</S.ModalTtlH2>
            </S.ModalTtl>
            <S.ModalForm onSubmit={handleSubmit}>
              {isSignUp && (
                <S.ModalInput
                  $notLastChild={true}
                  type="text"
                  name="name"
                  placeholder="Имя"
                  onChange={handleChange}
                  value={formData.name}
                  $error={errors.name}
                />
              )}
              <S.ModalInput
                $notLastChild={true}
                type="email"
                name="login"
                placeholder="Эл. почта"
                onChange={handleChange}
                value={formData.login}
                $error={errors.login}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                onChange={handleChange}
                value={formData.password}
                $error={errors.password}
              />
              {error && <S.ErrorP>{error}</S.ErrorP>}
              <S.ModalBtnEnter $disabled={error === "" ? false : true}>
                {isSignUp ? "Зарегистрироваться" : "Войти"}
              </S.ModalBtnEnter>
              <S.ModalFormGroup>
                <S.ModalFormGroupP>
                  {isSignUp ? "Уже есть аккаунт?" : "Нужно зарегистрироваться?"}
                </S.ModalFormGroupP>
                <S.ModalFormGroupLink onClick={handlerNavigate}>
                  {isSignUp ? "Войдите здесь" : "Регистрируйтесь здесь"}
                </S.ModalFormGroupLink>
              </S.ModalFormGroup>
            </S.ModalForm>
          </S.ModalBlock>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
};

AuthForm.propTypes = {
  isSignUp: PropTypes.bool.isRequired,
};

export default AuthForm;
