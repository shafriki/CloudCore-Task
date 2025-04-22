import React from 'react';
import payment from '../../../assets/payment.webp';
import exchange from '../../../assets/exchange.webp';
import shiping from '../../../assets/shiping.webp';
import style from '../../../assets/style.webp';

const Service = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-10 md:my-20 px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4'>
                {/* free shipping */}
                <div className='flex items-center gap-3 p-3 md:p-0'>
                    <div className='w-12 md:w-auto'>
                        <img src={shiping} alt="shipping" className='w-full' />
                    </div>

                    <div>
                        <p className='font-semibold text-sm md:text-base'>FREE SHIPPING</p>
                        <p className='text-gray-500 text-xs md:text-sm'>In Minimum Order of BDT 2000</p>
                    </div>
                </div>

                {/* easy exchange */}
                <div className='flex items-center gap-3 p-3 md:p-0'>
                    <div className='w-12 md:w-auto'>
                        <img src={exchange} alt="exchange" className='w-full' />
                    </div>

                    <div>
                        <p className='font-semibold uppercase text-sm md:text-base'>Easy Exchange</p>
                        <p className='text-gray-500 text-xs md:text-sm'>Parcel received as close box / <br /> Informed us/ Exchange.</p>
                    </div>
                </div>

                {/* secure payment */}
                <div className='flex items-center gap-3 p-3 md:p-0'>
                    <div className='w-12 md:w-auto'>
                        <img src={payment} alt="payment" className='w-full' />
                    </div>

                    <div>
                        <p className='font-semibold uppercase text-sm md:text-base'>Secure Payment</p>
                        <p className='text-gray-500 text-xs md:text-sm'>COD/bKash/Cards</p>
                    </div>
                </div>

                {/* over thousands style */}
                <div className='flex items-center gap-3 p-3 md:p-0'>
                    <div className='w-12 md:w-auto'>
                        <img src={style} alt="style" className='w-full' />
                    </div>

                    <div>
                        <p className='font-semibold text-sm md:text-base'>Over Thousands Styles</p>
                        <p className='text-gray-500 text-xs md:text-sm'>Everything you need</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;