import { useNavigate } from "react-router-dom";

const Template = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/template1")} className="min-h-screen flex flex-col items-center p-6 cursor-pointer">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
        Select the perfect template <br /> and jumpstart your project today
      </h1>
      <button
        onClick={() => navigate("/contactsales")}
        className="mt-6 border border-blue-500 font-semibold text-blue-500 h-12 w-44 text-lg rounded-full hover:bg-slate-100 transition"
      >
        Free demo
      </button>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full sm:w-[90%] lg:w-[95%] mx-auto mt-12">
        {/* First Image */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-blue-100 p-8 w-full">
          <div className="font-semibold">
            <h1 className="text-xl mb-4">Product analysis report</h1>
            <small className="bg-blue-400 text-white p-2 rounded-full">Template</small>
          </div>
          <img
            src="https://i.ibb.co/xGFHTLn/template1.jpg"
            alt="First Template"
            className="w-full h-[550px] object-cover rounded-lg mt-6"
          />
        </div>

        {/* Second Image */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-green-100 p-8 w-full">
          <div className="font-semibold">
            <h1 className="text-xl mb-4">Enterprise business plan</h1>
            <small className="bg-green-400 text-white p-2 rounded-full">Template</small>
          </div>
          <img
            src="https://i.ibb.co/YjsDYT0/template2.jpg"
            alt="Second Template"
            className="w-full h-[550px] object-cover rounded-lg mt-6"
          />
        </div>

        {/* Third Image */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-purple-100 p-8 w-full">
          <div className="font-semibold">
            <h1 className="text-xl mb-4">Enterprise business plan</h1>
            <small className="bg-purple-400 text-white p-2 rounded-full">Template</small>
          </div>
          <img
            src="https://i.ibb.co/whHsX1w/template3.jpg"
            alt="Third Template"
            className="w-full h-[550px] object-cover rounded-lg mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Template;
