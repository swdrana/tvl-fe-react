import React from "react";

const CooperateAndGrow = () => {
  const cards = [
    { id: 1, title: "Lark Forms", category: "Office Management", icon: "/icons/office-management.png" },
    { id: 2, title: "Zapier Connector", category: "Productivity", icon: "/icons/productivity.png" },
    { id: 3, title: "GIPHY", category: "Social & Fun", icon: "/icons/social-fun.png" },
    { id: 4, title: "Lark Flow", category: "Productivity", icon: "/icons/productivity.png" },
    { id: 5, title: "Trello Connector", category: "Project Management", icon: "/icons/project-management.png" },
    { id: 6, title: "Mockplus", category: "Design", icon: "/icons/design.png" },
    { id: 7, title: "Zoom Connector", category: "Voice & Video", icon: "/icons/voice-video.png" },
    { id: 8, title: "Announcement", category: "Communication", icon: "/icons/communication.png" },
    { id: 9, title: "Lark Help Center", category: "Customer Support", icon: "/icons/customer-support.png" },
    { id: 10, title: "Grafana Connector", category: "Developer Tools", icon: "/icons/developer-tools.png" },
    { id: 11, title: "Jira Master", category: "Project Management", icon: "/icons/project-management.png" },
    { id: 12, title: "Reminder", category: "Productivity", icon: "/icons/productivity.png" },
  ];

  return (
    <section className="relative bg-cyan-50 py-16 px-8">
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

      {/* Scrolling Rows */}
      <div className="space-y-6">
        {/* Row 1 */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-scroll">
            {cards.concat(cards).map((card, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 w-60 h-24 p-2 bg-white shadow-card rounded-lg flex items-center space-x-4"
              >
                {/* Icon on the left */}
                <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  className="h-12 w-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-dark">
                    {card.title}
                  </h3>
                  <p className="text-sm text-cyan-dark">{card.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Reverse Scroll) */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-scroll-reverse">
            {cards.concat(cards).map((card, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 w-60 h-24 p-2 bg-white shadow-card rounded-lg flex items-center space-x-4"
              >
                {/* Icon on the left */}
                <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  className="h-12 w-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-dark">
                    {card.title}
                  </h3>
                  <p className="text-sm text-cyan-dark">{card.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-scroll">
            {cards.concat(cards).map((card, index) => (
              <div
                key={`row3-${index}`}
                className="flex-shrink-0 w-60 h-24 p-2 bg-white shadow-card rounded-lg flex items-center space-x-4"
              >
                {/* Icon on the left */}
                <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  className="h-12 w-12"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-dark">
                    {card.title}
                  </h3>
                  <p className="text-sm text-cyan-dark">{card.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperateAndGrow;
