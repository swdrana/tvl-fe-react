import { useNavigate } from "react-router-dom";
// import { FaArrowCircleRight } from "react-icons/fa";

const Banner = () => {

    const navigate = useNavigate();
    
    return (
        <div className="bg-gradient-to-r from-white to-orange-200 min-h-screen flex items-center justify-center mt-16">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 px-4">
          {/* Text Section */}
          <div className="text-center lg:text-left mb-8 lg:mb-0 ml-8 lg:ml-16">
            <div className="flex gap-2 items-center">
              <img
                src="https://i.ibb.co.com/Hz5TJdj/slides.png"
                alt="Logo"
                className="h-6 w-6 rounded-2xl"
              />
              <p className="font-semibold text-gray-800">Slides</p>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-3">
            Real-time collaboration <p className="text-purple-600">with Slides</p>
            </h1>
            <p className="text-gray-500 mb-6 max-w-md font-semibold">
            Unleash your creativity and level up your design with powerful formatting capabilities, ready-made templates and access to a large image gallery
            </p>
            <div className="space-x-4 flex">
              <button onClick={() => navigate("/contactsales")} className="bg-gradient-to-r from-purple-400 to-orange-400 font-semibold text-white h-14 w-44 text-2xl rounded-full hover:bg-blue-700 transition">Try for free</button>
            </div>
          </div>
  
          {/* Image Section */}
          <div className="relative rounded-lg w-full max-w-4xl flex items-center justify-center lg:ml-4">
            <img
              src="https://i.ibb.co.com/vXcy02f/slidesbanner.jpg"
              alt="Messenger Banner"
              className="w-full md:w-5/6 lg:w-3/4 max-w-2xl rounded-xl border border-white shadow-lg ml-16"
            />
          </div>
        </div>
      </div>
    );
};

export default Banner;