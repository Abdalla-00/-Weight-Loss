import React from "react";
import Subtitle from "./Subtitle";
import { power } from "../data/weightLossTips";

const Power = () => {
  return (
    <div className="mt-10">
      <Subtitle
        title={"The Power of Mindset"}
        description={
          "Your thoughts shape your reality. Cultivate a positive mindset to transform your health journey."
        }
      />

      <div className="flex gap-60">
          {power.map((item)=>{
            const Icon = item.Icon
            console.log(item)
            return (
              <div className="">
                  <Icon/>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
              </div>
            )
          })}
      </div>
    </div>
  );
};

export default Power;
