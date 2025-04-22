import React from 'react';
import about from '../../../assets/about.png';
const About = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div className='flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between'>
                {/* text-content */}
                <div className='flex flex-col space-y-2 md:space-y-5 mx-3 md:mx-0 md:w-2/3'>
                    <h1 className='text-xl md:text-4xl font-bold text-blue-700'>CloudCore</h1>
                    <p className='text-sm md:text-2xl text-gray-600'>Because comfort and confidence go hand in hand. </p>
                    <p className='text-xs md:text-base text-justify'>We focus on carefully selecting the best clothing that is comfortable, looks great, and makes you confident. Apart from the fabric, design and fit, we go through strict quality control parameters to give you what you truly deserve. The power of a good outfit is how it can influence your perception of yourself.
                    </p>
                </div>

                {/* image-content */}
                <div>
                    <img src={about} alt="about-image" className='w-72'/>
                </div>
            </div>
        </div>
    );
};

export default About;