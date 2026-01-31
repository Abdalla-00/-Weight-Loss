import React from "react";
import { success } from "../data/weightLossTips";

const Success = () => {
  return (
    <div className=" p-4 mt-7 mb-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Success Stories</h1>
        <p className=" text-gray-500 mt-1">
          Real people, real results with NutriTracker
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {success.map((product, index) => {
          return (
            <div className="bg-gray-100 p-6 rounded-xl ">
              <div className="flex gap-4 items-center ">
                <img className="w-12 h-12 rounded-full object-cover" src={product.image} alt="" />
                <div>
                  <h1 className="font-semibold text-sm">{product.title}</h1>
                  <h2 className="text-gray-500 text-xs">{product.subTitle}</h2>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">{product.description}</p>
              <span className="text-yellow-500">{product.rating}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Success;
