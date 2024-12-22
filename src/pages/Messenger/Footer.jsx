import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();
  return (
    <div className="bg-black text-white py-12 px-6 text-center relative border-b-2 border-b-gray-600">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Lark, Merging Chats for Clarity
      </h1>
      <p className="text-lg md:text-lg mb-6">
        Driving Productivity while Cutting Costs all with one Messenger
      </p>
      <button onClick={() => navigate("/signup")} className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-2 rounded-full text-xl">
        Try for free
      </button>
      <div className="absolute bottom-10 right-10">
      </div>
    </div>
  );
};

export default Footer;
