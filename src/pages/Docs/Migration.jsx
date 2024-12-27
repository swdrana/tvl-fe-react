import { useNavigate } from "react-router-dom";

const Migration = () => {

  const navigate = useNavigate();
    return (
        <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
               {/* Left Side: Content */}
               <div className="lg:w-1/2 text-center lg:text-left">
               <p className="text-blue-600 font-bold text-xl">Easy migration</p>
                 <h1 className="text-4xl font-semibold text-gray-800 mt-2">
                 Easily migrate files
                 </h1>
                 <p className="text-gray-600 mt-4 font-semibold">
                 Dust off your local Word, Excel, and PDF files by importing them to Lark. Bring all your legacy documents to life, as they become instantly sharable and editable.
                 </p>
                 <button onClick={() => navigate("/contactsales")} className="mt-6 font-semibold rounded-full bg-gradient-to-r hover:bg-gradient-hover px-1 py-2 text-white h-12 w-40 text-lg">
            Free demo
           </button>
               </div>
       
               {/* Right Side: Image */}
               <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img src="https://i.ibb.co.com/VtkBxky/docs1.jpg" alt=""  className="rounded-xl"/>
               </div>
             </div>
           </div>
    );
};

export default Migration;