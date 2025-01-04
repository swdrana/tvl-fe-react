import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import CommonNavbar from "../components/NavBar/CommonNavbar";

const Layout = () => {
  return (
    <>
    <CommonNavbar></CommonNavbar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
