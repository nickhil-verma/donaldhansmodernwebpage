import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiGeminiFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import HERO from "../assets/HERO.webm";

const HeroSection = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHasMounted(true), 100); // reduce delay
    return () => clearTimeout(timeout);
  }, []);

  const features = [
    "Comprehensive IT infrastructure consulting and optimization",
    "Advanced SEO strategies to boost your search rankings",
    "Personalized digital marketing solutions for your business",
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Section */}
          <div>
            <div className="mb-6 max-md:mt-11">
              <span className="hover:cursor-pointer hover:scale-105 transition duration-300 inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/30 backdrop-blur border border-black/20 text-blue-800">
                <RiGeminiFill className="mr-2" />
                IT & SEO Consulting Expert
                <MdKeyboardArrowRight className="ml-2" />
              </span>
            </div>

            <AnimatePresence>
              {hasMounted && (
                <motion.h1
                  {...fadeUp}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
                >
                  Transform Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Digital Infrastructure
                  </span>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <AnimatePresence>
                {hasMounted &&
                  features.map((text, index) => (
                    <motion.div
                      key={index}
                      {...fadeUp}
                      transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                      className="flex items-center gap-3 text-gray-700 text-base sm:text-lg"
                    >
                      <FaCheckCircle className="text-blue-600" />
                      {text}
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Chatbot Button with NEW label */}
              <div className="relative w-full sm:w-auto">
                <a href="/Chatbot" className="block">
                  <button className="w-full bg-gradient-to-r flex items-center justify-center gap-2 from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg">
                    <span className="inline-flex items-center gap-2">
                      Chat Bot Integration{" "}
                      <span className="animate-bounce">
                        <FaArrowRightLong className="text-white" />
                      </span>
                    </span>
                  </button>
                  <span className="absolute animate-pulse -top-2 text-white -right-2 bg-red-500 text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
                    NEW
                  </span>
                </a>
              </div>

              {/* View Projects Button */}
              <a href="/projects" className="w-full sm:w-auto">
                <button className="w-full border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-5 py-2.5 rounded-full font-semibold transition-all duration-200 text-base sm:text-lg">
                  View Projects
                </button>
              </a>
            </div>
          </div>

          {/* Animated or static image/video */}
          <div className="w-full flex justify-center items-center">
            <video
              src={HERO}
              autoPlay
              muted
              playsInline
              className="w-[80%] m-auto mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
