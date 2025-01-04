import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
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
import Rooms from "../pages/Rooms/Rooms";
import Webinar from "../pages/Webinar/Webinar";
import Wiki from "../pages/Wiki/Wiki";
import Meegle from "../pages/Meegle/Meegle";
import Layout from "../layout/Layout";
import MeegleLayout from "../layout/MeegleLayout";
import AnyCross from "../pages/AnyCross/AnyCross";
import FormLayout from "../layout/FormLayout";
import Form from "../pages/Form/Form";
import OKRLayout from "../layout/OKRLayout";
import OKR from "../pages/OKR/OKR";
import OpenPlatformLayout from "../layout/OpenPlatformLayout";
import OpenPlatform from "../pages/OpenPlatform/OpenPlatform";

const RouteTree = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/signin" element={<SignIn></SignIn>} />
      <Route path="/signup" element={<SignUp></SignUp>} />
      <Route path="/template1" element={<Template1></Template1>} />
      <Route path="/contactsales" element={<ContactSales></ContactSales>} />
      <Route path="/base" element={<Layout></Layout>}>
        <Route index element={<Base></Base>} />
      </Route>
      <Route path="/messenger" element={<Layout></Layout>}>
        <Route index element={<Messenger></Messenger>} />
      </Route>
      <Route path="/approval" element={<Layout></Layout>}>
        <Route index element={<Approval></Approval>} />
      </Route>
      <Route path="/plans" element={<Layout></Layout>}>
        <Route index element={<Plans></Plans>} />
      </Route>
      <Route path="/email" element={<Layout></Layout>}>
        <Route index element={<Email></Email>} />
      </Route>
      <Route path="/docs" element={<Layout></Layout>}>
        <Route index element={<Docs></Docs>} />
      </Route>
      <Route path="/slides" element={<Layout></Layout>}>
        <Route index element={<Slides></Slides>} />
      </Route>
      <Route path="/meetings" element={<Layout></Layout>}>
        <Route index element={<Meetings></Meetings>} />
      </Route>
      <Route path="/minutes" element={<Layout></Layout>}>
        <Route index element={<Minutes></Minutes>} />
      </Route>
      <Route path="/calendar" element={<Layout></Layout>}>
        <Route index element={<Calendar></Calendar>} />
      </Route>
      <Route path="/rooms" element={<Layout></Layout>}>
        <Route index element={<Rooms></Rooms>} />
      </Route>
      <Route path="/webinar" element={<Layout></Layout>}>
        <Route index element={<Webinar></Webinar>} />
      </Route>
      <Route path="/wiki" element={<Layout></Layout>}>
        <Route index element={<Wiki></Wiki>} />
      </Route>
      <Route path="/anycross" element={<Layout></Layout>}>
        <Route index element={<AnyCross></AnyCross>} />
      </Route>
      <Route path="/meegle" element={<MeegleLayout></MeegleLayout>}>
        <Route index element={<Meegle></Meegle>} />
      </Route>
      <Route path="/form" element={<FormLayout></FormLayout>}>
        <Route index element={<Form></Form>} />
      </Route>
      <Route path="/okr" element={<OKRLayout></OKRLayout>}>
        <Route index element={<OKR></OKR>} />
      </Route>
      <Route path="/openplatform" element={<OpenPlatformLayout></OpenPlatformLayout>}>
        <Route index element={<OpenPlatform></OpenPlatform>} />
      </Route>
    </Routes>
  );
};

export default RouteTree;
