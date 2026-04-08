import React from "react";
import { meal } from "../data/weightLossTips";

const Meal = () => {
  console.log(meal);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* left */}
      <div>
        <h1>{meal.title}</h1>
      </div>
    </div>
  );
};

export default Meal;
