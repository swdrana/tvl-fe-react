import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const topics = {
  "Food & Beverage": {
    heading: "Looking for Food & Beverage Solutions?",
    description:
      "'Freshness' is the key that stimulates appetite in the food and beverage sector. Yet, staying ahead of evolving tastes while managing diverse teams can be challenging. From concept to plate, Meegle streamlines workflows, ensuring culinary excellence at every stage. Say goodbye to operational complexities and hello to a smooth journey towards culinary success.",
    image: "https://i.ibb.co.com/gVyRH35/foodbvrg.png",
    color: "text-green-600",
    link: "/food-beverage", 
  },
  "Store Operation": {
    heading: "Looking for Store Operation Solutions?",
    description:
      "In the world of retail and consumer goods, operational excellence is the cornerstone of customer satisfaction. Meegle harmonizes store networks through interconnected workflows. Meegle amplifies the voice of customers by integrating feedback loops into workflows, ensuring their needs are at the forefront of every strategic move.",
    image: "https://i.ibb.co.com/QmxXWZS/store.png",
    color: "text-deep-purple-500",
    link: "/store-operation", 
  },
  "Media Operation": {
    heading: "Looking for Media Operation Solutions?",
    description:
      "With comprehensive features tailored to managing digital content, Meegle unleashes a new era of streamlined processes and unwavering focus on captivating storytelling. Ideas flourish, collaboration flows smoothly, and digital creators can focus on what they do best.",
    image: "https://i.ibb.co.com/7QWWyjm/media.png",
    color: "text-pink-600",
    link: "/media-operation", 
  },
  "Game Development": {
    heading: "Looking for Game Development Solutions?",
    description:
      "Meegle offers a suite of powerful features that empower game developers to stay agile and responsive to the dynamic landscape of the gaming industry. With seamless collaboration and the ability to effortlessly break down the roadmap, Meegle allows game developers to orchestrate game releases and create captivating experiences without a hitch.",
    image: "https://i.ibb.co.com/PZBp5DD/game.webp",
    color: "text-deep-orange-700",
    link: "/game-development", 
  },
  "Agile Development": {
    heading: "Looking for Agile Development Solutions?",
    description:
      "Made for product teams, by product teams. Meegle seamlessly incorporates key Scrum elements that allow research and development teams to thrive. Agile collaboration has never been easier. Owners, developers, and stakeholders are united in an integrated ecosystem, allowing for cohesive planning, fruitful retrospectives, and relentless progress.",
    image: "https://i.ibb.co.com/fDDcGzv/agile.png",
    color: "text-amber-600",
    link: "/agile-development", 
  },
  "Software Development": {
    heading: "Looking for Software Development Solutions?",
    description:
      "Elevate your team's software development capabilities with Meegle. Seamlessly unite developers, stakeholders, and cross-functional teams within our integrated collaborative platform. Maintain an extensive overview of requirements and issues through highly visual workflows and dynamic dashboards that empower your entire development lifecycle.",
    image: "https://i.ibb.co.com/gM9J1Mx/software.png",
    color: "text-indigo-600",
    link: "/software-development", 
  },
  "Sales Management": {
    heading: "Looking for Sales Management Solutions?",
    description:
      "Revolutionize your sales team's performance with Meegle, a cutting-edge sales management solution tailored to streamline your customer management and drive revenue growth. Designed to centralize customer data and empower teams with intuitive workflows, Meegle will propel your sales team to all-new heights.",
    image: "https://i.ibb.co.com/vv0K24c/salesmanage.png",
    color: "text-lime-700",
    link: "/sales-management", 
  },
};

export default function Development() {
  const topicKeys = Object.keys(topics);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % topicKeys.length);
  };

  const selectedTopic = topicKeys[selectedIndex];
  const { heading, description, image, color, link } = topics[selectedTopic];

  const topicName = selectedTopic;

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-purple-50 to-white flex flex-col items-center p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">
          Looking for{" "}
          <span className={`${color}`}>
            {topicName}
            <button
              onClick={handleNext}
              className="inline-flex items-center p-1 ml-2 bg-gray-300 border rounded-full shadow mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>{" "}
          Solutions?
        </h1>
        <h1 className="text-4xl font-bold mt-2">We've Got You Covered!</h1>
        <p className="text-gray-600 mt-3">
          Check out Meegle’s solution! Boost efficiency and achieve optimal
          performance.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center p-6 gap-28 rounded-lg w-full max-w-4xl">
        {/* Image */}
        <img
          src={image}
          alt="Topic"
          className="w-full lg:w-1/2 rounded-lg mb-4 lg:mb-0"
        />
        
        {/* Text Content */}
        <div className="lg:ml-6 flex flex-col">
          <h2 className="text-lg font-semibold mb-4 text-deep-purple-500">
            How Meegle Benefits Your Team
          </h2>
          <p className="text-gray-600">{description}</p>

          <Link to={link}>
            <button className="mt-6 px-4 py-2 bg-white text-bluetext font-semibold border border-bluetext rounded-lg w-40 hover:bg-gray-300 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
