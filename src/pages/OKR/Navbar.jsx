import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/CzYmGpN/lark-logo.png"
              alt="Logo"
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-semibold text-gray-900">
              Lark
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              What is Lark?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Customers
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Download
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Plans
            </a>
          </div>

          {/* Login and Signup */}
          <div className="flex items-center space-x-4">
            <button
              className="bg-white text-bluetext font-semibold border border-bluetext px-4 sm:px-6 py-2 rounded-full hover:bg-blue-50"
            >
              Log in
            </button>
            <button
              className="bg-bluetext text-white font-semibold px-4 sm:px-6 py-2 rounded-full hover:bg-blue-hover"
            >
              Sign up
            </button>

            {/* Mobile & Medium Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
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
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Medium Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pt-2 pb-3 border-t border-gray-200">
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              What is Lark?
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Solutions
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Resources
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Customers
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Download
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Plans
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
