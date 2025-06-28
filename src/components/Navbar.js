import React, { useState } from "react";
import LOGO from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = ({ isMenuOpen = false, setIsMenuOpen = () => {} }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [capabilitiesExpanded, setCapabilitiesExpanded] = useState(false); // for mobile

  const capabilities = [
    { label: "SEO Improvement", href: "#seo" },
    { label: "Web Development", href: "#web-dev" },
    { label: "Chat Bot", href: "#chatbot" },
    { label: "Marketing Research", href: "#marketing" },
    { label: "Social Media Management", href: "#social-media" },
  ];

  const menuItems = [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/consult" },
    { label: "Mobile App", href: "#mobile-app" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm fixed w-full z-50 font-helvetica font-normal">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src={LOGO} alt="Logo" className="w-10 h-10" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 mx-auto items-center">
          {/* Hover Dropdown for Desktop */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="inline-flex items-center gap-1 justify-center text-gray-700 hover:text-blue-600 transition-colors">
              Our Capabilities <IoIosArrowDown/>
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-md z-50 transition-all duration-200 ${
                showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <ul className="py-2">
                {capabilities.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other Links */}
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Consult Now (desktop only) */}
        <button className="ml-4 max-lg:hidden px-3 py-1 bg-gradient-to-b from-blue-500 to-purple-500 text-white rounded-full text-sm hover:from-blue-600 hover:to-purple-600 transition">
          Consult Now
        </button>

        {/* Hamburger for mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="relative w-8 h-8 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            <span
              className={`absolute w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 bg-white shadow-md transform transition-transform duration-300 ease-in-out z-40 font-helvetica font-normal ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-6 py-4">
          <ul className="space-y-4 text-left">
            {/* Clickable collapsible for mobile */}
            <li className="flex justify-between items-center text-gray-900 font-semibold">
              <button
                onClick={() => setCapabilitiesExpanded((prev) => !prev)}
                className="w-full text-left"
              >
                Our Capabilities
              </button>
              <span className="text-blue-600 text-sm">
                {capabilitiesExpanded ? "▲" : "▼"}
              </span>
            </li>

            {capabilitiesExpanded && (
              <ul className="ml-4 space-y-2 mt-1">
                {capabilities.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {/* Other links */}
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Consult Button */}
          <div className="mt-6 text-center">
            <button className="w-1/2 px-3 py-2 bg-gradient-to-b from-blue-500 to-purple-500 text-white rounded-full text-sm hover:from-blue-600 hover:to-purple-600 transition">
              Consult Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
