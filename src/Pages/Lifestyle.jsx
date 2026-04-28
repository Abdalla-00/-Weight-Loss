import React from "react";
import Lifescrp from "../components/Lifescrp";
import Power from "../components/Power";
import Stress from "../components/Stress";
import Sleep from "../components/Sleep";

const Lifestyle = () => {
  return (
    <div>
      <Lifescrp />
      <div className="max-w-5xl mx-auto">
        <Power />
        <Stress />
        <Sleep/>
      </div>
    </div>
  );
};

export default Lifestyle;
