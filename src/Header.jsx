import React, { useState } from "react";
import logo from "./assets/image/logo.png";

const Header = () => {

  const [hidden,seHidden]=useState(false)
  return (
    <>
      <div className="bg-[#d8efe2] max-w-5xl mx-auto py-5 mt-5 rounded-full">
        <nav className="flex justify-between items-center max-w-4xl mx-auto p-4 ">
          <img className="h-12" src={logo} alt="" />

          <ul className="hidden md:flex gap-4 cursor-pointer text-black">
            <li>Weight Loss </li>
            <li>Nutrition & Diet</li>
            <li>Recipes & Cooking</li>
            <li> Lifestyle & Mindset</li>
            <li className="font-bold">SignIn</li>
          </ul>

          <button className="md:hidden " onClick={()=>seHidden(!hidden)}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          </button>
        </nav>
      </div>

      <div className="bg-gray-300 h-screen hidden">
        <ul className="md:hidden flex flex-col gap-4 cursor-pointer text-black">
          <li>Weight Loss </li>
          <li>Nutrition & Diet</li>
          <li>Recipes & Cooking</li>
          <li> Lifestyle & Mindset</li>
          <li className="font-bold">SignIn</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
