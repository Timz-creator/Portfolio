import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-1">
            <p className="text-4xl font-bold inline border-b-4 border-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-4xl font-bold  ">
            <p>Hi. I'm Timarley, nice to meet you.</p>
          </div>
          <div>
            <p>
              I'm a Front-End Developer that enjoys using libraries such as React JS to create clean and responsive web applications. I have a bachelors in Electrical and Electronic Engineering, and I still enjoy using engineering principles to come up with elegant solutions to complex problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
