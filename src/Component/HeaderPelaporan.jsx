import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

const HeaderPelaporan = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State untuk menu mobile

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between fixed w-full z-10 shadow-md">
      {/* Left Section - Help and Dashboard */}
      <div className="hidden md:flex space-x-4 mx-3 ml-10">
        <a href="#" className="text-white hover:underline">Help</a>
        <a href="/dashboard" className="text-white hover:underline">Dashboard</a>
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
      <div className="flex md:hidden items-center mr-4">
        <button onClick={toggleNav}>
          {isNavOpen ? (
            <FiX className="text-white h-6 w-6" />
          ) : (
            <FiMenu className="text-white h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isNavOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-blue-500 shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#" className="text-white hover:underline" onClick={toggleNav}>Help</a>
            <a href="/dashboard" className="text-white hover:underline" onClick={toggleNav}>Dashboard</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderPelaporan;
