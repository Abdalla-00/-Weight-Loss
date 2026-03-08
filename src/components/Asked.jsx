import React from "react";
import Subtitle from "./Subtitle";
import { asked } from "../data/weightLossTips";

const Asked = () => {
  return (
    <div className="mt-16 my-28">
      <Subtitle
        title={"Frequently Asked Questions"}
        description={"Common questions about nutrition and diet"}
      />

      <div className="grid grid-cols-1 space-y-4 mt-7 mb-5 shadow-sm max-w-3xl mx-auto  ">
        {asked.map((item) => (
          <>
            <div className="  p-4">
              <div className=" ">
                <hr className="border border-gray-100" />
                <h1 className="font-bold mt-2">{item.title}</h1>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Asked;
