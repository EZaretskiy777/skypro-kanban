import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const setThemeHandler = (value) => {
    localStorage.setItem("theme", value);
    setTheme(value);
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeProvider };
