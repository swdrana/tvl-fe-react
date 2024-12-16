import { useEffect, useState } from "react";

const ContactSales = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    fetch("/public/logo.json")
      .then((response) => {
        console.log("Response:", response);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        setLogos(data.logos || []);
      })
      .catch((error) => console.error("Error loading logos:", error));
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-l from-blue-100 to-white">
        <div className="max-w-md mx-auto">
          <img
            src="https://i.ibb.co/vZB9rjF/larklogo.png"
            alt="lark logo"
            className="w-20 h-14 absolute top-4 left-4"
          />
          <h2 className="text-3xl font-bold mb-4 mt-20">Contact Sales</h2>
          <p className="text-gray-700 mb-6">
            Get dedicated support to make Lark work for you.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2 mb-6">
            {[
              "Book a customized demo of Lark",
              "Discuss pricing plans for your team",
              "Learn best practice of your industry",
              "Migrate to Lark from your existing tools",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start text-gray-700">
                <span className="text-blue-500 mr-2">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Support Link */}
          <p className="text-gray-600">
            Looking for product or customer support?{" "}
            <a href="#" className="text-blue-500 underline">
              Visit Help Center
            </a>
          </p>
          <div className="mt-10 mb-8 border-b-2 border-b-blue-300"></div>

          {/* Trusted Logos */}
          <p>Trusted by fast-growing companies from 125+ countries</p>
          <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 rounded gap-4">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="h-14 rounded-lg flex items-center justify-center p-4 bg-white"
              >
                {logo.startsWith("http") ? (
                  <img src={logo} alt={`logo-${idx}`} className="h-6 w-10" />
                ) : (
                  <span className="text-gray-500 text-sm">{logo}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-8 bg-white relative">
        {/* Language Switch Button */}
        <div className="absolute top-4 right-4">
          <select
            className="border border-gray-300 p-2 rounded bg-white text-gray-700"
            onChange={(e) => alert(`Language changed to: ${e.target.value}`)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>

        {/* Form */}
        <form className="space-y-4 mt-8">
          <h3 className="text-xl font-semibold mb-4">Your profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Work email"
              className="border p-2 rounded w-full"
            />
            <div className="flex">
              <select className="border p-2 rounded-l w-1/3">
                <option>+880</option>
              </select>
              <input
                type="tel"
                placeholder="Phone number"
                className="border p-2 rounded-r w-2/3"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border p-2 rounded w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Organization name"
              className="border p-2 rounded w-full"
            />
            <select className="border p-2 rounded w-full">
              <option>Organization size</option>
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
              <option>201+</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Job title"
            className="border p-2 rounded w-full"
          />

          <h3 className="text-xl font-semibold mt-6">Your inquiry</h3>
          <select className="border p-2 rounded w-full">
            <option>Category</option>
            <option>Pricing</option>
            <option>Demo Request</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="How can we help you?"
            rows="4"
            className="border p-2 rounded w-full"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>

        {/* Terms */}
        <p className="text-sm text-gray-500 mt-4">
          By continuing, you agree to our{" "}
          <a href="#" className="text-blue-500 underline">
            User Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 underline">
            Customer Terms of Service
          </a>
          , and acknowledge that you have read the{" "}
          <a href="#" className="text-blue-500 underline">
            Privacy Policy
          </a>{" "}
          to learn how we collect, use, and share your data.
        </p>
      </div>
    </div>
  );
};

export default ContactSales;
