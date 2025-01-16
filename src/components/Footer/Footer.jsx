import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-12">
      <div className="container mx-auto px-2 lg:px-4">
        {/* Footer Top: Left Buttons Section */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-20">
          {/* Left Section: Get Lark Today */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4 text-lg">Get Lark today</h3>
            <div className="space-y-4">
              <button className="font-semibold rounded-full text-lg bg-white border border-bluetext px-7 py-3 text-bluetext hover:bg-gray-300 h-12 w-40">
                Contact Us
              </button>
              <button className="text-xl font-semibold rounded-full px-4 py-2 text-white bg-gradient-to-r hover:bg-gradient-hover h-12 w-44">
                Download Lark
              </button>
              <div className="mt-4">
                <p className="flex items-center space-x-2">
                  <span>📈</span> 
                  <span className="text-xs font-medium">Users love us</span>
                </p>
                <p className="flex space-x-1 mt-2">
                  <span className="text-xs">App Store</span>
                  <span>⭐⭐⭐⭐</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Footer Columns */}
          <div className="col-span-1 lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Column 1: Product */}
            <div>
              <h3 className="text-white font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/base" className="hover:text-white">Base</Link></li>
                <li><Link to="/messenger" className="hover:text-white">Messenger</Link></li>
                <li><Link to="/docs" className="hover:text-white">Docs</Link></li>
                <li><Link to="/meetings" className="hover:text-white">Meetings</Link></li>
                <li><Link to="/email" className="hover:text-white">Email</Link></li>
                <li><Link to="/minutes" className="hover:text-white">Minutes</Link></li>
                <li><Link to="/rooms" className="hover:text-white">Rooms</Link></li>
                <li><Link to="/webinar" className="hover:text-white">Webinar</Link></li>
                <li><Link to="/slides" className="hover:text-white">Slides</Link></li>
                <li><Link to="/calendar" className="hover:text-white">Calendar</Link></li>
                <li><Link to="/approval" className="hover:text-white">Approval</Link></li>
                <li><Link to="/wiki" className="hover:text-white">Wiki</Link></li>
                <li><Link to="/meegle" className="hover:text-white">Meegle</Link></li>
                <li><Link to="/forms" className="hover:text-white">Forms</Link></li>
                <li><Link to="/okr" className="hover:text-white">OKR</Link></li>
                <li><Link to="/open-platform" className="hover:text-white">Open Platform</Link></li>
              </ul>
              <h3 className="text-white font-bold mt-6 mb-4">Pricing</h3>
              <ul className="space-y-2">
                <li><Link to="/pricing" className="hover:text-white">Plans</Link></li>
                <li><Link to="/savings-calculator" className="hover:text-white">Savings Calculator</Link></li>
              </ul>
            </div>

            {/* Column 2: Compare */}
            <div>
              <h3 className="text-white font-bold mb-4">Compare</h3>
              <ul className="space-y-2">
                <li><Link to="/compare/lark-slack" className="hover:text-white">Lark vs. Slack</Link></li>
                <li><Link to="/compare/lark-zoom" className="hover:text-white">Lark vs. Zoom</Link></li>
                <li><Link to="/compare/lark-whatsapp" className="hover:text-white">Lark vs. WhatsApp</Link></li>
                <li><Link to="/compare/lark-teams" className="hover:text-white">Lark vs. Teams</Link></li>
                <li><Link to="/compare/lark-clickup" className="hover:text-white">Lark vs. ClickUp</Link></li>
                <li><Link to="/compare/lark-trello" className="hover:text-white">Lark vs. Trello</Link></li>
                <li><Link to="/compare/lark-dingtalk" className="hover:text-white">Lark vs. DingTalk</Link></li>
                <li><Link to="/compare/more" className="hover:text-white">See more</Link></li>
              </ul>
              <h3 className="text-white font-bold mt-6 mb-4">Join Us</h3>
              <ul className="space-y-2">
                <li><Link to="/join/ambassador" className="hover:text-white">Lark Ambassador</Link></li>
                <li><Link to="/join/partner" className="hover:text-white">Become a Partner</Link></li>
                <li><Link to="/join/careers" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>

            {/* Column 3: Alternatives */}
            <div>
              <h3 className="text-white font-bold mb-4">Alternatives</h3>
              <ul className="space-y-2">
                <li><Link to="/alternatives/slack" className="hover:text-white">Slack alternatives</Link></li>
                <li><Link to="/alternatives/zoom" className="hover:text-white">Zoom alternatives</Link></li>
                <li><Link to="/alternatives/notion" className="hover:text-white">Notion alternatives</Link></li>
                <li><Link to="/alternatives/airtable" className="hover:text-white">Airtable alternatives</Link></li>
                <li><Link to="/alternatives/more" className="hover:text-white">See more</Link></li>
              </ul>
              <h3 className="text-white font-bold mt-6 mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link to="/solutions/project-management" className="hover:text-white">Project Management</Link></li>
                <li><Link to="/solutions/human-resources" className="hover:text-white">Human Resources</Link></li>
                <li><Link to="/solutions/marketing" className="hover:text-white">Sales & Marketing</Link></li>
              </ul>
              <h3 className="text-white font-bold mt-6 mb-4">Build with Us</h3>
              <ul className="space-y-2">
                <li><Link to="/developers/applications" className="hover:text-white">Developers/Applications</Link></li>
                <li><Link to="/developers/apis" className="hover:text-white">Integrations/APIs</Link></li>
              </ul>
            </div>

            {/* Column 4: Templates */}
            <div>
              <h3 className="text-white font-bold mb-4">Templates</h3>
              <ul className="space-y-2">
                <li><Link to="/templates/ecommerce" className="hover:text-white">E-Commerce</Link></li>
                <li><Link to="/templates/retail" className="hover:text-white">Retail</Link></li>
                <li><Link to="/templates/education" className="hover:text-white">Education</Link></li>
              </ul>
              <h3 className="text-white font-bold mt-6 mb-4">Use Cases</h3>
              <ul className="space-y-2">
                <li><Link to="/usecases/startups" className="hover:text-white">Lark for Startups</Link></li>
                <li><Link to="/usecases/global-collaboration" className="hover:text-white">Global Collaboration</Link></li>
              </ul>
            </div>

            {/* Column 5: Resources */}
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/customer-stories" className="hover:text-white">Customer Stories</Link></li>
              </ul>
              <h3 className="text-white font-bold mt-6 mb-4">Security</h3>
              <ul className="space-y-2">
                <li><Link to="/security/compliance" className="hover:text-white">Security & Compliance</Link></li>
                <li><Link to="/security/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex justify-between items-center">
          <p>© 2024 Lark Technologies Pte. Ltd. Headquartered in Singapore with offices worldwide.</p>
  <div className="flex space-x-4">
  <a 
    href="https://www.linkedin.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-white"
  >
    <img 
      src="https://i.ibb.co.com/YPQT0NW/Linked-In-logo-initials.png" 
      alt="LinkedIn" 
      className="w-6 h-6"
    />
  </a>
  <a 
    href="https://twitter.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-white"
  >
    <img 
      src="https://i.ibb.co.com/hBVff2p/twitter.png" 
      alt="Twitter" 
      className="w-6 h-6"
    />
  </a>
  <a 
    href="https://youtube.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-white"
  >
    <img 
      src="https://i.ibb.co.com/XJMfxy5/youtube.png" 
      alt="Youtube" 
      className="w-6 h-6"
    />
  </a>
  <a 
    href="https://www.facebook.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-white"
  >
    <img 
      src="https://i.ibb.co.com/VqxDh4V/Facebook-logo-square.png" 
      alt="Facebook" 
      className="w-6 h-6"
    />
  </a>
  <a 
    href="https://www.instagram.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-white"
  >
    <img 
      src="https://i.ibb.co.com/xHrrd2m/Instagram-icon.png" 
      alt="Facebook" 
      className="w-6 h-6"
    />
  </a>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
