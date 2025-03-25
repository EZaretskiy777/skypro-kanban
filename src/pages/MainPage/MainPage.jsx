import { createContext, useState } from "react";
import PopBrowse from "../../components/popups/PopBrowse/PopBrowse";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import * as S from "./styledComponents";
import { Outlet } from "react-router-dom";

const ThemeContext = createContext();

const MainPage = () => {
  const [theme, setTheme] = useState("light");
  const [showPopExit, setShowPopExit] = useState(false);
  const setShowPopExitHandler = () => {
    setShowPopExit(!showPopExit);
  };
  const setThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setThemeHandler: setThemeHandler,
        showPopExit: showPopExit,
        setShowPopExitHandler: setShowPopExitHandler,
      }}
    >
      <S.Wrapper>
        <Outlet />
        <PopBrowse />
        <Header />
        <Main />
      </S.Wrapper>
    </ThemeContext.Provider>
  );
};

export default MainPage;
export { ThemeContext };
