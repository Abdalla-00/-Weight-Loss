import React from "react";
import NutritionDescrip from "../components/NutritionDescrip";
import Popular from "../components/Popular";

const Nutrition = () => {
  return (
    <div>
      <NutritionDescrip />
      <div className="max-w-6xl mx-auto">
        <Popular />
      </div>
    </div>
  );
};

export default Nutrition;
