import jsonData from '../Home/FakeData/Platform.json';
import { useNavigate } from "react-router-dom";

const FrontlineFooter = () => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-14 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg shadow-md mt-12">
      {/* Left Side */}
      <div className="flex items-center space-x-3">
        <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs font-bold px-2 py-1 rounded">
          NEW!
        </span>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Employed with a frontline workforce? 
            <span className="ml-1 text-gray-400 cursor-pointer">ⓘ</span>
          </h2>
          <p className="text-sm text-gray-600">
            Discover Lark's exclusive new frontline solution, available only for Lark Pro & Enterprise customers.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <button onClick={() => navigate("/contactsales")} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md">
        Contact us
      </button>
    </div>
  );
};

const App = () => {
  
  const navigate = useNavigate();

  const testimonials = jsonData.testimonials;

  return (
    <div className="bg-gray-100 min-h-screen py-16 flex justify-center items-center">
      <div className="max-w-7xl w-full mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12 mt-20">
          <h1 className="text-4xl font-semibold text-gray-900 mb-2">
            Get started today. 
            <p className="text-blue-600">Free forever.</p>
            <p>No credit card needed.</p>
          </h1>
        </div>

        {/* Features Section */}
        <p className="text-center mb-6 text-2xl font-semibold">Included Features:</p>
        <div className="grid grid-cols-12 gap-x-2 justify-center mb-8 ml-20 cursor-pointer">
          {testimonials.map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center space-y-1 col-span-1"
            >
              {/* Icon */}
              <img
                src={feature.icon}
                alt={feature.label}
                className="w-10 h-10 rounded-full"
              />
              {/* Label */}
              <p className="text-sm font-medium text-gray-800">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <h2 className="text-4xl font-bold mb-2">Starter</h2>
            <p className="text-gray-500 font-semibold mb-4">
              The essentials to get your team up and running
            </p>
            <p className="text-4xl font-bold">
              $0<span className="text-base font-bold"> /month</span>
            </p>
            <p className="text-sm text-gray-500 font-semibold mb-6">Up to 50 users</p>
            <button onClick={() => navigate("/signup")} className="w-full bg-white font-bold text-blue-600 py-3 border border-blue-600 rounded-full hover:bg-slate-200">
              Try for free
            </button>
            <ul className="text-left text-gray-600 font-semibold mt-6 space-y-2">
              <li>✅ Unlimited chats & full context of message history</li>
              <li>✅ Unlimited AI translation in chats, docs, meetings and email</li>
              <li>✅ Enterprise search across all messages, files, emails, calendars, and documents</li>
              <li>✅ Custom business email</li>
              <li>✅ 5000 automated workflow executions / month</li>
              <li>✅ 100GB cloud storage + 200GB email storage</li>
              <li>✅ 100GB meeting recording and AI meeting minutes</li>
              <li>✅ Up to 60 minutes meeting duration</li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center relative">
            <div className="absolute -top-3 right-3 bg-yellow-300 text-xs font-bold py-1 px-3 rounded-full">
              Most Popular!
            </div>
            <h2 className="text-4xl font-bold mb-2">PRO</h2>
            <p className="text-gray-500 font-semibold mb-4">
              Advanced tools to take your growing team to the next level
            </p>
            <p className="text-4xl font-bold">
              $12<span className="text-base font-bold"> /user/month</span>
            </p>
            <p className="text-sm text-gray-500 mb-6 font-semibold">Up to 500 users</p>
            <div className="flex gap-2">
              <button onClick={() => navigate("/contactsales")} className="w-full bg-blue-500 font-bold text-white py-3 rounded-full hover:bg-blue-600">
                Contact Sales
              </button>
              <button className="w-full border font-bold border-blue-500 text-blue-500 py-2 rounded-full hover:bg-blue-50">
                Buy now
              </button>
            </div>
            <ul className="text-left text-gray-600 mt-6 font-semibold space-y-2">
              <li>✅ Base AI fields and templates</li>
              <li>✅ 50,000 automated workflow executions / month</li>
              <li>✅ 1 TB Cloud Storage + 5 TB Email Storage</li>
              <li>✅ 5 TB meeting recording + AI meeting minutes</li>
              <li>✅ Unlimited Wiki Knowledge base</li>
              <li>✅ 24 hours meeting duration and 500 meeting participants</li>
              <li>✅ More security and permission controls</li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <h2 className="text-4xl font-bold mb-2">Enterprise</h2>
            <p className="text-gray-500 font-semibold mb-4">
              Unlock advanced security & features for enterprises
            </p>
            <p className="text-3xl font-bold mb-2">Let's Talk</p>
            <p className="text-sm text-gray-500 mb-6 font-semibold">Unlimited users</p>
            <button onClick={() => navigate("/contactsales")} className="w-full bg-blue-500 font-bold text-white py-3 rounded-full hover:bg-blue-600">
              Contact Sales
            </button>
            <ul className="text-left text-gray-600 mt-6 font-semibold space-y-2">
              <li>✅ 500,000 automated workflow executions / month</li>
              <li>✅ 10TB cloud storage + Unlimited email storage</li>
              <li>✅ 50TB meeting recordings + AI meeting minutes</li>
              <li>✅ Large group collaboration (up to 50,000 users)</li>
              <li>✅ Single sign-on (SSO)</li>
              <li>✅ Restricted Mode Group Chat</li>
              <li>✅ Advanced security, management and compliance controls</li>
            </ul>
          </div>
        </div>
        <FrontlineFooter />
      </div>
    </div>
  );
};

export default App;
