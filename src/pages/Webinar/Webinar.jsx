import React from 'react';
import Banner from './Banner'
import Analysis from './Analysis';
import Engagement from './Engagement';
import WebinarCommunication from './WebinarCommunication';
import EventManagement from './EventManagement';
import Footer from './Footer';


const Webinar = () => {
    return (
       <>
      <Banner></Banner>
      <Analysis></Analysis>
      <Engagement></Engagement>
      <WebinarCommunication></WebinarCommunication>
      <EventManagement></EventManagement>
      <Footer></Footer>
       </>
    );
};

export default Webinar;