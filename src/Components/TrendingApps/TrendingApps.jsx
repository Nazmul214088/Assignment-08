import React, { useEffect, useState } from 'react';
import TrendingAppCard from '../TrendingAppCard/TrendingAppCard';
import { Link } from 'react-router';

const TrendingApps = () => {
    const [apps, setApps] = useState([]);
    const [trendApp, setTrendApp] = useState([]);

    // Fetch apps data
    useEffect(() => {
        fetch("/AppData.json") // loads from public/AppData.json
            .then((res) => res.json())
            .then((data) => setApps(data));
    }, []);
    useEffect(() => {
        const sortData = [...apps].sort((a, b) => b.downloads - a.downloads); // descending
        const trData = sortData.slice(0, 8);
        setTrendApp(trData);
    }, [apps]);

    return (
        <div>
            <div className='py-10 text-center'>
                <h1 className='font-bold text-5xl text-[#001931] pb-4'>Trending Apps</h1>
                <p className='text-[#627382] text-xl'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-[90%] mx-auto'>
                {
                    trendApp.map(app => <TrendingAppCard app={app} key={app.id}></TrendingAppCard>)
                }
            </div>
            <div className='text-center pt-10 pb-20 font-semibold'>
                <Link to={'/apps'} className=' rounded-lg text-white px-10 py-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] transition duration-500 hover:shadow-[0px_6px_10px_#20006b]'>Show All</Link>
            </div>
        </div>
    );
};

export default TrendingApps;
