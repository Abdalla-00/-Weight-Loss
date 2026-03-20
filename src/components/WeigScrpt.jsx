import React from "react";

import data from "../data/Map.json";
import icon1 from "../assets/image/WeightLoss/icon1.png";
import icon2 from "../assets/image/WeightLoss/icon2.png";
import icon3 from "../assets/image/WeightLoss/icon3.png";

const images = {
  "icon1.png": icon1,
  "icon2.png": icon2,
  "icon3.png": icon3,
};

const WeigScrpt = () => {
  // console.log(data);
  return (
    <>
      <div className="bg-[#0D9C4D] h-[750px] md:h-[550px] lg:h-96">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-center text-white text-3xl font-bold  py-7 ">
            Weight Loss Made Easy
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((product, index) => {
              return (
                <div
                  key={index}
                  className="text-white text-center flex flex-col justify-center items-center"
                >
                  <img className="w-24" src={images[product.image]} alt="" />
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
