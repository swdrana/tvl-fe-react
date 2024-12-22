
import AllApps from "../Approval/AllApps";
import Navbar from "../Approval/Navbar";
import Client from "./Client";
import Collaboration from "./Collaboration";
import EmailBanner from "./EmailBanner";
import FAQ from "./FAQ";
import Footer from "./Footer";
import IntegratedChat from "./IntegratedChat";
import Migration from "./Migration";

const Email = () => {
    return (
       <>
       <Navbar></Navbar>
       <EmailBanner></EmailBanner>
       <Client></Client>
       <Collaboration></Collaboration>
       <IntegratedChat></IntegratedChat>
       <AllApps></AllApps>
       <Migration></Migration>
       <FAQ></FAQ>
       <Footer></Footer>
       </>
    );
};

export default Email;