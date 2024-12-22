import { useNavigate } from "react-router-dom";

const Client = () => {
  const navigate = useNavigate();
    return (
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8">
          {/* Left Side: Image */}
          <div className="lg:w-1/2">
            <img
              src="https://i.ibb.co.com/7RtghN9/email1.jpg"
              alt="AI Configuration"
              className="rounded-xl shadow-lg"
            />
          </div>
  
          {/* Right Side: Content */}
          <div className="lg:w-1/2 text-center ml-6 lg:text-left mt-8 lg:mt-0">
            <p className="text-yellow-500 font-bold text-xl">Email Client</p>
            <h1 className="text-4xl font-semibold text-gray-800 mt-2">
            Migrate and sync from Gmail to Lark Mail
            </h1>
            <p className="text-gray-500 mt-4 font-semibold text-lg">
            Link your Gmail account to Lark to enjoy the seamless integration between email, messenger, and drive — delivered by Lark Mail.
            </p>
            <button onClick={() => navigate("/contactsales")} className="text-lg mt-6 font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-1 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-40">
      Free demo
    </button>
          </div>
        </div>
      </div>
    );
};

export default Client;