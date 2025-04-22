import React from 'react';
import BannerCompo from './Banner/BannerCompo';
import HomeProduct from './HomeProduct/HomeProduct';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <BannerCompo />
            <About />
            <HomeProduct />
        </div>
    );
};

export default Home;