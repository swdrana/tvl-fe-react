const Saving = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-16 lg:px-24">
      <div className="max-w-6xl flex lg:flex-row flex-col justify-center lg:gap-8 mx-auto lg:items-start text-center">
        <div>
          {/* Header Section */}
          <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-[#1F2329]">
            No more redundant tools <br />
            Save up to 70% of your costs
          </h2>
          {/* CTA Button */}
          <div className="mt-8">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-lg rounded-full shadow-md">
              Book a demo
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-row md:w-auto w-11/12 mx-auto justify-center items-center mt-8 space-y-4 space-x-2 md:space-y-0 md:space-x-8">
          <div className="hidden md:block border-l border-gray-300 h-12"></div>
          <div>
            <p className="text-[30px] md:text-5xl font-semibold text-blue-600">
              70%
            </p>
            <p className="text-[#646A73] mt-2">cost saved</p>
          </div>
          <div className="md:block border-l border-gray-300 h-12"></div>
          <div>
            <p className="text-[30px] md:text-5xl font-semibold text-blue-600">
              39%
            </p>
            <p className="text-[#646A73] mt-2">meeting time saved</p>
          </div>
          <div className="md:block border-l border-gray-300 h-12"></div>
          <div>
            <p className="text-[30px] md:text-5xl font-semibold text-blue-600">
              10x
            </p>
            <p className="text-[#646A73] mt-2">operational efficiency</p>
          </div>
        </div>
      </div>
      <img src="/Savings.avif" alt="Tools" />
    </section>
  );
};

export default Saving;
