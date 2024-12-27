import { useNavigate } from "react-router-dom";

const Translation = () => {

  const navigate = useNavigate;

    return (
       <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
               {/* Left Side: Content */}
               <div className="lg:w-1/2 text-center lg:text-left">
               <p className="text-blue-500 font-bold text-xl">Real-time Auto Translation</p>
                 <h1 className="text-4xl font-semibold text-gray-800 mt-2">
                 Express yourself natively
                 </h1>
                 <p className="text-gray-600 mt-4 font-semibold">
                 Auto-translate all the messages to your own language. <br /> Understand the conversation with ease regardless of <br /> where you come from.
                 </p>
                 <button onClick={() => navigate("/contactsales")} className="mt-6 font-semibold rounded-full bg-gradient-to-r hover:bg-gradient-hover px-1 py-2 text-white h-12 w-40 text-lg">
            Free demo
           </button>
               </div>
       
               {/* Right Side: Image */}
               <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img src="https://i.ibb.co.com/Tc4XSX0/messenger2.jpg" alt=""  className="rounded-xl"/>
               </div>
             </div>
           </div>
    );
};

export default Translation;