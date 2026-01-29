import React from "react";
import { supportLoss } from "../data/weightLossTips";

const WeightLossFoods = () => {
  return (
    <div className="bg-gray-100  mt-6 py-12">
      <div className="text-center pt-6 px-4">
        <h1 className="text-2xl font-bold">Foods That Support Weight Loss</h1>
        <p className="text-gray-500 mt-2">
          These nutrient-dense foods will keep you satisfied while helping you
          reach your goals
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  mt-5  ">
        {supportLoss.map((product, index) => {
          return (
            <div key={index} className="bg-white rounded-sm shadow-sm hover:shadow-2xl transition duration-300 ease-in-out cursor-pointer ">
              <img
                className="rounded-sm w-full h-48 object-cover"
                src={product.image}
                alt=""
              />
              <div className="p-4">
                <h1 className="font-bold hover:text-[#22C55E] transition duration-300">{product.title}</h1>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeightLossFoods;
