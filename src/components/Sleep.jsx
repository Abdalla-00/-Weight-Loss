import React from "react";
import Subtitle from "./Subtitle";
import { sleep } from "../data/weightLossTips";
import { Icons } from "../icons/icons";

const Sleep = () => {
  const Icon = Icons.moon;
  const data = sleep[0].main[0];
  console.log(data);
  return (
    <div className="mt-7">
      <Subtitle
        title={"Sleep Optimization"}
        description={
          "Quality sleep is essential for physical health, mental clarity, and emotional wellbeing"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div>
          <div className="flex gap-2">
            <div>
              <Icon/>
            </div>
            <h1 className="text-lg font-bold">{data.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sleep;
