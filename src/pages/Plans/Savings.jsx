import { useState } from "react";

const Savings = () => {
  const [employeeSize, setEmployeeSize] = useState(100);
  const [selectedTools, setSelectedTools] = useState(["slack", "google", "zoom"]);

  const tools = [
    { id: "slack", name: "Slack", icon: "🔗" },
    { id: "google", name: "Google Workspace", icon: "🔍" },
    { id: "teams", name: "Microsoft Teams", icon: "📞" },
    { id: "zoom", name: "Zoom", icon: "🎥" },
    { id: "notion", name: "Notion", icon: "📒" },
    { id: "trello", name: "Trello", icon: "📋" },
    { id: "asana", name: "Asana", icon: "📊" },
    { id: "monday", name: "Monday", icon: "📆" },
  ];

  const toggleTool = (id) => {
    setSelectedTools((prev) =>
      prev.includes(id) ? prev.filter((tool) => tool !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-blue-100 flex justify-center items-center px-6 py-4">
      <div className="w-full max-w-7xl flex flex-row rounded-lg overflow-hidden space-x-6">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col gap-6 bg-blue-100 p-8 rounded-lg">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-800 leading-tight">
              Cut costs with Lark.
            </h1>
            <h1 className="text-gray-800 text-4xl font-bold">
              Do more with less.
            </h1>
            <small className="text-gray-800 font-bold">* Calculation based on actual case studies of Lark customers</small>
          </div>

          {/* Div Box */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Employee Size Slider */}
            <label className="block font-semibold mb-2 text-gray-700">
              What is the employee size of your company?
            </label>
            <input
              type="range"
              min="1"
              max="5000"
              value={employeeSize}
              onChange={(e) => setEmployeeSize(e.target.value)}
              className="w-full cursor-pointer"
            />
            <p className="text-center mt-2 font-semibold text-lg">{employeeSize}</p>

            {/* Tool Selection */}
            <p className="font-semibold mt-6 mb-2 text-gray-700">What tools are you using?</p>
            <div className="grid grid-cols-4 gap-x-1 gap-4 relative">
  {tools.map((tool) => (
    <div key={tool.id} className="relative group">
      {/* Tool Icon Button */}
      <button
        onClick={() => toggleTool(tool.id)}
        className={`flex justify-center items-center h-16 w-16 shadow-md rounded-lg border ${
          selectedTools.includes(tool.id)
            ? "text-white"
            : "text-gray-700"
        } hover:transition`}
      >
        <span className="text-2xl">{tool.icon}</span>
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded-md whitespace-nowrap shadow-lg">
        {tool.name}
      </div>
    </div>
  ))}
</div>

          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-8 flex flex-col justify-start items-start bg-white text-left rounded-lg">
        <div>
        <h2 className="text-3xl font-bold text-blue-500 mb-4">3 apps</h2>
  <p className="text-gray-700 mb-4 text-lg">
    It is estimated that <span className="font-semibold text-blue-500">Lark Pro</span> can replace and
    complement at least 3 of your existing business tools.
  </p>
        </div>
  <div className="mt-12">
  <p className="text-4xl font-bold text-blue-500 mb-4">
    Saves $25,200 <span className="text-blue-500 text-2xl">/ year</span>
  </p>
  <p className="text-gray-600 mb-6">
    For a company of {employeeSize} employees, Lark can save a total cost of at least{" "}
    <span className="font-semibold text-gray-800">$25,200</span> per year.
  </p>
  </div>
 

  {/* Centered Button */}
  <div className="flex justify-center w-full mt-28">
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-12 rounded-full transition">
      Start saving with Lark today
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default Savings;
