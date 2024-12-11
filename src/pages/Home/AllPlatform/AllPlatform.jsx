import { useState } from "react";
import Data from '../FakeData/Platform.json'
import { FaTv, FaSlack, FaWhatsapp, FaFacebookMessenger, FaViber } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const AllPlatform = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  return (
    <div className="bg-gradient-to-r from-slate-50 to-blue-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mt-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <FaTv className="text-2xl text-blue-600" />
          <p className="text-blue-600 font-semibold">All-in-one Platform</p>
        </div>
        <h1 className="text-4xl font-semibold mb-4">All the apps you need. In one Lark</h1>
        <p className="text-gray-500 font-semibold max-w-2xl mx-auto">
          As a global business, Lark helps you connect your team across the world. Schedule messages and meetings 
          effortlessly and automate workflows for better collaboration.
        </p>
      </div>

      {/* Feature Icons Section */}
      <div className="flex justify-center items-center mt-8 space-x-10 flex-wrap">
        {Data.testimonials.map(({ label, icon }, index) => (
          <div
            key={index}
            onClick={() => setSelectedIcon(label)}
            className={`cursor-pointer flex flex-col items-center justify-center transition-all duration-300 
            ${selectedIcon === label ? "bg-white shadow-lg scale-125 p-6 rounded-lg" : "bg-transparent scale-100"} 
            ${selectedIcon && selectedIcon !== label ? "opacity-50" : "opacity-100"}`}
          >
            <img src={icon} alt={label} className="w-16 h-16 mb-2" />
            <p className="text-gray-800">{label}</p>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-4 mt-12">
        {/* Left Panel */}
        <div className="md:col-span-2 flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold mb-4">
            Securely chat with your <br /> team and get things done
          </h2>
          <p className="text-gray-500 mb-4">
            Create group chats, threads, and topic <br /> groups to keep conversations focused. <br /> Messages get auto-translated
            for <br /> frictionless global collaboration.
          </p>
          <button className="text-xl font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-4 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-40">
            Try for free
          </button>
          <p className="text-gray-400 text-sm mt-4">REPLACES:</p>
          <div className="flex space-x-4 mt-2">
            <FaSlack className="text-gray-400 text-2xl" />
            <SiZalo className="text-gray-400 text-2xl" />
            <FaWhatsapp className="text-gray-400 text-2xl" />
            <FaFacebookMessenger className="text-gray-400 text-2xl" />
            <FaViber className="text-gray-400 text-2xl" />
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:col-span-3 flex justify-center items-center">
          <img
            src="https://i.ibb.co/FgqLh3h/picture.png"
            alt="Chat Preview"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AllPlatform;
