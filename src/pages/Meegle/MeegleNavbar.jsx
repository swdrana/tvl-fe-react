import React from "react";

const MeegleNavbar = () => {
  const DropdownMenu = ({ title, options }) => {
    return (
      <div className="relative group">
        <button
          className="text-gray-700 font-medium hover:text-gray-900 focus:outline-none"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {title}
        </button>
        <div
          className="absolute left-0 hidden w-48 mt-2 bg-white border border-gray-200 shadow-lg rounded-md group-hover:block"
          role="menu"
          aria-label={title}
        >
          <ul className="py-2">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                role="menuitem"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
        <span className="text-lg font-bold text-black">Meegle</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <DropdownMenu
          title="Why Meegle"
          options={["Overview", "Features", "Success Stories"]}
        />
        <DropdownMenu
          title="Solutions"
          options={["Marketing", "Sales", "Customer Support"]}
        />
        <button className="text-gray-700 font-medium hover:text-gray-900">
          Templates
        </button>
        <DropdownMenu
          title="Resources"
          options={["Blog", "Guides", "FAQs"]}
        />
        <button className="text-gray-700 font-medium hover:text-gray-900">
          Pricing
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <select
          className="text-gray-700 border border-gray-300 rounded-md focus:outline-none"
          defaultValue="EN"
          aria-label="Language Selector"
        >
          <option value="EN">EN</option>
          <option value="ES">ES</option>
        </select>
        <button className="text-blue-500 font-medium hover:underline">
          Sign In
        </button>
        <button className="px-4 py-2 font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-md">
          Try for Free
        </button>
        <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default MeegleNavbar;
