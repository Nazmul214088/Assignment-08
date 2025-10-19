import React from 'react';

const SearchAppCard = ({searchApp}) => {
    const convertedMillion = (downloads) => {
        const convertedData = parseInt(downloads);
        const data = parseFloat(convertedData/1000000).toFixed(1);
        return data;
    }
    const {image, title, ratingAvg, downloads} = searchApp;
    return (
        <div className='bg-white rounded-lg p-4'>
            <img src={image} alt="app logo" />
            
            <h1 className='py-4 font-medium text-xl text-[#001931]'>{title}</h1>
            <div className=' flex justify-between'>
                <button className='btn text-[#00DE8] bg-[#F1F5E8] font-medium'><i className="fa-solid fa-download"></i> {convertedMillion(downloads)}M</button>
                <button className='btn text-[#FF8811] bg-[#FFF0E1] font-medium'><i className="fa-solid fa-star"></i>  {ratingAvg}</button>
            </div>
            
        </div>
    );
};

export default SearchAppCard;