import React from "react";

const CloudApp = () => {
  return (
    <div className="min-h-[300px] mt-7">
      <div className=" text-center max-w-2xl mx-auto ">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Start Your Health Journey Today</h1>
        <p className="text-gray-500 py-5">
          Join thousands of users who have transformed their lives with
          NutriTracker. Our easy-to-use app helps you stay on track with your
          nutrition goals.
        </p>
        <div className="flex justify-center items-center gap-5">
          <button className="bg-[#0D9B4D] py-3 px-6 rounded-full text-white cursor-pointer hover:bg-[#FAA432] transition ease-in duration-300">Download App</button>
          <button className="bg-transparent border-2 border-[#0D9B4D] py-3 px-6 rounded-full text-[#0D9B4D] hover:border-[#FAA432] hover:text-[#FAA432] cursor-pointer transition ease-in duration-300">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CloudApp;
