import React from "react";
import { popular } from "../data/weightLossTips";

const Popular = () => {
  // console.log(popular)
  return (
    <div className="mt-11 bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Popular Diet Types</h1>
        <p className="text-gray-500  mt-2">
          Explore different diet approaches and find what works best for your
          lifestyle
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-4">
          {popular.map((product,index)=>{
             return (
              <div key={index} className="shadow-sm hover:shadow-2xl cursor-pointer transition duration-300 ease-in-out whitespace-pre-line">
                  <img className="h-48 w-full object-cover rounded-lg " src={product.image} alt="" />
                  <div className="bg-white p-6 rounded-lg">
                    <h1 className="font-bold hover:text-[#22C55E] inline transition duration-300 ease-in-out">{product.title}</h1>
                    <p className="pt-1 text-gray-500">{product.description}</p>

                    <div className="flex gap-2 text-[10px] mt-3">
                      <span className="bg-[#22C55E]/40 hover:bg-[#FAA432]/80  py-1 px-2 rounded-full text-gray-600 hover:text-white transition duration-200 ease-in-out">{product.detail1}</span>
                      <span className="bg-[#22C55E]/40 hover:bg-[#FAA432]/80  py-1 px-2 rounded-full text-gray-600 hover:text-white transition duration-200 ease-in-out">{product.detail2}</span>
                      <span className="bg-[#22C55E]/40 hover:bg-[#FAA432]/80  py-1 px-2 rounded-full text-gray-600 hover:text-white transition duration-200 ease-in-out">{product.detail3}</span>
                    </div>
                  </div>
              </div>
             )
          })}
      </div>
        

    </div>
  );
};

export default Popular;
