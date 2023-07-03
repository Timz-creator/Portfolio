import React from "react";
import BarberWeb from "../assets/BarberWeb.png";
import Guess from "../assets/Guessinggame.png";
import Ecomm from "../assets/Ecomm.png";

const Project = () => {
  return (
    <div name="project" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w0[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-white">
            Projects
          </p>
          <p className="py-6 ">Checkout some of my projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 space">
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Ecomm})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Next JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://ecomm-kappa.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2  text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Timz-creator/Ecomm">
                  <button className="text-center rounded-lg px-4 py-3 m-2  text-black font-bold text-lg">
                    Code{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${BarberWeb})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://mybarberapp.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2  text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Timz-creator/mybarberapp">
                  <button className="text-center rounded-lg px-4 py-3 m-2  text-black font-bold text-lg">
                    Code{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Guess})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Javascript Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://guessing-game-tau.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2  text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Timz-creator/Guessing-game">
                  <button className="text-center rounded-lg px-4 py-3 m-2  text-black font-bold text-lg">
                    Code{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
