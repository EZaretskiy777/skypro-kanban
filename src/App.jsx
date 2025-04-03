import { useEffect } from "react";
import "./App.css";
import { GlobalStyles } from "./globalStyles";
import AppRoutes from "./AppRoutes";
import { createContext, useState } from "react";

const AuthContext = createContext();
const TaskContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setIsAuth(localStorage.getItem("userInfo") ? true : false);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ isAuth: isAuth, setIsAuth: setIsAuth }}>
        <TaskContext.Provider value={{ tasks: tasks, setTasks: setTasks }}>
          <GlobalStyles />
          <AppRoutes />
        </TaskContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
export { AuthContext };
export { TaskContext };
