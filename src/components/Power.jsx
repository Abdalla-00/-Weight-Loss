import React from "react";
import Subtitle from "./Subtitle";
import { power } from "../data/weightLossTips";

const Power = () => {
  return (
    <div className="mt-10 mb-7">
      <Subtitle
        title={"The Power of Mindset"}
        description={
          "Your thoughts shape your reality. Cultivate a positive mindset to transform your health journey."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-9   ">
        {power.map((item) => {
          const Icon = item.Icon;
          return (
            <div className="p-5 ">
              <Icon className="mb-3 " />
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Power;
