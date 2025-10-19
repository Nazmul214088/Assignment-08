import React from 'react';

const StateSection = () => {
    return (
        <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-20 lg:px-25 text-center'>
            <h1 className='font-bold text-5xl text-white mb-10'>Trusted by Millions, Built for You</h1>
            <div className='md:flex justify-around'>
                <div className='my-8'>
                    <p className='text-white'>Total Downloads</p>
                    <h2 className='py-4 text-white font-extrabold text-6xl'>29.6M</h2>
                    <p className=' text-white'>21% more than last month</p>
                </div>
                <div className='my-8'>
                    <p className='text-white'>Total Reviews</p>
                    <h2 className='py-4 text-white font-extrabold text-6xl'>906K</h2>
                    <p className=' text-white'>46% more than last month</p>
                </div>
                <div className='my-8'>
                    <p className='text-white'>Active Apps</p>
                    <h2 className='py-4 text-white font-extrabold text-6xl'>132+</h2>
                    <p className=' text-white'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default StateSection;