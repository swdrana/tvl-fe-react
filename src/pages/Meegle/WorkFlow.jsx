import React from "react";

const Workflow = () => {
  const cards = [
    {
      title: "Linked. Every Step.",
      description:
        "Tired of constant back-and-forth? Let the workflow smoothly with continuous dependencies in one seamless workflow.",
      bgColor: "bg-pink-50",
      image: "/path-to-image1.png", 
    },
    {
      title: "Connected. Every Team.",
      description:
        "Losing transparency of who's doing what? Meegle unites cross-functional teams with clear roles and responsibilities.",
      bgColor: "bg-blue-50",
      image: "/path-to-image2.png", 
    },
    {
      title: "Launched. Every Dream.",
      description:
        "Bring your ideas to life with structured workflows and actionable tasks.",
      bgColor: "bg-green-50",
      image: "/path-to-image3.png", 
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold mb-12">
        Experience Workflows Like Never Before
      </h2>
      <div className="flex flex-col gap-8 px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-6 rounded-lg shadow-lg ${card.bgColor} relative`}
          >
            {/* Text Content */}
            <div className={`flex-1 ${index % 2 === 0 ? "order-1" : "order-2"}`}>
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>

            {/* Image */}
            <div
              className={`flex-shrink-0 ${
                index % 2 === 0 ? "order-2" : "order-1"
              }`}
            >
              <img
                src={card.image}
                alt=""
                className="w-64 h-64 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
