import { useState } from "react";
import testimonialsData from "../FakeData/Platform.json";
import { FaTv } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AllPlatform = () => {

  const navigate = useNavigate();

  const { testimonials } = testimonialsData;

  // State to track the currently selected testimonial
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header Section */}
      <header className="text-center mt-8 mb-12 px-4">
        <div className="flex items-center justify-center gap-2">
          <FaTv className="text-blue-500 text-2xl" />
          <p className="text-blue-500 font-medium text-lg">All-in-one Platform</p>
        </div>
        <h1 className="text-4xl font-bold leading-tight">
          All the apps you need. In one <span className="text-blue-600">Lark</span>
        </h1>
        <p className="mt-4 text-gray-500 text-lg max-w-3xl mx-auto">
          As a global business, Lark helps you connect your team across the world. Lark is for everyone 
          and every role: it is easy to use on a phone, not just at a desk. Schedule messages and 
          cross-timezone meetings with a few clicks, and automate workflows to run a relay race 
          without baton drops at work.
        </p>
      </header>

      {/* Logo Selection Section */}
      <section className="flex justify-center gap-14 flex-wrap mb-8">
        {testimonials.map((app, index) => (
          <div
            key={index}
            className={`cursor-pointer text-center transition-transform ${
              selectedTestimonial.label === app.label
                ? "scale-110 shadow-lg"
                : "scale-100"
            }`}
            onClick={() => setSelectedTestimonial(app)} // Set selected app
          >
            <img
              src={app.icon}
              alt={app.label}
              className="w-12 h-14 bg-gray-200 rounded-lg mb-2 mx-auto object-contain"
            />
            <span className="text-gray-700 text-sm font-semibold">{app.label}</span>
          </div>
        ))}
      </section>

      {/* Details Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-4 rounded-lg transition-all">
  {/* Left Side: Text Content */}
  <div className="md:w-2/5 p-4">
    <h2 className="text-3xl font-bold mb-4 text-gray-800">
      {selectedTestimonial.title}
    </h2>
    <p className="text-gray-600 mb-6">
      {selectedTestimonial.description}
    </p>
    <button onClick={() => navigate("/signup")} className="text-lg mt-6 font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-1 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-40">
      Try for free
    </button>
    <p className="mt-3 text-gray-500 ml-2">REPLACES:</p>
    <img src="" alt="" />
  </div>

  {/* Right Side: Image */}
  <div className="md:w-3/5 mt-6 md:mt-0 flex justify-center">
    <img
      src={selectedTestimonial.image}
      alt={selectedTestimonial.label}
      className="rounded-lg shadow-lg w-full max-w-3xl"
    />
  </div>
</section>

    </div>
  );
};

export default AllPlatform;
