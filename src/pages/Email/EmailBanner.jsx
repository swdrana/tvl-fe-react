import { useNavigate } from "react-router-dom";

const EmailBanner = () => {

    const navigate = useNavigate();
    
    return (
        <div className="bg-yellow-100 min-h-screen flex items-center justify-center mt-28">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 px-4">
          {/* Text Section */}
          <div className="text-center lg:text-left mb-8 lg:mb-0 ml-8 lg:ml-16">
            <div className="flex gap-2 items-center">
              <img
                src="https://i.ibb.co.com/CMxL9Vm/maill.jpg"
                alt="email Logo"
                className="h-6 w-6"
              />
              <p className="font-semibold text-gray-800">Email</p>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-3">
            Get Lark Mail for free
            </h1>
            <p className="text-gray-500 mb-6 max-w-md font-semibold">
            Lark Mail provides comprehensive email capabilities, with no need to change your email habits. It supports mail syncing across multiple devices, offline reading, new email notifications, and other important functions for sending and receiving mail.
            </p>
            <div className="space-x-4 flex">
              <button onClick={() => navigate("/signup")} className="bg-blue-500 font-semibold text-white h-12 w-72 rounded-full hover:bg-blue-700 transition">
                Get free Lark-hosted email service
              </button>
              <button onClick={() => navigate("/contactsales")} className="border border-blue-600 font-semibold text-blue-600 h-12 w-32 rounded-full hover:bg-blue-100 transition">
                Contact us
              </button>
            </div>
            <p className="text-gray-500 mt-4 text-xs">
              Free forever. No credit card required.
            </p>
          </div>
  
          {/* Image Section */}
          <div className="relative rounded-lg w-full max-w-4xl flex items-center justify-center lg:ml-4">
            <img
              src="https://i.ibb.co.com/rpJYV6y/emailbanner.jpg"
              alt="Messenger Banner"
              className="w-full md:w-5/6 lg:w-3/4 max-w-2xl rounded-lg border border-white shadow-lg ml-16"
            />
          </div>
        </div>
      </div>
    );
};

export default EmailBanner;