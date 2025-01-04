import React, { useState, useRef } from "react";

const AllSolutions = () => {
  const categories = ["All", "Human Resources", "Project Management", "Office Management", "Workplace Efficiency"];
  const cards = [
    { id: 1, category: "Human Resources", title: "HR System Integration", description: "Integrating HR systems with Lark...", tag: "General" },
    { id: 2, category: "Project Management", title: "Smart Project Tools", description: "Lark project tools streamline workflows...", tag: "Project Management" },
    { id: 3, category: "Office Management", title: "Efficient Office Solutions", description: "Enhancing office management efficiency...", tag: "Office Management" },
    { id: 4, category: "Workplace Efficiency", title: "Boost Productivity", description: "Lark tools improve workplace productivity...", tag: "Workplace Efficiency" },
    { id: 5, category: "General", title: "Integrating Enterprise SSO", description: "Single Sign-On (SSO) has become a necessity...", tag: "General" },
    { id: 6, category: "Human Resources", title: "Recruitment Solutions", description: "Smart recruitment mode makes hiring easier...", tag: "Human Resources" },
    { id: 7, category: "Project Management", title: "Task Automation", description: "Automating tasks with Lark project tools...", tag: "Project Management" },
  ];
  

  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRef = useRef(null);

  const filteredCards = activeCategory === "All" 
  ? cards 
  : cards.filter(card => card.category === activeCategory);


  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-blue-50 py-10 px-5">
      <h2 className="text-2xl font-bold text-center mb-6">Find the right solutions for every need</h2>
      <p className="text-center mb-8">Customized solutions for various business scenarios help drive digital transformation.</p>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Card Section */}
      <div className="relative">
        {/* Scroll Buttons */}
        <button
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full ${
            filteredCards.length <= 3 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={scrollLeft}
          disabled={filteredCards.length <= 3}
        >
          ◀
        </button>
        <button
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full ${
            filteredCards.length <= 3 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={scrollRight}
          disabled={filteredCards.length <= 3}
        >
          ▶
        </button>

        <div
          className="flex space-x-4 overflow-x-auto no-scrollbar"
          ref={scrollRef}
        >
          {filteredCards.map(card => (
            <div
              key={card.id}
              className="bg-white shadow-lg rounded-lg p-4 min-w-[300px] flex-shrink-0"
            >
              <h3 className="text-lg font-bold">{card.title}</h3>
              <span className="text-sm text-blue-500">{card.tag}</span>
              <p className="text-sm mt-2">{card.description}</p>
              <a href="#" className="text-blue-500 text-sm mt-2 block">Read ➔</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSolutions;
