import { useNavigate } from "react-router-dom";

const Transcription = () => {

  const navigate = useNavigate();
    return (
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
               {/* Left Side: Content */}
               <div className="lg:w-1/2 text-center lg:text-left">
               <p className="text-cyan-500 font-bold text-xl">Transcription</p>
                 <h1 className="text-4xl font-semibold text-gray-800 mt-2">
                 Focus on engaging, not notetaking
                 </h1>
                 <p className="text-gray-500 mt-4 font-semibold">
                 Lark Minutes automatically transcribes video meetings into transcripts that you can view, search, and collaborate on. Catch up async with a breeze, even when you can't join a meeting.
                 </p>
                 <button onClick={() => navigate("/contactsales")} className="mt-6 font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-1 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-40 text-lg">
            Free demo
           </button>
               </div>
       
               {/* Right Side: Image */}
               <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img src="https://i.ibb.co.com/T0Cw6Yq/meeting2.jpg" alt=""  className="rounded-xl"/>
               </div>
             </div>
           </div>
    );
};

export default Transcription;