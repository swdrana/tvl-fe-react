import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import ComapniesSection from './CompaniesSections';
import TurnNumbers from './TurnNumbers';
import TriggerAutomation from './TriggerAutomation';
import Templates from './Templates';
import TinyFooter from './TinyFooter';

const Form = () => {
    return (
        <>
        <Navbar></Navbar>
        <Banner></Banner>
        <ComapniesSection></ComapniesSection>
        <TurnNumbers></TurnNumbers>
        <TriggerAutomation></TriggerAutomation>
        <Templates></Templates>
        <TinyFooter></TinyFooter>
        </>
    );
};

export default Form;