import React from 'react';
import { Link } from 'react-router-dom'; 

const CustomerStories = () => {
  const stories = [
    {
      image: 'https://i.ibb.co.com/Zxw0fGm/popmart.webp',
      logo: 'https://i.ibb.co.com/pQ8W2bv/popmart.png',
      title: 'Immerse Yourself in Excitement: POP MART reinvents the POP',
      description:
        'POPMART successfully set up the e-commerce system in just 8 days, supported by Meegle.',
      link: '/popmart',
    },
    {
      image: 'https://i.ibb.co.com/RyY108w/nasdallu.webp',
      logo: 'https://i.ibb.co.com/Fb2R4v4/nasdally.png',
      title: 'Empowering Communities: How Meegle Strengthens Nas Daily\'s',
      description:
        'Meegle has reshaped Nas Daily’s product team into a more efficient and collaborative force.',
      link: '/nasdaily', 
    },
    {
      image: 'https://i.ibb.co.com/BytMM0r/mediastorm.webp',
      logo: 'https://i.ibb.co.com/yNcN5dQ/mediastorm.png',
      title: 'Unlock Creativity: How Meegle Navigates the Central Theme in',
      description:
        'Supported by Meegle, Mediastorm, the premier media start-up, achieved an impressive milestone by creating 130',
      link: '/mediastorm',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 mt-14">
      <h2 className="text-4xl font-bold text-center">More Stories From Our Customers</h2>
      <p className="text-center text-bluetext font-medium mt-2 cursor-pointer">
        Check All Stories →
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {stories.map((story, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
          >
            <img src={story.image} alt={story.logo} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-grow flex-col justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <img src={story.logo} alt="" className="w-28" />
                </div>
                <h3 className="font-semibold text-lg">{story.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{story.description}</p>
              </div>
              
              <Link to={story.link}>
                <button className="mt-10 px-3 py-1 bg-white text-bluetext border border-bluetext rounded-lg w-32 hover:bg-gray-300 transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerStories;
