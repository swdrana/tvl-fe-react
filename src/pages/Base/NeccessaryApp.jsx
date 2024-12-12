import { useState } from "react";
import Data from '../Home/FakeData/Platform.json'

const NeccessaryApp = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  return (
    <div className="bg-gradient-to-r from-slate-50 to-blue-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-semibold mb-4">All the apps you need. In one Lark</h1>
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

    </div>
  );
};

export default NeccessaryApp;
