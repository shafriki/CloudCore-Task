import React from 'react';
import BannerCompo from './Banner/BannerCompo';
import HomeProduct from './HomeProduct/HomeProduct';
import About from './About/About';
import Service from './Service/Service';
import Brand from './Brand/Brand';

const Home = () => {
    return (
        <div>
            <BannerCompo />
            <About />
            <HomeProduct />
            <Service />
            <Brand />
        </div>
    );
};

export default Home;