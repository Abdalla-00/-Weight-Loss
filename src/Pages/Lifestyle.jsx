import React from "react";
import Lifescrp from "../components/Lifescrp";
import Power from "../components/Power";
import Stress from "../components/Stress";
import Sleep from "../components/Sleep";
import Movement from "../components/Movement";
import Practices from "../components/Practices";
import Life from "../components/Life";

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
        <Life/>
      </div>
    </div>
  );
};

export default Lifestyle;
