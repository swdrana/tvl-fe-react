
const TeamsHealth = () => {

    return (
       <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
               {/* Left Side: Content */}
               <div className="lg:w-1/2 text-center lg:text-left">
                 <h1 className="text-4xl font-semibold text-gray-800 mt-2">
                 Understand your team's "state of health" through comprehensive data analysis
                 </h1>
                 <p className="text-gray-600 mt-4 font-semibold">
                 Intuitive OKR data dashboards provide insights on adoption rate,  progress, and many other aspects to help team leaders better monitor team achievements, identify potential risks, and motivate the team towards ambitious goals.
                 </p>
               </div>
       
               {/* Right Side: Image */}
               <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img src="https://i.ibb.co.com/C9bT31Q/okr4.webp" alt=""  className="rounded-xl"/>
               </div>
             </div>
           </div>
    );
};

export default TeamsHealth;