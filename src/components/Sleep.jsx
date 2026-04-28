import React from "react";
import Subtitle from "./Subtitle";
import { sleep } from "../data/weightLossTips";

const Sleep = () => {
  return (
    <div className="mt-7">
      <Subtitle
        title={"Sleep Optimization"}
        description={
          "Quality sleep is essential for physical health, mental clarity, and emotional wellbeing"
        }
      />


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sleep[0].main.list.map((item)=>{
          console.log(item)
        })}
      </div>
    </div>
  );
};

export default Sleep;
