import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-6 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Tailored services for your business
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 flex-1">
          <div className="text-center -mt-10">
            <img src="/StarterIcon.avif" alt="Starter Icon" className="mx-auto w-14" />
            <h3 className="text-xl font-semibold text-gray-800 mt-2">Starter</h3>
          </div>
          <p className="text-gray-600 mt-4">
            The essentials to get your team up and running
          </p>
          <hr className="my-4 border-gray-300" />
          <h4 className="text-2xl font-semibold text-gray-800">Free for everyone</h4>
          <p className="text-gray-500 mb-6">Up to 50 users</p>
          <ul className="space-y-3 mb-6">
            {[
              "Unlimited chats & full context of message history",
              "Unlimited AI translation in chats, docs, etc.",
              "Enterprise search across all messages, files, emails, and more",
              "Custom business email",
              "5000 automated workflow executions/month",
              "100GB cloud storage + 200GB email storage",
              "100GB meeting recording and AI meeting minutes",
              "Up to 60 minutes meeting duration",
            ].map((feature, idx) => (
              <li key={idx} className="text-gray-600 flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/signup")}
            className="w-full py-3 border-2 rounded-full text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            Try for free &rarr;
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 flex-1">
          <div className="text-center -mt-10">
            <img src="/Pro.svg" alt="Pro Icon" className="mx-auto w-14" />
            <h3 className="text-xl font-semibold text-gray-800 mt-2">Pro</h3>
          </div>
          <p className="text-gray-600 mt-4">
            Advanced tools to take your growing team to the next level
          </p>
          <hr className="my-4 border-gray-300" />
          <h4 className="text-2xl font-semibold text-gray-800">$12 per user/month</h4>
          <p className="text-gray-500 mb-6">Up to 500 users</p>
          <ul className="space-y-3 mb-6">
            {[
              "Everything in Starter, plus:",
              "Basic AI fields and templates",
              "50,000 automated workflow executions/month",
              "1TB cloud storage + 5TB email storage",
              "5TB meeting recordings + AI meeting minutes",
              "Unlimited Wiki knowledge base",
              "24 hours meeting duration and 500 meeting participants",
              "More security and permission controls",
            ].map((feature, idx) => (
              <li key={idx} className="text-gray-600 flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex justify-between gap-4">
            <button
              onClick={() => navigate("/contactsales")}
              className="flex-1 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact sales &rarr;
            </button>
            <button className="flex-1 py-3 rounded-full border-2 text-blue-600 border-blue-600 hover:bg-blue-50">
              Buy Now
            </button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-lg shadow-md p-6 flex-1">
          <div className="text-center -mt-10">
            <img src="/Enterprise.svg" alt="Enterprise Icon" className="mx-auto w-14" />
            <h3 className="text-xl font-semibold text-gray-800 mt-2">Enterprise</h3>
          </div>
          <p className="text-gray-600 mt-4">
            Unlock advanced security, enhanced features, and seamless collaboration for enterprises
          </p>
          <hr className="my-4 border-gray-300" />
          <h4 className="text-2xl font-semibold text-gray-800">Let’s talk!</h4>
          <p className="text-gray-500 mb-6">Unlimited users</p>
          <ul className="space-y-3 mb-6">
            {[
              "Everything in Pro, plus:",
              "500,000 automated workflow executions/month",
              "10TB cloud storage + unlimited email storage",
              "50TB meeting recordings + AI meeting minutes",
              "Large group collaboration (up to 50,000 users)",
              "Single Sign-On (SSO)",
              "Restricted Mode Group Chat",
              "Advanced security, management, and compliance controls",
            ].map((feature, idx) => (
              <li key={idx} className="text-gray-600 flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/contactsales")}
            className="w-full py-3 border-2 rounded-full text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            Contact sales &rarr;
          </button>
        </div>
      </div>

      {/* Compare Plans Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => navigate("/plans")}
          className="px-6 py-3 border rounded-full text-blue-600 border-blue-600 hover:bg-blue-50"
        >
          Compare different plans
        </button>
      </div>
    </section>
  );
};

export default Pricing;
