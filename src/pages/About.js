import React, { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SEO from "../assets/SEO.svg";
import DEVELOPMENT from "../assets/Development.gif";
import CHATBOT from "../assets/Chatbot.gif";
import MOBILE from "../assets/Mobile.gif";
import Navbar from "../components/Navbar";
// Replaced react-icons/fa with inline SVG icons for broader compatibility
// No longer importing local assets directly, using placeholder images instead.

const services = [
  {
    title: "SEO & IT Consultancy",
    desc: "Strategize your online growth with expert SEO and tailored IT consultation for scaling businesses.",
    // Using placeholder images instead of local asset paths
    img: SEO,
    href: "/#seo", // scroll section on home
  },
  {
    title: "Webpage Development",
    desc: "Build responsive, fast, and beautiful websites using the latest tech stacks including React and Tailwind.",
    img: DEVELOPMENT,
    href: "/#webdev", // scroll section on home
  },
  {
    title: "Chatbot Integration",
    desc: "Automate and enhance customer experience with intelligent chatbot solutions integrated into your platform.",
    img: CHATBOT,
    href: "/chatbot",
  },
  {
    title: "Mobile App Development",
    desc: "Launch fast, scalable Android & iOS apps using cutting-edge native and cross-platform technologies.",
    img: MOBILE,
    href:"/mobile-app",  
  },
];

// Helper component for Service Card
const ServiceCard = ({ service }) => (
  <a
    href={service.href}
    // Updated width: full width on small screens, half width (minus gap) on medium screens and up
    className="w-full min-w-full sm:w-[calc(50%-0.5rem)] sm:min-w-[calc(50%-0.5rem)]
               bg-gradient-to-tr from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200
               hover:scale-[1.02] transition-transform duration-300 flex-shrink-0 block"
  >
    <img
      src={service.img}
      alt={service.title}
      className="mx-auto mb-4 w-[70%] h-[70%] object-contain mix-blend-multiply"
      onError={(e) => {
        e.target.onerror = null;
        // Fallback to a different placeholder if the initial placeholder fails (unlikely, but good practice)
        e.target.src = `https://placehold.co/64x64/dbeafe/1e40af?text=${encodeURIComponent(
          service.title.substring(0, 3) // Use first 3 letters for fallback text
        )}`;
      }}
    />
    <h3 className="text-lg font-semibold max-md:text-base   text-blue-900 text-center mb-2">
      {service.title}
    </h3>
    <p className="text-gray-700  max-md:text-xs leading-tight w-[90%] text-sm text-center mx-auto">
      {service.desc}
    </p>
  </a>
);

// Main About component
const About = () => { // Renamed About to App for default export
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Effect to determine if it's a mobile view
  useEffect(() => {
    const checkMobile = () => {
      // Check if the screen width is less than the 'sm' breakpoint (640px for Tailwind)
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    // Get the first card to calculate its width, including potential margin/gap
    const card = container.querySelector("a"); // Assuming ServiceCard renders an <a> tag
    if (!card) return;

    // For mobile, scroll by the width of one card.
    // For desktop, scroll by the width of two cards (as two are visible).
    // The `cardWidth` already accounts for padding and content. We just need to add the gap.
    const gap = 16; // The gap is 'gap-4' which is 16px
    const scrollAmount = isMobile ? (card.offsetWidth + gap) : (card.offsetWidth + gap) * 2;

    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="min-h-screen font-inter antialiased">
         
          
            <div className="flex-shrink-0">
              <a href="/" className="text-2xl font-bold text-blue-800">Donald Hans</a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Placeholder for navigation links */}
              <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-gray-900">Home</a>
              <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium text-blue-600">About</a>
              <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-gray-900">Services</a>
              <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-gray-900">Contact</a>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
       

          {/* Mobile menu, show/hide based on menu state. */}
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Home</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-blue-700 bg-blue-50">About</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Services</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Contact</a>
              </div>
            </div>
          )}
        


        <section className="pt-20 pb-20 bg-gradient-to-t from-blue-100 to-white text-black px-6">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Donald Hans</h1>
            <p className="text-gray-700 text-lg">
              We help businesses grow by delivering modern IT solutions that drive results.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="relative max-w-6xl mx-auto">
            <div
              ref={scrollRef}
              // Added snap-x and mandatory for single item snapping
              className="flex overflow-x-auto no-scrollbar scroll-smooth gap-4 pb-2 snap-x snap-mandatory"
            >
              {services.map((service, idx) => (
                // Added snap-center for individual card snapping
                <ServiceCard key={idx} service={service} className="snap-center" />
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={() => handleScroll("left")}
                className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 transition"
                aria-label="Scroll left"
              >
                {/* Inline SVG for left arrow */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 transition"
                aria-label="Scroll right"
              >
                {/* Inline SVG for right arrow */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <a href="/consult" className="inline-block">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition">
                Book a Consultation
              </button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
