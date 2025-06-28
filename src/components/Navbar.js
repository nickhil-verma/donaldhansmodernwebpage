import React, { useState } from "react";
import { useNavigate, useLocation, href } from "react-router-dom";
import LOGO from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = ({ isMenuOpen = false, setIsMenuOpen = () => {} }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [capabilitiesExpanded, setCapabilitiesExpanded] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateToSection = (section) => {
    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    } else {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // fallback in case section not yet rendered
        window.location.hash = section;
      }
    }
    setIsMenuOpen(false);
    setShowDropdown(false);
  };

  const capabilities = [
    { label: "Web Development", section: "webdev" },
    { label: "SEO Improvement", section: "seo" },
    { label: "Chat Bot", href: "/chatbot" },
     {label: "Mobile App Development", href: "/mobile-app" },
     
  ];

  const menuItems = [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/consult" },
    { label: "Mobile App", href: "/mobile-app" },
    {label: "Chat Bot", href: "/chatbot" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm fixed w-full z-50 font-helvetica font-normal">
        <div className="flex items-center">
          <a href="/">
            <img src={LOGO} alt="Logo" className="w-10 h-10" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 mx-auto items-center">
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="inline-flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
              Our Capabilities <IoIosArrowDown />
            </button>
            <div
              className={`absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-md z-50 transition-all duration-200 ${
                showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <ul className="py-2">
                {capabilities.map((item, idx) => (
                  <li key={idx}>
                    {item.section ? (
                      <button
                        onClick={() => handleNavigateToSection(item.section)}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

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

        {/* Desktop Consult Button */}
        <a href="/consult">
          <button className="ml-4 max-lg:hidden px-3 py-1 bg-gradient-to-b from-blue-500 to-purple-500 text-white rounded-full text-sm hover:from-blue-600 hover:to-purple-600 transition">
            Consult Now
          </button>
        </a>

        {/* Mobile Hamburger */}
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
                    {item.section ? (
                      <button
                        onClick={() => handleNavigateToSection(item.section)}
                        className="block text-left text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="block text-gray-700 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}

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

          <div className="mt-6 text-center">
            <a href="/consult">
              <button className="w-1/2 px-3 py-2 bg-gradient-to-b from-blue-500 to-purple-500 text-white rounded-full text-sm hover:from-blue-600 hover:to-purple-600 transition">
                Consult Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
