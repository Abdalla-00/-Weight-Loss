import React from "react";
import Subtitle from "./Subtitle";
import { cooking } from "../data/weightLossTips";

const Cooking = () => {
  return (
    <div className="mb-10">
      <Subtitle
        title={"Master Essential Cooking Techniques"}
        description={
          "Learn the fundamental skills that will elevate your cooking"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7  mt-7">
        {cooking.map((item, idx) => {
          const Icon = item.Icon;
          return (
            <>
              <div className="flex justify-center items-center" key={idx}>
                <div className="bg-gray-100 rounded-lg p-4">
                  {/* icon */}
                  <div className="bg-[#0D9C4D]/40 w-10 h-10 rounded-full flex justify-center items-center">
                    <Icon color="#0D9C4D" />
                  </div>
                  {/* text-conrant */}
                  <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                  {/* video */}
                  <div className="h-48 w-full">
                    <iframe
                      src={item.link}
                      frameBorder="0"
                      allowFullScreen
                      title={item.title}
                      className="w-full h-48"
                    ></iframe>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cooking;
