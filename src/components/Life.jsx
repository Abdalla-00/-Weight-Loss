import React from "react";
import { life } from "../data/weightLossTips";
import { Icons } from "../icons/icons";

const Life = () => {
  const Icon = Icons.dot;
  return (
    <div className="my-20  bg-[#0D9C4D]/20 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-6 ">
      <div className="flex-col md:flex-row justify-between">
        {/* left_side  */}
        <div className="text-[#0D9C4D]">
          <h1 className="font-bold"> {life.title} </h1>
          <p className="text-sm mt-2">{life.description}</p>

          <ul className="mt-3">
            {life.list.map((list) => {
              console.log(list);
              return (
                <>
                  <li className="text-sm mt-2 flex ">
                    <Icon className="" />
                    {list.text}
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        {/* right_side */}
        <button className="bg-amber-500">{life.button}</button>
      </div>
    </div>
  );
};

export default Life;
