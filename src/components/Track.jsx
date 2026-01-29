import React from "react";
import SoTrack from "../assets/image/WeightLoss/SomaliTrack.png";

const Track = () => {
  return (
    <div className="h-[550px] md:min-h-screen  flex justify-center items-center mt-4 md:mt-0 ">
      <div className="bg-[#F4E7E7]  w-full max-w-5xl  mx-auto rounded-2xl py-4 md:py-0 ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <div className="w-1/2 ">
            <img className="w-full h-auto object-contain" src={SoTrack} alt="" />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center text-center  ">
            <h1 className="text-[#0D9B4D] md:text-5xl font-bold">Track food, fitness & fasting</h1>
            <p className="my-7 text-[#716060] ">
              Tracking calories and macros is simple with Sola Food Tracker. Our
              barcode scanner and device integration make meal tracking
              effortless. Stay on top of your nutrition goals with ease using
              Sola Food Tracker
            </p>
            <button className="bg-[#FAA432] py-3 px-8 rounded-4xl  text-white font-bold   hover:bg-[#0D9B4D] cursor-pointer transition ease-in duration-300">Track Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
