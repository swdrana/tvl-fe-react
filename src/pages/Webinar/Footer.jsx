import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();
  
    return (
      <div className="bg-gradient-to-b from-blue-100 to-blue-50 text-white py-12 px-6 text-center relative border-b-2 border-b-gray-600">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-dark">
        Lark, bringing it all together
        </h1>
        <p className="text-lg md:text-lg mb-6 text-gray-dark">
        -All you need is the Internet and Lark.
        </p>
        <div className="flex items-center justify-center gap-6">
        <button onClick={() => navigate("/signup")} className="bg-blue hover:bg-blue-900 text-white font-medium px-8 py-2 rounded-full text-xl">
          Try for free
        </button>
        <button onClick={() => navigate("/contactsales")} className="bg-white hover:bg-blue-gray-50 text-bluetext font-medium px-8 py-2 rounded-full text-xl">
          Contact us
        </button>
        </div>
        
        <div className="absolute bottom-10 right-10">
        </div>
      </div>
    );
  };
  
  export default Footer;
  