import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-tr from-green-400 to-blue-500 rounded-full"></div>
          <span className="text-lg font-semibold text-gray-800">Lark Developer</span>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#solutions"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Solutions
          </a>
          <a
            href="#documentation"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Documentation
          </a>
          <a
            href="#changelog"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Changelog
          </a>
          <a
            href="#app-directory"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            App Directory
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button
            type="button"
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>

          {/* Developer Console Link */}
          <a
            href="#developer-console"
            className="hidden md:inline-block text-gray-600 hover:text-gray-900 transition"
          >
            Developer Console
          </a>

          {/* Divider Icon */}
          <div className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="px-4 py-2 bg-blue text-white font-medium rounded-md hover:bg-blue-hover transition"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
