import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const BusinessNeeds = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "right"
          ? scrollLeft + clientWidth
          : scrollLeft - clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const cards = [
    {
      id: 1,
      badge: "HR",
      title: "Sync organization info of Lark contact to Base",
      subtitle: "Lark Technologies",
      image: "https://i.ibb.co/wB3Byc0/hr.jpg",
      pageUrl: "/details/hr-sync",
    },
    {
      id: 2,
      badge: "Team Collaboration",
      title: "Streamlined Management of Lark Tasks via Lark Base",
      subtitle: "Lark Technologies",
      image: "https://i.ibb.co/CMZQJwN/teamcollaboration1.jpg",
      pageUrl: "/details/team-tasks",
    },
    {
      id: 3,
      badge: "Team Collaboration",
      title: "Create and manage Lark Calendar events from Lark Base",
      subtitle: "Lark Technologies",
      image: "https://i.ibb.co/FsvhyKF/teamcollaboration2.jpg",
      pageUrl: "/details/calendar-events",
    },
    {
      id: 4,
      badge: "HR",
      title: "Sync Contact and Attendance data into Base regularly",
      subtitle: "Lark Technologies",
      image: "https://i.ibb.co/378jxNT/hr2.jpg",
      pageUrl: "/details/contact-attendance",
    },
    {
      id: 5,
      badge: "HR",
      title: "Integrating Leave Events in Lark Approval with Lark Calender",
      subtitle: "Lark Technologies",
      image: "https://i.ibb.co/yXQfFxT/hr3.jpg",
      pageUrl: "/details/leave-events",
    },
    {
      id: 6,
      badge: "HR",
      title: "Push Employment Anniversary Blessings Based on Lark Contacts",
      subtitle: "Lark Technologies",
      image: "https://i.ibb.co/drq5Lkb/hr4.jpg",
      pageUrl: "/details/employment-anniversary",
    },
    {
      id: 7,
      badge: "HR",
      title:
        "Integrating Business Trip Approval Events in Lark Approval with Lark Calender",
      subtitle: "Lark Technologies",
      image: "https://i.ibb.co/yyRzX1G/hr5.jpg",
      pageUrl: "/details/business-trip",
    },
  ];

  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-4xl font-semibold text-center mb-2">
        Free ready-to-use solutions
      </h2>
      <p className="text-center mb-8">
        Our solutions can be installed and used as is, or tailored to your
        business needs.
      </p>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => navigate(card.pageUrl)}
              className="flex-shrink-0 mb-10 rounded-xl shadow-lg p-4 w-full sm:w-96 cursor-pointer"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-t-xl w-full"
              />
              <div className="p-4">
                <span className="text-sm font-semibold text-black bg-pink-100 rounded-full px-3 py-1 inline-block mb-2">
                  {card.badge}
                </span>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 z-10"
        >
          ➡️
        </button>
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 z-10"
        >
          ⬅️
        </button>
      </div>
    </div>
  );
};

export default BusinessNeeds;
