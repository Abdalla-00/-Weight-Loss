import React from "react";
import Subtitle from "./Subtitle";
import { movement } from "../data/weightLossTips";
import { Icons } from "../icons/icons";

const Movement = () => {
  const data = movement;
  const subtitle = data.main.subtitle;
  const suptitle = data.tips.subtitle;
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

            {/* map list one section */}
            <div className="bg-white p-4 rounded-lg mt-6">
              <h2 className="font-semibold">{subtitle}</h2>
              {movement.main.list.map((li) => {
                return (
                  <div className="flex">
                    <Icon className="mt-3 text-[#0D9C4D]" />
                    <ul className="mt-3 text-gray-500">{li.text}</ul>
                  </div>
                );
              })}
            </div>

            {/* map list two section */}

            <div className="bg-white mt-6 rounded-lg p-4">
              <h2 className="font-semibold">{subtitle}</h2>
              <p className="text-gray-500 text-sm mt-3">
                {data.tips.description}
              </p>

              {movement.tips.lists.map((lists) => {
                return (
                  <>
                    <div className="flex">
                      <Icon className="mt-3 text-[#0D9C4D]"/>
                      <ul className="text-gray-500 mt-3">{lists.text}</ul>
                    </div>
                  </>
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
