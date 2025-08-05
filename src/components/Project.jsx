import React from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import BarberWeb from "../assets/BarberWeb.png";
import Guess from "../assets/Guessinggame.png";
import Ecomm from "../assets/Ecomm.png";
import BillSplitter from "../assets/header._gumroad.png";

const Project = () => {
  const projects = [
    {
      title: "Bill Splitter App",
      description: "React JS Application",
      image: BillSplitter,
      demoUrl: "https://b-splitter-dusky.vercel.app/",
      codeUrl: "https://github.com/Timz-creator/B-Splitter",
      tech: ["React", "Tailwind CSS", "ShadCN"],
      category: "Full-Stack",
      fullDescription:
        "Built a mobile-friendly web app for splitting bills among groups, focused on clear UX and real-time balance tracking. Developed a modern, responsive UI using React, Tailwind CSS, and ShadCN components. Implemented localStorage-based authentication with protected route logic for fast MVP validation. Engineered features like event creation, participant management, expense logging, and automatic split calculations. Used React Router to handle navigation across dashboard, event views, and modal flows. Designed the app as a reusable, high-conversion template tailored for consumer finance and early-stage fintech products.",
    },
    {
      title: "E-Commerce Platform",
      description: "Next JS Application",
      image: Ecomm,
      demoUrl: "https://ecomm-kappa.vercel.app/",
      codeUrl: "https://github.com/Timz-creator/Ecomm",
      tech: ["Next.js", "React", "E-commerce"],
      category: "Full-Stack",
    },
    {
      title: "Barber Shop Website",
      description: "React JS Application",
      image: BarberWeb,
      demoUrl: "https://mybarberapp.vercel.app",
      codeUrl: "https://github.com/Timz-creator/mybarberapp",
      tech: ["React", "JavaScript", "Web Design"],
      category: "Frontend",
    },
    {
      title: "Number Guessing Game",
      description: "Javascript Application",
      image: Guess,
      demoUrl: "https://guessing-game-tau.vercel.app",
      codeUrl: "https://github.com/Timz-creator/Guessing-game",
      tech: ["JavaScript", "HTML", "CSS"],
      category: "Game",
    },
  ];

  return (
    <div
      name="project"
      className="w-full min-h-screen text-gray-300 py-20"
      style={{ backgroundColor: "#111827" }}
      id="project"
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

      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 text-white border-white tracking-wider"
            style={{ fontFamily: "monospace" }}
          >
            {"<"}PROJECTS{" />"}
          </p>
          <p className="py-6 text-gray-400" style={{ fontFamily: "monospace" }}>
            // Check out some of my projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Regular Projects */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-black border border-gray-800 hover:border-white/50 transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <span
                      className="text-xl font-bold text-white tracking-wider mb-4 block"
                      style={{ fontFamily: "monospace" }}
                    >
                      {project.description}
                    </span>
                    <div className="flex gap-4 justify-center">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-white text-black px-4 py-2 font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2">
                          <ExternalLink size={16} />
                          Demo
                        </button>
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-transparent border border-white text-white px-4 py-2 font-bold text-sm hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                          <Github size={16} />
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "monospace" }}
                  >
                    {project.title}
                  </h3>
                  <span
                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 border border-gray-700"
                    style={{ fontFamily: "monospace" }}
                  >
                    {project.category}
                  </span>
                </div>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-white/10 text-gray-300 px-2 py-1 border border-white/20"
                      style={{ fontFamily: "monospace" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Geometric accent */}
                <div className="absolute top-2 right-2 w-3 h-3 border border-white/30 rotate-45 opacity-50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black border border-gray-800 p-6 text-center hover:border-gray-600 transition-colors">
            <div
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "monospace" }}
            >
              {">"} TOTAL PROJECTS
            </div>
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "monospace" }}
            >
              4+ Completed
            </p>
          </div>
          <div className="bg-black border border-gray-800 p-6 text-center hover:border-gray-600 transition-colors">
            <div
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "monospace" }}
            >
              {">"} TECHNOLOGIES
            </div>
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "monospace" }}
            >
              React, Next.js, Tailwind, ShadCN
            </p>
          </div>
          <div className="bg-black border border-gray-800 p-6 text-center hover:border-gray-600 transition-colors">
            <div
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "monospace" }}
            >
              {">"} LIVE DEMOS
            </div>
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: "monospace" }}
            >
              All Projects Deployed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
