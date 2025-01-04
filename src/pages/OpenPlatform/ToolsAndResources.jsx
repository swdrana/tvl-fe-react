import React, { useState } from "react";

const ToolsAndResources = () => {
  const [activeTab, setActiveTab] = useState("developingDebugging");

  const tabs = [
    { id: "gettingStarted", label: "Getting started" },
    { id: "developingDebugging", label: "Developing & debugging" },
    { id: "testingReleasing", label: "Testing & releasing" },
    { id: "appManagement", label: "App management" },
  ];

  const cards = {
    gettingStarted: [
      {
        title: "Getting Started Guide",
        description: "Learn the basics of getting started with our platform.",
      },
      {
        title: "Quickstart Toolkit",
        description: "A set of tools to help you start quickly.",
      },
    ],
    developingDebugging: [
      {
        title: "Gadget migration tool",
        description:
          "Migrate part of the code of gadgets from other platforms to Lark to make development easier.",
      },
      {
        title: "Gadget/Web app development",
        description:
          "Use the toolkit we offer to build and debug your gadget/web app more efficiently.",
      },
      {
        title: "Message card builder",
        description:
          "Explore a variety of templates and build your message card in an easy-to-use tool.",
      },
    ],
    testingReleasing: [
      {
        title: "Test Automation Tools",
        description: "Automate testing for your apps before releasing.",
      },
      {
        title: "Release Management Guide",
        description: "Best practices for releasing stable builds.",
      },
    ],
    appManagement: [
      {
        title: "Dashboard Overview",
        description: "Manage your apps with our comprehensive dashboard.",
      },
      {
        title: "Usage Analytics",
        description: "Track the usage of your apps and user engagement metrics.",
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-6 text-center">Tools & Resources</h2>

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8">
        {tabs.map((tab, index) => (
          <div key={tab.id} className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${
                activeTab === tab.id ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>
            {index < tabs.length - 1 && (
              <div className="w-10 h-1 bg-gray-300 mx-2">
                {activeTab === tab.id && (
                  <div className="h-1 bg-blue-500"></div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-center space-x-8 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-lg font-medium px-4 py-2 rounded-md ${
              activeTab === tab.id
                ? "text-blue-500 border-b-4 border-blue-500"
                : "text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards[activeTab].map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-md border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
            <span className="inline-block mt-4 text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-md">
              Tool
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsAndResources;
