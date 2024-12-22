import Data from './data.json'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const AllPlans = () => {

   const [logos, setLogos] = useState([]);
   
   useEffect(() => {
    setLogos(Data.logos);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full py-8 bg-gradient-to-b from-white to-blue-100">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-8 grid grid-cols-3 text-center ml-32">
        <div>
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <button onClick={() =>  navigate("/signup")} className="text-blue-600 border border-blue-600 px-4 py-1 rounded-full">
            Try for free
          </button>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <div className="flex justify-center gap-2">
            <button onClick={() => navigate("/contactsales")} className="text-white bg-blue-600 px-4 py-1 rounded-full">
              Contact us
            </button>
            <button className="text-blue-600 border border-blue-600 px-4 py-1 rounded-full">
              Buy now
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <button onClick={() => navigate("/contactsales")} className="text-white bg-blue-600 px-4 py-1 rounded-full">
            Contact Sales
          </button>
        </div>
      </div>

      <div className="border-b"></div>

      {/* Usage Section */}
      <div className="max-w-6xl mx-auto pb-6">
        <h4 className="text-lg font-semibold mb-4 flex items-center">
          <span className="mr-2">📦</span> Usage
        </h4>
        <div className="border-b"></div>
        <div className="grid grid-cols-4 text-gray-800 mt-4">
          <div className="font-medium">Maximum number of users</div>
          <div className="text-center">50</div>
          <div className="text-center">500</div>
          <div className="text-center">Unlimited</div>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="max-w-6xl mx-auto pt-6 mt-12">
        <h4 className="text-lg font-semibold mb-4 flex items-center">
          <span className="mr-2">🪄</span> AI Features
        </h4>
<div className="border-b"></div>
        <div className="grid grid-cols-4 gap-4 text-gray-800 text-normal mt-6">
          {/* Feature Titles */}
          <div className="mt-4">
            <div className="mb-4">Smart Enterprise Search</div>
            <div className="mb-4">Lingo</div>
            <div className="mb-4">AI Document Translator</div>
            <div className="mb-4">Advanced Lark Base AI features</div>
            <div className="mb-4">
              Lark Minutes - Smart Recording & Translation
            </div>
          </div>

          {/* Starter Plan */}
          <div className="text-center">
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4"></div>
            <div className="mb-4"></div>
            <div className="mb-4">.....</div>
            <div className="mb-4">100GB</div>
          </div>

          {/* Pro Plan */}
          <div className="text-center">
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">5TB</div>
          </div>

          {/* Enterprise Plan */}
          <div className="text-center">
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">50TB</div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-6 mt-12">
        <h4 className="text-lg font-semibold mb-4 flex items-center">
          <span className="mr-2">💬</span> Messenger
        </h4>
<div className="border-b"></div>
        <div className="grid grid-cols-4 gap-4 text-gray-800 text-normal mt-6">
          {/* Feature Titles */}
          <div className="mt-4">
            <div className="mb-4">Unlimited chat, calls, groups with language translations and full context search history</div>
            <div className="mb-4">Custom bots</div>
            <div className="mb-4">Maximum number of group members</div>
            <div className="mb-4">Custom stickers and emojis</div>
            <div className="mb-4">Supergroups (up to 50,000 members)</div>
          </div>

          {/* Starter Plan */}
          <div className="text-center">
            <div className="mb-4 text-white">.</div>
            <div className="mb-4">✅</div>
            <div className="mb-4 text-white">.</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">50</div>
          </div>

          {/* Pro Plan */}
          <div className="text-center">
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">5TB</div>
          </div>

          {/* Enterprise Plan */}
          <div className="text-center">
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">✅</div>
            <div className="mb-4">50TB</div>
          </div>
        </div>
        <p className="text-center mt-4">※The indicated prices are all excluding tax.  *For teams under 50 members, online support will be provided.</p>
        <div className="flex items-center justify-center">
  <a href="#" className="text-blue-600 font-semibold hover:underline text-xl mt-2">
    More details ⬇️
  </a>
</div>
<div className="min-h-screen w-full flex flex-col justify-center items-center">
  <div className="text-gray-600 text-center mb-8">
    <p>Trusted by fast-growing companies from 125+ countries</p>
  </div>

  {/* Logo Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center items-center">
    {logos.map((logo, index) => (
      <div
        key={index}
        className="flex p-6 justify-center items-center bg-white shadow-md rounded-md w-32 h-14"
      >
        <img
          src={`https://logo.clearbit.com/${logo.toLowerCase()}.com`}
          alt={logo}
          className="h-12 mx-auto"
          onError={(e) => (e.target.src = '/path-to-default-logo.png')}
        />
      </div>
    ))}
  </div>

  {/* Customer Stories Link */}
  <div className="text-center mt-8">
    <p className="text-blue-600 font-medium cursor-pointer hover:underline">
      Read our customer stories &rarr;
    </p>
  </div>
</div>


      </div>
    </div>
  );
};

export default AllPlans;
