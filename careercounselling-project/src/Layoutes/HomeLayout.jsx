import React from 'react';
import Navbber from '../component/Navbber';
import Banner from '../component/Banner';
import Slider from '../component/Slider';
import { Outlet } from 'react-router-dom';
import MeetExpert from '../component/MeetExpert';
import Client from '../component/Client';
import Footer from '../component/Footer';
import {Helmet} from "react-helmet";
const HomeLayout = () => {
    return (
        <div>
             <Helmet>
              
                <title>Career Pathway || Home</title>
               
            </Helmet>
            
            <Navbber></Navbber>
            <Banner></Banner>
            <Slider></Slider>
            <Outlet></Outlet>
            <MeetExpert></MeetExpert>
            <Client></Client>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;