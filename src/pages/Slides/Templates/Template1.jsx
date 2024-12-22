import React, { useState } from "react";

const Template1 = () => {
  // Slide data
  const slides = [
    { title: "Enterprise Introduction", image: "https://via.placeholder.com/800x600?text=Enterprise+Introduction", description: "This is the enterprise introduction." },
    { title: "About Us", image: "https://via.placeholder.com/800x600?text=About+Us", description: "Learn about our company, vision, and values." },
    { title: "Management Team", image: "https://via.placeholder.com/800x600?text=Management+Team", description: "Meet the leadership team driving success." },
    { title: "History", image: "https://via.placeholder.com/800x600?text=History", description: "Explore our company's journey and milestones." },
    { title: "Advantages", image: "https://via.placeholder.com/800x600?text=Advantages", description: "Discover what sets us apart from competitors." },
  ];

  // State to track the currently selected slide
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Vertical Slide Menu */}
      <div className="w-1/4 bg-white shadow-md flex flex-col">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`p-4 text-left border-b font-bold text-lg ${
              currentSlide === index ? "bg-green-600 text-white" : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Right Content Section */}
      <div className="w-3/4 flex">
        {/* Right Content: Text and Image */}
        <div className="w-1/2 bg-green-600 text-white flex flex-col justify-center p-8">
          <h2 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h2>
          <p className="text-lg leading-relaxed">{slides[currentSlide].description}</p>
          <span className="mt-6 text-sm italic">Company profile</span>
        </div>
        {/* Right Image */}
        <div className="w-1/2">
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Template1;
