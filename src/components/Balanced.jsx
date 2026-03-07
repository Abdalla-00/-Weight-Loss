import React from "react";
import Subtitle from "./Subtitle";
import { balanced } from "../data/weightLossTips";
import balanced_1 from "../assets/image/Balanced/Balaced.png"

const Balanced = () => {
  return (
    <div className="bg-gray-100 mt-20 py-6 px-4">
      <Subtitle
        title={"Balanced Meal Planning"}
        description={
          "Create nutritious, satisfying meals with these simple guidelines"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 ">
        {balanced.map((item)=>(
          <div className="bg-white">
            <h1>{item.title}</h1>
            {item.tips && item.tips.map((tip)=>(
              <div>
                  <div><img className="" src={balanced_1} alt="" /></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Balanced;
