import React from 'react';
import BannerCompo from './Banner/BannerCompo';
import HomeProduct from './HomeProduct/HomeProduct';
import About from './About/About';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <BannerCompo />
            <About />
            <HomeProduct />
            <Service />
        </div>
    );
};

export default Home;