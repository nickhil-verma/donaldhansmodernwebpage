import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const techStacks = [
  { icon: <FaReact size={40} color="#61DAFB" />, label: "React" },
  { icon: <SiNextdotjs size={40} color="#000000" />, label: "Next.js" },
  { icon: <FaNodeJs size={40} color="#68A063" />, label: "Node.js" },
  { icon: <FaPython size={40} color="#306998" />, label: "Python" },
  { icon: <SiTypescript size={40} color="#3178C6" />, label: "TypeScript" },
  { icon: <FaAws size={40} color="#FF9900" />, label: "AWS" },
  { icon: <FaDatabase size={40} color="#4DB33D" />, label: "SQL" },
  { icon: <SiMongodb size={40} color="#4DB33D" />, label: "MongoDB" },
  { icon: <SiTailwindcss size={40} color="#38B2AC" />, label: "Tailwind CSS" },
  { icon: <FaHtml5 size={40} color="#E34F26" />, label: "HTML5" },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, label: "CSS3" },
  { icon: <FaGitAlt size={40} color="#F1502F" />, label: "Git" },
  { icon: <FaDocker size={40} color="#0db7ed" />, label: "Docker" },
  { icon: <FaFigma size={40} color="#A259FF" />, label: "Figma" },
];

const TechStackSection = () => {
  const half = Math.ceil(techStacks.length / 2);
  const techStacksRow1 = techStacks.slice(0, half);
  const techStacksRow2 = techStacks.slice(half);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Section: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-black mb-4 leading-tight">
            Technologies We Use
          </h2>
          <p className="text-lg text-gray-700 mb-8   max-w-xl mx-auto md:mx-0">
            Our expert team works with modern and powerful technologies to build scalable, efficient, and robust digital solutions.
          </p>
        </div>

        {/* Right Section: Tech Marquee */}
        <div className="w-full md:w-1/2">
          <div className="p-4 rounded-xl shadow-inner">
            {/* Row 1: Left Scrolling */}
            <Marquee gradient={false} speed={40} pauseOnHover className="overflow-hidden p-3">
              {techStacksRow1.map((tech, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex flex-col items-center justify-center w-28 h-28 mx-3 bg-white rounded-xl border border-gray-200 transition-transform duration-200 hover:scale-105"
                >
                  {tech.icon}
                  <span className="text-sm mt-2 text-gray-700">{tech.label}</span>
                </div>
              ))}
            </Marquee>

            {/* Row 2: Right Scrolling */}
            <Marquee className="overflow-hidden p-3" gradient={false} speed={40} pauseOnHover direction="right">
              {techStacksRow2.map((tech, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex flex-col items-center over justify-center w-28 h-28 mx-3 bg-white rounded-xl border border-gray-200 transition-transform duration-200 hover:scale-105"
                >
                  {tech.icon}
                  <span className="text-sm mt-2 text-gray-700">{tech.label}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
