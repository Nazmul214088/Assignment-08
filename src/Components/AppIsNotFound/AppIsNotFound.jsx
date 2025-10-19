import React from "react";
const AppIsNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <div className="text-center">
        <h1 className="text-6xl text-[#001931] font-bold mb-12">
        No App Found!
      </h1>
      <button className="cursor-pointer bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-16 py-3 rounded-lg mb-10">
        Go Back!
      </button>
      </div>
    </div>
  );
};

export default AppIsNotFound;
