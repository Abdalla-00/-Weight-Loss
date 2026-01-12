import React from "react";
import logo from "../../public/image/logo-2.png";

const Footer = () => {
  return (
    <div className="bg-[#111827] max-w-7xl mx-auto px-14   ">
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-40 md:text-left text-center text-gray-400 pt-36 ">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5">
          <img src={logo} className="w-32" alt="" />
          <p className="max-w-[230px]">
            Your companion for a healthier lifestyle through better nutrition
            tracking.
          </p>
        </div>
        <div className=" mt-4 md:mt-0">
          <h2 className="text-xl text-white font-bold ">Features</h2>
          <ul className="flex flex-col gap-2  mt-5">
            <li>Meal Planning</li>
            <li>Nutrition Analysis</li>
            <li>Weight Tracking</li>
            <li>Fitness Integration</li>
          </ul>
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="text-xl text-white font-bold">Company</h2>
          <ul className="flex flex-col gap-2  mt-5">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>    
        <div className="mt-4 md:mt-0">
          <h2 className="text-xl text-white font-bold">Legal</h2>
          <ul className="flex flex-col gap-2  mt-5">
            <li className="cursor-pointer hover:text-[#FAA432] transition duration-300 ease-in">Terms of Service</li>
            <li className="cursor-pointer hover:text-[#FAA432] transition duration-300 ease-in">Privacy Policy</li>
            <li className="cursor-pointer hover:text-[#FAA432] transition duration-300 ease-in">Cookie Policy</li>
            <li className="cursor-pointer hover:text-[#FAA432] transition duration-300 ease-in">GDPR</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800  h-[0.5px] mt-5"></div>
       
       <div className=" flex flex-col justify-center items-center mt-5 pb-10 md:pb-0">
        <p className="text-gray-400">© 2025 NutriTracker. All rights reserved.</p>
       </div>
    </div>
  );
};

export default Footer;
