import React from "react";
import NutritionDescrip from "../components/NutritionDescrip";
import Popular from "../components/Popular";
import Understanding from "../components/Understanding";
import Balanced from "../components/Balanced";

const Nutrition = () => {
  return (
    <div>
      <NutritionDescrip />
      <div className="max-w-6xl mx-auto">
        <Popular />
        <Understanding/>
        <Balanced/>
      </div>
    </div>
  );
};

export default Nutrition;
