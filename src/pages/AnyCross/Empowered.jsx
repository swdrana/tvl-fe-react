import React from 'react';

const Empowered = () => {
  const sections = [
    {
      icon: '📈', 
      title: 'Sales',
      points: [
        'Streamline customer communications;',
        'Close more deals with ease;',
        'Ensure customer satisfaction;',
      ],
    },
    {
      icon: '📣',
      title: 'Marketing',
      points: [
        'Execute marketing processes with precision;',
        'Capitalize on key moments within the market;',
        'Capture high-quality leads efficiently;',
      ],
    },
    {
      icon: '⚙️',
      title: 'Operation',
      points: [
        'Simplify routine tasks;',
        'Automate data transfer;',
        'Expedite decision-making;',
      ],
    },
    {
      icon: '💰',
      title: 'Finance',
      points: [
        'Eliminate manual operations through a unified system;',
        'Retrieve precise, comprehensive, and consistent data;',
        'Enhanced credibility;',
      ],
    },
    {
      icon: '🧑‍💼',
      title: 'HR',
      points: [
        'Optimize employee lifecycle;',
        'Cultivate a thriving working environment;',
        'Drive team motivation and excellence;',
      ],
    },
    {
      icon: '💻',
      title: 'IT',
      points: [
        'Increase accessibility to integration and automation tools;',
        'Safeguard against security vulnerabilities;',
        'Drive growth by boosting overall efficiency;',
      ],
    },
  ];

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center py-12">
      <h1 className="text-4xl font-semibold text-center mb-8">
        Everyone, everywhere, all empowered
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center"
          >
            <div className="text-4xl mb-4">{section.icon}</div>
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <ul className="text-gray-700 text-left space-y-2 text-lg">
              {section.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button className="text-lg mt-6 font-semibold rounded-full bg-gradient-to-r hover:bg-gradient-hover px-1 py-2 text-white h-12 w-40">
        Learn More
      </button>
    </div>
  );
};

export default Empowered;
