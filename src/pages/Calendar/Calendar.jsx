import React from 'react';
import AllApps from '../Approval/AllApps';
import Navbar from '../Approval/Navbar';
import Footer from '../Approval/Footer';
import ChatSchedule from './ChatSchedule';
import MeetingGroups from './MeetingGroups';
import Subscription from './Subscription';
import CalendarBanner from './CalendarBanner';

const Calendar = () => {
    return (
        <>
        <Navbar></Navbar>
        <CalendarBanner></CalendarBanner>
        <ChatSchedule></ChatSchedule>
        <MeetingGroups></MeetingGroups>
        <Subscription></Subscription>
        <AllApps></AllApps>
        <Footer></Footer>
        </>
    );
};

export default Calendar;