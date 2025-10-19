import React, { useEffect, useState } from "react";
import InstallAppCard from "../../Components/InstallAppCard/InstallAppCard";
import { useLoaderData } from "react-router";
import LoadingComponent from "../../Components/Loading/LoadingComponent";

const Installation = () => {
  const [loading, setLoading] = useState(true);
  const installAppList = JSON.parse(localStorage.getItem("installAppId"));
  const convertInstallAppList = installAppList.map((list) => parseInt(list));
  const totalApps = useLoaderData();
  const filterData = totalApps.filter((app) =>
    convertInstallAppList.includes(app.id)
  );

  const [sortApp, setSortApp] = useState(filterData);
  const sortDataBySize = (value) => {
    if (value === "Low-High") {
      const sorted = [...sortApp].sort((a, b) => a.size - b.size);
      setSortApp(sorted);
    }
    if (value === "High-Low") {
      const sorted = [...sortApp].sort((a, b) => b.size - a.size);
      setSortApp(sorted);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleRemove = (id) => {
    const updatedApps = filterData.filter((app) => app.id != id);
    setSortApp(updatedApps);
    const updateDappsID = updatedApps.map(app => app.id);
    localStorage.setItem("installAppId", JSON.stringify(updateDappsID));
  };

  if (loading) {
    return <LoadingComponent></LoadingComponent>;
  }
  return (
    <div className=" w-[90%] mx-auto">
      <div className="text-center pt-20 pb-10">
        <h1 className="py-4 text-5xl text-[#001931] font-bold">
          Your Installed Apps
        </h1>
        <p className="text-xl text-[#627382] ">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-[#001931] text-2xl font-semibold">
          {filterData.length} Apps Found
        </h2>
        <select
          onChange={(e) => sortDataBySize(e.target.value)}
          className="border border-[#627382] py-3 px-4 rounded-lg text-[#627382]"
          name=""
          id=""
        >
          <option
            className="border-none"
            value="Sort By Size"
            disabled
            selected
            hidden
          >
            Sort By Size
          </option>
          <option value="Low-High">Low-High</option>
          <option value="High-Low">High-Low</option>
        </select>
      </div>
      <div>
        {sortApp.map((app) => (
          <InstallAppCard
            key={app.id}
            handleRemove={handleRemove}
            app={app}
          ></InstallAppCard>
        ))}
      </div>
    </div>
  );
};

export default Installation;
