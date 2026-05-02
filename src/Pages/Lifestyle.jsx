import React from "react";
import Lifescrp from "../components/Lifescrp";
import Power from "../components/Power";
import Stress from "../components/Stress";
import Sleep from "../components/Sleep";
import Movement from "../components/Movement";
import Practices from "../components/Practices";

const Lifestyle = () => {
  return (
    <div>
      <Lifescrp />
      <div className="max-w-6xl mx-auto">
        <Power />
        <Stress />
        <Sleep/>
        <Movement/>
        <Practices/>
      </div>
    </div>
  );
};

export default Lifestyle;
