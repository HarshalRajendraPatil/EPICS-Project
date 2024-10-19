// src/components/Navbar.jsx
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Ensure react-icons is installed
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-green-500 w-full py-4 px-3 flex items-center justify-between min-w-screen">
      <Link to={"/"} className="text-white text-2xl font-bold hover:text-white">
        JobQuest
      </Link>

      {/* Hamburger icon for small screens */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="bg-white rounded-full p-2 flex items-center justify-center transition-transform duration-300"
        >
          <div
            className={`text-green-500 text-3xl transition-transform duration-300 transform ${
              isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
            }`}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
        </button>
      </div>

      {/* Navbar links (visible on large screens) */}
      <nav className="hidden lg:flex space-x-6">
        <Link to={"/"} className="text-white hover:underline">
          Home
        </Link>
        <Link to={"/features"} className="text-white hover:underline">
          Features
        </Link>
        <Link className="text-white hover:underline">About Us</Link>
        <Link className="text-white hover:underline">Contact</Link>
      </nav>

      {/* Mobile menu (visible when open) */}
      {isOpen && (
        <nav className="lg:hidden absolute top-16 left-0 w-full bg-green-500 flex flex-col items-center space-y-4 z-10 py-6">
          <Link to={"/"} className="text-white hover:underline">
            Home
          </Link>
          <Link to={"/features"} className="text-white hover:underline">
            Features
          </Link>
          <Link className="text-white hover:underline">About Us</Link>
          <Link className="text-white hover:underline">Contact</Link>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
