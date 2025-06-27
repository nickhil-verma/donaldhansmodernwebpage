import React from "react";
import LOGO from "../assets/logo.png";  
const Navbar = ({ isMenuOpen = false, setIsMenuOpen = () => {} }) => {
  const menuItems = [
    { label: "IT Consulting", href: "#it-consulting" },
    { label: "SEO Services", href: "#seo-services" },
    { label: "Digital Marketing", href: "#digital-marketing" },
    { label: "Web Development", href: "#web-development" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="flex  items-center justify-between px-6 py-4    bg-white   shadow-sm fixed w-full z-50 font-helvetica font-normal">
        {/* Left: Logo */}
        <div className="flex items-center p-0">
          <a href="/"><img
            src= {LOGO}
            alt="Logo"
            className="w-10  h-10 p-0 "
          /></a>
          
           
        </div>

        {/* Middle: Desktop Menu */}
        <div className="hidden lg:flex space-x-6 mx-auto">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Consult Now Button (Desktop) */}
        <button className="ml-4 max-lg:hidden px-2 py-1 bg-gradient-to-b from-blue-500 to-purple-500 text-white rounded-full text-sm hover:from-blue-600 hover:to-purple-600 transition">
          Consult Now
        </button>

        {/* Hamburger Button (Mobile) */}
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
        <div className="px-6 py-4 text-right">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </ul>

          {/* Consult Now Button (Mobile) */}
          <div className="mt-6">
            <button className="w-1/4 px-2 py-1 bg-gradient-to-b from-blue-500 to-purple-500 text-white rounded-full text-sm r hover:from-blue-600 hover:to-purple-600 transition">
              Consult Now
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Navbar;
