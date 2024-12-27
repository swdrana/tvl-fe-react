import { useNavigate } from "react-router-dom";

const Banner = () => {

  const navigate = useNavigate();

    return (
      <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen flex items-center justify-center mt-16">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 px-4">
          {/* Text Section */}
          <div className="text-center lg:text-left mb-8 lg:mb-0 ml-8 lg:ml-16">
            <h1 className="text-4xl font-bold text-gray-dark mb-4">
            Lark Webinar
Reach and engage your audiences at scale
            </h1>
            <p className="text-gray-light mb-6 max-w-md font-semibold">
            From remote training to company wide meetings, Lark Webinar supports up to 10,000 people when hosting engaging and high-quality online events.
            </p>
            <div className="space-x-4 flex">
              <button onClick={() => navigate("/contactsales")} className="bg-blue font-semibold text-white h-12 w-44 rounded-full hover:bg-blue-hover transition">
                Contact us
              </button>
            </div>
          </div>
  
          {/* Image Section */}
          <div className="relative rounded-lg w-full max-w-4xl flex items-center justify-center lg:ml-4">
            <img
              src="https://i.ibb.co.com/hDFrYD8/webinarbanne.jpg"
              alt="Banner"
              className="w-full md:w-5/6 lg:w-3/4 max-w-2xl rounded-lg border border-white shadow-lg ml-16"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  