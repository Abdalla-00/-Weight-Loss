import React from "react";
import logo from "../assets/image/Logo/logo.png";
import signup from "../assets/image/Form/Register.jpg";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mt-10 bg-gray-100 ">
      <div className="flex gap-5 max-w-6xl w-full  rounded-lg  ">
        {/* left_side_image */}
        <div className="hidden md:block  md:w-1/2">
          <img className="w-full h-full object-cover" src={signup} alt="" />
        </div>

        {/* right_side_form */}
        <div className="md:w-1/2 flex flex-col items-center mt-5">
          <div className="flex justify-center">
            <img src={logo} alt="" />
          </div>

          <p className="text-gray-500 mt-4">
            Create your account and begin your health journey
          </p>

          <form></form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
