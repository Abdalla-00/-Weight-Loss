import React from "react";
import Subtitle from "./Subtitle";
import { sleep } from "../data/weightLossTips";
import { Icons } from "../icons/icons";

const Sleep = () => {
  const Icon = Icons.moon;
  const data = sleep[0].main[0];
  const deta = sleep[0].tips;
  console.log(data);
  return (
    <div className="mt-7">
      <Subtitle
        title={"Sleep Optimization"}
        description={
          "Quality sleep is essential for physical health, mental clarity, and emotional wellbeing"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10  px-4 md:px-0 ">
        <div className="bg-gray-100 p-6 rounded-lg">
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
                <div key={index} className=" mt-2 text-gray-500 flex ">
                  <Icon className="text-[#0D9C4D]" />
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h1 className="font-bold text-lg">{deta[0].title}</h1>
          <div className="mt-5 md:mt-3">
            {deta.slice(1, 5).map((tip, index) => {
              return (
                <div key={index}>
                  <div className="flex gap-3 mt-2">
                    <div className="bg-[#0D9C4D]/20 h-7 w-7 rounded-full flex justify-center items-center">
                      <span className="text-[#0D9C4D]">{index + 1}</span>
                    </div>
                    <h2 className="font-semibold"> {tip.Subtitles}</h2>
                  </div>
                  <p className="pl-9 text-gray-500 text-sm">
                    {tip.description}
                  </p>
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
