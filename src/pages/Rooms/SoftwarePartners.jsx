import React from 'react';

const SoftwarePartners = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-dark">World's Leading Smart Hardware Partners</h1>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center mx-auto max-w-5xl">
        {/* Logos */}
        <img src="https://i.ibb.co.com/S6DWBKS/anker.jpg" alt="Anker" className="h-10 mx-auto rounded-lg" />
        <img src="https://i.ibb.co.com/NWNxm8Q/bose.jpg" alt="Bose" className="h-10 mx-auto rounded-lg" />
        <img src="https://i.ibb.co.com/r5XhF59/cisko.png" alt="Cisco" className="h-10 mx-auto rounded-lg" />
        <img src="https://i.ibb.co.com/tbQgGbg/nio.png" alt="EPOS" className="h-10 mx-auto rounded-lg" />
        <img src="https://i.ibb.co.com/1KnwStq/hp.jpg" alt="HP" className="h-10 mx-auto rounded-lg" />
        <img src="https://i.ibb.co.com/L8cbbVm/advance.png" alt="Huddly" className="h-10 mx-auto rounded-lg" />
        <img src="https://i.ibb.co.com/whbgKw8/intel.jpg" alt="Intel" className="h-10 mx-auto rounded-lg" />
        <img src="https://i.ibb.co.com/HpXkjFs/jabra.jpg" alt="Jabra" className="h-10 mx-auto rounded-lg" />
        <img src="https://i.ibb.co.com/cyn3TK2/poly.jpg" alt="Poly" className="h-10 mx-auto rounded-lg" />
        <img src="https://i.ibb.co.com/HD6wVVK/sure.jpg" alt="Shure" className="h-10 mx-auto rounded-lg" />
        <img src="https://i.ibb.co.com/T8CCqCC/mi.jpg" alt="Mi" className="h-10 mx-auto rounded-lg" />
        <img src="https://i.ibb.co.com/VJyn5Vp/yealink.jpg" alt="Yealink" className="h-10 mx-auto rounded-lg" />
      </div>

      <div className="text-center mt-10">
        <button className="bg-blue font-semibold text-white h-12 w-44 rounded-full hover:btn-blue-hover transition">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default SoftwarePartners;
