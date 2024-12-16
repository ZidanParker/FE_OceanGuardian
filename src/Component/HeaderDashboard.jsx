import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";

const HeaderDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBantuanOpen, setIsBantuanOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleBantuan = () => setIsBantuanOpen(!isBantuanOpen);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("access_token");
        navigate("/login");
      } else {
        console.error("Logout failed.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
<nav className="bg-blue-500 p-3 flex items-center justify-between fixed w-full z-10 shadow-md">
  {/* Mobile Menu Icon - Always on the Left */}
  <div className="lg:hidden flex items-center">
    <button onClick={toggleNav}>
      {isNavOpen ? (
        <FiX className="text-white h-6 w-6" />
      ) : (
        <FiMenu className="text-white h-6 w-6" />
      )}
    </button>
  </div>

  {/* Left Section - Dropdown Menu */}
  <div className="hidden lg:flex items-center space-x-8">
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="text-white flex items-center hover:underline"
      >
        Menu <FaCaretDown className="ml-2" />
      </button>
      {isMenuOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md">
          <a
            href="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Tentang Kami
          </a>
          <a
            href="/pelaporan"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Pelaporan
          </a>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      )}
    </div>

    <div className="relative">
      <button
        onClick={toggleBantuan}
        className="text-white flex items-center hover:underline"
      >
        Bantuan <FaCaretDown className="ml-2" />
      </button>
      {isBantuanOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md">
          <a
            href="/kontak"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Kontak
          </a>
        </div>
      )}
    </div>
  </div>

  {/* Center Logo */}
  <div className="absolute left-1/2 transform -translate-x-1/2">
    <img
      src="src/assets/Logo.png"
      alt="Ocean Guardian Logo"
      className="h-10 md:h-14"
    />
  </div>

  {/* Right Section - Profile Picture */}
  <div className="relative flex items-center space-x-4">
    {/* Profile Picture */}
    <div className="relative">
      <button onClick={toggleProfile} className="focus:outline-none">
        <img
          src="src/assets/Superman.jpg"
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-white object-cover"
        />
      </button>
    </div>
  </div>

  {/* Mobile Navigation Links */}
  {isNavOpen && (
    <div className="lg:hidden absolute top-16 left-0 w-full bg-blue-500 shadow-lg">
      <div className="flex flex-col items-center space-y-4 py-4">
        <a
          href="/about"
          className="text-white hover:underline"
          onClick={toggleNav}
        >
          Tentang Kami
        </a>
        <a
          href="/kontak"
          className="text-white hover:underline"
          onClick={toggleNav}
        >
          Kontak
        </a>
        <a
          href="/pelaporan"
          className="text-white hover:underline"
          onClick={toggleNav}
        >
          Pelaporan
        </a>
        <button
          onClick={handleLogout}
          className="text-white hover:underline"
        >
          Logout
        </button>
      </div>
    </div>
  )}
</nav>

  );
};

export default HeaderDashboard;
