import PopExit from "../../components/popups/PopExit/PopExit";
import PopNewCard from "../../components/popups/PopNewCard/PopNewCard";
import PopBrowse from "../../components/popups/PopBrowse/PopBrowse";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

const MainPage = () => {
  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
};

export default MainPage;
