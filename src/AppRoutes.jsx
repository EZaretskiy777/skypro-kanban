import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AuthForm from "./pages/AuthForm/AuthForm";
import PopExit from "./components/popups/PopExit/PopExit";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import NotFound from "./pages/NotFound/NotFound";

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
