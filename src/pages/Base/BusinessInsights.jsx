import { useNavigate } from "react-router-dom";

const BusinessInsights = () => {

  const navigate = useNavigate();
  
  return (
    <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-purple-500 font-bold text-lg">Business Insights</p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">
          Turn daily numbers into actions.
          </h1>
          <p className="text-gray-600 mt-4 font-semibold">
          Transform daily sales figures, production totals, and supply fluctuations into charts and graphs easily. Make informed decisions with confidence.
          </p>
          <button onClick={() => navigate("/contactsales")} className="mt-6 font-semibold rounded-full bg-gradient-to-r hover:bg-gradient-hover px-6 py-2 text-white h-12 w-44">
      Free demo
    </button>
        </div>

        {/* Right Side: Video */}
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <img src="https://i.ibb.co.com/TYRBxQj/base3.jpg" alt="" className="rounded-xl"/>
        </div>
      </div>
    </div>
  );
};

export default BusinessInsights;
