"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiGeminiFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import HERO from "../assets/HERO.gif";

const HeroSection = () => {
  const features = [
    "Comprehensive IT infrastructure consulting and optimization",
    "Advanced SEO strategies to boost your search rankings",
    "Personalized digital marketing solutions for your business",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center py-10 px-4 sm:px-6 lg:px-8">
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

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Infrastructure
              </span>
            </motion.h1>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
                  className="flex items-center gap-3 text-gray-700 text-base sm:text-lg"
                >
                  <FaCheckCircle className="text-blue-600" />
                  {text}
                </motion.div>
              ))}
            </div>

           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
  {/* Wrap the button with a relative container */}
  <div className="relative w-full sm:w-auto">
    <a href="/Chatbot" className="block">
      <button className="w-full bg-gradient-to-r flex items-center justify-center gap-2 from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-lg">
        <span className="inline-flex items-center gap-2">
          Chat Bot Integration{" "}
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <FaArrowRightLong className="text-white" />
          </motion.span>
        </span>
      </button>

      {/* "NEW" label */}
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

          {/* MacBook Styled Image */}
          <img
            src={HERO}
            alt="Hero Preview"
            className="w-[80%] m-auto  mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
