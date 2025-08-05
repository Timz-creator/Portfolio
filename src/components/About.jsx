import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen text-gray-300 py-20"
      style={{ backgroundColor: "#111827" }} // Force gray-900 background
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 relative z-10">
          <div className="sm:text-right pb-8 pl-1">
            <p
              className="text-4xl font-bold inline border-b-4 border-white tracking-wider"
              style={{ fontFamily: "monospace" }}
            >
              {"<"}ABOUT{" />"}
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 relative z-10">
          <div className="sm:text-right text-4xl font-bold">
            <p
              className="text-white leading-tight"
              style={{ fontFamily: "monospace" }}
            >
              Hi. I'm Timarley, nice to meet you.
            </p>
          </div>

          <div className="relative">
            {/* Terminal-style container */}
            <div
              className="border border-gray-700 p-6 rounded-sm"
              style={{ backgroundColor: "#000000" }} // Force black background
            >
              {/* Terminal header */}
              <div className="flex items-center mb-4 pb-2 border-b border-gray-800">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div
                  className="ml-4 text-gray-400 text-sm"
                  style={{ fontFamily: "monospace" }}
                >
                  ~/about/timarley.txt
                </div>
              </div>

              {/* Terminal content */}
              <div style={{ fontFamily: "monospace" }}>
                <div className="text-green-400 mb-2">$ cat profile.txt</div>
                <p className="text-gray-300 leading-relaxed">
                  I'm a Front-End Developer that enjoys using libraries such as
                  React JS to create clean and responsive web applications. I
                  have a bachelors in Electrical and Electronic Engineering, and
                  I still enjoy using engineering principles to come up with
                  elegant solutions to complex problems.
                </p>
              </div>
            </div>

            {/* Floating geometric accent */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-white/30 bg-white/5 rotate-45"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-white/40 bg-white/10 rotate-12"></div>
          </div>
        </div>

        {/* Additional tech stats section */}
        <div className="max-w-[1000px] w-full px-4 mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="border border-gray-800 p-6 text-center hover:border-gray-600 transition-colors"
              style={{ backgroundColor: "#000000" }}
            >
              <div
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "monospace" }}
              >
                {">"} EDUCATION
              </div>
              <p
                className="text-gray-400 text-sm"
                style={{ fontFamily: "monospace" }}
              >
                Electrical & Electronic Engineering
              </p>
            </div>

            <div
              className="border border-gray-800 p-6 text-center hover:border-gray-600 transition-colors"
              style={{ backgroundColor: "#000000" }}
            >
              <div
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "monospace" }}
              >
                {">"} FOCUS
              </div>
              <p
                className="text-gray-400 text-sm"
                style={{ fontFamily: "monospace" }}
              >
                Front-End Development
              </p>
            </div>

            <div
              className="border border-gray-800 p-6 text-center hover:border-gray-600 transition-colors"
              style={{ backgroundColor: "#000000" }}
            >
              <div
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "monospace" }}
              >
                {">"} SPECIALTY
              </div>
              <p
                className="text-gray-400 text-sm"
                style={{ fontFamily: "monospace" }}
              >
                React JS Applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
