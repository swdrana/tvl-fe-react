import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Lark Section */}
          <div>
            <h3 className="text-lg font-semibold">Lark</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Overview</a></li>
              <li><a href="#" className="hover:underline">Security</a></li>
              <li><a href="#" className="hover:underline">Plans</a></li>
              <li><a href="#" className="hover:underline">Download</a></li>
              <li><a href="#" className="hover:underline">Customers</a></li>
              <li><a href="#" className="hover:underline">Admin Console</a></li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Professional Services</a></li>
              <li><a href="#" className="hover:underline">Tech & Startups</a></li>
              <li><a href="#" className="hover:underline">Media</a></li>
              <li><a href="#" className="hover:underline">Students & Educators</a></li>
              <li><a href="#" className="hover:underline">IT Managers</a></li>
              <li><a href="#" className="hover:underline">Project Managers</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">API</a></li>
              <li><a href="#" className="hover:underline">Insights</a></li>
              <li><a href="#" className="hover:underline">Change Log</a></li>
              <li><a href="#" className="hover:underline">Lark Status Check</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">PR Inquiries</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Customer Terms of Service</a></li>
              <li><a href="#" className="hover:underline">User Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Acceptable Use Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Settings</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500"><img src="https://i.ibb.co.com/FJ0dWLt/youtube.png" alt="youtube" className='w-6 h-6'/></a>
            <a href="#" className="hover:text-blue-500"><img src="https://i.ibb.co.com/DR1MnNY/facebook-logo-facebook-icon-transparent-free-png.webp" alt="facebook" className='w-12 h-8'/></a>
            <a href="#" className="hover:text-blue-500"><img src="https://i.ibb.co.com/v3Vn0m9/instagram.png" alt="instagram" className='w-8 h-6'/></a>
            <a href="#" className="hover:text-blue-500"><img src="https://i.ibb.co.com/Lxq0qC6/twitter.png" alt="X" className='w-8 h-6'/></a>
            <a href="#" className="hover:text-blue-500"><img src="https://i.ibb.co.com/dPRRzj4/linkedin.png" alt="linkedin" className='w-12 h-8'/></a>
          </div>
          <p className="text-center md:text-left">© Lark Technologies Pte. Ltd. Headquartered in Singapore with offices worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
