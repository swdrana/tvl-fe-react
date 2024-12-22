const Integration = () => {
    return (
      <div className="min-h-screen flex flex-col items-center p-6">
        {/* Header */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
          Integrate with other Lark apps seamlessly
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
          You can bring your ideas to life on Board within Slides, and link charts
          from Sheets to keep your data in sync.
        </p>
  
        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4 w-full sm:w-11/12 lg:w-10/12 mx-auto mt-8">
          {/* First Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/VDq6TBf/grid1.jpg"
              alt="First Image"
              className="w-[1000px] h-[650px] object-cover"
            />
          </div>
  
          {/* Second Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/YbSqM0r/grid2.jpg"
              alt="Second Image"
              className="w-[1000px] h-[650px] object-cover"
            />
          </div>
  
          {/* Third Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/Jc2F3hM/grid4.jpg"
              alt="Third Image"
              className="w-[1000px] h-[650px] object-cover"
            />
          </div>
  
          {/* Fourth Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/yXzJth8/grid3.jpg"
              alt="Fourth Image"
              className="w-[1000px] h-[650px] object-cover"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Integration;
  