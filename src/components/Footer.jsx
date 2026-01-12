import React from "react";
import logo from "../../public/image/logo-2.png";

const Footer = () => {
  return (
    <div className="bg-[#111827] h-[407px]">
      <div className="  flex flex-col md:flex-row gap-5 md:gap-40 items-center justify-center md:text-left text-center bg-amber-300 pt-36">
        <div className="">
          <img src={logo} alt="" />
          <p className="max-w-[230px]">
            Your companion for a healthier lifestyle through better nutrition
            tracking.
          </p>
        </div>
        <div>
          <h2>Features</h2>
          <ul>
            <li>Meal Planning</li>
            <li>Nutrition Analysis</li>
            <li>Weight Tracking</li>
            <li>Fitness Integration</li>
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h2>Legal</h2>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>GDPR</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
