import React from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstallAppCard = ({app, handleRemove}) => {

    const {image, title, downloads, ratingAvg, size, id} = app;
    const handleUninstallBtn = (id) =>{
        toast.success(`${id} is install Successfully!`);
        handleRemove(id);
    }
    return (
        <div className='flex justify-between items-center bg-white my-2 p-4 rounded-lg'>
            <div className=' flex gap-4'>
                <figure className='w-20 h-20 p-4 bg-amber-100'>
                    <img src={image} alt="app logo" />
                </figure>
                <div>
                    <h1 className='text-xl font-medium text-[#001931] mt-3'>{title}</h1>
                    <div className=' flex justify-between py-4'>
                        <button className='mr-4 font-medium text-[#00D390]'><i className="fa-solid fa-download"></i> {(downloads/1000000).toFixed(1)}M</button>
                        <button className='mr-4 font-medium text-[#FF8811]'><i className="fa-solid fa-star"></i> {ratingAvg}</button>
                        <button className='font-medium text-[#627382]'> {size}MB</button>
                    </div>
                </div>
                
            </div>
            <div>
                <button onClick={() => handleUninstallBtn(id)} className='btn bg-[#00D390] text-white py-3 px-4 rounded-lg'>Uninstall</button>
                <ToastContainer position="top-center" autoClose={2000}/>
            </div>
        </div>
    );
};

export default InstallAppCard;