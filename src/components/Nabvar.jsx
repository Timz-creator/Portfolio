import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-sm border-b border-gray-800"
          : "bg-transparent"
      }`}
      style={{ fontFamily: "monospace" }}
    >
      {/* Logo */}
      <div className="font-bold text-xl text-white">
        {"<"}dev{" />"}
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={50}
            duration={500}
            className="text-gray-300 hover:text-white transition-colors tracking-wider cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={50}
            duration={500}
            className="text-gray-300 hover:text-white transition-colors tracking-wider cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            offset={50}
            duration={500}
            className="text-gray-300 hover:text-white transition-colors tracking-wider cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="project"
            smooth={true}
            offset={50}
            duration={500}
            className="text-gray-300 hover:text-white transition-colors tracking-wider cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={50}
            duration={500}
            className="text-gray-300 hover:text-white transition-colors tracking-wider cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? (
          <FaBars className="text-white" />
        ) : (
          <FaTimes className="text-white" />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-sm flex flex-col justify-center items-center"
        }
        style={{ fontFamily: "monospace" }}
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="hero"
            smooth={true}
            offset={50}
            duration={500}
            className="text-gray-300 hover:text-white transition-colors tracking-wider cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            offset={50}
            duration={500}
            className="text-gray-300 hover:text-white transition-colors tracking-wider cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            offset={50}
            duration={500}
            className="text-gray-300 hover:text-white transition-colors tracking-wider cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="project"
            smooth={true}
            offset={50}
            duration={500}
            className="text-gray-300 hover:text-white transition-colors tracking-wider cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            offset={50}
            duration={500}
            className="text-gray-300 hover:text-white transition-colors tracking-wider cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white/10 border border-white/20 backdrop-blur-sm">
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-white transition-colors px-4"
              href="https://www.linkedin.com/in/timarley-foster-97a2b7231/"
              style={{ fontFamily: "monospace" }}
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white/10 border border-white/20 backdrop-blur-sm">
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-white transition-colors px-4"
              href="https://github.com/Timz-creator/"
              style={{ fontFamily: "monospace" }}
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white/10 border border-white/20 backdrop-blur-sm">
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-white transition-colors px-4"
              href="mailto:timarleyf@gmail.com"
              style={{ fontFamily: "monospace" }}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-white/10 border border-white/20 backdrop-blur-sm">
            <a
              className="flex justify-between items-center w-full text-gray-300 hover:text-white transition-colors px-4"
              href="https://docs.google.com/document/d/167iG8UlnsKbxUd-AvWI5VG-6WwUQwGDgfdWDLq_gdpE/edit?usp=sharing"
              style={{ fontFamily: "monospace" }}
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
