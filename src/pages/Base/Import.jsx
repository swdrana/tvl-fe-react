import baseVideo from './assets/basevideo.mp4';

const Import = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-800 mt-2">
          Import from Excel with one click
          </h1>
          <p className="text-gray-500 mt-4 font-medium">
          From Excel to Base, transform complex data into <br /> actionable insights simply with one click.
          </p>
          <button className="mt-6 font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-6 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-44">
      Import now
    </button>
        </div>

        {/* Right Side: Video */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <video
            src={baseVideo}
            className="rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            playsInline
            aria-label="AI Configuration Video"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Import;
