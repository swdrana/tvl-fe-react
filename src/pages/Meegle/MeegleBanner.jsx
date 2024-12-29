import React from "react";

const MeegleBanner = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Heading Section */}
      <header className="mb-8 mt-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Project Workflows, Visualized
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Set direction, zoom into details, <span className="text-blue-600">reach milestones</span>, measure success,
          do it all with <span className="font-medium text-blue-600">Meegle</span>
        </p>

        {/* Try for Free Button */}
        <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 shadow-lg">
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
