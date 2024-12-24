import { useNavigate } from "react-router-dom";

const IntegratedChat = () => {

  const navigate = useNavigate();
  
    return (
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8">
          {/* Left Side: Image */}
          <div className="lg:w-1/2">
            <img
              src="https://i.ibb.co.com/W2TGqrK/email3.jpg"
              alt="AI Configuration"
              className="rounded-xl shadow-lg"
            />
          </div>
  
          {/* Right Side: Content */}
          <div className="lg:w-1/2 text-center ml-6 lg:text-left mt-8 lg:mt-0">
            <p className="text-yellow-600 font-bold text-xl">Integrated with Chat</p>
            <h1 className="text-4xl font-semibold text-gray-800 mt-2">
            Share email to chat
            </h1>
            <p className="text-gray-600 mt-4 font-semibold text-lg">
            Share emails to chat to allow multi-channel collaboration across internal and external communications.
            </p>
            <button onClick={() => navigate("/contactsales")} className="text-lg mt-6 font-semibold rounded-full bg-gradient-to-r from-blue-700 to-blue-400 px-1 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-40">
      Free demo
    </button>
          </div>
        </div>
      </div>
    );
};

export default IntegratedChat;