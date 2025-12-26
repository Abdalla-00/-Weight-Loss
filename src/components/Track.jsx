import React from "react";
import SoTrack from "../../public/image/WeightLoss/SomaliTrack.png";

const Track = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-[#F4E7E7] w-full max-w-[450px] md:max-w-4xl  lg:max-w-5xl mx-auto h-96 rounded-2xl">
        <div className="">
          <img className="w-1\2" src={SoTrack} alt="" />
        </div>
        <div className="w-1/2">
          Track
        </div>
      </div>
    </div>
  );
};

export default Track;
