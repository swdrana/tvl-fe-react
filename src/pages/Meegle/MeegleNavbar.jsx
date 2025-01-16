import React, { useState } from "react";

const MeegleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false); // Close dropdown after selection
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co.com/yY6vv60/meegle.png"
            alt=""
            className="w-6"
          />
          <span className="text-lg font-semibold text-gray-800">Meegle</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li className="relative group">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <span>Why Meegle</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </li>
          <li className="relative group">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <span>Solutions</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Templates
            </a>
          </li>
          <li className="relative group">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <span>Resources</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Pricing
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-gray-700"
              onClick={toggleLanguageMenu}
            >
              <span>{selectedLanguage}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isLanguageOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md py-2 z-50">
                {["EN", "FR", "DE", "ES"].map((lang) => (
                  <li
                    key={lang}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLanguageSelect(lang)}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Sign In */}
          <a href="#" className="text-bluetext hover:text-bluetext">
            Sign In
          </a>

          {/* Try for Free */}
          <button className="px-4 py-2 text-white bg-gradient-to-l from-deep-purple-300 to-purple-500 hover:bg-gradient-hover rounded-lg font-semibold">
            Try for Free
          </button>

          {/* Contact Us */}
          <button className="px-4 py-2 text-bluetext font-semibold border border-bluetext hover:bg-gray-200 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Why Meegle
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Templates
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MeegleNavbar;
