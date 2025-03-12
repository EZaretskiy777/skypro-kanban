import "./App.css";
import "./pages/MainPage/MainPage";
import MainPage from "./pages/MainPage/MainPage";
import { GlobalStyles } from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainPage />
    </>
  );
}

export default App;
