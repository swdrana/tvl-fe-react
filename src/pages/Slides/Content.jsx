import { useNavigate } from "react-router-dom";

const Content = () => {

    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
      Keep your content safe with Slides
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
      Manage the reach of your content through permission settings.
      Additionally, with a live link, present anywhere on any device.
      </p>
      {/* Image Section */}
      <div className="relative max-w-4xl rounded-xl overflow-hidden">
        <img
          src="https://i.ibb.co.com/tKqhv1d/hh.jpg"
          alt="Interactive presentations"
          className="w-full"
        />
      </div>
      <button onClick={() => navigate("/contactsales")} className="mt-6 border border-blue-500 font-semibold text-blue-500 h-12 w-44 text-lg rounded-full hover:bg-slate-100 transition">Free demo</button>
    </div>
  );
};

export default Content;
