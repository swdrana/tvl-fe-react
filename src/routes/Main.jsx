import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import MeegleNavbar from "../pages/Meegle/MeegleNavbar";
import CommonNavbar from "../components/NavBar/CommonNavbar";

const Main = ({isNewNavbar}) => {
  return (
    <>
      {isNewNavbar ? <MeegleNavbar></MeegleNavbar> : <CommonNavbar></CommonNavbar>}
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
