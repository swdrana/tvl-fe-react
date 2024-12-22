import AllApps from "./AllApps";
import Client from "./Client";
import Collaboration from "./Collaboration";
import EmailBanner from "./EmailBanner";
import FAQ from "./FAQ";
import Footer from "./Footer";
import IntegratedChat from "./IntegratedChat";
import Migration from "./Migration";
import Navbar from "./Navbar";

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