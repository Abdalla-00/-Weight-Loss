import React from "react";
import Lifescrp from "../components/Lifescrp";
import Power from "../components/Power";
import Stress from "../components/Stress";
import Sleep from "../components/Sleep";
import Movement from "../components/Movement";

const Lifestyle = () => {
  return (
    <div>
      <Lifescrp />
      <div className="max-w-5xl mx-auto">
        <Power />
        <Stress />
        <Sleep/>
        <Movement/>
      </div>
    </div>
  );
};

export default Lifestyle;
