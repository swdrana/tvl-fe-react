import ChatTabs from "./ChatTabs";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Formatting from "./Formatting";
import MessengerBanner from "./MessengerBanner";
import Navbar from "./Navbar";
import ProductivityHub from "./ProductivityHub";
import Translation from "./Translation";

const Messenger = () => {
    return (
        <>
        <Navbar></Navbar>
        <MessengerBanner></MessengerBanner>
        <ProductivityHub></ProductivityHub>
        <ChatTabs></ChatTabs>
        <Translation></Translation>
        <Formatting></Formatting>
        <FAQ></FAQ>
        <Footer></Footer>
        </>
    );
};

export default Messenger;