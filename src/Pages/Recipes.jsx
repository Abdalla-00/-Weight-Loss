import React from "react";
import RecipDescrip from "../components/RecipDescrip";
import Categories from "../components/Categories";

const Recipes = () => {
  return (
    <div>
      <RecipDescrip />
      <div className="max-w-4xl mx-auto">
        <Categories/>
      </div>
    </div>
  );
};

export default Recipes;
