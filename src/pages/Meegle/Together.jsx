import React, { useState } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const Together = () => {
  const [activeRole, setActiveRole] = useState('Project Manager');

  const roles = [
    {
      name: 'Project Manager',
      icon: 'https://i.ibb.co.com/kqjnDHZ/projectmanager.png',
      content: {
        title: "You're the project lead Stop sweating the small stuff",
        subtitle: 'Move beyond basic task coordination to expertly navigate critical paths for visionary project leadership.',
        points: ['Agile and customizable workflows', 'Manage complex projects at scale', 'Robust reporting & insights'],
        features: [
          { name: 'Visualized Workflow', icon: '📊' }, 
          { name: 'Workload', icon: '📆' },
          { name: 'Charts and Metrics', icon: '📈' },
          { name: 'Panorama', icon: '🌐' },
        ],
        chart: 'https://i.ibb.co.com/K24hNjz/projectmanager.png',
      },
    },
    {
      name: 'Product Manager',
      icon: 'https://i.ibb.co.com/3z5XqB4/productmanager.png',
      content: {
        title: 'Launch the right product to market. Faster.',
        subtitle: 'Accelerate your product development and outpace the competition. Hit the market at perfect timing, every time',
        points: ['Agile and customizable workflows', 'Prioritize product backlogs', 'Break down granular tasks'],
        features: [
          { name: 'Visualized Workflow', icon: '📊' },
          { name: 'Project Hierarchy', icon: '🗂️' },
          { name: 'Automate Notifications', icon: '🔔' },
          { name: 'Kanban', icon: '📝' },
        ],
        chart: 'https://i.ibb.co.com/cY6J1sX/productmanager.png',
      },
    },
    {
      name: 'Developer',
      icon: 'https://i.ibb.co.com/vVYttTQ/developer.png',
      content: {
        title: 'Concentrate on coding. Speed up delivery.',
        subtitle: 'Simplify communication, eliminate redundancy. Plan, track, and release at scale with ease.',
        points: ['Track progress and issues', 'Focus on the right tasks', 'Integrate with developer tools'],
        features: [
          { name: 'Link Issue to Feature', icon: '🔗' },
          { name: 'Git Integration', icon: '🐙' },
          { name: 'Automate Notifications', icon: '📣' },
          { name: 'Personal Workspace', icon: '💼' },
        ],
        chart: 'https://i.ibb.co.com/7Yyzp0T/developer.png',
      },
    },
    {
      name: 'Operation',
      icon: 'https://i.ibb.co.com/rFmgNpF/operation.png',
      content: {
        title: 'Centralize information. Seamless alignment.',
        subtitle: 'Consolidate all project information in one place. Keep everyone on the same page.',
        points: ['Real-time updates and monitoring', 'Enforce operational best practices', 'Enhanced feedback loops'],
        features: [
          { name: 'Customized Workflow', icon: '⚙️' },
          { name: 'Voting and Comments', icon: '🗳️' },
          { name: 'Charts and Metrics', icon: '📊' },
          { name: 'Workload', icon: '📋' },
        ],
        chart: 'https://i.ibb.co.com/SfQW7kH/operation.png',
      },
    },
    {
      name: 'Sales',
      icon: 'https://i.ibb.co.com/TBHtzTJ/sales.png',
      content: {
        title: 'Boost sales to new heights. No opportunity missed.',
        subtitle: 'Track and manage all aspects of the sales cycle. Empower high-impact initiatives.',
        points: ['Campaign planning and tracking', 'Visualize the sales pipeline', 'Centralize customer profiles'],
        features: [
          { name: 'Customized Workflow', icon: '🛠️' },
          { name: 'Voting and Comments', icon: '💬' },
          { name: 'Charts and Metrics', icon: '📈' },
          { name: 'Custom Fields', icon: '📋' },
        ],
        chart: 'https://i.ibb.co.com/87NDMWb/sales.png',
      },
    },
  ];
  

  const backgroundColors = {
    'Project Manager': 'bg-deep-purple-50',
    'Product Manager': 'bg-deep-orange-50',
    'Developer': 'bg-cyan-50',
    'Operation': 'bg-green-50',
    'Sales': 'bg-indigo-50',
  };

  const currentContent = roles.find(role => role.name === activeRole)?.content;

  return (
    <div className="min-h-screen flex flex-col items-center p-6 mt-24">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Together, Every Step of the Way</h1>
        <p className="text-gray-dark mt-2">Meeple suits the diverse needs of team members, amplifying collective potentials.</p>
      </header>

      {/* Team Roles */}
      <div className="flex justify-center space-x-4 mb-8">
        {roles.map(role => (
          <button
            key={role.name}
            onClick={() => setActiveRole(role.name)}
            className={`px-4 py-2 rounded-lg text-sm font-medium flex flex-col items-center ${
              activeRole === role.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            style={{
              opacity: activeRole === role.name ? 1 : 0.5,
              transform: activeRole === role.name ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s ease',
            }}
          >
            <img src={role.icon} alt={`${role.name} Icon`} className="w-8 h-8 mb-2" />
            {role.name}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div
        className={`flex flex-col md:flex-row items-center shadow-md rounded-lg p-6 w-full max-w-4xl ${
          backgroundColors[activeRole]
        }`}
      >
        {/* Left Content */}
        <div className="flex-1 mb-6 md:mb-0 md:pr-6">
          <h2 className="text-3xl font-bold mb-2">{currentContent?.title}</h2>
          <p className="text-gray-600 mb-4">{currentContent?.subtitle}</p>
          <ul className="space-y-2">
            {currentContent?.points.map((point, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {point}
              </li>
            ))}
          </ul>

          {/* New Features Section */}
          <div className="flex flex-wrap gap-4 mt-12">
            {currentContent?.features?.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-gray-700 text-xl">{feature.icon}</span>
                <p className="text-gray-700 text-sm font-medium">{feature.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-center">
          <img
            src={currentContent?.chart}
            alt="Chart Overview"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Explore Solutions Button */}
      <button
        className="mt-8 px-6 py-3 bg-gradient-to-p hover:bg-gradient-hover-p text-white text-xl font-semibold rounded-full shadow transition flex items-center"
      >
        Explore More Features
        <FaArrowCircleRight className="ml-2" />
      </button>
    </div>
  );
};

export default Together;
