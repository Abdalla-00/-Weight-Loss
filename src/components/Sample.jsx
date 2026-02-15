import React from "react";
import { sample } from "../data/weightLossTips";

const Sample = () => {
  return (
    <div className="bg-gray-100  mt-20 p-4">
      <div className="text-center p-5">
        <h1 className="font-semibold text-2xl">Sample Meal Plan</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-2">
        {sample.map((product, index) => {
          return (
            <div key={index} className=" p-6 bg-white cursor-pointer shadow-sm hover:shadow-2xl transition duration-300 ease-in-out ">
              <h1 className="text-xl font-semibold text-[#0D9C4D] hover:text-[#FAA432] inline-block transition duration-300 ease-linear">{product.title}</h1>
              <div className="mt-3">
                <p className="relative pl-3">
                  <span className="bg-[#0D9C4D] w-1 h-1 absolute left-0 top-3 rounded-full"></span>
                  {product.desc1}
                </p>

                <p className="relative pl-3  py-2">
                  <span className="bg-[#0D9C4D] w-1 h-1 absolute left-0 top-3 rounded-full"></span>
                  {product.desc2}
                </p>
                <p className="relative pl-3">
                  <span className="bg-[#0D9C4D] w-1 h-1 absolute left-0 top-3 rounded-full"></span>
                  {product.desc3}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sample;
