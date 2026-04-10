import React from "react";

const Journey = () => {
  return (
    <div className="mt-30 bg-[#22C55E]  p-25">
      <div className="text-white text-center  ">
        <h1 className="text-2xl md:text-4xl  font-bold text-shadow-2xs">
          Start Your Culinary Journey Today
        </h1>
        <p className="mt-3  max-w-[650px] mx-auto">
          Discover thousands of recipes, track your nutrition, and transform
          your relationship with food.
        </p>
      </div>
      <div className="flex justify-center md:gap-5 gap-3 mt-4">
        <button className="bg-white lg:py-2 lg:px-6 py-1 px-3 rounded-full text-[#0D9C4D] cursor-pointer font-semibold hover:bg-[#FAA432] hover:text-white transition ease-in-out duration-200 delay-200">
          Download App
        </button>
        <button className="border-white border lg:py-2 lg:px-6 py-1 px-3  rounded-full text-white font-semibold cursor-pointer hover:border-[#FAA432] hover:text-[#FAA432] transition ease-in-out duration-200 delay-200">
          Browse Recipes
        </button>
      </div>
    </div>
  );
};

export default Journey;
