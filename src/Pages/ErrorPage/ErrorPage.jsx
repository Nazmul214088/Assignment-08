import React from 'react';
import banner from '../../assets/error-404.png'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='text-center'>
                <img className='w-[60%] mx-auto my-5' src={banner} alt="" />
                <h1 className='text-5xl text-[#001931] font-semibold'>Oops, page not found!</h1>
                <p className='text-[#627382] text-xl pt-2 pb-4'>The page you are looking for is not available.</p>
                <button className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-3 rounded-lg mb-10'>Go Back!</button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;