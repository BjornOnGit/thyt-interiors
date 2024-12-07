// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="font-playfairdisplay flex justify-between items-center px-8 py-4 bg-white shadow">
      <div className="font-playfairdisplay text-2xl font-bold">THYT INTERIORS</div>
      <ul className="hidden md:flex space-x-8">
        <li>
          <a href="#about" className=" text-gray-700 hover:text-gray-900">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="text-gray-700 hover:text-gray-900">
            Services
          </a>
        </li>
        <li>
          <a href="#work" className="text-gray-700 hover:text-gray-900">
            Our Work
          </a>
        </li>
      </ul>
      <a
        href="#contact"
        className="hidden md:inline-block bg-brown-500 text-white px-4 py-2 rounded-lg hover:bg-brown-600"
      >
        Contact Us
      </a>
      {/* Mobile Menu */}
      <button className="md:hidden text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
