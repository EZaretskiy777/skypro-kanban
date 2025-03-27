import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AuthForm from "./pages/AuthForm/AuthForm";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthContext } from "./App";

const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/" element={<MainPage />}>
            <Route path="exit" element={<PopExit />} />
            <Route path="newcard" element={<PopNewCard />} />
          </Route>
        </Route>
        <Route path="/signin" element={<AuthForm />} />
        <Route path="/signup" element={<AuthForm isSignUp={true} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
