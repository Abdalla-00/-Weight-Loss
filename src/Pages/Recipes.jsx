import React from "react";
import RecipDescrip from "../components/RecipDescrip";
import Categories from "../components/Categories";
import Featured from "../components/Featured";

const Recipes = () => {
  return (
    <div>
      <RecipDescrip />
      <div className="max-w-5xl mx-auto">
        <Categories />
        <Featured />
      </div>
    </div>
  );
};

export default Recipes;
