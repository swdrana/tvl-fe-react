import { Outlet } from "react-router-dom";
import MeegleNavbar from "../pages/Meegle/MeegleNavbar";
import MeegleFooter from "../pages/Meegle/MeegleFooter"

const MeegleLayout = () => {
  return (
    <>
      <MeegleNavbar></MeegleNavbar>
      <Outlet />
      <MeegleFooter></MeegleFooter>
    </>
  );
};

export default MeegleLayout;
