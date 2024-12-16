import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuActive, setMenuActive] = useState(false);
  const [menuData, setMenuData] = useState({}); 
  const [hoveredMenu, setHoveredMenu] = useState(null); 

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  useEffect(() => {
    // Fetch data for all dropdowns
    const fetchMenuData = async () => {
      try {
        const productData = await fetch("src/components/NavBar/Products.json").then((res) =>
          res.json()
        );
        const solutionsData = await fetch(
          "src/components/NavBar/Products.json"
        ).then((res) => res.json());
        const resourcesData = await fetch(
          "src/components/NavBar/Products.json"
        ).then((res) => res.json());
        const blogData = await fetch("src/components/NavBar/Products.json").then((res) =>
          res.json()
        );

        setMenuData({
          Product: productData,
          Solutions: solutionsData,
          Resources: resourcesData,
          Blog: blogData,
        });
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu); 
    setOpenDropdown(menu); 
  };

  const handleMouseLeave = (menu) => {
    setHoveredMenu(null); 
    setTimeout(() => {
      if (hoveredMenu !== menu) {
        setOpenDropdown(null); 
      }
    }, 200); 
  };

  return (
    <nav className="w-full border-b border-gray-200 shadow-md bg-white px-6 py-4 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center ml-6">
            <img
              src="https://i.ibb.co/CzYmGpN/lark-logo.png"
              alt="Lark Logo"
              className="h-10 w-10"
            />
            <p className="ml-2 text-3xl font-bold">Lark</p>
          </div>
        </div>

        {/* Hamburger Menu for Mobile/Tablet */}
        <button className="hamburger md:hidden text-2xl" onClick={toggleMenu}>
          ☰
        </button>

        {/* Main Menu */}
        <div
          className={`menu md:flex items-center space-x-6 transition-all duration-300 ${
            menuActive ? "block" : "hidden"
          }`}
        >
          {["Product", "Solutions", "Resources", "Blog"].map((menu) => (
            <div
              key={menu}
              className="relative"
              onMouseEnter={() => handleMouseEnter(menu)} 
              onMouseLeave={() => handleMouseLeave(menu)} 
            >
              <button
                className="flex items-center hover:text-blue-600 text-l font-semibold"
                onClick={() => toggleDropdown(menu)} 
              >
                {menu}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openDropdown === menu && menuData[menu] && (
                <div
                  className="absolute top-14 -ml-56 left-0 w-full bg-white shadow-lg rounded-lg p-4 grid grid-cols-3 gap-4 z-10"
                  style={{ width: "100vw" }}
                >
                  {menuData[menu].map((item, index) => (
                    <button
                      key={index}
                      onClick={() => alert(`Clicked on ${item.name}`)}
                      className="flex items-center space-x-4 w-full p-3 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <img
                        src={item.icon}
                        alt={`${item.name} Icon`}
                        className="w-8 h-8"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-sm text-blue-600">
                          {item.name}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="hover:text-blue-600 text-l font-semibold">
            Trust
          </button>
          <button className="hover:text-blue-600 text-l font-semibold">
            Pricing
          </button>
        </div>

        {/* Right Buttons */}
        <div
          className={`actions flex flex-wrap md:flex-nowrap md:space-x-6 items-center space-y-4 md:space-y-0 ${
            menuActive ? "block" : "hidden md:flex"
          }`}
        >
          <button
            className="hover:text-blue-600 text-l font-semibold"
            onClick={() => navigate("/signin")}
          >
            Log in
          </button>
          <button onClick={() => navigate("/contactsales")} className="tablet-only text-l font-semibold rounded-full border border-blue-600 px-4 py-1 text-blue-600 hover:bg-slate-200 h-12">
            Contact us
          </button>
          <button className="tablet-only text-l font-semibold rounded-full border border-blue-600 px-4 py-1 text-blue-600 hover:bg-slate-200 h-12">
            Download
          </button>
          <button onClick={() => navigate("/signup")} className="tablet-only text-l font-semibold rounded-full bg-blue-500 px-4 py-1 text-white hover:bg-blue-700 h-12">
            Try for free
          </button>
        </div>
      </div>
    </nav>
  );
}
