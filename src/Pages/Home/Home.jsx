import React from 'react';
import BannerCompo from './Banner/BannerCompo';
import HomeProduct from './HomeProduct/HomeProduct';
import About from './About/About';
import Service from './Service/Service';
import Brand from './Brand/Brand';
import Community from './Community/Community';

const Home = () => {
    return (
        <div>
            <BannerCompo />
            <About />
            <HomeProduct />
            <Service />
            <Brand />
            <Community />
        </div>
    );
};

export default Home;