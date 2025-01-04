import React from "react";

const Banner = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-gray-dark md:text-5xl">
          Build your customized Lark
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-gray-light text-lg">
          An open, swift, and accessible way to reshape workplace experiences
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-blue text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-hover transition">
            CREATE APP
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-100 transition">
            VIEW TUTORIALS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
