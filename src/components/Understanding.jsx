import React from "react";
import Subtitle from "./Subtitle";
import { understanding } from "../data/weightLossTips.js";

const Understanding = () => {
  // console.log(Array.isArray(understanding));

  return (
    <div className="mt-20  p-4">
      <Subtitle
        title={"Understanding Macronutrients"}
        description={
          "The three main macronutrients protein, carbohydrates, and fats each play vital roles in your health."
        }
      />

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 ">
        {understanding.map((product, index) => {
          return (
            <div
              key={index}
              className="mx-auto bg-gray-100 flex flex-col space-y-1 rounded-2xl p-5"
            >
              <div className="bg-[#0D9C4D]/20 w-10 h-10 rounded-full flex justify-center items-center">
                <product.Icon className="text-[#0D9B4D]" />
              </div>
              <h1 className="text-lg font-semibold">{product.title}</h1>
              <p className="text-sm text-gray-500">{product.description}</p>
              <h2 className="font-semibold text-[#0D9B4D] mt-2">
                {product.subTitle}
              </h2>
              <div className="flex flex-col gap-1 text-gray-500">
                <p className="relative pl-3">
                  <span className="bg-[#0D9C4D] w-1 h-1 absolute top-3 left-0 rounded-full"></span>
                  {product.detail1}
                </p>

                <p className="relative pl-3">
                  <span className="bg-[#0D9C4D] h-1 w-1 absolute top-3 left-0 rounded-full"></span>
                  {product.detail2}
                </p>

                <p className="relative pl-3">
                  <span className="bg-[#0D9C4D] h-1 w-1 absolute top-3 left-0 rounded-full"></span>
                  {product.detail3}
                </p>

                <p className="relative pl-3">
                  <span className="bg-[#0D9C4D] w-1 h-1 absolute top-3 left-0 rounded-full"></span>
                  {product.detail4}
                </p>

                <p className="relative pl-3">
                  <span className="bg-[#0D9C4D] h-1 w-1 absolute top-3 left-0"></span>
                  {product.detail5}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Understanding;
