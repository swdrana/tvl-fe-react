import { useNavigate } from "react-router-dom";

const MeetingBanner = () => {

  const navigate = useNavigate();
    return (
      <div className="bg-cyan-100 min-h-screen flex items-center justify-center mt-28">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 px-4">
          {/* Text Section */}
          <div className="text-center lg:text-left mb-8 lg:mb-0 ml-8 lg:ml-16">
            <div className="flex gap-2 items-center">
              <img
                src="https://i.ibb.co.com/Nn9yPHr/meetings.jpg"
                alt="Logo"
                className="h-6 w-6"
              />
              <p className="font-semibold text-gray-800">Meetings</p>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-3">
            Turn meetings into true collaborative experiences
            </h1>
            <p className="text-gray-600 mb-6 max-w-md font-semibold">
            Powerful in-call doc sharing, smart meeting minutes, and mobile-optimized features allow you to get more done together from anywhere, anytime.
            </p>
            <div className="space-x-4 flex">
              <button onClick={() => navigate("/signup")} className="bg-blue-500 font-semibold text-white h-12 w-44 rounded-full hover:bg-blue-700 transition text-lg">
                Try for free
              </button>
              <button onClick={() => navigate("/contactsales")} className="border border-blue-600 font-semibold text-blue-600 h-12 w-32 rounded-full hover:bg-blue-100 transition text-lg">
                Contact us
              </button>
            </div>
          </div>
  
          {/* Image Section */}
          <div className="relative rounded-lg w-full max-w-4xl flex items-center justify-center lg:ml-4">
            <img
              src="https://i.ibb.co.com/nL1XbS4/meetingbanner.jpg"
              alt="Banner"
              className="w-full md:w-5/6 lg:w-3/4 max-w-2xl rounded-lg border border-white shadow-lg ml-16"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default MeetingBanner;
  