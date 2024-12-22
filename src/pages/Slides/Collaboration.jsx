import { useNavigate } from "react-router-dom";

const Collaboration = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        Edit interactive presentations with collaborators
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
        You can enjoy real-time editing with your collaborators in Slides, and
        comment anywhere to speed up your workflow.
      </p>

      {/* Image Section */}
      <div className="relative max-w-4xl rounded-2xl overflow-hidden">
        <img
          src="https://i.ibb.co.com/SBjFRGh/slides1.jpg"
          alt="Interactive presentations"
          className="w-full rounded-2xl"
        />
      </div>
      <button onClick={() => navigate("/contactsales")} className="mt-6 border border-blue-500 font-semibold text-blue-500 h-12 w-44 text-lg rounded-full hover:bg-slate-100 transition">Get a free demo</button>
    </div>
  );
};

export default Collaboration;
