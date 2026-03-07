import React from "react";
import Subtitle from "./Subtitle";
import { balanced } from "../data/weightLossTips";

const Balanced = () => {
  return (
    <div className="bg-gray-100 mt-20 py-6">
      <Subtitle
        title={"Balanced Meal Planning"}
        description={
          "Create nutritious, satisfying meals with these simple guidelines"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
        {balanced.map((item)=>{
          <div>
              <h1>{item.tips}</h1>
          </div>
        })}
      </div>
    </div>
  );
};

export default Balanced;
