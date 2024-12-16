import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

const HeaderLanding = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State untuk menu mobile

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between fixed w-full z-10 shadow-md">
      {/* Left Section - About Us and Pelaporan */}
      <div className="hidden md:flex space-x-4 mx-3">
        <a href="/about" className="text-white hover:underline">About Us</a>
        <a href="/pelaporan" className="text-white hover:underline">Pelaporan</a>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
        <img
          src="src/assets/Logo.png"
          alt="Ocean Guardian Logo"
          className="h-10 md:h-14"
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex md:hidden items-center">
        <button onClick={toggleNav}>
          {isNavOpen ? (
            <FiX className="text-white h-6 w-6" />
          ) : (
            <FiMenu className="text-white h-6 w-6" />
          )}
        </button>
      </div>

      {/* Right Section - Sign In and Sign Up */}
      <div className="hidden md:flex space-x-4 mx-3">
        <a href="/Login">
          <button className="text-white border border-white px-6 py-0.5 rounded-full">Sign In</button>
        </a>
        <a href="/Register">
          <button className="text-white bg-black px-6 py-0.5 rounded-full">Sign Up</button>
        </a>
      </div>

      {/* Mobile Navigation Links */}
      {isNavOpen && (
        <div className="md:hidden absolute top-12 left-0 w-full bg-blue-500 shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#" className="text-white hover:underline" onClick={toggleNav}>About Us</a>
            <a href="/pelaporan" className="text-white hover:underline" onClick={toggleNav}>Pelaporan</a>
            <a href="/Login" onClick={toggleNav}>
              <button className="text-white border border-white px-4 py-1 rounded-full">Sign In</button>
            </a>
            <a href="/Register" onClick={toggleNav}>
              <button className="text-white bg-black border-black px-4 py-1 rounded-full">Sign Up</button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderLanding;
