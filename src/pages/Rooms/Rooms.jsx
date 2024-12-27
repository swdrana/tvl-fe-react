import React from 'react';
import Banner from './Banner';
import Features from './Features';
import SIPConnector from './SIPConnector';
import LarkRooms from './LarkRooms';
import SoftwarePartners from './SoftwarePartners';

const Rooms = () => {
    return (
       <>
       <Banner></Banner>
       <Features></Features>
       <SIPConnector></SIPConnector>
       <LarkRooms></LarkRooms>
       <SoftwarePartners></SoftwarePartners>
       </>
    );
};

export default Rooms;