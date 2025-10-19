import React from 'react';
import banner from '../../assets/hero.png';
const Banner = () => {
    return (
        <div className=' text-center'>
            <h1 className='pt-20 font-bold text-[#001931] text-7xl'>We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-black'>Productive</span> Apps</h1>
            <p className='py-4 mb-6 text-[#627382] text-xl w-[80%] mx-auto'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='mb-10 '>
                <button onClick={() => window.location.href = 'https://play.google.com/store/games?hl=en'} className='btn rounded-lg mr-4 px-5 py-4'><i className="fa-brands fa-google-play"></i> Google Play</button>
                <button onClick={() => window.location.href = 'https://www.apple.com/app-store/'} className='btn rounded-lg'><i className="fa-brands fa-app-store-ios bg-gradient-to-r from-[#00BFFC] to-[#0073F6] bg-clip-text text-transparent px-5 py-4"></i> App Store</button>
            </div>
            <img className='w-[60%] mx-auto' src={banner} alt="" />
           
        </div>
    );
};

export default Banner;