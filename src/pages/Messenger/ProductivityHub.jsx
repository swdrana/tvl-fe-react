import { useState, useEffect } from "react";

const ProductivityHub = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Email Share");

  // Images for each view
  const images = {
    "Email Share": [
      "https://i.ibb.co.com/Vp3xSdZ/messenger4.jpg",
    ],
    "Calender Scheduling": [
      "https://i.ibb.co.com/hyBzRgt/messenger7.jpg",
    ],
    "Task": [
      "https://i.ibb.co.com/BqLqJ24/messenger5.jpg",
    ],
    "Approval": [
      "https://i.ibb.co.com/34w6Q6h/messenger6.jpg",
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
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
      Turn chats to productivity hubs
      </h1>
      <p className="text-gray-600 mb-8">Chat connects with everything. Share, schedule, meet, assign, and approve without leaving your chat feed.</p>

      {/* Tabs */}
      <div className="flex space-x-4 mb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-blue-700 font-medium text-2xl ${
              activeTab === tab ? "underline" : "hover:underline"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Image Section Centered */}
      <div className="rounded-2xl p-6 flex justify-center items-center w-3/4 h-full">
        <div className="grid grid-cols-1 gap-8">
          {images[activeTab].map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 text-center"
            >
              <img
                src={image}
                alt={`${activeTab} ${index + 1}`}
                className="rounded-xl w-[1100px] h-[500px] object-cover mb-4"
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

export default ProductivityHub;
