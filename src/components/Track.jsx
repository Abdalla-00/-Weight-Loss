import React from "react";
import SoTrack from "../../public/image/WeightLoss/SomaliTrack.png";

const Track = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-[#F4E7E7] w-full max-w-[450px] md:max-w-4xl  lg:max-w-5xl mx-auto rounded-2xl">
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <div className="w-1/2 ">
            <img className="w-full h-auto object-contain" src={SoTrack} alt="" />
          </div>
          <div className="w-1/2">
            <h1 className="text-[#0D9B4D] text-5xl font-bold">Track food, fitness & fasting</h1>
            <p className="my-7">
              Tracking calories and macros is simple with Sola Food Tracker. Our
              barcode scanner and device integration make meal tracking
              effortless. Stay on top of your nutrition goals with ease using
              Sola Food Tracker
            </p>
            <button>Track Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
