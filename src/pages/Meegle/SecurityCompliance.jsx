import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const SecurityCompliance = () => {
  return (
    <div className="bg-white">

      {/* Heading Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-dark">Robust Data Security and Compliance</h2>
        <p className="text-gray-light mt-2">
          Protecting customer data security is a top priority and the foundation of our relationship with our customers.
        </p>
        <a href="/learn-more" className="text-blue-500 font-medium mt-4 inline-block">
          Learn More →
        </a>
      </div>

      {/* Certifications Section */}
      <div className="flex justify-center gap-10 my-8">
        <img
          src="https://i.ibb.co.com/P5DNZth/robust1.png"
          alt="Certification 1"
          className="h-12 object-contain"
        />
        <img
          src="https://i.ibb.co.com/0QfV42H/robust2.png"
          alt="Certification 2"
          className="h-12 object-contain"
        />
        <img
          src="https://i.ibb.co.com/FsDBX99/robust3.png"
          alt="Certification 3"
          className="h-12 object-contain"
        />
        <img
          src="https://i.ibb.co.com/cJJz43r/robst4.png"
          alt="Certification 4"
          className="h-12 object-contain"
        />
        <img
          src="https://i.ibb.co.com/S5tcK8H/middle.png"
          alt="Certification 5"
          className="h-12 object-contain"
        />
        <img
          src="https://i.ibb.co.com/7p7HgmM/robust5.png"
          alt="Certification 5"
          className="h-12 object-contain"
        />
        <img
          src="https://i.ibb.co.com/yPK1khV/robust6.png"
          alt="Certification 5"
          className="h-12 object-contain"
        />
      </div>

      {/* Map Section */}
      <div className="min-h-screen flex items-center justify-center">
  <div className="relative my-6">
    <img 
      src="https://i.ibb.co.com/cb7vFp7/robust.webp" 
      alt="" 
      className="h-96 max-w-6xl w-auto mx-auto object-contain" 
    />
  </div>
</div>




      {/* CTA Section */}
      <div className="text-center">
        <h3 className="text-4xl font-semibold text-gray-dark">
          Navigate Project Success with <br /> Meegle, Today
        </h3>
        <p className="text-gray-light mt-2">
          Limited time offers are available. Pay less to get more today.
        </p>
        <div className="flex justify-center gap-4 mt-6 mb-8">
  <button className="mt-10 px-6 py-3 bg-gradient-to-p hover:bg-gradient-hover-p text-white text-xl font-semibold rounded-full shadow transition flex items-center">
    Try for Free <FaArrowCircleRight className="ml-2" />
  </button>
  <button className="mt-10 px-6 py-3 bg-white text-bluetext border border-bluetext rounded-full hover:bg-gray-300 transition">
    Join Our Community
  </button>
</div>
      </div>
    </div>
  );
};

export default SecurityCompliance;
