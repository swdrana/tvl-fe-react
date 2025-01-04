import React from 'react';
import Navbar from '../pages/OpenPlatform/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/OpenPlatform/Footer';

const OpenPlatformLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default OpenPlatformLayout;