import React from "react";
import login from "../assets/image/Form/Login.jpg";
import logo from "../assets/image/Logo/logo.png";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { Lock, Mail } from "lucide-react";

const Signin = () => {
  return (
    <div className="flex justify-center items-center md:min-h-screen mt-10 bg-gray-100 ">
      <div className="flex gap-5 max-w-6xl w-full  rounded-lg  overflow-x-hidden">
        {/* left_side_image */}
        <div className="hidden md:block  md:w-1/2">
          <img className="w-full h-full object-cover" src={login} alt="" />
        </div>

        {/* right_side_form */}
        <div className="md:w-1/2 flex flex-col items-center mt-5 p-8">
          <div className="flex justify-center">
            <img src={logo} alt="" />
          </div>

          <p className="text-gray-500 mt-4">
            Sign in to your account to continue your health journey
          </p>

          {/* form */}
          <form className="mt-6 w-full">
            <div className="mt-4 relative">
              <Mail className="absolute top-1/2 -translate-y-1/2 pl-3 text-gray-500" size={28}/>
              <input
                className="border pl-8 border-gray-300 py-2 px-2 rounded-md shadow-sm w-full block hover:outline-[#FAA432] hover:outline-1 outline-0"
                type="Email"
                placeholder="Email address"
              />
            </div>
            <div className="mt-4 relative">
              <Lock className="absolute top-1/2 -translate-y-1/2 pl-3 text-gray-500" size={28}/>
              <input
                className="border pl-8 border-gray-300 py-2 px-2 rounded-md shadow-sm w-full block hover:outline-[#FAA432] hover:outline-1 outline-0"
                type="Password"
                placeholder="Password"
                id="password"
              />
            </div>

            {/* remembar me */}
            <div className="flex justify-between items-center w-full">
              <div className="mt-4 flex justify- items-center gap-2">
                <input className="mt-[2px]" type="checkbox" />{" "}
                <p className="text-[15px] font-medium text-gray-600">
                  Remember me
                </p>
              </div>
              <span className="text-[#14A24A] font-medium text-sm">
                Forgot your password?
              </span>
            </div>

            {/* button */}
            <div className="flex justify-center mt-6">
              <Link className="w-full" to={"/register"}>
                <button className="bg-[#F37224] hover:bg-[#14A24A] w-full py-2 rounded-full text-white cursor-pointer transition duration-200 ease-in delay-200">
                  Create Account
                </button>
              </Link>
            </div>

            {/* continue */}
            <div className="flex justify-center items-center gap-2 mt-7">
              <hr className="border-gray-300 flex-grow" />
              <span className="text-gray-500 text-sm">Or continue with</span>
              <hr className="border-gray-300 flex-grow" />
            </div>

            {/* icons */}
            <div className="flex justify-center items-center gap-5 mt-7">
              <button className="border border-gray-300 py-3 px-15 shadwo-sm hover:bg-gray-200 cursor-pointer transition ease-in-out duration-150 text-gray-500 rounded-lg">
                <FaGoogle />
              </button>
              <button className="border border-gray-300 py-3 px-15 shadwo-sm hover:bg-gray-200 cursor-pointer transition ease-in-out duration-150 text-gray-500 rounded-lg">
                <FaFacebook />
              </button>
              <button className="border border-gray-300 py-3 px-15 shadwo-sm hover:bg-gray-200 cursor-pointer transition ease-in-out duration-150 text-gray-500 rounded-lg">
                <FaXTwitter />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
