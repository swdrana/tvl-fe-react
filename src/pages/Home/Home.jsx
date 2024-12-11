import AccordionCard from "./AccordionCard/AccordionCard";
import AllPlatform from "./AllPlatform/AllPlatform";
import Anything from "./Anything/Anything";
import Collaborate from "./Collaborate/Collaborate";
import Global from "./Global/Global";
import LarkPerformance from "./LarkPerformance/LarkPerformance";
import PayLess from "./PayLess/PayLess";
import Pricing from "./Pricing/Pricing";
import Productivity from "./Productivity/Productivity";
import Robust from "./Robust/Robust";
import Saving from "./Saving/Saving";
import SuperApp from "./SuperApp/SuperApp";

const Home = () => {
  return (
    <>
    <Collaborate></Collaborate>
    <Productivity></Productivity>
    <Global></Global>
    <SuperApp></SuperApp>
    <AllPlatform></AllPlatform>
    <Anything></Anything>
    <Saving></Saving>
    <LarkPerformance></LarkPerformance>
    <Pricing></Pricing>
    <Robust></Robust>
    <AccordionCard></AccordionCard>
    <PayLess></PayLess>
    </>
  );
};

export default Home;
