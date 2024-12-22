import { useNavigate } from "react-router-dom";

const Migration = () => {

  const navigate = useNavigate();
  
    return (
      <div className="bg-blue-600 text-white py-12 px-6 text-center relative border-b-2 border-b-gray-600">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Migrate from legacy services to Lark Mail
        </h1>
        <p className="text-lg md:text-lg mb-6">
        Set up your Lark Mail account for free today
        </p>
        <button onClick={() => navigate("/signup")} className="bg-white hover:bg-slate-100 text-blue-600 font-medium px-8 py-2 rounded-full text-xl">
          Get the Lark Mail brochure and start your imagination
        </button>
        <div className="mt-14 items-center flex justify-center">
            <img src="https://i.ibb.co.com/0YfGVWd/emaill.jpg" alt="" className="w-3/4 h-3/4"/>
        </div>
      </div>
    );
  };
  
  export default Migration;
  