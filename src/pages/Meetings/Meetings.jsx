import React from 'react';
import MeetingBanner from './MeetingBanner';
import Collaboration from './Collaboration';
import Transcription from './Transcription';
import AutoTranslation from './AutoTranslation';
import GroupMeeting from './GroupMeeting';
import AllApps from '../Approval/AllApps';
import Navbar from '../Approval/Navbar';
import Footer from '../Approval/Footer';

const Meetings = () => {
    return (
        <>
        <Navbar></Navbar>
        <MeetingBanner></MeetingBanner>
        <Collaboration></Collaboration>
        <Transcription></Transcription>
        <AutoTranslation></AutoTranslation>
        <GroupMeeting></GroupMeeting>
        <AllApps></AllApps>
        <Footer></Footer>
        </>
    );
};

export default Meetings;