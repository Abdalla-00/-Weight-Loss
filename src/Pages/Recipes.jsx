import React from "react";
import RecipDescrip from "../components/RecipDescrip";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import Cooking from "../components/Cooking";
import Meal from "../components/Meal";
import Pro from "../components/Pro";

const Recipes = () => {
  return (
    <div>
      <RecipDescrip />
      <div className="max-w-6xl mx-auto">
        <Categories />
        <Featured />
        <Cooking/>
        <Meal/>
        <Pro/>
      </div>
    </div>
  );
};

export default Recipes;
