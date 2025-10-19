import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import StateSection from '../../Components/StateSection/StateSection';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';
import LoadingComponent from '../../Components/Loading/LoadingComponent';


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingComponent></LoadingComponent>
  }

    return (
        <div className=' bg-[#dbdbdb]'>
            <Banner></Banner>
            <StateSection></StateSection>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;