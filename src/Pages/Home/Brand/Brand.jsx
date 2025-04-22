import React from 'react';
import richman from '../../../assets/richman.jpg';
import oxyzen from '../../../assets/oxyzen.jpg';
import lubnan from '../../../assets/lubnan.jpg';
import r from '../../../assets/r.jpg';
import o from '../../../assets/o.jpg';
import l from '../../../assets/l.webp';
import { Link } from 'react-router-dom';
const Brand = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h1 className='text-xl md:text-4xl font-bold text-center mb-5'>SHOP BY BRANDS</h1>
            <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0'>

                {/* brand one */}
                <div className='flex flex-col items-center space-y-5 group cursor-pointer'>
                    <img src={richman} alt="richman" className='w-80 group-hover:scale-105 transition-all'/>
                    <img src={r} alt="logo" className='w-30'/>
                    <Link to='/all-products'><button className='btn bg-black text-white'>Explore now</button></Link>
                </div>

                {/* brand two */}
                <div className='flex flex-col items-center space-y-5 group cursor-pointer'>
                    <img src={oxyzen} alt="richman" className='w-80 group-hover:scale-105 transition-all'/>
                    <img src={o} alt="logo" className='w-30'/>
                    <Link to='/all-products'><button className='btn bg-black text-white'>Explore now</button></Link>

                </div>

                {/* brand three */}
                <div className='flex flex-col items-center space-y-5 group cursor-pointer'>
                    <img src={lubnan} alt="richman" className='w-80 group-hover:scale-105 transition-all'/>
                    <img src={l} alt="logo" className='w-30'/>
                    <Link to='/all-products'><button className='btn bg-black text-white'>Explore now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Brand;