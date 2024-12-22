import { useNavigate } from "react-router-dom";

const GroupMeeting = () => {

  const navigate = useNavigate();
    return (
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
               {/* Left Side: Content */}
               <div className="lg:w-1/2 text-center lg:text-left">
               <p className="text-cyan-500 font-bold text-xl">Group Meetings</p>
                 <h1 className="text-4xl font-semibold text-gray-800 mt-2">
                 Engage with larger audiences
                 </h1>
                 <p className="text-gray-500 mt-4 font-semibold">
                 Hold interactive online meetings and events with up to 1,000 participants and up to 50 breakout sessions for closed group discussions within a meeting.
                 </p>
                 <button onClick={() => navigate("/contactsales")} className="mt-6 font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-1 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-40 text-lg">
            Free demo
           </button>
               </div>
       
               {/* Right Side: Image */}
               <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img src="https://i.ibb.co.com/Fxsyv9W/meeting4.jpg" alt=""  className="rounded-xl"/>
               </div>
             </div>
           </div>
    );
};

export default GroupMeeting;