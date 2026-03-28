import React from "react";
import Subtitle from "./Subtitle";
import { fearured } from "../data/weightLossTips";

const Featured = () => {
  return (
    <div className=" mt-20 mb-10">
      <Subtitle
        title={"Featured Recipes"}
        description={"Our most popular, nutritionist-approved recipes"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {fearured.map((item) => (
          <>
            <div className="mt-14 p-1 lg:pl-0">
              <div className=" flex justify-end relative ">
                <span className="absolute bg-[#0D9B4D] py-1 mr-1  px-4 text-sm font-semibold rounded-full text-white mt-2">
                  {item.side}
                </span>
                <img
                  className="w-full h-48 rounded-lg"
                  src={item.image}
                  alt=""
                />
                <div className="inset-0  absolute  bg-gradient-to-t from-black/80 to-transparent "></div>
              </div>

              <div className="shadow-sm p-2 rounded-lg">
                <div className="flex gap-3 text-gray-500 text-sm  pt-3">
                  <span>{item.min}</span>
                  <span>{item.streak}</span>
                  <span>{item.tem}</span>
                </div>

                <div className="">
                  <h1 className="font-bold">{item.title}</h1>
                  <p className="text-gray-500 text-sm my-1">
                    {item.description}
                  </p>
                  <button className="text-[#0D9B4D] font-semibold cursor-pointer">
                    {item.view}
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Featured;
