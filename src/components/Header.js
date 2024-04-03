import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex justify-between items-center shadow-md px-6 py-3 w-full md:px-8 lg:px-12 xl:px-16">
      <div className="text-3xl md:text-4xl font-bold text-blue-700">
        <Link to="/">Growthware</Link>
      </div>
      <div className="block md:hidden">
        <div className="relative">
          <button className="text-3xl text-blue-700" onClick={toggleMenu}>
            &#8801;
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg">
              <ul className="py-2 px-4 space-y-2 text-lg font-semibold">
                <li>
                  <Link to="/" className="hover:text-blue-900 hover:underline" onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-900 hover:underline" onClick={toggleMenu}>About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-900 hover:underline" onClick={toggleMenu}>Contact Us</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-blue-900 hover:underline" onClick={toggleMenu}>Services</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Links for Large Screens */}
      <div className="hidden md:block">
        <ul className="flex list-none space-x-6 text-lg md:text-2xl font-semibold">
          <li>
            <Link to="/" className="hover:text-blue-900 hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-900 hover:underline">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-900 hover:underline">Contact Us</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-900 hover:underline">Services</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
