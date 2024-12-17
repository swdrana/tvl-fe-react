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
    { id: "clickup", name: "ClickUp", icon: "✅" },
  ];

  const toggleTool = (id) => {
    setSelectedTools((prev) =>
      prev.includes(id) ? prev.filter((tool) => tool !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center px-6 py-4">
      <div className="w-full max-w-7xl flex flex-row bg-white rounded-lg shadow-lg overflow-hidden space-x-6">
        {/* Left Section */}
        <div className="w-1/2 p-8 bg-gray-50 rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Cut costs with <span className="text-blue-500">Lark</span>.
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Do more with less. <br />
            <small className="text-sm">* Calculation based on actual case studies of Lark customers</small>
          </p>

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
          <div className="grid grid-cols-4 gap-4">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => toggleTool(tool.id)}
                className={`flex justify-center items-center h-16 w-16 rounded-lg border ${
                  selectedTools.includes(tool.id)
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700"
                } hover:bg-blue-200 transition`}
              >
                <span className="text-2xl">{tool.icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-blue-100 text-center rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">3 apps</h2>
          <p className="text-gray-700 mb-4 text-lg">
            It is estimated that <span className="font-semibold text-blue-500">Lark Pro</span> can replace and
            complement at least 3 of your existing business tools.
          </p>
          <p className="text-4xl font-bold text-blue-500 mb-4">
            Saves $25,200 <span className="text-gray-700 text-2xl">/ year</span>
          </p>
          <p className="text-gray-600 mb-6">
            For a company of {employeeSize} employees, Lark can save a total cost of at least{" "}
            <span className="font-semibold text-gray-800">$25,200</span> per year.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition">
            Start saving with Lark today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Savings;
