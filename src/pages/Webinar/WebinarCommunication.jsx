import React, { useState } from "react";

const WebinarCommunication = () => {
  const [activeOption, setActiveOption] = useState("Simultaneous Interpretation");

  const options = [
    {
      title: "Simultaneous Interpretation",
      description:
        "Remove language barriers with simultaneous interpretation for seamless cross-language communication.",
      image: "https://i.ibb.co.com/TgB8jh5/webinar4.jpg",
    },
    {
      title: "Auto-translated Subtitles",
      description:
        "Supports multi-lingual subtitles that can be translated in real-time. ",
      image: "https://i.ibb.co.com/VNxzVKw/webinar5.jpg",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:items-start justify-between container mx-auto px-6 py-12">
      {/* Left Section */}
      <div className="lg:w-1/2">
      <div className="bg-blue-100 text-bluetext font-semibold px-3 py-1 rounded-md w-max">
            Seamless communication
          </div>
        <h1 className="text-4xl font-semibold mb-8 mt-4">With Lark Webinar, every voice can be heard</h1>
        <div className="space-y-6">
          {options.map((option) => (
            <div
              key={option.title}
              className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                activeOption === option.title ? "bg-blue-50 border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setActiveOption(option.title)}
            >
              <h2 className="text-xl font-semibold text-bluetext">{option.title}</h2>
              {activeOption === option.title && (
                <p className="mt-2 text-gray-light">{option.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 lg:mt-0 flex justify-center">
        <img
          src={options.find((option) => option.title === activeOption).image}
          alt={activeOption}
          className="w-full h-auto max-w-xl rounded-lg shadow-lg mt-20"
        />
      </div>
    </div>
  );
};

export default WebinarCommunication;
