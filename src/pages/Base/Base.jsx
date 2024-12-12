import Banner from "./Banner";
import BusinessInsights from "./BusinessInsights";
import FieldOperation from "./FieldOperation";
import Import from "./Import";
import NeccessaryApp from "./NeccessaryApp";
import NewRealise from "./NewRealise";
import ProcessOptimization from "./ProcessOptimization";

const Base = () => {
    return (
       <>
       <Banner></Banner>
       <NewRealise></NewRealise>
       <Import></Import>
       <FieldOperation></FieldOperation>
       <BusinessInsights></BusinessInsights>
       <ProcessOptimization></ProcessOptimization>
       <NeccessaryApp></NeccessaryApp>
       </>
    );
};

export default Base;