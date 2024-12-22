import Footer from "../Approval/Footer";
import Banner from "./Banner";
import Collaboration from "./Collaboration";
import Content from "./Content";
import Integration from "./Integration";
import Template from "./Template";

const Slides = () => {
    return (
        <>
        <Banner></Banner>
        <Collaboration></Collaboration>
        <Integration></Integration>
        <Content></Content>
        <Template></Template>
        <Footer></Footer>
        </>
    );
};

export default Slides;