import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#8892b0]">Hello, I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Timarley Foster
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Minim qui qui consequat dolor laboris commodo dolore in voluptate
          aliquip tempor Lorem reprehenderit magna. Labore dolor esse non
          laborum fugiat aute excepteur aliquip ea aliquip. Et do et ea sit
          tempor tempor consequat mollit anim commodo deserunt adipisicing
          laborum esse. Anim consequat sit dolor reprehenderit irure eiusmod
          enim mollit. Cillum adipisicing consectetur commodo minim voluptate.
          Sit et anim do ea officia.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:text-[#0a192f]">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
