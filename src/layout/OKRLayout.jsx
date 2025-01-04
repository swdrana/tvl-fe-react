import React from 'react';
import Navbar from '../pages/OKR/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/OKR/Footer';

const OKRLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default OKRLayout;