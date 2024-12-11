import Data1 from '../FakeData/Data1.json'
import Data2 from '../FakeData/Data2.json';
import { useEffect, useState } from 'react';

const Global = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [logos, setLogos] = useState([]);

  // Load data from JSON into the component state
  useEffect(() => {
    setTestimonials(Data1.testimonials);
    setLogos(Data2.logos);
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-blue-100 py-12">
      {/* Testimonials Section */}
      <div className="text-center">
        <span className="text-3xl font-semibold text-blue-500">Global teams</span>
        <span className="text-3xl font-semibold"> run their entire business on Lark</span>
        <div className="px-10 grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Profile Picture and Text Row */}
              <div className="flex items-center mb-4 pb-4 border-b border-gray-200">
                <img
                  src={testimonial.image || "https://example.com/default-profile.jpg"}
                  alt={testimonial.title}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>

              {/* Stats and Logo */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-4xl text-blue-600 font-extrabold mb-1">{testimonial.stats}</p>
                  <p className="text-gray-500 text-sm mb-4">{testimonial.subtitle}</p>
                </div>
                <div>
                  <img
                    src={testimonial.logo || "https://example.com/default-logo.jpg"}
                    alt={`Logo for ${testimonial.stats}`}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted Companies Section */}
      <div className="py-12">
        {/* Trusted Companies Text */}
        <div className="text-gray-600 text-center mb-8">
          <p>Trusted by fast-growing companies from 125+ countries</p>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex p-6 justify-center items-center bg-white shadow-md rounded-md w-32 h-14"
              >
                <img
                  src={`https://logo.clearbit.com/${logo.toLowerCase()}.com`}
                  alt={logo}
                  className="h-12 mx-auto"
                  onError={(e) => (e.target.src = '/path-to-default-logo.png')}
                />
              </div>
            ))}
          </div>

          {/* Customer Stories Link */}
          <div className="text-center mt-8">
            <p className="text-blue-600 font-medium cursor-pointer hover:underline">
              Read our customer stories &rarr;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Global;
