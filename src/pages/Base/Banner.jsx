
const Banner = () => {
    return (
        <div className="bg-purple-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Plan, execute, track, and deliver. <br /> From frontline operations to boardroom projects.
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Streamline operational routines, keep track of task completion, and gain actionable insights instantly to
            keep every part of your business in check.
          </p>
          {/* CTA Buttons */}
          <div className="flex space-x-4 mb-12">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700">
              Create Base for unified workflows
            </button>
            <button className="bg-white text-blue-600 py-2 px-4 rounded-lg shadow-lg hover:bg-blue-50">
              Schedule demo
            </button>
          </div>
  
          {/* Views Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Kanban View */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Kanban View</h3>
              <p className="text-gray-600">Website Design</p>
            </div>
  
            {/* Grid View */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Grid View</h3>
            </div>
  
            {/* Gantt View */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Gantt View</h3>
            </div>
  
            {/* Form View */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Form View</h3>
            </div>
  
            {/* Automated Workflow */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Automated Workflow</h3>
            </div>
  
            {/* Dashboard */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Dashboard</h3>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;