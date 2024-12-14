import { useState } from "react";

const BusinessForm = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("List View");

  // Images for each view
  const images = {
    "List View": [
      "https://i.ibb.co.com/DG5h3WL/listview.png",
    ],
    "Kanban View": [
      "https://i.ibb.co.com/cyfYsRc/kanbanview.png",
    ],
    "Gantt View": [
      "https://i.ibb.co.com/6gQrW5J/ganttview.png",
    ],
    "Gallery View": [
      "https://i.ibb.co.com/2ZHwsMn/galleryview.png",
    ],
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Understand your business from all angles
      </h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {Object.keys(images).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)} 
            className={`text-blue-600 font-medium ${
              activeTab === tab ? "underline" : "hover:underline"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="bg-purple-100 rounded-lg p-6">
        <div className="grid grid-cols-4 gap-4">
          {images[activeTab].map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 text-center"
            >
              <img
                src={image}
                alt={`${activeTab} ${index + 1}`}
                className="rounded w-full h-full object-cover mb-4"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Learn How Button */}
      <button className="mt-6 text-xl font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-4 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-44">
        Learn how
      </button>
    </div>
  );
};

export default BusinessForm;
