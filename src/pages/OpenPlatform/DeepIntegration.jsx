import React, { useState } from "react";

const DeepIntegration = () => {
  const [showMore, setShowMore] = useState(false);

  // Cards data (add icons or use real data here)
  const cards = [
    { title: "Contacts", apis: "73 APIs", events: "17 Events", color: "bg-yellow-100" },
    { title: "Messenger", apis: "86 APIs", events: "13 Events", color: "bg-green-100" },
    { title: "Calendar", apis: "35 APIs", events: "4 Events", color: "bg-orange-100" },
    { title: "Drive", apis: "36 APIs", events: "8 Events", color: "bg-blue-100" },
    { title: "Doc", apis: "11 APIs", events: "", color: "bg-blue-50" },
    { title: "Sheet", apis: "56 APIs", events: "", color: "bg-green-100" },
    { title: "Wiki", apis: "14 APIs", events: "", color: "bg-blue-50" },
    { title: "Rooms", apis: "", events: "4 Events", color: "bg-green-50" },
    { title: "Video Conferencing", apis: "71 APIs", events: "19 Events", color: "bg-teal-50" },
    { title: "App Information", apis: "22 APIs", events: "11 Events", color: "bg-blue-50" },
    { title: "Email", apis: "37 APIs", events: "", color: "bg-yellow-100" },
    { title: "Approval", apis: "51 APIs", events: "7 Events", color: "bg-orange-50" },
    { title: "AI", apis: "8 APIs", events: "", color: "bg-blue-50" },
    { title: "Attendance", apis: "48 APIs", events: "1 Event", color: "bg-blue-50" },
    { title: "Tasks", apis: "52 APIs", events: "", color: "bg-blue-50" },
  ];

  // Number of cards to show initially
  const visibleCards = showMore ? cards : cards.slice(0, 6);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Leverage open capabilities for deep integration</h2>
          <p className="mt-4 text-gray-600">
            Diversified, robust APIs help to integrate your own system with Lark.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} p-6 rounded-lg shadow-md text-center`}
            >
              {/* Replace this with an actual icon */}
              <div className="text-3xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.apis}</p>
              {card.events && <p className="text-gray-500">{card.events}</p>}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-600 flex items-center justify-center gap-2 hover:text-blue-800"
          >
            {showMore ? "Show Less" : "Show More"}
            <span className="text-lg">{showMore ? "▲" : "▼"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeepIntegration;
