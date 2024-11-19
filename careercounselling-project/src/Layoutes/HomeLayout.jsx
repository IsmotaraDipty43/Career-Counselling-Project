import React from 'react';
import Navbber from '../component/Navbber';
import Banner from '../component/Banner';
import Slider from '../component/Slider';
import { Outlet } from 'react-router-dom';
import MeetExpert from '../component/MeetExpert';
import Client from '../component/Client';
import Footer from '../component/Footer';
const HomeLayout = () => {
    return (
        <div>
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