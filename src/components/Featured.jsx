import React from "react";
import Subtitle from "./Subtitle";
import { fearured } from "../data/weightLossTips";

const Featured = () => {
  return (
    <div className=" mt-20">
      <Subtitle
        title={"Featured Recipes"}
        description={"Our most popular, nutritionist-approved recipes"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {fearured.map((item) => (
          <>
            <div className="mt-14">
              <div className="bg-amber-500 flex justify-end relative">
                <span className="absolute">{item.side}</span>
                <img className="w-full h-48" src={item.image} alt="" />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Featured;
