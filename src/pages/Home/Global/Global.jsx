import Data1 from "../FakeData/Data1.json";
import Data2 from "../FakeData/Data2.json";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Global = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [logos, setLogos] = useState([]);

  // Load data from JSON into the component state
  useEffect(() => {
    setTestimonials(Data1.testimonials);
    setLogos(Data2.logos);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-deep-purple-50 py-12">
      {/* Testimonials Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="text-3xl font-semibold text-blue-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Global teams
        </motion.span>
        <motion.span
          className="text-3xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {" "}
          run their entire business on Lark
        </motion.span>

        <div className="px-10 grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
                  <p className="text-4xl text-blue-600 font-extrabold mb-1">
                    {testimonial.stats}
                  </p>
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Trusted Companies Section */}
      <motion.div
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-gray-600 text-center mb-8">
          <p>Trusted by fast-growing companies from 125+ countries</p>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex p-6 justify-center items-center bg-white shadow-md rounded-md w-32 h-14"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={`https://logo.clearbit.com/${logo.toLowerCase()}.com`}
                  alt={logo}
                  className="h-12 mx-auto"
                  onError={(e) => (e.target.src = "/path-to-default-logo.png")}
                />
              </motion.div>
            ))}
          </div>

          {/* Customer Stories Link */}
          <motion.div
            className="text-center mt-8"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-blue-600 font-medium cursor-pointer hover:underline">
              Read our customer stories &rarr;
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Global;
