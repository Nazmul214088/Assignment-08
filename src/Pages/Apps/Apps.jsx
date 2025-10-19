import React, { useEffect, useState } from "react";
import AllAppCard from "../../Components/AllAppCard/AllAppCard";
import SearchAppCard from "../../Components/SearchAppCard/SearchAppCard";
import AppIsNotFound from "../../Components/AppIsNotFound/AppIsNotFound";
import LoadingComponent from "../../Components/Loading/LoadingComponent";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchLength, setSearchLength] = useState(-1);
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(true); 
  const [searchLoading, setSearchLoading] = useState(false); 

  useEffect(() => {
    fetch("/AppData.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  const handleSearch = (str) => {
    setInputData(str);

    setSearchLoading(true);

    setTimeout(() => {
      const searchData = apps.filter((app) =>
        app.title.toLowerCase().includes(str.toLowerCase())
      );
      setSearch(searchData);
      setSearchLength(searchData.length);
      setSearchLoading(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className=" bg-[#dbdbdb] px-6">
      <div className=" text-center py-10">
        <h1 className="mt-6 py-4 font-bold text-5xl text-[#001931]">
          Our All Applications
        </h1>
        <p className="text-[#627382] text-xl">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center pb-4 ">
        <p>({searchLength < 0 ? apps.length : searchLength}) Apps Found</p>
        <label className="input bg-[#dbdbdb]">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => handleSearch(e.target.value)}
            className="bg-[#dbdbdb]"
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>
      {searchLoading ? (
        <LoadingComponent />
      ) : inputData.length === 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 gap-4">
          {apps.map((app) => (
            <AllAppCard app={app} key={app.id}></AllAppCard>
          ))}
        </div>
      ) : search.length === 0 ? (
        <AppIsNotFound />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-4 gap-4">
          {search.map((searchApp) => (
            <SearchAppCard key={searchApp.id} searchApp={searchApp}></SearchAppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
