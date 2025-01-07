import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const CooperateAndGrow = () => {
  const row1Cards = [
    { id: 1, title: "Lark Forms", category: "Office Management", icon: "https://i.ibb.co.com/J23sGC5/forms.png", link: "/lark-forms" },
    { id: 2, title: "Zapier Connector", category: "Productivity", icon: "/icons/productivity.png", link: "/zapier-connector" },
    { id: 3, title: "GIPHY", category: "Social & Fun", icon: "https://i.ibb.co.com/bHNpNZ9/giphy.png", link: "/giphy" },
    { id: 4, title: "Lark Forms", category: "Office Management", icon: "/icons/office-management.png", link: "/lark-forms" },
    { id: 5, title: "Zapier Connector", category: "Productivity", icon: "/icons/productivity.png", link: "/zapier-connector" },
    { id: 6, title: "GIPHY", category: "Social & Fun", icon: "https://i.ibb.co.com/bHNpNZ9/giphy.png", link: "/giphy" },
  ];

  const row2Cards = [
    { id: 1, title: "Lark Flow", category: "Productivity", icon: "/icons/productivity.png", link: "/lark-flow" },
    { id: 2, title: "Trello Connector", category: "Project Management", icon: "https://i.ibb.co.com/c396QsD/trello.png", link: "/trello-connector" },
    { id: 3, title: "Mockplus", category: "Design", icon: "https://i.ibb.co.com/hWqqmpH/mockplus.png", link: "/mockplus" },
    { id: 4, title: "Lark Flow", category: "Productivity", icon: "/icons/productivity.png", link: "/lark-flow" },
    { id: 5, title: "Trello Connector", category: "Project Management", icon: "https://i.ibb.co.com/c396QsD/trello.png", link: "/trello-connector" },
    { id: 6, title: "Mockplus", category: "Design", icon: "https://i.ibb.co.com/hWqqmpH/mockplus.png", link: "/mockplus" },
  ];

  const row3Cards = [
    { id: 1, title: "Zoom Connector", category: "Voice & Video", icon: "https://i.ibb.co.com/dK7MhFw/zoom.png", link: "/zoom-connector" },
    { id: 2, title: "Announcement", category: "Communication", icon: "/icons/communication.png", link: "/announcement" },
    { id: 3, title: "Lark Help Center", category: "Customer Support", icon: "/icons/customer-support.png", link: "/lark-help-center" },
    { id: 4, title: "Zoom Connector", category: "Voice & Video", icon: "https://i.ibb.co.com/dK7MhFw/zoom.png", link: "/zoom-connector" },
    { id: 5, title: "Announcement", category: "Communication", icon: "/icons/communication.png", link: "/announcement" },
    { id: 6, title: "Lark Help Center", category: "Customer Support", icon: "/icons/customer-support.png", link: "/lark-help-center" },
  ];

  const [hoveredRow, setHoveredRow] = useState(null);

  const handleMouseEnter = (rowIndex) => {
    setHoveredRow(rowIndex);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

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
          <button className="px-6 py-3 bg-blue text-white font-medium rounded-lg hover:bg-blue-hover transition">
            Become an ISV
          </button>
          <button className="px-6 py-3 bg-transparent text-bluetext font-medium rounded-lg border border-bluetext hover:bg-gray-100 transition">
            App Directory
          </button>
        </div>
      </div>

      {/* Scrolling Rows */}
      <div className="space-y-6">
        {/* Row 1 */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`flex space-x-6 ${hoveredRow === 1 ? "" : "animate-scroll"}`}
          >
            {row1Cards.map((card, index) => (
              <Link key={`row1-${index}`} to={card.link}>
                <div className="flex-shrink-0 w-60 h-24 p-2 bg-white shadow-card rounded-lg flex items-center space-x-4 hover:shadow-lg transition">
                  <img
                    src={card.icon}
                    alt={`${card.title} icon`}
                    className="h-12 w-12"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-dark">{card.title}</h3>
                    <p className="text-sm text-cyan-dark">{card.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`flex space-x-6 ${hoveredRow === 2 ? "" : "animate-scroll-reverse"}`}
          >
            {row2Cards.map((card, index) => (
              <Link key={`row2-${index}`} to={card.link}>
                <div className="flex-shrink-0 w-60 h-24 p-2 bg-white shadow-card rounded-lg flex items-center space-x-4 hover:shadow-lg transition">
                  <img
                    src={card.icon}
                    alt={`${card.title} icon`}
                    className="h-12 w-12"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-dark">{card.title}</h3>
                    <p className="text-sm text-cyan-dark">{card.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`flex space-x-6 ${hoveredRow === 3 ? "" : "animate-scroll"}`}
          >
            {row3Cards.map((card, index) => (
              <Link key={`row3-${index}`} to={card.link}>
                <div className="flex-shrink-0 w-60 h-24 p-2 bg-white shadow-card rounded-lg flex items-center space-x-4 hover:shadow-lg transition">
                  <img
                    src={card.icon}
                    alt={`${card.title} icon`}
                    className="h-12 w-12"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-dark">{card.title}</h3>
                    <p className="text-sm text-cyan-dark">{card.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperateAndGrow;
