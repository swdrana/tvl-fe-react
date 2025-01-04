import React from 'react';

const Partnership = () => {
  return (
    <div className="bg-white py-12 relative">
     
      <div className="flex justify-center items-center gap-6 relative z-10">
     {/* First Partner */}
        <div className="text-center">
            <div className="relative p-6">
              <img
                src="https://i.ibb.co.com/19Db3KG/aws.png" 
                alt="AWS Partner"
                className="w-44 h-44 object-contain"
              />
            </div>
        </div>

        {/* Second Partner */}
        <div className="text-center">
            <div className="relative p-6">
              <img
                src="https://i.ibb.co.com/ZYdWR0S/platform.png" 
                alt="Scaled Agile Partner"
                className="w-44 h-44 object-contain"
              />
            </div>
        </div>
      </div>

      {/* Overlay Description */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-deep-orange-100 text-center py-2 px-4 mx-auto w-3/4 rounded-md shadow-md">
        <p className="text-sm text-gray-dark">
          Meegle is a strategic partner of the AWS Partner Network, and a platform partner of the Scaled Agile Partner Network.
        </p>
      </div>
    </div>
  );
};

export default Partnership;
