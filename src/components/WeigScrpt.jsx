import React from "react";

import data from "../assets/Map.json";

const WeigScrpt = () => {
  console.log(data);
  return (
    <>
      <div className="bg-[#0D9C4D] h-96">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center text-white text-3xl font-bold  py-7 ">
            Weight Loss Made Easy
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ga">
            {data.map((product) => {
              return (
                <div className="text-white">
                  <img className="w-24" src={product.image} alt="" />
                  <h1 className="text-2xl font-bold">{product.title}</h1>
                  <p className="max-w-60">{product.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeigScrpt;
