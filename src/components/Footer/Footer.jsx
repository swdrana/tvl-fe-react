import { LinkedIn, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  const footerData = [
    {
      title: "Product",
      items: [
        "Base",
        "Messenger",
        "Docs",
        "Meetings",
        "Email",
        "Minutes",
        "Rooms",
        "Webinar",
        "Slides",
        "Calendar",
        "Approval",
        "Wiki",
        "Meegle",
        "Forms",
        "OKR",
        "Open Platform",
      ],
    },
    {
      title: "Compare",
      items: [
        "Why Lark",
        "Lark vs. Slack",
        "Lark vs. Zoom",
        "Lark vs. Whatsapp",
        "Lark vs. Teams",
        "Lark vs. ClickUp",
        "Lark vs. monday.com",
        "Lark vs. Airtable",
        "Lark vs. Trello",
        "Lark vs. Wrike",
        "Lark vs. DingTalk",
        "Lark vs. Base.vn",
      ],
    },
    {
      title: "Alternatives",
      items: [
        "Slack alternatives",
        "Zoom alternatives",
        "Discord alternatives",
        "Airtable alternatives",
        "Notion alternatives",
        "Lattice alternatives",
        "See more",
      ],
    },
    {
      title: "Templates",
      items: [
        "E-Commerce",
        "Retail",
        "Property Management",
        "Manufacturing",
        "Human Resources",
        "Media & Entertainment",
        "See more",
      ],
    },
    {
      title: "Resources",
      items: [
        "Blog",
        "Customer Stories",
        "Help Center",
        "Lark Academy",
        "Lark Topics",
      ],
    },
    {
      title: "Security",
      items: [
        "Security & Compliance",
        "Privacy Policy",
        "Customer Terms of Services",
        "User Terms of Services",
        "Acceptable Use Policy",
        "Cookie Policy",
        "Cookie Settings",
        "Law Enforcement Request",
      ],
    },
    {
      title: "Solutions",
      items: [
        "Project Management",
        "Human Resources",
        "Sales & Marketing",
        "Students & Educators",
        "IT Managers",
      ],
    },
    {
      title: "Use Cases",
      items: [
        "Lark for Startups",
        "Global Collaboration",
        "Frontline",
        "Food & Beverages",
        "Retail",
        "Professional Services",
        "Education",
        "Media",
      ],
    },
    {
      title: "Join Us",
      items: [
        "Lark Ambassador",
        "Become a Partner",
        "Partner Directory",
        "Careers",
      ],
    },
    {
      title: "Build with Us",
      items: ["Developers/APIs", "Integrations/APIs"],
    },
    {
      title: "Pricing",
      items: ["Plans", "Savings Calculator"],
    },
  ];

  return (
    <footer className="bg-[#1f2329] text-white py-5 px-6">
      {/* Top Section */}
      <div className="flex justify-between container mx-auto">
        {/* Get Lark Today Section */}
        <div className="col-span-2 sm:col-span-1">
          <h4 className="font-bold text-lg mb-4">Get Lark today</h4>
          <div className="flex flex-col gap-[10px]">
            <button className="bg-white font-semibold text-[#3370FF] border border-[#3370FF] px-6 py-2 rounded-[30px] text-[18px] w-full sm:w-auto">
              Contact us
            </button>
            <button className="bg-[#3370FF] text-white px-5 py-2 rounded-[30px] font-semibold text-[18px] w-full sm:w-auto">
              Download Lark
            </button>
          </div>
          <div className="mt-4 font-bold text-[#FFFFFFCC] space-y-1">
            <p className="flex items-center">
              <img src="/FooterUserImg.avif" alt="User" className="w-3" />{" "}
              <span className="ml-2 text-[12px]">Users love us</span>
            </p>
            <p className="text-sm flex items-center">
              <img src="/FooterAppStore.avif" className="w-3" alt="App Store" />{" "}
              <span className="ml-2 text-[12px]">App Store ⭐⭐⭐⭐⭐ 4.9</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="text-sm hover:text-white transition">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-10 text-sm border-t border-gray-700 pt-6">
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <p>© 2024 Lark Technologies Pte. Ltd.</p>
          <p>Headquartered in Singapore with offices worldwide.</p>
        </div>
        <div className="flex space-x-4">
          {/* Social Media Icons */}
          <LinkedIn
            fontSize="small"
            className="cursor-pointer hover:text-blue-400"
          />
          <Instagram
            fontSize="small"
            className="cursor-pointer hover:text-pink-400"
          />
          <YouTube
            fontSize="small"
            className="cursor-pointer hover:text-red-500"
          />
          {/* TikTok Icon */}
          <a href="#" className="hover:text-gray-400" aria-label="TikTok">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-6 h-6"
              fill="currentColor"
            >
              <path d="M180.1 77.5c-17.7-8.5-25.4-26.1-26-44-.1-2-.2-3.9-.2-5.9h-31v124c0 23-20.1 42-44.7 38.6-16.7-2.4-28.4-16.4-28.5-33.2-.2-18.8 15.5-34.1 34.7-34.4 3.7-.1 7.2.5 10.5 1.6v-35c-36.6-5.1-69.5 23.3-69.9 60.3-.5 37.6 32.2 68.2 70 61.4 19.7-3.7 35.4-18.8 40.4-38.1 1-3.9 1.6-8.1 1.6-12.3v-90c11.2 10.1 24.5 17.7 38.8 22.1v-34.1z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
