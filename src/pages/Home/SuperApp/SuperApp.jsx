
const SuperApp = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center text-center px-4">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Lark, The <span className="text-blue-600">Superapp</span> that Does it All.
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Streamline Your Tech Stack and Save Big with Lark
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-700 to-sky-400 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
          Learn why Lark beats out the competition
        </button>
      </div>

      {/* Sliding Images Section */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex space-x-12 animate-slide-left"
          style={{ animationDuration: '30s' }}
        >

          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="h-24 w-24 md:h-32 md:w-32 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500"
            >
              Logo {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default SuperApp;