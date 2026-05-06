import React from "react";
import logo from "../assets/image/Logo/logo.png";
import signup from "../assets/image/Form/Register.jpg";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center md:min-h-screen mt-10 bg-gray-100 ">
      <div className="flex gap-5 max-w-6xl w-full  rounded-lg  ">
        {/* left_side_image */}
        <div className="hidden md:block  md:w-1/2">
          <img className="w-full h-full object-cover" src={signup} alt="" />
        </div>

        {/* right_side_form */}
        <div className="md:w-1/2 flex flex-col items-center mt-5 p-8">
          <div className="flex justify-center">
            <img src={logo} alt="" />
          </div>

          <p className="text-gray-500 mt-4">
            Create your account and begin your health journey
          </p>

          <form className="mt-6">
            <div className="flex gap-4">
              {/* first name */}
              <div className="w-full relative">
                <User
                  className="absolute -translate-y-1/2 top-1/2 pl-3 text-gray-500"
                  size={28}
                />
                <input
                  className=" border border-gray-300 py-2 px-2 pl-8 rounded-md shadow-sm w-full block hover:outline-[#FAA432] hover:outline-1 outline-0 "
                  type="text"
                  placeholder="First name"
                  name=""
                  id="First name"
                />
              </div>

              {/* last name */}
              <div className="w-full relative">
                <User
                  className="absolute top-1/2 -translate-y-1/2 text-gray-500 pl-3"
                  size={28}
                />
                <input
                  className=" pl-8 border border-gray-300 py-2 px-2 rounded-md shadow-sm w-full block hover:outline-[#FAA432] hover:outline-1 outline-0"
                  type="text"
                  placeholder="Last name"
                  name=""
                  id="Last name"
                />
              </div>
            </div>

            {/* email */}
            <div className="mt-4 relative">
              <Mail
                className="absolute top-1/2 -translate-y-1/2 text-gray-500 pl-3"
                size={28}
              />
              <input
                className=" pl-8 border border-gray-300 py-2 px-2 rounded-md shadow-sm w-full block hover:outline-[#FAA432] hover:outline-1 outline-0"
                type="email"
                placeholder="Email address"
              />
            </div>

            {/* password */}
            <div className="mt-4 relative">
              <Lock
                className="absolute top-1/2 -translate-y-1/2 text-gray-500 pl-3"
                size={28}
              />
              <input
                className="pl-8 border border-gray-300 py-2 px-2 rounded-md shadow-sm w-full block hover:outline-[#FAA432] hover:outline-1 outline-0"
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>

            {/* confirm passowd */}
            <div className="mt-4 relative">
              <ShieldCheck
                className="absolute top-1/2 -translate-y-1/2 text-gray-500 pl-3"
                size={28}
              />
              <input
                className="pl-8 border border-gray-300 py-2 px-2 rounded-md shadow-sm w-full block hover:outline-[#FAA432] hover:outline-1 outline-0"
                type="password"
                placeholder="Confirm password"
                id="Confirm password"
              />
            </div>

            <div className="mt-4 flex justify- items-center gap-2">
              <input className="mt-[2px]" type="checkbox" />{" "}
              <p className="text-[15px] font-medium text-gray-600">
                I agree to the{" "}
                <span className="text-[#14A24A]">Terms of Service</span> and{" "}
                <span className="text-[#14A24A]">Privacy Policy</span>
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-[#F37224] hover:bg-[#14A24A] w-full py-2 rounded-full text-white cursor-pointer transition duration-200 ease-in delay-200">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
