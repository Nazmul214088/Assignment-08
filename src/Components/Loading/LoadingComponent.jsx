import React from 'react';
import './loading.css'
import logo from '../../assets/logo.png'

const LoadingComponent = () => {
    return (
        <div className='h-[70vh] w-full flex justify-center items-center text-6xl font-bold text-[#240c0cc9]'>
            <p>l</p>
            <img className='w-24 h-24 Rotation' src={logo} alt="" />
            <p>oading</p>
        </div>
    );
};

export default LoadingComponent;