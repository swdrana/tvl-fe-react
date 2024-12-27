import { useState } from "react";
import testimonialsData from "../FakeData/Platform.json";
import { FaTv } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AllPlatform = () => {
  const navigate = useNavigate();
  const { testimonials } = testimonialsData;

  // State to track the currently selected testimonial
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);

  return (
    <motion.div
      className="bg-white text-gray-900 font-sans"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header Section */}
      <header className="text-center mt-8 mb-12 px-4">
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FaTv className="text-blue-600 text-2xl" />
          <p className="text-blue-600 font-medium text-lg">All-in-one Platform</p>
        </motion.div>
        <motion.h1
          className="text-4xl font-bold leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          All the apps you need. In one <span className="text-blue-600">Lark</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          As a global business, Lark helps you connect your team across the world. Lark is for everyone
          and every role: it is easy to use on a phone, not just at a desk. Schedule messages and
          cross-timezone meetings with a few clicks, and automate workflows to run a relay race
          without baton drops at work.
        </motion.p>
      </header>

      {/* Logo Selection Section */}
      <motion.section
        className="flex justify-center gap-14 flex-wrap mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {testimonials.map((app, index) => (
          <motion.div
            key={index}
            className={`cursor-pointer text-center transition-transform ${
              selectedTestimonial.label === app.label
                ? "scale-110 shadow-lg"
                : "scale-100"
            }`}
            onClick={() => setSelectedTestimonial(app)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={app.icon}
              alt={app.label}
              className="w-12 h-14 bg-gray-200 rounded-lg mb-2 mx-auto object-contain"
            />
            <span className="text-gray-700 text-sm font-semibold">{app.label}</span>
          </motion.div>
        ))}
      </motion.section>

      {/* Details Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-4 rounded-lg transition-all"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Left Side: Text Content */}
        <motion.div
          className="md:w-2/5 p-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {selectedTestimonial.title}
          </h2>
          <p className="text-gray-600 mb-6">{selectedTestimonial.description}</p>
          <button
            onClick={() => navigate("/signup")}
            className="text-lg mt-6 font-semibold rounded-full px-1 py-2 text-white bg-gradient-to-r hover:bg-gradient-hover h-12 w-40"
          >
            Try for free
          </button>
          <p className="mt-3 text-gray-500 ml-2">REPLACES:</p>
          <img src="" alt="" />
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="md:w-3/5 mt-6 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={selectedTestimonial.image}
            alt={selectedTestimonial.label}
            className="rounded-lg shadow-lg w-full max-w-3xl"
          />
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default AllPlatform;
