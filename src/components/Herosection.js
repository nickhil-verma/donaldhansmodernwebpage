import React, { useEffect, useState } from "react";
// Removed react-icons imports due to resolution issues. Using inline SVGs instead.
import { RiGeminiFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
// Inline SVG for RiGeminiFill
const GeminiIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM9 13a1 1 0 100-2 1 1 0 000 2zm6-1a1 1 0 100-2 1 1 0 000 2zm-3 4a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);

// Inline SVG for MdKeyboardArrowRight
const ArrowRightIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

// Inline SVG for FaCheck
const CheckIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);


// FeatureItem component displays an icon and text for a feature.
const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center space-x-3">
    <div className="w-5 h-5 text-blue-600 flex-shrink-0">{icon}</div> {/* Added flex-shrink-0 */}
    <span className="text-gray-700 text-base sm:text-lg">{text}</span> {/* Adjusted font size for responsiveness */}
  </div>
);

// Dummy image data for the ConsultationWidget
const IMAGES = [
  {
    title: "Fintech Admin UI",
    url: "https://i.ytimg.com/vi/RFdtXi4Jr7o/maxresdefault.jpg",
  },
  {
    title: "Healthcare App Design",
    url: "https://i.ytimg.com/vi/25zB8JIr71Y/maxresdefault.jpg",
  },
  {
    title: "E-commerce Redesign",
    url: "https://static.vecteezy.com/system/resources/previews/012/779/029/non_2x/ui-ux-design-concept-ui-ux-landing-page-website-flat-template-vector.jpg",
  },
];

// ConsultationWidget component displays a sequence of image cards with animation.
const ConsultationWidget = () => {
  const [visibleWindows, setVisibleWindows] = useState([]);
  const [phase, setPhase] = useState("fadeIn");

  useEffect(() => {
    let timeout;
    if (phase === "fadeIn") {
      if (visibleWindows.length < IMAGES.length) {
        timeout = setTimeout(() => {
          setVisibleWindows((prev) => {
            // Add next index to visible windows
            return [...prev, prev.length];
          });
        }, 700);
      } else {
        // Stay longer after all images are visible
        timeout = setTimeout(() => setPhase("fadeOut"), 15000);
      }
    } else { // phase === "fadeOut"
      if (visibleWindows.length > 0) {
        timeout = setTimeout(() => {
          // Remove the last visible window
          setVisibleWindows((prev) => prev.slice(0, -1));
        }, 700);
      } else {
        // Go back to fadeIn after all images are gone
        timeout = setTimeout(() => setPhase("fadeIn"), 1000);
      }
    }
    // Cleanup timeout on unmount or phase/visibleWindows change
    return () => clearTimeout(timeout);
  }, [visibleWindows, phase]);

  // Offsets for stacking the "windows" (image cards)
  // These offsets are in Tailwind's rem units and will scale proportionally with the overall design.
  const windowOffsets = [
    "translate-x-8 translate-y-8 sm:translate-x-12 sm:translate-y-12 lg:translate-x-16 lg:translate-y-16 z-10",
    "translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 lg:translate-x-8 lg:translate-y-8 z-20",
    "translate-x-0 translate-y-0 z-30",
  ];

  return (
    // Main container for the widget with responsive aspect ratio and max width
    <div className="bg-gradient-to-b from-white/60 to-purple-100 aspect-[20/18] w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-md p-4 sm:p-6 rounded-3xl border border-gray-300 flex items-center justify-center shadow-lg">
      {/* Inner container for the image cards, now fluid */}
      <div className="relative w-full h-full max-w-[360px] max-h-[460px]"> {/* Added max-w/h to limit growth */}
        {visibleWindows.map((idx, i) => (
          <div
            key={idx}
            // Apply responsive offsets and fade out effect
            className={`absolute left-0 top-0 w-full transition-all duration-700 ease-in-out
              ${windowOffsets[i]}
              ${i === visibleWindows.length - 1 && phase === "fadeOut" ? "opacity-0" : "opacity-100"}
              transition-opacity
            `}
            // Ensure only the top-most card is interactive
            style={{ pointerEvents: i === visibleWindows.length - 1 ? "auto" : "none" }}
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden w-full transition-transform duration-500 delay-300 hover:scale-105">
              {/* Top Bar for the card */}
              <div className="flex items-center h-8 sm:h-10 px-3 sm:px-4 bg-gray-100 border-b border-gray-200">
                <div className="text-xs sm:text-sm font-semibold text-gray-700 truncate">
                  {IMAGES[idx].title}
                </div>
                <div className="ml-auto flex space-x-1">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400 inline-block"></span>
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400 inline-block"></span>
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400 inline-block"></span>
                </div>
              </div>

              {/* Image content */}
              <div className="flex items-center justify-center p-4 sm:p-6 bg-white">
                <img
                  src={IMAGES[idx].url}
                  alt={IMAGES[idx].title}
                  className="rounded-lg w-full h-40 sm:h-56 object-cover shadow" // Adjusted image height for responsiveness
                  // Fallback for image loading errors
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/400x250/dbeafe/1e40af?text=${encodeURIComponent(IMAGES[idx].title.replace(/\s/g, '+'))}`;
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// HeroSection component is the main landing section of the page.
const HeroSection = () => {
  const features = [
    {
      text: "Comprehensive IT infrastructure consulting and optimization",
    },
    {
      text: "Advanced SEO strategies to boost your search rankings",
    },
    {
      text: "Personalized digital marketing solutions for your business",
    },
  ];

  return (
    // Main container with full screen height and responsive padding
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Responsive grid layout for content and widget */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Area */}
          <div>
            <div className="mb-6 max-md:mt-11">
              <span className="hover:cursor-pointer hover:scale-105 transition duration-300 inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/30 backdrop-blur border border-black/20 text-blue-800">
                <RiGeminiFill className="mr-2" /> IT & SEO Consulting Expert <MdKeyboardArrowRight className="ml-2" />
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Infrastructure
              </span>
            </h1>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={<CheckIcon className="text-blue-600" />}
                  text={feature.text}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="/consult" className="w-full sm:w-auto">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg">
                  Get Consultation
                </button>
              </a>
              <a href="/projects" className="w-full sm:w-auto">
                <button className="w-full border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-5 py-2.5 rounded-full font-semibold transition-all duration-200 text-base sm:text-lg">
                  View Projects
                </button>
              </a>
            </div>
          </div>

          {/* Right Widget Area */}
          <div className="mt-12 sm:mt-20 lg:mt-0 flex justify-center lg:justify-end">
            <ConsultationWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
