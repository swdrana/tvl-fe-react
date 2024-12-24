import { useNavigate } from "react-router-dom";

const Collaboration = () => {

  const navigate = useNavigate();

    return (
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
               {/* Left Side: Content */}
               <div className="lg:w-1/2 text-center lg:text-left">
               <p className="text-yellow-600 font-bold text-xl">Seamless Collaboration</p>
                 <h1 className="text-4xl font-semibold text-gray-800 mt-2">
                 Integrating Email with Chat
                 </h1>
                 <p className="text-gray-600 mt-4 font-semibold">
                 Send announcements to entire chat groups, departments or teams in a breeze.
                 </p>
                 <button onClick={() => navigate("/contactsales")} className="mt-6 font-semibold rounded-full bg-gradient-to-r from-blue-700 to-blue-400 px-1 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-40 text-lg">
            Free demo
           </button>
               </div>
       
               {/* Right Side: Image */}
               <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img src="https://i.ibb.co.com/QDxtpXL/email2.jpg" alt=""  className="rounded-xl"/>
               </div>
             </div>
           </div>
    );
};

export default Collaboration;