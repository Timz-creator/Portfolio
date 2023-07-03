import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {Link, Button} from "react-scroll";
import Project from "./Project";

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
        <p className="text-[#8892b0] py-4 max-w-[700px] text-lg">Have a look around</p>
        <div>
          <Link to="project" offset={50} duration={500} smooth={true}  className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:text-[#0a192f]">
            View Projects
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
