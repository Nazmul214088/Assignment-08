import React from 'react';

const AppCard = ({app}) => {
    const {image, title, ratingAvg, downloads, size} = app;
    const convertedMillion = () => {
        const convertedData = parseInt(downloads);
        const data = parseFloat(convertedData/1000000).toFixed(1);
        return data;
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
                        <button className='mr-4 font-medium text-[#00D390]'><i className="fa-solid fa-download"></i> {convertedMillion()}</button>
                        <button className='mr-4 font-medium text-[#FF8811]'><i className="fa-solid fa-star"></i> {ratingAvg}</button>
                        <button className='font-medium text-[#627382]'> {size}MB</button>
                    </div>
                </div>
                
            </div>
            <div>
                <button className='btn bg-[#00D390] text-white py-3 px-4 rounded-lg'>Uninstall</button>
            </div>
        </div>
    );
};

export default AppCard;