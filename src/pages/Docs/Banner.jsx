import { useNavigate } from "react-router-dom";

const Banner = () => {

  const navigate = useNavigate();
  
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col items-center p-8 mt-32">
      {/* Header Section */}
      <div className="flex gap-4">
      <div className="ml-12 mt-8">
        <div className="flex gap-2 mb-4">
          <img src="https://i.ibb.co.com/R3vBNLS/docs.png" alt="" className="h-6 w-6 rounded-md"/>
          <p className="font-semibold">Docs</p>
        </div>
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
        Unleash Creative <br /> Collaboration with Docs
        </h1>
        <p className=" text-gray-500 font-semibold mt-4">
        From Docs to Sheets to Mindnotes, every idea is synced in <br /> real-time, with rich media and secure permission control. <br /> Take your content collaboration to the next level.
        </p>
      </header>
      {/* Buttons */}
      <div className="flex gap-4 mb-12">
        <button onClick={() => navigate("/signup")} className="bg-blue-500 text-white px-6 py-3 font-semibold rounded-full shadow hover:bg-blue-700">
          Experience the future of Docs
        </button>
        <button onClick={() => navigate("/contactsales")} className=" text-blue-600 border border-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-50">
          Schedule demo
        </button>
      </div>
      <p className="text-gray-500 text-xs ml-4">Free forever. No credit card required.</p>
      </div>

{/* Cards Section */}
<div className="grid grid-cols-3 gap-4 w-full sm:w-3/4 lg:w-1/2 mx-auto mt-12">
 
  <div className="row-span-2 col-span-1 rounded-lg">
    <img 
      src="https://i.ibb.co.com/yhdzdyg/banner1.png" 
      alt="First Image" 
      className="w-full h-full object-cover rounded-lg" 
    />
  </div>

 
  <div className="col-span-2 rounded-lg">
    <img 
      src="https://i.ibb.co.com/vsxh7JG/banner2.png" 
      alt="Second Image" 
      className="w-full h-full object-cover rounded-lg" 
    />
  </div>


  <div className="col-span-2 rounded-lg">
    <img 
      src="https://i.ibb.co.com/LPj74mX/banner3.png" 
      alt="Third Image" 
      className="w-full h-full object-cover rounded-lg" 
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default Banner;
