import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AuthForm from "./pages/AuthForm/AuthForm";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="exit" element={<PopExit />} />
          <Route path="newcard" element={<PopNewCard />} />
        </Route>
        <Route path="/signin" element={<AuthForm />} />
        <Route path="/signup" element={<AuthForm isSignUp={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
