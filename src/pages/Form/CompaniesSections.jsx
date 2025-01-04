import React from "react";

const ComapniesSection = () => {
  const logos = [
    { src: "https://i.ibb.co.com/XL0D7Cp/anker-vector-logo.png", alt: "Anker Innovations" },
    { src: "https://i.ibb.co.com/Ky5FpSZ/mi.png", alt: "mi" },
    { src: "https://i.ibb.co.com/L8cbbVm/advance.png", alt: "Aeon Mall" },
    { src: "https://i.ibb.co.com/Fb2R4v4/nasdally.png", alt: "Moonton" },
    { src: "https://i.ibb.co.com/b3L7hjW/haidiliao.png", alt: "haidilao" },
    { src: "https://i.ibb.co.com/pQ8W2bv/popmart.png", alt: "Pop Mart" },
    { src: "https://i.ibb.co.com/mJ6zxDT/Carro-Logo-1.png", alt: "Carro" },
    { src: "https://i.ibb.co.com/tbQgGbg/nio.png", alt: "Nio" },
    { src: "https://i.ibb.co.com/yNcN5dQ/mediastorm.png", alt: "mediastorm" },
    { src: "https://i.ibb.co.com/wYFWGpF/snk.png", alt: "Snk" },
  ];

  return (
    <div className="bg-white py-10 mt-8">
      <h2 className="text-center text-gray-light font-medium mb-4">
        Trusted by fast-growing companies from 125+ countries
      </h2>
      <div className="relative overflow-hidden mt-8">
        <div className="flex items-center animate-scroll whitespace-nowrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-4 bg-white p-2 rounded-lg shadow-md"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-16 object-contain"
              />
            </div>
          ))}
          {/* Duplicated logos for seamless scrolling */}
          {logos.map((logo, index) => (
            <div
              key={index + logos.length}
              className="flex-shrink-0 mx-4 bg-white p-2 shadow-card rounded-md"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComapniesSection;
