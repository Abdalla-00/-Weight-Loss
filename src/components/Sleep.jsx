import React from "react";
import Subtitle from "./Subtitle";
import { sleep } from "../data/weightLossTips";
import { Icons } from "../icons/icons";

const Sleep = () => {
  const Icon = Icons.moon;
  const data = sleep[0].main[0];
  console.log(data);
  return (
    <div className="mt-7">
      <Subtitle
        title={"Sleep Optimization"}
        description={
          "Quality sleep is essential for physical health, mental clarity, and emotional wellbeing"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 rounded-lg mb-6">
        <div className="bg-gray-100 p-6">
          {/* description */}
          <div className="mt-3">
            <div className="flex gap-2">
              <div className="bg-[#0D9C4D]/20 w-8 h-8 rounded-full flex justify-center items-center">
                <Icon size={20} className="text-[#0D9C4D]" />
              </div>
              <h1 className="text-lg font-bold">{data.title}</h1>
            </div>
            <p className="text-gray-500 text-sm mt-3">{data.description}</p>
          </div>
          {/* list */}
          <div className="mt-3">
            {data.list.map((item, index) => {
              const Icon = Icons.dot;
              return (
                <div className=" mt-2 text-gray-500 flex ">
                  <Icon className="text-[#0D9C4D]"/>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sleep;
