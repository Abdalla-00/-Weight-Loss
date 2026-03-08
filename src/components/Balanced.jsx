import React from "react";
import Subtitle from "./Subtitle";
import { balanced } from "../data/weightLossTips";

const Balanced = () => {
  return (
    <div className="bg-gray-100 mt-20 py-6 px-4">
      <Subtitle
        title={"Balanced Meal Planning"}
        description={
          "Create nutritious, satisfying meals with these simple guidelines"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4 ">
        {balanced.map((product) => (
          <div className="bg-white p-4 rounded-lg">
            <h1 className="font-bold">{product.title}</h1>
            <div className="">
              {product.items &&
                product.items.map((item, idx) => (
                  <div key={idx}>
                    {item.image ? (
                      <div className="mt-4">
                        <img
                          src={item.image}
                          className="h-64 w-full object-cover rounded-lg"
                          alt=""
                        />
                      </div>
                    ) : (
                      <>
                        <div className="pt-2 flex gap-3 items-center">
                          <div className="bg-[#0D9C4D]/10 w-4 rounded-full flex justify-center items-center mt-2">
                            <h1 className="text-[#0D9C4D] text-xs">{idx}</h1>
                          </div>
                          <div className="text-[12px] font-semibold mt-2">
                            {item.bold}{" "}
                            <span className="text-gray-400 font-normal">
                              {item.normal}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}

              {product.tips &&
                product.tips.map((tip, idx) => (
                  <>
                    <div key={idx} className="flex items-center gap-3 mt-4">
                      {tip.Icon && (
                        <span className="bg-[#0D9C4D]/10 p-[6px] rounded-full mb-4">
                          <tip.Icon color="#0D9C4D" size={16} />
                        </span>
                      )}

                      <div>
                        <h2 className="font-semibold">{tip.subTitle}</h2>
                        <p className="text-gray-500 text-[13px]">
                          {tip.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 bg-[#0D9C4D]/10 text-[#0D9C4D] rounded-lg px-4 ">
                      <h1 className="">{tip.subTitle1}</h1>
                      <p className="mt-1">{tip.description1}</p>
                    </div>
                  </>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Balanced;
