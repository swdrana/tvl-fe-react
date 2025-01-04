import { useNavigate } from "react-router-dom";

const TriggerAutomation = () => {

  const navigate = useNavigate();
    return (
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
               {/* Left Side: Content */}
               <div className="lg:w-1/2 text-center lg:text-left">
                 <h1 className="text-4xl font-semibold text-gray-dark mt-2">
                 Trigger automations with form responses
                 </h1>
                 <p className="text-gray-light mt-4 font-semibold">
                 Streamline operational processes, keep track of feedback, and gain actionable insights instantly.
                 </p>
               </div>
       
               {/* Right Side: Image */}
               <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img src="https://i.ibb.co.com/0jyfrmZ/form2.jpg" alt=""  className="rounded-2xl"/>
               </div>
             </div>
           </div>
    );
};

export default TriggerAutomation;