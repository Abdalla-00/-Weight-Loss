import React from "react";
import Subtitle from "./Subtitle";
import { pro } from "../data/weightLossTips";

const Pro = () => {
  return (
    <div className="mt-7 mb-6">
      <Subtitle
        title={"Pro Cooking Tips"}
        description={"Simple hacks and techniques to elevate your cooking"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 px-2 lg:px-0">
        {pro.map((item,index)=>(
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
                <div className="bg-[#0D9C4D]/20 w-7 h-7 rounded-full flex justify-center items-center">
                    <span className="text-[#0D9C4D]">{index + 1}</span>
                </div>
                <h1 className="mt-3 font-semibold">{item.title}</h1>
                <p className="text-gray-500 text-sm mt-2">{item.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Pro;
