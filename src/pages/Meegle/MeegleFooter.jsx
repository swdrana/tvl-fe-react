import React from "react";

const MeegleFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 md:px-10">
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {/* Logo and Features */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-6 w-6 rounded-md"></div>
              <span className="text-lg font-semibold text-white">Meegle</span>
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Workflow</a></li>
              <li><a href="#" className="hover:text-white">Role & Team</a></li>
              <li><a href="#" className="hover:text-white">Views</a></li>
              <li><a href="#" className="hover:text-white">Automation</a></li>
              <li><a href="#" className="hover:text-white">Toolkit</a></li>
              <li><a href="#" className="hover:text-white">Charts</a></li>
            </ul>
          </div>

          {/* Product Comparison */}
          <div>
            <h3 className="text-white font-medium mb-4">Product Comparison</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Meegle vs. Jira</a></li>
              <li><a href="#" className="hover:text-white">Meegle vs. Monday.com</a></li>
              <li><a href="#" className="hover:text-white">Meegle vs. ClickUp</a></li>
              <li><a href="#" className="hover:text-white">Meegle vs. Airtable</a></li>
              <li><a href="#" className="hover:text-white">Meegle vs. Asana</a></li>
              <li><a href="#" className="hover:text-white">Meegle vs. Trello</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-medium mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Software Development</a></li>
              <li><a href="#" className="hover:text-white">Game Development</a></li>
              <li><a href="#" className="hover:text-white">Sales Management</a></li>
              <li><a href="#" className="hover:text-white">Retail Management</a></li>
              <li><a href="#" className="hover:text-white">Food and Beverage</a></li>
              <li><a href="#" className="hover:text-white">Media Operations</a></li>
            </ul>
          </div>

          {/* Templates */}
          <div>
            <h3 className="text-white font-medium mb-4">Templates</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Agile Development</a></li>
              <li><a href="#" className="hover:text-white">App Development</a></li>
              <li><a href="#" className="hover:text-white">Feature Management</a></li>
              <li><a href="#" className="hover:text-white">Game Project Management</a></li>
              <li><a href="#" className="hover:text-white">Recruitment Management</a></li>
              <li><a href="#" className="hover:text-white">Manufacturing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Blogs</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Customer Support</a></li>
              <li><a href="#" className="hover:text-white">Topics</a></li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h3 className="text-white font-medium mb-4">Security</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Trust</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white">User Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border mt-6 border-gray-300">

        </div>

        {/* Social Media Icons and Copyright */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © Lark Technologies Pte. Ltd.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="https://i.ibb.co.com/VqxDh4V/Facebook-logo-square.png" alt="Facebook" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="https://i.ibb.co.com/zVRXbCq/discord.png" alt="Discord" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="https://i.ibb.co.com/YPQT0NW/Linked-In-logo-initials.png" alt="LinkedIn" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="https://i.ibb.co.com/XJMfxy5/youtube.png" alt="YouTube" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="https://i.ibb.co.com/tP9TCNj/slack.png" alt="Slack" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MeegleFooter;
