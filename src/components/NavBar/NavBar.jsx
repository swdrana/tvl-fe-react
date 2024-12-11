import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuActive, setMenuActive] = useState(false);
  const [productOptions, setProductOptions] = useState([]);
  const [dropdownHovered, setDropdownHovered] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  useEffect(() => {
    // Fetch product options from JSON file
    fetch('/src/components/FakeData/Products.json')
      .then((response) => response.json())
      .then((data) => setProductOptions(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  const handleMouseEnter = () => {
    setOpenDropdown("Product");
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!dropdownHovered) {
        setOpenDropdown(null);
      }
    }, 200);
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white px-6 py-4 fixed top-0 left-0 z-50">
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
        <button
          className="hamburger md:hidden text-2xl"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Main Menu */}
        <div
          className={`menu md:flex items-center space-x-6 transition-all duration-300 ${
            menuActive ? "block" : "hidden"
          }`}
        >
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center hover:text-blue-600 text-l font-semibold">
              Product
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
            {openDropdown === "Product" && (
              <div
                className="absolute mt-2 w-80 bg-white shadow-lg rounded-lg p-4 grid grid-cols-1 gap-4"
                onMouseEnter={() => setDropdownHovered(true)}
                onMouseLeave={() => {
                  setDropdownHovered(false);
                  setOpenDropdown(null);
                }}
              >
                {productOptions.map((item, index) => (
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
                      <p className="text-gray-500 text-xs">{item.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {["Solutions", "Resources", "Blog"].map((menu) => (
            <div key={menu} className="relative">
              <button
                className="flex items-center hover:text-blue-600 text-l font-semibold"
              >
                {menu}
              </button>
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
          <button className="tablet-only text-l font-semibold rounded-full border border-blue-600 px-4 py-1 text-blue-600 hover:bg-slate-200 h-12">
            Contact us
          </button>
          <button className="tablet-only text-l font-semibold rounded-full border border-blue-600 px-4 py-1 text-blue-600 hover:bg-slate-200 h-12">
            Download
          </button>
          <button className="tablet-only text-l font-semibold rounded-full bg-blue-500 px-4 py-1 text-white hover:bg-blue-700 h-12">
            Try for free
          </button>
        </div>
      </div>
    </nav>
  );
}
