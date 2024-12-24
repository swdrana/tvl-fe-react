import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "./Main";
import SignIn from "../pages/Sign/SignIn";
import SignUp from "../pages/Sign/SignUp";
import Base from "../pages/Base/Base"
import Messenger from "../pages/Messenger/Messenger";
import Approval from "../pages/Approval/Approval";
import ContactSales from "../pages/ContactSales/ContactSales";
import Plans from "../pages/Plans/Plans";
import Email from "../pages/Email/Email";
import Docs from "../pages/Docs/Docs";
import Slides from "../pages/Slides/Slides";
import Template1 from "../pages/Slides/Templates/Template1";
import Meetings from "../pages/Meetings/Meetings";
import Minutes from "../pages/Minutes/Minutes";
import Calendar from "../pages/Calendar/Calendar";

const RouteTree = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/signin" element={<SignIn></SignIn>} />
      <Route path="/signup" element={<SignUp></SignUp>} />
      <Route path="/template1" element={<Template1></Template1>} />
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
      <Route path="/plans" element={<Main />}>
        <Route index element={<Plans></Plans>} />
      </Route>
      <Route path="/email" element={<Main />}>
        <Route index element={<Email></Email>} />
      </Route>
      <Route path="/docs" element={<Main />}>
        <Route index element={<Docs></Docs>} />
      </Route>
      <Route path="/slides" element={<Main />}>
        <Route index element={<Slides></Slides>} />
      </Route>
      <Route path="/meetings" element={<Main />}>
        <Route index element={<Meetings></Meetings>} />
      </Route>
      <Route path="/minutes" element={<Main />}>
        <Route index element={<Minutes></Minutes>} />
      </Route>
      <Route path="/calendar" element={<Main />}>
        <Route index element={<Calendar></Calendar>} />
      </Route>
    </Routes>
  );
};

export default RouteTree;
