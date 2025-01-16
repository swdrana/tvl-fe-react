import React from 'react';
import MeegleNavbar from './MeegleNavbar';
import MeegleBanner from './MeegleBanner';
import ProjectManagement from './ProjectManagement';
import Collaboration from './Collaboration';
import Together from './Together';
import ProjectTemplate from './ProjectTemplate';
import CustomerStories from './CustomerStories';
import SecurityCompliance from './SecurityCompliance';
import Development from './Development';
import Partnership from './Partnership';
import Workflow from './WorkFlow';

const Meegle = () => {
    return (
        <>
        <MeegleBanner></MeegleBanner>
        <Workflow></Workflow>
        <ProjectManagement></ProjectManagement>
        <Collaboration></Collaboration>
        <Together></Together>
        <ProjectTemplate></ProjectTemplate>
        <Development></Development>
        <CustomerStories></CustomerStories>
        <Partnership></Partnership>
        <SecurityCompliance></SecurityCompliance>
        </>
    );
};

export default Meegle;