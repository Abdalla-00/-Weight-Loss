import React from "react";
import logo from "./assets/image/logo.png";

const Header = () => {
  return (
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
      </nav>
    </div>
  );
};

export default Header;
