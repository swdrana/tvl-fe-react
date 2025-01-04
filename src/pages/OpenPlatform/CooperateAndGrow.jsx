import React from "react";

const CooperateAndGrow = () => {
  const cards = [
    { id: 1, title: "Lark Forms", category: "Office Management" },
    { id: 2, title: "Zapier Connector", category: "Productivity" },
    { id: 3, title: "GIPHY", category: "Social & Fun" },
    { id: 4, title: "Lark Flow", category: "Productivity" },
    { id: 5, title: "Trello Connector", category: "Project Management" },
    { id: 6, title: "Mockplus", category: "Design" },
    { id: 7, title: "Zoom Connector", category: "Voice & Video" },
    { id: 8, title: "Announcement", category: "Communication" },
    { id: 9, title: "Lark Help Center", category: "Customer Support" },
    { id: 10, title: "Grafana Connector", category: "Developer Tools" },
    { id: 11, title: "Jira Master", category: "Project Management" },
    { id: 12, title: "Reminder", category: "Productivity" },
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-8">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-dark">
          Become Lark ISV to cooperate and grow
        </h1>
        <p className="text-lg text-gray-light mt-4">
          Join Lark's ISV program to gain access to exclusive resources and
          reach customers globally.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-start text-white font-medium rounded-lg shadow-md hover:bg-blue-hover transition">
            Become an ISV
          </button>
          <button className="px-6 py-3 bg-gray-light text-gray-dark font-medium rounded-lg shadow-md hover:bg-gray-200 transition">
            App Directory
          </button>
        </div>
      </div>

      {/* Scrollable Card Section */}
      <div className="relative overflow-hidden">
        <div className="flex space-x-6 animate-scroll">
          {/* Render Cards */}
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-60 p-4 bg-white shadow-card rounded-lg text-center"
            >
              <h3 className="text-lg font-semibold text-gray-dark">
                {card.title}
              </h3>
              <p className="text-sm text-cyan-dark">{card.category}</p>
            </div>
          ))}
          {/* Duplicate for Seamless Scrolling */}
          {cards.map((card) => (
            <div
              key={`duplicate-${card.id}`}
              className="flex-shrink-0 w-60 p-4 bg-white shadow-card rounded-lg text-center"
            >
              <h3 className="text-lg font-semibold text-gray-dark">
                {card.title}
              </h3>
              <p className="text-sm text-cyan-dark">{card.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CooperateAndGrow;
