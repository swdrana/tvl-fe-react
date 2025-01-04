import React from 'react';

const TinyFooter = () => {
  return (
    <div className="relative bg-deep-purple-50 flex flex-col items-center text-center py-24 px-6"
    >
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">
        Discover a new way to collaborate
      </h2>
      <div className="flex space-x-4">
        <button className="bg-blue text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-blue-hover transition">
          Try for free
        </button>
        <button className="border border-bluetext text-bluetext font-medium py-2 px-6 rounded-full hover:bg-blue-50 transition">
          Contact us
        </button>
      </div>
      {/* Add decorative images */}
      <div className="absolute left-10 bottom-10">
        <img src="https://i.ibb.co.com/fQ4nWqm/footer2.webp" alt="Left Illustration" />
      </div>
      <div className="absolute right-10 bottom-10">
        <img src="https://i.ibb.co.com/v452832/okrfooter.webp" alt="Right Illustration" />
      </div>
    </div>
  );
};

export default TinyFooter;
