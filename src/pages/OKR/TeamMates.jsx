
const TeamMates = () => {
  
    return (
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8">
          {/* Left Side: Image */}
          <div className="lg:w-1/2">
            <img
              src="https://i.ibb.co.com/QbN0HpQ/okr1.webp"
              alt="AI Configuration"
              className="rounded-xl shadow-lg"
            />
          </div>
  
          {/* Right Side: Content */}
          <div className="lg:w-1/2 text-center ml-6 lg:text-left mt-8 lg:mt-0">
            <h1 className="text-4xl font-semibold text-gray-dark mt-2">
            Easily access anyone's OKRs from teammates to the CEO 
            </h1>
            <p className="text-gray-light mt-4 font-semibold text-lg">
            Everyone's OKRs are available in their Lark Profile, enabling a transparent culture and providing more context for cross-team collaboration.
            </p>
          </div>
        </div>
      </div>
    );
};

export default TeamMates;