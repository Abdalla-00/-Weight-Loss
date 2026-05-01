import React from "react";
import Subtitle from "./Subtitle";
import { movement } from "../data/weightLossTips";
import { Icons } from "../icons/icons";

const Movement = () => {
  const data = movement;
  const subtitle = data.main.subtitle;
  const Icon = Icons.dot;
  console.log(data);
  return (
    <div className="mt-16 mb-7 bg-gray-100 p-4 rounded-lg">
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

            {/* map fist section */}
            <div className="bg-white p-4 round-lg mt-6">
              <h2 className="">{subtitle}</h2>
              {movement.main.list.map((li) => {
                return (
                  <div className="flex">
                    <Icon className="mt-3 text-[#0D9C4D]" />
                    <ul className="mt-3 text-gray-500">{li.text}</ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* right_side */}
          <div className="bg-blue-600 md:w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Movement;
