import React from 'react';
import Banner from './Banner';
import Automation from './Automation';
import AutomateWorkflows from './AutomateWorkflow';
import IdentityManagement from './IdentityManagement';
import PremisesService from './PremisesService';
import AllApps from '../Approval/AllApps'
import Footer from '../Approval/Footer'
import Empowered from './Empowered';
import BusinessNeeds from './BusinessNeeds';

const AnyCross = () => {
    return (
       <>
       <Banner></Banner>
       <Automation></Automation>
       <Empowered></Empowered>
       <AutomateWorkflows></AutomateWorkflows>
       <IdentityManagement></IdentityManagement>
       <PremisesService></PremisesService>
       <BusinessNeeds></BusinessNeeds>
       <AllApps></AllApps>
       <Footer></Footer>
       </>
    );
};

export default AnyCross;