import { useNavigate } from "react-router-dom";

const Banner = () => {

  const navigate = useNavigate();
    return (
      <div className="bg-indigo-100 min-h-screen flex items-center justify-center mt-16">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 px-4">
          {/* Text Section */}
          <div className="text-center lg:text-left mb-8 lg:mb-0 ml-8 lg:ml-16">
            <div className="flex gap-2 items-center">
              <img
                src="https://i.ibb.co.com/VVRqK5g/anycoss.jpg"
                alt="Logo"
                className="h-8 w-8"
              />
              <p className="font-semibold text-gray-dark">Anycross</p>
            </div>
            <h1 className="text-4xl font-bold text-gray-dark mb-4 mt-3">
            Connect Lark with Anything
            </h1>
            <p className="text-gray-light mb-6 max-w-md font-semibold">
            Connect, integrate, and thrive! Unlock boundless potential within your Lark experience with AnyCross.
            </p>
            <div className="space-x-4 flex">
              <button onClick={() => navigate("/signup")} className="bg-blue font-semibold text-white h-12 w-40 rounded-full hover:bg-blue-hover transition">
                Try for free
              </button>
              <button onClick={() => navigate("/contactsales")} className="border border-blue-600 font-semibold text-blue-600 h-12 w-32 rounded-full hover:bg-blue-50 transition">
                Contact us
              </button>
            </div>
          </div>
  
          {/* Image Section */}
          <div className="relative rounded-lg w-full max-w-4xl flex items-center justify-center lg:ml-4">
            <img
              src="https://i.ibb.co.com/tLr5SLG/anycrossbanner.jpg"
              alt="Banner"
              className="w-full md:w-5/6 lg:w-3/4 max-w-2xl rounded-lg border border-white shadow-lg ml-16"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  