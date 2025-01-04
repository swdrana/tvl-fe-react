import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-l from-gray-100 to-blue-50 fixed w-full top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://i.ibb.co.com/J23sGC5/forms.png" 
            alt="Lark Forms Logo"
            className="h-6 w-auto mr-2"
          />
          <span className="text-2xl font-bold text-black">Lark Forms</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a onClick={() => navigate("/signin")} href="#signin" className="text-gray-dark hover:bg-blue-200 rounded-2xl p-2">
            Sign in
          </a>
          <button onClick={() => navigate("/signup")} className="bg-blue text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-hover transition">
            Try for free
          </button>
          <button onClick={() => navigate("/contactsales")} className="border border-bluetext font-semibold text-bluetext py-2 px-4 rounded-full hover:bg-blue-50 transition">
            Contact us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <a
            href="#signin"
            className="block text-gray-600 hover:text-gray-900 px-4 py-2"
          >
            Sign in
          </a>
          <button className="block bg-blue-500 text-white py-2 px-4 rounded-lg mx-4 my-2 hover:bg-blue-600 transition">
            Try for free
          </button>
          <button className="block border border-blue-500 text-blue-500 py-2 px-4 rounded-lg mx-4 hover:bg-blue-100 transition">
            Contact us
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
