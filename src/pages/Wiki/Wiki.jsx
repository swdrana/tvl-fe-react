import React from 'react';
import Navbar from '../Approval/Navbar';
import Banner from './Banner';
import RichContent from './RichContent';
import AdvancedSearch from './AdvancedSearch';
import PermissionSettings from './PermissionSettings';
import Migration from './Migration';
import AllApps from '../Approval/AllApps'
import Footer from '../Approval/Footer'

const Wiki = () => {
    return (
       <>
       <Navbar></Navbar>
       <Banner></Banner>
       <RichContent></RichContent>
       <AdvancedSearch></AdvancedSearch>
       <PermissionSettings></PermissionSettings>
       <Migration></Migration>
       <AllApps></AllApps>
       <Footer></Footer>
       </>
    );
};

export default Wiki;