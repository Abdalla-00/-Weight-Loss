import React from "react";
import Subtitle from "./Subtitle";
import { stres } from "../data/weightLossTips";

const Stress = () => {
  return (
    <div className="mt-10 mb-7">
      <Subtitle
        title={"Stress Management"}
        description={
          "Effective techniques to reduce stress and create more balance in your life"
        }
      />

      <div className="flex justify-center items-center mx-auto">
        {/* right-side */}
        <div>
          {stres[0].card.map((item, index) => {
            console.log(item);
            return (
              <div className="w-1/2">
                <img src={item.image} className="h-48 w-full" alt="" />
              </div>
            );
          })}
        </div>

        {/* left-side */}
        <div className="bg-blue-800">hi</div>
      </div>
    </div>
  );
};

export default Stress;
