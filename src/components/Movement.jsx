import React from "react";
import Subtitle from "./Subtitle";
import { movement } from "../data/weightLossTips";

const Movement = () => {
  const data = movement;
  console.log(data);
  return (
    <div className="mt-16 mb-7">
      <Subtitle
        title={"Joyful Movement"}
        description={
          "Find physical activities you genuinely enjoy for sustainable fitness and wellbeing"
        }
      />

      <div className="mt-8">
        <div className="flex gap-7 justify-center items-center">
          {/* left_side */}

          <div className="md:w-1/2">
            {/* title and description */}
            <h1 className="text-xl font-semibold">{data.title}</h1>
            <p className="text-gray-500 text-sm mt-3">{data.description}</p>
          </div>

          {/* right_side */}
          <div className="bg-blue-600 md:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Movement;
