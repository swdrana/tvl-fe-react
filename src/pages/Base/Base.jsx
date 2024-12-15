import Banner from "./Banner";
import BusinessForm from "./BusinessForm";
import BusinessInsights from "./BusinessInsights";
import FAQ from "./FAQ";
import FieldOperation from "./FieldOperation";
import Footer from "./Footer";
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
       <BusinessForm></BusinessForm>
       <NeccessaryApp></NeccessaryApp>
       <FAQ></FAQ>
       <Footer></Footer>
       </>
    );
};

export default Base;