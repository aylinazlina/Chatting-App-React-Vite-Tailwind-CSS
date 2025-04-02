import React from "react";
import { Link } from "react-router";
const Landing = () => {
  return (
    <div>
      <div className="bg-[url(C:\Users\DeLL\Desktop\chat_app_react\src\assets\LandingPage_backgroundImage.jpg)] bg-cover bg-center bg-no-repeat w-full h-[100vh]">
        <div className="flex justify-center items-center h-[100vh]">
          <div className="buttonWrapper w-[700px] h-[200px] flex justify-center items-center">
            <Link
              to={"/signin"}
              type="button"
              class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-roboto_font font-bold text-[22px]"
            >
              Get Started
            </Link>
            <Link
              to={"/signup"}
              type="button"
              class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-roboto_font font-bold text-[22px]"
            >
              Signup
            </Link>
            <Link
              to={"/signin"}
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-bold text-[22px]"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
