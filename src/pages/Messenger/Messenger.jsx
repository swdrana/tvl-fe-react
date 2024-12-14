import ChatTabs from "./ChatTabs";
import FAQ from "./FAQ";
import Formatting from "./Formatting";
import MessengerBanner from "./MessengerBanner";
import Translation from "./Translation";

const Messenger = () => {
    return (
        <>
        <MessengerBanner></MessengerBanner>
        <ChatTabs></ChatTabs>
        <Translation></Translation>
        <Formatting></Formatting>
        <FAQ></FAQ>
        </>
    );
};

export default Messenger;