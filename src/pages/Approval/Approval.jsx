import AllApps from "./AllApps";
import ApprovalBanner from "./ApprovalBanner";
import Customization from "./Customization";
import Footer from "./Footer";
import IntegratedChat from "./IntegratedChat";
import Navbar from "./Navbar";
import Templates from "./Templates";

const Approval = () => {
    return (
        <>
        <Navbar></Navbar>
        <ApprovalBanner></ApprovalBanner>
        <Templates></Templates>
        <Customization></Customization>
        <IntegratedChat></IntegratedChat>
        <AllApps></AllApps>
        <Footer></Footer>
        </>
    );
};

export default Approval;