import React from "react";
import NutritionDescrip from "../components/NutritionDescrip";
import Popular from "../components/Popular";
import Understanding from "../components/Understanding";
import Balanced from "../components/Balanced";
import Asked from "../components/Asked";

const Nutrition = () => {
  return (
    <div>
      <NutritionDescrip />
      <div className="max-w-6xl mx-auto">
        <Popular />
        <Understanding />
        <Balanced />
        <Asked />
      </div>
    </div>
  );
};

export default Nutrition;
