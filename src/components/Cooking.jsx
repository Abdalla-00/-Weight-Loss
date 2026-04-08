import React from "react";
import Subtitle from "./Subtitle";
import { cooking } from "../data/weightLossTips";
import { Icons } from "../icons/icons";

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
          const Arrow = Icons.moveRight;
          return (
            <>
              <div className="flex justify-center items-center" key={idx}>
                <div className="bg-gray-100 rounded-lg p-4">
                  {/* icon */}
                  <div className="bg-[#0D9C4D]/20 w-10 h-10 rounded-full flex justify-center items-center">
                    <Icon color="#0D9C4D" />
                  </div>
                  {/* text-conrant */}
                  <div className="pt-2">
                    <h1 className="font-semibold">{item.title}</h1>
                    <p className="pt-4 text-gray-500 text-sm">
                      {item.description}
                    </p>
                  </div>
                  {/* video */}
                  <div className="h-48 w-full pt-3">
                    <iframe
                      src={item.link}
                      frameBorder="0"
                      allowFullScreen
                      title={item.title}
                      className="w-full h-48 rounded-lg"
                    ></iframe>
                  </div>

                  {/* button */}
                  <button
                    onClick={() => window.open(item.link, "_blank")}
                    className="mt-7 flex gap-1 justify-center items-center text-[#0D9C4D] cursor-pointer font-semibold"
                  >
                    {item.btn}
                    <Arrow size={20} color="#0D9C4D" className="pt-1" />
                  </button>
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
