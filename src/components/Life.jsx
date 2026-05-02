import React from "react";
import { life } from "../data/weightLossTips";
import { Icons } from "../icons/icons";

const Life = () => {
  const Icon = Icons.dot;
  return (
    <div className="my-20  bg-[#0D9C4D]/20 p-6 rounded-lg  ">
      <div className="flex flex-col lg:flex-row justify-between items-center ">
        {/* left_side  */}
        <div className="text-[#0D9C4D]">
          <h1 className="font-bold"> {life.title} </h1>
          <p className="text-sm mt-2">{life.description}</p>

          <ul className="mt-3">
            {life.list.map((list, index) => {
              console.log(list);
              return (
                <div key={index}>
                  <li className="text-sm mt-2 flex ">
                    <Icon className="" />
                    {list.text}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>

        {/* right_side */}
        <button className="bg-[#0D9C4D] hover:bg-amber-500 lg:py-2 lg:px-4 py-2 rounded-full text-white cursor-pointer transition ease-in-out duration-300 delay-300 min-w-full lg:min-w-0 mt-3 lg:mt-0">
          {life.button}
        </button>
      </div>
    </div>
  );
};

export default Life;
