import React, { useEffect, useState } from "react";
import BerChartComponent from "../BerChartComponent/BerChartComponent";
import { useLoaderData, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AppDetails = () => {
  const [disable, setDisable] = useState(false);
  const {id} = useParams();
  const appId = parseInt(id);
  const totalApps = useLoaderData();

  
  const app= totalApps.find(a => a.id == appId);
  const {ratings,image,title,companyName,downloads,ratingAvg,reviews,size,description} = app;
  const convertDownload = parseFloat(downloads/1000000).toFixed(1);
  const convertReviews = parseFloat(reviews/1000).toFixed(0);

  const getStoredApps = () => {
    const getStoredAppsData = localStorage.getItem('installAppId');
    if(getStoredAppsData){
        const getAppData = JSON.parse(getStoredAppsData);
        return getAppData;
    }
    else{
        return [];
    }
  }

  const addStoredAppsData = (id) => {
    const addStored = getStoredApps();
    if(!addStored.includes(id)){
        addStored.push(id);
        const storedData = JSON.stringify(addStored);
        localStorage.setItem('installAppId', storedData);
    }
  }

 useEffect(() => {
    const clicked = localStorage.getItem("isDisable");
    let storedAppsID = localStorage.getItem('installAppId');
    storedAppsID = JSON.parse(storedAppsID);
    if(storedAppsID === null){
      storedAppsID = [];
    }
    const findApp = storedAppsID.find(appId => {
      const AID = parseInt(appId);
      const currentID = parseInt(id);
      return AID ===currentID;
    });
    if (clicked === "true" && findApp) {
      setDisable(true);
    }
  }, []);


  const handleInstallBtn = (id) =>{
    toast.success(`${title} is install Successfully!`, {
       position: "top-center"
    });
    addStoredAppsData(id);
    setDisable(true);
    localStorage.setItem('isDisable', true);
  }
  
  return (
    <div className="w-[90%] mx-auto pt-10 pb-20">
      <div className="md:flex gap-10 border-b border-[#00193118]">
        <figure className=" basis-1/3">
          <img className=" bg-white w-[70%] mb-4 md:w-full rounded-lg mx-auto" src={image} alt="" />
        </figure>
        <div className=" basis-2/3 pb-10">
          <h1 className="text-[#001931] text-[32px] font-bold pb-2">{title}</h1>
          <p className="text-xl text-[#627382] pb-7  border-b border-[#00193118]">Developed by <span className="font-semibold  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">{companyName}</span></p>
          
          <div className=" flex justify-around items-center gap-15 py-8">
            <div>
              <button className="h-12 w-12">
                <i className="fa-solid fa-download bg-gradient-to-r text-2xl from-[#54CF] to-[#00827A] bg-clip-text text-transparent"></i>
              </button>
              <p className="py-2 text-[#001931] ">Downloads</p>
              <h2 className="text-[#001931] font-extrabold text-[40px] ">{convertDownload}M</h2>
            </div>
            <div>
              <button className="h-12 w-12">
                <i className="fa-solid fa-star  text-2xl text-[#FF8811]"></i>
              </button>
              <p className="py-2 text-[#001931] ">Average Ratings</p>
              <h2 className="text-[#001931] font-extrabold text-[40px] ">{ratingAvg}</h2>
            </div>
            <div>
              <button className="h-12 w-12">
                <i className="fa-solid fa-thumbs-up text-2xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent "></i>
              </button>
              <p className="py-2 text-[#001931] ">Total Reviews</p>
              <h2 className="text-[#001931] font-extrabold text-[40px]">{convertReviews}K</h2>
            </div>
          </div>
          <div className="w-[90%] mx-auto">
            <button disabled={disable} onClick={()=> handleInstallBtn(id)} className="px-5 py-3 cursor-pointer bg-[#00D390] rounded-lg text-white transition duration-500 hover:shadow-[0px_4px_8px_#004932]">{disable?'Installed' : 'Install Now' }({size}MB)</button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div>
        <BerChartComponent ratings={ratings}></BerChartComponent>
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-[#001931]">Description</h2>
          <p className="text-[#627382] text-xl text-justify">{description}:</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
