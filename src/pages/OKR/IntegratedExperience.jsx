
const IntegratedExperience = () => {
  
    return (
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8">
          {/* Left Side: Image */}
          <div className="lg:w-1/2">
            <img
              src="https://i.ibb.co.com/xz8kPy4/okr3.webp"
              alt="AI Configuration"
              className="rounded-xl shadow-lg"
            />
          </div>
  
          {/* Right Side: Content */}
          <div className="lg:w-1/2 text-center ml-6 lg:text-left mt-8 lg:mt-0">
            <h1 className="text-4xl font-semibold text-gray-dark mt-2">
            Update OKRs directly in Lark Docs for a fully integrated experience
            </h1>
            <p className="text-gray-light mt-4 font-semibold text-lg">
            Insert OKR in any Lark Doc, update OKR progress collectively and seamlessly sync back to the OKR system. 
            </p>
          </div>
        </div>
      </div>
    );
};

export default IntegratedExperience;