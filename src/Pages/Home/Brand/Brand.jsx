import React from 'react';
import richman from '../../../assets/richman.jpg';
import oxyzen from '../../../assets/oxyzen.jpg';
import lubnan from '../../../assets/lubnan.jpg';
import r from '../../../assets/r.jpg';
import o from '../../../assets/o.jpg';
import l from '../../../assets/l.webp';
const Brand = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h1 className='text-xl md:text-4xl font-bold text-center mb-5'>SHOP BY BRANDS</h1>
            <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0'>

                {/* brand one */}
                <div className='flex flex-col items-center space-y-5'>
                    <img src={richman} alt="richman" className='w-80'/>
                    <img src={r} alt="logo" className='w-30'/>
                    <button className='btn bg-black text-white'>Explore now</button>
                </div>

                {/* brand two */}
                <div className='flex flex-col items-center space-y-5'>
                    <img src={oxyzen} alt="richman" className='w-80'/>
                    <img src={o} alt="logo" className='w-30'/>
                    <button className='btn bg-black text-white'>Explore now</button>
                </div>

                {/* brand three */}
                <div className='flex flex-col items-center space-y-5'>
                    <img src={lubnan} alt="richman" className='w-80'/>
                    <img src={l} alt="logo" className='w-30'/>
                    <button className='btn bg-black text-white'>Explore now</button>
                </div>
            </div>
        </div>
    );
};

export default Brand;