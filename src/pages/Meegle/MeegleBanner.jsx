import React from "react";

const MeegleBanner = () => {
  return (
    <div className="min-h-scree flex flex-col ml-24 mt-20">
      {/* Heading Section */}
      <header className="mb-8 mt-12">
        <h1 className="text-5xl font-bold text-gray-dark">
          Project Workflows, Visualized
        </h1>
        <p className="mt-4 text-3xl text-gray-light">
          Set direction, zoom into details, <span className="text-blue-600">reach milestones</span>, measure success,
          do it all with <span className="font-medium text-blue-600">Meegle</span>
        </p>

        {/* Try for Free Button */}
        <button className="mt-6 bg-gradient-to-l from-deep-purple-300 to-purple-500 hover:bg-gradient-hover text-white py-4 px-7 rounded-full shadow-lg font-semibold text-xl">
          Try for Free →
        </button>
      </header>

      {/* Embedded Video Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "0px",
          paddingBottom: "53.333%",
        }}
        className="max-w-4xl w-full"
      >
        <iframe
          allow="fullscreen; autoplay"
          allowFullScreen
          src="https://streamable.com/e/6rehqe?autoplay=1"
          style={{
            border: "none",
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0px",
            top: "0px",
            overflow: "hidden",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default MeegleBanner;
