//REPONSIVE HEADER DONE
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header bg-customGray text-gray-300">
      <div className="flex justify-between items-center h-20 px-6 sm:px-10">
        <div className="logo text-white font-bold text-xl sm:text-2xl">
          Pet-Care Hub
        </div>
        {/* Hamburger Menu Button */}
        <button
          className="text-gray-300 focus:outline-none sm:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
        {/* Navigation Menu */}
        <nav
          className={`absolute sm:static top-20 left-0 w-full sm:w-auto bg-customGray sm:bg-transparent transition-all duration-300 ${
            isMenuOpen || "hidden sm:flex"
          }`}
        >
          <ul className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-4 p-4 sm:p-0">
            <li>
              <Link
                to="/"
                className="hover:text-white hover:scale-105 transition-all duration-200 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/profile"
                className="hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </a>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
