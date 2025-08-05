import React from "react";
import GitHub from "../assets/github.png";
import Javascript from "../assets/javascript.png";
import Mongo from "../assets/mongo.png";
import Tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import Next from "../assets/next-js.png";
import Node from "../assets/node.png";
import HTML from "../assets/html.png";
import Python from "../assets/python.png";

const Skills = () => {
  const skills = [
    {
      name: "JAVASCRIPT",
      image: Javascript,
      category: "Language",
      isDark: false,
    },
    { name: "React JS", image: react, category: "Frontend", isDark: false },
    { name: "Next JS", image: Next, category: "Framework", isDark: true }, // Mark as dark logo
    { name: "Mongo DB", image: Mongo, category: "Database", isDark: false },
    { name: "Node JS", image: Node, category: "Backend", isDark: false },
    { name: "TAILWIND", image: Tailwind, category: "Styling", isDark: false },
    { name: "HTML", image: HTML, category: "Markup", isDark: false },
    { name: "PYTHON", image: Python, category: "Language", isDark: false },
  ];

  return (
    <div
      name="skills"
      className="w-full min-h-screen text-gray-300 py-20"
      style={{ backgroundColor: "#111827" }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
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

      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
        <div className="mb-16">
          <p
            className="text-4xl inline border-b-4 font-bold border-white tracking-wider"
            style={{ fontFamily: "monospace" }}
          >
            {"<"}SKILLS{" />"}
          </p>
          <p className="py-4 text-gray-400" style={{ fontFamily: "monospace" }}>
            // These are the technologies I've worked with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-black border border-gray-800 hover:border-white/50 hover:scale-105 duration-300 p-6 transition-all"
            >
              {/* Skill Category Badge */}
              <div
                className="absolute -top-2 -right-2 bg-white text-black text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ fontFamily: "monospace" }}
              >
                {skill.category}
              </div>

              {/* Geometric accent */}
              <div className="absolute top-2 left-2 w-3 h-3 border border-white/30 rotate-45 opacity-50"></div>

              {/* Skill Icon */}
              <div className="relative mb-4">
                {/* White background circle for dark logos */}
                {skill.isDark && (
                  <div className="absolute inset-0 bg-white rounded-full w-20 h-20 mx-auto opacity-90 group-hover:opacity-100 transition-opacity"></div>
                )}

                <img
                  className={`w-20 mx-auto relative z-10 transition-all duration-300 ${
                    skill.isDark
                      ? "p-2" // Add padding for dark logos on white background
                      : "filter grayscale group-hover:grayscale-0"
                  }`}
                  src={skill.image || "/placeholder.svg"}
                  alt={`${skill.name} icon`}
                />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300"></div>
              </div>

              {/* Skill Name */}
              <p
                className="text-gray-300 group-hover:text-white transition-colors font-semibold tracking-wider"
                style={{ fontFamily: "monospace" }}
              >
                {skill.name}
              </p>

              {/* Progress bar effect */}
              <div className="mt-3 h-1 bg-gray-800 rounded overflow-hidden">
                <div
                  className="h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black border border-gray-800 p-6 text-center hover:border-gray-600 transition-colors">
            <div
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "monospace" }}
            >
              {">"} FRONTEND
            </div>
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "monospace" }}
            >
              React, Next.js, HTML, Tailwind
            </p>
          </div>

          <div className="bg-black border border-gray-800 p-6 text-center hover:border-gray-600 transition-colors">
            <div
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "monospace" }}
            >
              {">"} BACKEND
            </div>
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "monospace" }}
            >
              Node.js, Python, MongoDB
            </p>
          </div>

          <div className="bg-black border border-gray-800 p-6 text-center hover:border-gray-600 transition-colors">
            <div
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "monospace" }}
            >
              {">"} LANGUAGES
            </div>
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "monospace" }}
            >
              JavaScript, Python
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
