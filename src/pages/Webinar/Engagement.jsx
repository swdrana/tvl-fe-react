import React, { useState } from "react";

const Engagement = () => {
  
  const [activeOption, setActiveOption] = useState("Rich Interaction");

  const options = [
    {
      title: "Rich Interaction",
      description:
        "Keep your webinar engaging by allowing audiences to send messages, emojis, and polls throughout the event.",
      image: "https://i.ibb.co.com/bvQYJzZ/richwebinar.jpg",
    },
    {
      title: "Branding",
      description:
        "Customize your webinar layout and virtual background to highlight your brand.",
      image: "https://i.ibb.co.com/hWt6gCM/branding.jpg",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 justify-between container mx-auto px-6 py-12">
      {/* Left Section (Image) */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={options.find((option) => option.title === activeOption).image}
          alt={activeOption}
          className="w-full max-w-xl rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section (Content Options) */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
      <div className="bg-blue-100 text-bluetext font-semibold px-3 py-1 rounded-md w-max">
            Webinar engagement
          </div>
        <h1 className="text-4xl font-semibold mb-8 mt-4">
          Connect with all participants creatively
        </h1>
        <div className="space-y-6">
          {options.map((option) => (
            <div
              key={option.title}
              className={`border rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                activeOption === option.title
                  ? "bg-blue-50 border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => setActiveOption(option.title)}
            >
              <h2 className="text-xl font-semibold text-bluetext">
                {option.title}
              </h2>
              {activeOption === option.title && (
                <p className="mt-2 text-gray-light">{option.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Engagement;
