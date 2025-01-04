
const Reporting = () => {

    return (
       <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
               {/* Left Side: Content */}
               <div className="lg:w-1/2 text-center lg:text-left">
                 <h1 className="text-4xl font-semibold text-gray-800 mt-2">
                 Organize teams around strategic goals, not reporting structures
                 </h1>
                 <p className="text-gray-600 mt-4 font-semibold">
                 Features such as recommendations on alignment and an alignment view help employees clearly communicate their business focus and collaborate towards the same goal.
                 </p>
               </div>
       
               {/* Right Side: Image */}
               <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img src="https://i.ibb.co.com/bQbg3yW/okr2.webp" alt=""  className="rounded-xl"/>
               </div>
             </div>
           </div>
    );
};

export default Reporting;