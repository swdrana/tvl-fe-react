import React from 'react';
import MinutesBanner from './MinutesBanner';
import Navbar from '../Approval/Navbar'
import Recordings from './Recordings';
import Transcripts from './Transcripts';
import Collaboration from './Collaboration';
import AllApps from '../Approval/AllApps'
import Footer from '../Approval/Footer'

const Minutes = () => {
    return (
        <>
        <Navbar></Navbar>
        <MinutesBanner></MinutesBanner>
        <Recordings></Recordings>
        <Transcripts></Transcripts>
        <Collaboration></Collaboration>
        <AllApps></AllApps>
        <Footer></Footer>
        </>
    );
};

export default Minutes;