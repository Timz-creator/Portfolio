import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToProjects = () => {
    const projectSection = document.getElementById("project");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      name="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/40 bg-white/5 rotate-45" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/50 bg-white/10 rotate-12" />
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-white/60 bg-white/15 -rotate-12" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-white/30 bg-white/5 rotate-45" />
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-white/20 rotate-12" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-150 -z-10" />

        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className="text-gray-300 text-lg mb-4"
            style={{ fontFamily: "monospace" }}
          >
            {">"} Hello, I'm
          </p>

          <h1
            className="text-4xl sm:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-lg"
            style={{ fontFamily: "monospace" }}
          >
            TIMARLEY FOSTER
          </h1>

          <h2
            className="text-4xl sm:text-7xl font-bold text-gray-300 tracking-tight mb-8"
            style={{ fontFamily: "monospace" }}
          >
            I'm a Software Engineer.
          </h2>

          <p
            className="text-gray-300 py-4 max-w-[700px] text-lg leading-relaxed"
            style={{ fontFamily: "monospace" }}
          >
            Have a look around
          </p>

          <div className="mt-8">
            <button
              onClick={scrollToProjects}
              className="text-white group border-2 border-white/50 px-6 py-3 my-2 flex items-center hover:bg-white hover:text-black transition-all duration-300 tracking-wider bg-transparent"
              style={{ fontFamily: "monospace" }}
            >
              View Projects
              <span className="group-hover:rotate-90 duration-300 ml-3">
                <HiArrowNarrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
