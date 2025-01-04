import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const ProjectManagement = () => {
  const [activeTab, setActiveTab] = useState("Workflow");

  const tabData = {
    Workflow: "https://i.ibb.co.com/NSHRq6X/project1.webp",
    Fields: "https://i.ibb.co.com/pRtkLmY/fields.webp",
    Details: "https://i.ibb.co.com/r6NmrWN/details.webp",
    Kanban: "https://i.ibb.co.com/L88sQBY/kanan.webp",
    Gantt: "https://i.ibb.co.com/mBsmWqc/gantt.webp",
    Tree: "https://i.ibb.co.com/Wf7K43T/tree.webp",
    Charts: "https://i.ibb.co.com/FmBBHVr/chart.webp",
    Automation: "https://i.ibb.co.com/3zfKVrv/automation.webp",
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <h1 className="text-5xl font-bold mb-6 text-center">
        All You Need for Project Management <br /> is in <span className="text-indigo-500">Meegle</span>
      </h1>
      <div className="bg-lime-200 p-3">
        <h2>Extract and visualize every step from start to finish.</h2>
      </div>
      <div className="flex space-x-4 mb-6 mt-6">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl ${
              activeTab === tab
                ? "bg-purple text-white"
                : "bg-gray-200 text-gray-700"
            } transition`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-full max-w-4xl rounded-lg p-6">
        <img
          src={tabData[activeTab]}
          alt={activeTab}
          className="w-full h-auto rounded"
        />
      </div>
      <button
        onClick={() => alert(`You clicked on ${activeTab}`)}
        className="mt-10 mb-10 px-6 py-3 bg-gradient-to-p hover:bg-gradient-hover-p text-white text-xl font-semibold rounded-full shadow transition flex items-center"
      >
        Explore More Features {activeTab}
        <FaArrowCircleRight className="ml-2" />
      </button>
    </div>
  );
};

export default ProjectManagement;
