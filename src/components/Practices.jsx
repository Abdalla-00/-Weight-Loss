import React from "react";
import Subtitle from "./Subtitle";
import { practice } from "../data/weightLossTips";

const Practices = () => {
  return (
    <div className="mt-20">
      <Subtitle
        title={"Mindfulness Practices"}
        description={
          "Simple techniques to cultivate present-moment awareness and inner peace"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
        {practice.map((card)=>{
            console.log(card)
            return(
                <>
                <div>hello</div>
                </>
            )
        })}
      </div>
    </div>
  );
};

export default Practices;
