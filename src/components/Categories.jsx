import React from "react";
import Subtitle from "./Subtitle";
import { category } from "../data/weightLossTips";

const Categories = () => {
  return (
    <div className="mt-7">
      <Subtitle
        title={"Browse Recipe Categories"}
        description={
          "Find the perfect recipe for any meal, dietary preference, or occasion"
        }
      />
      <div className="mt-7 mb-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        {category.map((item) => (
          <>
            <div className=" relative">
              <img className="rounded-lg w-full" src={item.image} alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-lg">
                <div className="absolute lg:top-40 lg:left-2 md:top-80 md:left-4 top-[410px] left-4  ">
                  <h1 className="text-white font-bold">{item.title}</h1>
                  <p className="text-gray-300 text-xs">{item.description}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Categories;
