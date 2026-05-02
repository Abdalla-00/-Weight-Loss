import React from "react";
import Subtitle from "./Subtitle";
import { practice } from "../data/weightLossTips";

const Practices = () => {
  return (
    <div className="mt-20 mb-10">
      <Subtitle
        title={"Mindfulness Practices"}
        description={
          "Simple techniques to cultivate present-moment awareness and inner peace"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7 px-4 md:px-0">
        {practice.map((card, index) => {
          const Icon = card.Icon;
          const Headphone = card.Icon;
          const zad = card.Icon;
          console.log(card);
          return (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              {/* icon */}
              <div className="bg-[#0D9C4D]/20 h-10 w-10 rounded-full flex justify-center items-center">
                <Icon size={20} className="text-[#0D9C4D]" />
              </div>
              {/* text-content */}
              <div className=" mt-3">
                <h1 className="font-semibold text-lg">{card.title}</h1>
                <p className="text-gray-500 text-sm mt-2">{card.description}</p>
              </div>

              {/* list : another lop */}
              <div className="bg-white mt-6 p-4 rounded-lg">
                <h2 className="font-semibold mb-2">{card.subTitle}</h2>
                {card.list.map((list, index) => {
                  return (
                    <div
                      className="mt-1 flex items-center gap-1 pl-2"
                      key={index}
                    >
                      <span className="text-gray-500">{index + 1}.</span>
                      <p className="text-sm text-gray-500">{list.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Practices;
