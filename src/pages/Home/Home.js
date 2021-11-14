import React from 'react';
//import Appbar from '../Appbar/Appbar';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './banner/Banner';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <br/>
            {/* <Appbar></Appbar> */}
            <Banner></Banner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;
