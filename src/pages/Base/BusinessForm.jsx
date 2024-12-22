import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BusinessForm = () => {

  const navigate = useNavigate();
  
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

  // Array of the tabs
  const tabs = Object.keys(images);

  useEffect(() => {
    // Set interval to change the tab every 5 seconds
    const interval = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        const nextIndex = (currentIndex + 1) % tabs.length; // Cycle through tabs
        return tabs[nextIndex];
      });
    }, 5000); // Change every 5 seconds

    // Cleanup the interval when component is unmounted
    return () => clearInterval(interval);
  }, [tabs]);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 mt-6">
        Understand your business from all angles
      </h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-purple-700 font-medium text-2xl ${
              activeTab === tab ? "underline" : "hover:underline"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Image Section Centered */}
      <div className="bg-purple-200 rounded-xl p-6 flex justify-center items-center w-3/4 h-full">
        <div className="grid grid-cols-1 gap-8">
          {images[activeTab].map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 text-center"
            >
              <img
                src={image}
                alt={`${activeTab} ${index + 1}`}
                className="rounded w-[800px] h-[400px] object-cover mb-4"
              />
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => navigate("/contactsales")} className="mt-6 text-xl font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-4 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-44">
        Learn how
      </button>
    </div>
  );
};

export default BusinessForm;
