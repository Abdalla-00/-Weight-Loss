import React, { useState } from "react";
import logo from "../../public/image/logo.png";
import { Link } from "react-router-dom";
import WeightLoss from "../Pages/WeightLoss";

const Header = () => {
  const [hidden, seHidden] = useState(false);
  return (
    <>
      <div className="bg-[#d8efe2]  max-w-5xl mx-auto py-1 mt-5 rounded-full px-5 md:px-0 lg:px-0">
        <nav className="flex justify-between items-center max-w-4xl mx-auto p-4 ">
          <Link to="/">
            <img className="h-12" src={logo} alt="" />
          </Link>

          <ul className="hidden lg:flex gap-4 cursor-pointer text-black ">
            <Link to="WeightLoss">
              <li className="hover:text-[#FAA432] font-bold transition ease-in duration-300">Weight Loss </li>
            </Link>
            <Link to="Nutrition">
              <li className="hover:text-[#FAA432] font-bold transition ease-in duration-300">
                Nutrition & Diet
              </li>
            </Link>
            <Link to="Recipes">
              <li className="hover:text-[#FAA432] font-bold transition ease-in duration-300">
                Recipes & Cooking
              </li>
            </Link>
            <Link to="Lifestyle">
              <li className="hover:text-[#FAA432] font-bold transition ease-in duration-300">
                {" "}
                Lifestyle & Mindset
              </li>
            </Link>
            <Link to="SignIn">
              <li className="font-bold hover:text-[#FAA432] transition ease-in duration-300">SignIn</li>
            </Link>
          </ul>

          <button className="lg:hidden " onClick={() => seHidden(!hidden)}>
            {hidden ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {hidden && (
        <div className="bg-[#d8efe2] mt-3 py-4 rounded-2xl lg:hidden">
          <div className=" px-7">
            <ul className="flex flex-col gap-4 cursor-pointer text-black ">
              <Link to="WeightLoss">
                <li
                  className="hover:text-[#FAA432] font-bold"
                  onClick={() => seHidden(false)}
                >
                  Weight Loss{" "}
                </li>
              </Link>
              <Link to="Nutrition">
                <li
                  className="hover:text-[#FAA432] font-bold"
                  onClick={() => seHidden(false)}
                >
                  Nutrition & Diet
                </li>
              </Link>
              <Link to="Recipes">
                <li
                  className="hover:text-[#FAA432] font-bold"
                  onClick={() => seHidden(false)}
                >
                  Recipes & Cooking
                </li>
              </Link>
              <Link to="Lifestyle">
                <li
                  className="hover:text-[#FAA432] font-bold"
                  onClick={() => seHidden(false)}
                >
                  {" "}
                  Lifestyle & Mindset
                </li>
              </Link>
              <hr class="w-full  border-gray-300 border-solid" />
              <Link to="SignIn">
                <li
                  className="font-bold hover:text-[#FAA432]"
                  onClick={() => seHidden(false)}
                >
                  SignIn
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
