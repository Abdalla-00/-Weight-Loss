import React from "react";
import { weightLossTips } from "../data/weightLossTips";
// import { iconMap } from "../utils/iconMap";

const Guidance = () => {
  return (
    <div className="mt-11">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Weight Loss Guidance</h1>
        <p className="text-gray-500 mt-2">
          Follow these evidence-based principles to lose weight effectively and
          keep it off long-term
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-6 gap-7 p-4">
        {weightLossTips.map((product,index) => {
          // console.log(weightLossTips);
          const Icon = product.Icon
          return (
            <div  key={index} className="bg-gray-100 p-4 rounded-lg">
              <div className="bg-[#0D9B4D]/20 w-10 h-10 rounded-full flex justify-center items-center">
                <Icon className=" text-[#0D9B4D]   "/>
              </div>
              <div className="font-bold py-2">{product.title}</div>
              <div className="text-gray-500">{product.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Guidance;
