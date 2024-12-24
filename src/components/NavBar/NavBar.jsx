import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuActive, setMenuActive] = useState(false);
  const [menuData, setMenuData] = useState({});

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const [productData, solutionsData, resourcesData, blogData] = await Promise.all([
          fetch("/Products.json").then((res) => res.json()),
          // fetch("/Solutions.json").then((res) => res.json()),
          // fetch("/Resources.json").then((res) => res.json()),
          // fetch("/Blog.json").then((res) => res.json()),
        ]);

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

  const renderDropdown = (menu) => (
    <Menu
      open={openDropdown === menu}
      handler={() => setOpenDropdown((prev) => (prev === menu ? null : menu))}
      onClose={() => setOpenDropdown(null)}
    >
      <MenuHandler>
        <button
          className="flex items-center hover:text-blue-600 text-sm md:text-base font-semibold"
          aria-label={`Open ${menu} menu`}
        >
          {menu}
          <ChevronDownIcon className="h-4 w-4 ml-1" />
        </button>
      </MenuHandler>
      <MenuList className="bg-white mt-5 w-screen shadow-lg rounded-lg p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuData[menu]?.length ? (
          menuData[menu].map((item, index) => (
            <MenuItem
              key={item.id || index}
              onClick={() => navigate(item.link || "/")}
              className="flex items-center space-x-4 w-full p-3 rounded-lg hover:bg-blue-100"
            >
              <img
                src={item.icon || null}
                alt={`${item.name || "Default"} Icon`}
                className="w-8 h-8"
              />
              <div className="text-left">
                <Typography variant="h6" className="text-sm font-bold text-blue-600">
                  {item.name}
                </Typography>
                <Typography variant="small" className="text-xs text-gray-500">
                  {item.description}
                </Typography>
              </div>
            </MenuItem>
          ))
        ) : (
          <div>No items available</div>
        )}
      </MenuList>
    </Menu>
  );

  return (
    <nav className="w-full border-b border-gray-200 shadow-md bg-white px-4 sm:px-6 py-4 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" target="_self">
  <div className="flex items-center">
    <img
      src="https://i.ibb.co/CzYmGpN/lark-logo.png"
      alt="Lark Logo"
      className="h-10 w-10"
    />
    <p className="ml-2 text-2xl md:text-3xl font-bold">Lark</p>
  </div>
</a>

        {/* Hamburger Toggle */}
        <button
          className="hamburger md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <div
          className={`menu md:flex items-center space-x-6 transition-all duration-300 ${
            menuActive ? "block" : "hidden"
          } absolute top-full left-0 w-full md:static md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          {["Product", "Solutions", "Resources", "Blog"].map((menu) => (
            <div key={menu} className="relative">
              {renderDropdown(menu)}
            </div>
          ))}
          <button className="hover:text-blue-600 text-sm md:text-base font-semibold">
            Trust
          </button>
          <button className="hover:text-blue-600 text-sm md:text-base font-semibold">
            Pricing
          </button>
        </div>

        {/* Action Buttons */}
        <div
          className={`actions flex-col md:flex-row flex md:space-x-4 space-y-4 md:space-y-0 items-center ${
            menuActive ? "block" : "hidden"
          } md:flex`}
        >
          <button
            className="hover:text-blue-600 text-sm md:text-base font-semibold"
            onClick={() => navigate("/signin")}
          >
            Log in
          </button>
          <button
            onClick={() => navigate("/contactsales")}
            className="text-sm md:text-base font-semibold rounded-full border border-blue-600 px-4 py-2 text-blue-600 hover:bg-slate-200"
          >
            Contact us
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="text-sm md:text-base font-semibold rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
          >
            Try for free
          </button>
        </div>
      </div>
    </nav>
  );
}
