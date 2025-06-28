import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LOGO from "../assets/logo.png";

const Navbar = ({ isMenuOpen = false, setIsMenuOpen = () => {} }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Web Development", section: "webdev" },
    { label: "SEO Improvement", section: "seo" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/consult" },
    { label: "Mobile App", href: "/mobile-app" },
    { label: "Chat Bot", href: "/chatbot" },
  ];

  const handleNavigateToSection = (section) => {
    if (location.pathname !== "/") {
      navigate(`/#${section}`);
    } else {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = section;
      }
    }
    setIsMenuOpen(false);
  };

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
          {menuItems.map((item, index) =>
            item.section ? (
              <button
                key={index}
                onClick={() => handleNavigateToSection(item.section)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            )
          )}
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
            {menuItems.map((item, index) =>
              item.section ? (
                <li key={index}>
                  <button
                    onClick={() => handleNavigateToSection(item.section)}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ) : (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
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
