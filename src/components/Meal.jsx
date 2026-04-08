import React from "react";
import { meal } from "../data/weightLossTips";

const Meal = () => {
  console.log(meal);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 bg-gray-100 p-7">
      {/* left */}
      <div className=" ">
        <h1 className="text-2xl font-bold">{meal.title}</h1>
        <p className="text-gray-500 text-sm mt-3">{meal.description}</p>

        <ul>
            {meal.tips.map((i,idx)=>(
                <li>{i}</li>
            ))}
        </ul>
      </div>

      <div>
        <img className="h-80 w-full" src={meal.image} alt="" />
      </div>
    </div>
  );
};

export default Meal;
