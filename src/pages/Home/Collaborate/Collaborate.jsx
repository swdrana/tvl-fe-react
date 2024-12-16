import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Collaborate = () => {
  
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('All Businesses');

  const tabContent = {
    'All Businesses': {
      heading: 'All Businesses',
      backgroundImage: 'https://i.ibb.co.com/HhFppp5/allbusiness.jpg',
      overlayImage: 'https://i.ibb.co.com/mX6YQRD/overlaybusiness.jpg',
      description: [
        'Work together globally, with translations for chats, documents, meetings, and more.',
        'Manage projects and track progress from your phone.',
        'Streamline approval process for purchases, promotions, and more.',
      ],
      textBgColor: 'bg-violet-100',
    },
    'Food & Beverage': {
      heading: 'Food & Beverage',
      backgroundImage: 'https://i.ibb.co.com/10y09dq/foodandbev.jpg',
      overlayImage: 'https://i.ibb.co.com/FWDPWg7/foodoverlay.jpg',
      description: [
        'Streamline HQ <> frontline communication with mobile-optimized secure chat.',
        'Digitalize store opening and closing checklists.',
        'Set up approval workflows for purchase, promotions, and more.',
      ],
      textBgColor: 'bg-orange-100',
    },
    Retail: {
      heading: 'Retail',
      backgroundImage: 'https://i.ibb.co.com/Ctdttgg/retail.jpg',
      overlayImage: 'https://i.ibb.co.com/k3hyqby/retailoverlay.jpg',
      description: [
        'Increase frontline productivity with mobile-optimized chat-based task management',
        'Digitalize store opening and closing, incident reporting, approvals workfows',
        'Get daily insights on sales and revenue on your phone',
      ],
      textBgColor: 'bg-blue-100',
    },
    Technology: {
      heading: 'Technology',
      backgroundImage: 'https://i.ibb.co.com/N6TcwTm/tech.jpg',
      overlayImage: 'https://i.ibb.co.com/1XzXZpN/techoverlay.jpg',
      description: [
        'Collaborate across borders with translations in chat, docs, meetings',
        'Manage projects and visualise progress in one-click',
        'Replace multiple tools for chat, video, docs, analytics and more with Lark',
      ],
      textBgColor: 'bg-gray-100',
    },
  };

  return (
    <div className="bg-white pt-32 px-4 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-xl lg:text-4xl font-semibold mb-4">
          Plan, collaborate, execute and measure
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-l font-semibold">
          Lark empowers you to achieve operational excellence by providing tools
          to organize your business, digitalize workflows, and ensure your plans
          turn into action on the ground.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-10">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-bold py-4 px-6 ${
              activeTab === tab
                ? 'bg-black text-white'
                : 'text-black border border-gray-300'
            } rounded-lg`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col lg:flex-row items-stretch lg:space-x-10 space-y-8 lg:space-y-0 w-full max-w-7xl">
          {/* Left Image Section */}
          <div className="relative flex-1 bg-gray-100 h-full">
            {/* Background Image */}
            <img
              src={tabContent[activeTab].backgroundImage}
              alt={activeTab}
              className="rounded-2xl h-full w-full object-cover"
            />
            {/* Overlay Image */}
            <div className="absolute bottom-4 -left-14 p-4 w-80">
              <img
                className="rounded-xl"
                src={tabContent[activeTab].overlayImage}
                alt="Overlay"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div
            className={`flex-1 p-6 rounded-2xl flex flex-col justify-between ${tabContent[activeTab].textBgColor}`}
          >
            {/* Heading */}
            <h2 className="text-4xl font-semibold mb-4">
              {tabContent[activeTab].heading}
            </h2>

            {/* List */}
            <ul className="space-y-8 text-gray-500 font-semibold text-xl px-4">
              {tabContent[activeTab].description.map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button onClick={() => navigate("/contactsales")} className="text-xl font-semibold rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-4 py-2 text-white hover:from-blue-700 hover:to-blue-700 h-12 w-44">
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
