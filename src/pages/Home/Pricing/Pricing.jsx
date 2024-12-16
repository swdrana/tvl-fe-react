import { useNavigate } from "react-router-dom";

const Pricing = () => {

  const navigate = useNavigate();

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="text-center mb-20">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Tailored services for your business
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-[#f6f6fb] rounded-lg shadow-md p-6 flex-1">
          <div className="flex flex-col justify-center -mt-14">
            {/* Placeholder for icon */}
            <img src="/StarterIcon.avif" className="w-14" alt="Starter Icon" />
            <h3 className="text-[28px] font-semibold text-gray-800">Starter</h3>
          </div>
          <p className="text-[#646A73] mb-4">
            The essentials to get your team up and running
          </p>
          <hr className="border-[#B0BFFF]" />
          <h4 className="text-[24px] mt-4 font-semibold text-gray-800">
            Free for everyone
          </h4>
          <p className="text-[#646A73] mb-6">Up to 50 users</p>
          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                Unlimited chats & full context of message history
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                Unlimited AI translation in chats, docs, etc.
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                Enterprise search across all messages, files, emails, calendars,
                and documents.
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                Custom business email
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                5000 automated workflow executions / month
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                100GB cloud storage + 200GB email storage
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                100GB meeting recording and AI meeting minutes
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                Up to 60 minutes meeting duration
              </span>
            </li>
          </ul>
          <button onClick={() => navigate("/signup")} className="px-4 py-2 border-2 rounded-3xl border-[#3370FF] text-[#3370FF] font-medium">
            Try for free &rarr;
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-[#f6f6fb] rounded-lg shadow-md p-6 flex-1">
          <div className="flex flex-col justify-center -mt-14">
            {/* Placeholder for icon */}
            <img src="/Pro.svg" className="w-14" alt="Starter Icon" />
            <h3 className="text-[28px] font-semibold text-gray-800">Pro</h3>
          </div>
          <p className="text-[#646A73] mb-4">
            Advanced tools to take your growing team to the next level
          </p>
          <hr className="border-[#B0BFFF]" />
          <h4 className="text-[24px] mt-4 font-semibold text-gray-800">
            $12 per user/month
          </h4>
          <p className="text-[#646A73] mb-6">Up to 500 users</p>
          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li>
              <span className="text-[14px] text-[#646A73]">
                Everything in Starter, plus:
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                Basic AI fields and templates
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                50,000 automated workflow executions / month
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                1TB Cloud Storage + 5TB Email Storage
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                5 TB meeting recording + AI meeting minutes
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                Unlimited Wiki Knowledge base
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                24 hours meeting duration and 500 meeting participants
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                More security and permission controls
              </span>
            </li>
          </ul>
          <div className="flex space-x-4">
            <button onClick={() => navigate("/contactsales")} className="px-4 py-2 border-2 rounded-3xl border-[#3370FF] text-white bg-[#3370FF] font-medium">
              Contact sales &rarr;
            </button>
            <button className="px-4 py-2 md:block hidden border-2 rounded-3xl border-[#3370FF] text-[#3370FF] font-medium">
              Buy Now
            </button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-[#f6f6fb] rounded-lg shadow-md p-6 flex-1">
          <div className="flex flex-col justify-center -mt-14">
            {/* Placeholder for icon */}
            <img src="/Enterprise.svg" className="w-14" alt="Starter Icon" />
            <h3 className="text-[28px] font-semibold text-gray-800">
              Enterprise
            </h3>
          </div>
          <p className="text-[#646A73] mb-4">
            Unlock Advanced Security, Enhanced Features, and Seamless
            Collaboration for Enterprises
          </p>
          <hr className="border-[#B0BFFF]" />
          <h4 className="text-[24px] mt-4 font-semibold text-gray-800">
            Let’s talk!
          </h4>
          <p className="text-[#646A73] mb-6">Unlimited users</p>
          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li>
              <span className="text-[14px] text-[#646A73]">
                Everything in Pro, plus:
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                500,000 automated workflow executions / month
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                10TB cloud storage + Unlimited email storage
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                50TB meeting recordings + AI meeting minutes
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                Large group collaboration (up to 50,000 users)
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                Single Sign-On (SSO)
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                Restricted Mode Group Chat
              </span>
            </li>
            <li>
              <span className="text-[#3673FE]">✓</span>{" "}
              <span className="text-[14px] text-[#646A73]">
                Advanced security, management, and compliance controls
              </span>
            </li>
          </ul>
          <button onClick={() => navigate("/contactsales")} className="px-4 py-2 border-2 rounded-3xl border-[#3370FF] text-[#3370FF] font-medium">
            Contact sales &rarr;
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button className="px-4 lg:w-1/6 py-2 border-2 rounded-3xl border-[#3370FF] text-[#3370FF] font-medium">
          Compare different plans
        </button>
      </div>
    </section>
  );
};

export default Pricing;
