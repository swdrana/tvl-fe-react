import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Lark Developer Logo */}
          <div className="flex col-span-2 md:col-span-1 gap-1">
            <img src="https://i.ibb.co.com/CzYmGpN/lark-logo.png" alt="" className="w-6 h-6"/>
            <h2 className="text-xl font-bold text-gray-dark">Lark Developer</h2>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-bold text-gray-dark mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-light">
              <li>SSO with Lark</li>
              <li>Streamlined Project Collaboration</li>
              <li>Intelligent BPM</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold text-gray-dark mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-light">
              <li>Lark Official Website</li>
              <li>App Directory</li>
              <li>Download Lark</li>
            </ul>
          </div>

          {/* Most Visited */}
          <div>
            <h3 className="text-sm font-bold text-gray-dark mb-4">Most Visited</h3>
            <ul className="space-y-2 text-sm text-gray-light">
              <li>App Development Process</li>
              <li>Develop a Gadget</li>
              <li>Integrate a Web App</li>
              <li>Build a Bot</li>
            </ul>
          </div>

          {/* Terms & Privacy */}
          <div>
            <h3 className="text-sm font-bold text-gray-dark mb-4">Terms & Privacy</h3>
            <ul className="space-y-2 text-sm text-gray-light">
              <li>User Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Security & Compliance</li>
              <li>Lark API Terms of Service</li>
              <li>
                Lark Independent Software Service Provider Agreement
              </li>
            </ul>
          </div>
        </div>

        <div className="border mt-4">

        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-8 text-sm text-gray-light">
          <div className="space-x-4">
            <span>简体中文</span>
            <span>|</span>
            <span>English</span>
          </div>
          <p>© Lark Technologies Pte. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
