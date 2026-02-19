import React from "react";
import Subtitle from "./Subtitle";
import { understanding } from "../data/weightLossTips.js";


const Understanding = () => {
  // console.log(Array.isArray(understanding));

  return (
    <div className="mt-20">
      <Subtitle
        title={"Understanding Macronutrients"}
        description={
          "The three main macronutrients protein, carbohydrates, and fats each play vital roles in your health."
        }
      />


      <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {understanding.map((product,index)=>{
         return (
           <div key={index} className="bg-amber-300">
            <product.Icon />
            <h2>{product.title}</h2>
          </div>
         )
        })}
      </div>
    </div>
  );
};

export default Understanding;
