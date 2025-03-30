import { useEffect } from "react";
import "./App.css";
import { GlobalStyles } from "./globalStyles";
import AppRoutes from "./AppRoutes";
import { createContext, useState } from "react";

const AuthContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(localStorage.getItem("userInfo") ? true : false);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ isAuth: isAuth, setIsAuth: setIsAuth }}>
        <GlobalStyles />
        <AppRoutes />
      </AuthContext.Provider>
    </>
  );
}

export default App;
export { AuthContext };
