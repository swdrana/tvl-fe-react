const ProcessOptimization = () => {
    return (
      <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8">
          {/* Left Side: Image */}
          <div className="lg:w-1/2">
            <img
              src="https://i.ibb.co.com/C83gg05/base4.jpg"
              alt="AI Configuration"
              className="rounded-xl shadow-lg"
            />
          </div>
  
          {/* Right Side: Content */}
          <div className="lg:w-1/2 text-center ml-6 lg:text-left mt-8 lg:mt-0">
            <p className="text-purple-600 font-bold text-lg">Process optimization</p>
            <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Make flawless execution possible
            </h1>
            <p className="text-gray-500 mt-4 font-semibold">
            Keep your teams, tasks, and timelines on track, stress-free. Let automation do grunt work and help check off tasks day in and day out.
            </p>
            <button className="mt-6 font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-6 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-44">
      Free demo
    </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProcessOptimization;
  