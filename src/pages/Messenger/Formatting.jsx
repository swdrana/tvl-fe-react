import { useNavigate } from "react-router-dom";

const Formatting = () => {

  const navigate = useNavigate();
  
    return (
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8">
          {/* Left Side: Image */}
          <div className="lg:w-1/2">
            <img
              src="https://i.ibb.co.com/DtzSZVL/messenger3.jpg"
              alt="AI Configuration"
              className="rounded-xl shadow-lg"
            />
          </div>
  
          {/* Right Side: Content */}
          <div className="lg:w-1/2 text-center ml-6 lg:text-left mt-8 lg:mt-0">
            <p className="text-bluetext font-bold text-xl">Rich Formatting</p>
            <h1 className="text-4xl font-semibold text-gray-dark mt-2">
            Show, and tell
            </h1>
            <p className="text-gray-light mt-4 font-semibold text-lg">
            Make your point with rich text and annotated screen captures, and applaud with emojis.
            </p>
            <button onClick={() => navigate("/contactsales")} className="text-lg mt-6 font-semibold rounded-full bg-gradient-to-r hover:bg-gradient-hover px-1 py-2 text-white h-12 w-40">
      Free demo
    </button>
          </div>
        </div>
      </div>
    );
};

export default Formatting;