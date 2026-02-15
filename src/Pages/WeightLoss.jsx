import React from "react";
import WeighDescrip from "../components/WeighDescrip";
import Guidance from "../components/Guidance";
import WeightLossFoods from "../components/WeightLossFoods";
import Sample from "../components/Sample";
import Success from "../components/Success";

const WeightLoss = () => {
  return (
    <div className=" ">
      <WeighDescrip />
      <div className="max-w-6xl mx-auto">
        <Guidance />
        <WeightLossFoods />
        <Sample />
        <Success />
      </div>
    </div>
  );
};

export default WeightLoss;
