import React from "react";
import Subtitle from "./Subtitle";
import { stres } from "../data/weightLossTips";

const Stress = () => {
  return (
    <div className="mt-10 mb-7">
      <Subtitle
        title={"Stress Management"}
        description={
          "Effective techniques to reduce stress and create more balance in your life"
        }
      />

      <div className="flex flex-col md:flex-row gap-5 items-center justify-center mt-7">
        {/* right-side */}
        <div className="md:w-1/2 ">
          {stres[0].card.map((item, index) => {
            return (
              <div className="shadow-sm rounded-lg">
                <img
                  src={item.image}
                  className="h-48 w-full object-cover rounded-lg"
                  alt=""
                />
                <div className="mt-4 p-4">
                  <h1 className="font-bold">{item.title}</h1>
                  <p className="text-gray-500 mt-2 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* left-side */}
        <div className="md:w-1/2 w-full bg-blue-800 text-white p-4 rounded-lg">
          hi
        </div>
      </div>
    </div>
  );
};

export default Stress;
