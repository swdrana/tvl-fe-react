
import AllApps from "../Approval/AllApps";
import Banner from "./Banner";
import FAQ from "./FAQ";
import FileManagement from "./FileManagement";
import Footer from "./Footer";
import Formats from "./Formats";
import Migration from "./Migration";
import Navbar from "./Navbar";

const Docs = () => {
    return (
       <>
       <Navbar></Navbar>
       <Banner></Banner>
       <Formats></Formats>
       <FileManagement></FileManagement>
       <Migration></Migration>
       <AllApps></AllApps>
       <FAQ></FAQ>
       <Footer></Footer>
       </>
    );
};

export default Docs;