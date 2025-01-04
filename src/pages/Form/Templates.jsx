import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const templates = [
  {
    id: "employee-satisfaction",
    title: "Employee Satisfaction",
    bgColor: "bg-blue-100",
    redirectTo: "/employee-satisfaction",
  },
  {
    id: "product-research",
    title: "Product Research",
    bgColor: "bg-purple-100",
    redirectTo: "/product-research",
  },
  {
    id: "event-check-in",
    title: "Event Check-in",
    bgColor: "bg-pink-100",
    redirectTo: "/event-check-in",
  },
  {
    id: "net-promoter-score",
    title: "Net Promoter® Score",
    bgColor: "bg-orange-100",
    redirectTo: "/net-promoter-score",
  },
  {
    id: "job-application",
    title: "Job Application",
    bgColor: "bg-red-100",
    redirectTo: "/job-application",
  },
  {
    id: "client-onboarding",
    title: "Client Onboarding",
    bgColor: "bg-indigo-100",
    redirectTo: "/client-onboarding",
  },
];

const Templates = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Start with a Template</h1>
        <p className="text-gray-600 mt-2">
          Ready-to-use templates tailored for your business.
        </p>
      </header>

      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left Card */}
        <div
          className="p-6 bg-amber-50 rounded-2xl shadow-md relative flex flex-col min-h-screen transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Customer Satisfaction
          </h3>
          <p className="text-gray-600 mb-6 flex-grow">
            Ready-to-use templates tailored for your business.
          </p>
          <button
            onClick={() => navigate("/customer-satisfaction")}
            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            Start Now
          </button>
          <img
            src="https://i.ibb.co/8rRWzJK/template.jpg"
            alt="Customer Satisfaction Survey"
            className="absolute bottom-4 right-4 w-[450px] h-[400px] rounded-xl"
          />
        </div>

        {/* Right Section Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-3/2">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ${template.bgColor} flex items-center justify-between h-full`}
              onClick={() => navigate(template.redirectTo)}
            >
              <h4 className="text-lg font-medium text-gray-900">{template.title}</h4>
              <FiArrowRight className="text-gray-700 text-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
