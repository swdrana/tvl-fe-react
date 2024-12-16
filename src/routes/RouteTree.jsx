import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "./Main";
import SignIn from "../pages/Sign/SignIn";
import SignUp from "../pages/Sign/SignUp";
import Base from "../pages/Base/Base"
import Messenger from "../pages/Messenger/Messenger";
import Approval from "../pages/Approval/Approval";
import ContactSales from "../pages/ContactSales/ContactSales";

const RouteTree = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/signin" element={<SignIn></SignIn>} />
      <Route path="/signup" element={<SignUp></SignUp>} />
      <Route path="/contactsales" element={<ContactSales></ContactSales>} />
      <Route path="/base" element={<Main />}>
        <Route index element={<Base></Base>} />
      </Route>
      <Route path="/messenger" element={<Main />}>
        <Route index element={<Messenger></Messenger>} />
      </Route>
      <Route path="/approval" element={<Main />}>
        <Route index element={<Approval></Approval>} />
      </Route>
    </Routes>
  );
};

export default RouteTree;
