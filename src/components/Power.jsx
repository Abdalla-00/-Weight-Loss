import React from "react";
import Subtitle from "./Subtitle";
import { power } from "../data/weightLossTips";

const Power = () => {
  return (
    <div className="mt-10 mb-7">
      <Subtitle
        title={"The Power of Mindset"}
        description={
          "Your thoughts shape your reality. Cultivate a positive mindset to transform your health journey."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9   ">
        {power.map((item) => {
          const Icon = item.Icon;
          return (
            <div className="p-5 bg-gray-50 rounded-lg  ">
              <div className="flex justify-center items-center  bg-[#0D9C4D]/20 h-10 w-10 rounded-full">
                <Icon color="#22C55E" size={22} className=" " />
              </div>
              <h1 className="font-bold mt-3">{item.title}</h1>
              <p className="text-sm mt-2 text-gray-500">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Power;
