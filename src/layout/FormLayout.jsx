import React from 'react';
import Navbar from '../pages/Form/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Form/Footer';

const FormLayout = () => {
    return (
       <>
       <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
       </>
    );
};

export default FormLayout;