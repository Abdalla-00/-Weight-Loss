import React from "react";
import { meal } from "../data/weightLossTips";
import { Icons } from "../icons/icons";

const Meal = () => {
  const Icon = Icons.check;
  console.log(meal);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 bg-gray-100 p-7 mb-4 rounded-lg  ">
      {/* left side */}
      <div className=" mt-6">
        <h1 className="text-2xl font-bold">{meal.title}</h1>
        <p className="text-gray-500 text-sm mt-3 mb-4">{meal.description}</p>

        <ul className="text-sm text-gray-500">
          {meal.tips.map((i, idx) => (
            <div className="flex gap-3 items-center">
              <span className="bg-[#0D9C4D]/30 rounded-full w-5 h-5 flex items-center justify-center mt-3 ">
                <Icon size={14} color="#0D9C4D" />
              </span>
              <li className="mt-3">{i}</li>
            </div>
          ))}
        </ul>

        <button className="mt-6 bg-[#FAA432] py-2 px-4 rounded-full text-white font-semibold text-sm cursor-pointer hover:bg-[#0D9C4D] transition ease-in-out delay-300 duration-300">
          {meal.btn}
        </button>
      </div>
      {/* Right side */}
      <div className="hidden md:block">
        <img className="h-80 w-full rounded-lg" src={meal.image} alt="" />
      </div>
    </div>
  );
};

export default Meal;
