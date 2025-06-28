import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SEO from "../assets/SEO.svg";
import DEVELOPMENT from "../assets/Development.gif";
import CHATBOT from "../assets/Chatbot.gif";
import MOBILE from "../assets/Mobile.gif";
import Navbar from "../components/Navbar";

const services = [
  {
    title: "SEO & IT Consultancy",
    desc: "Strategize your online growth with expert SEO and tailored IT consultation for scaling businesses.",
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
    href: "/mobile-app",
  },
];


const ServiceCard = ({ service }) => (
  <a
    href={service.href}
    className="w-[calc(50%-0.5rem)] min-w-[calc(50%-0.5rem)] bg-gradient-to-tr from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 hover:scale-[1.02] transition-transform duration-300 flex-shrink-0 block"
  >
    <img
      src={service.img}
      alt={service.title}
      className="mx-auto mb-4 w-[70%] h-[70%] object-contain mix-blend-multiply"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://placehold.co/64x64/dbeafe/1e40af?text=${encodeURIComponent(
          service.title
        )}`;
      }}
    />
    <h3 className="text-lg font-semibold text-blue-900 text-center mb-2">
      {service.title}
    </h3>
    <p className="text-gray-700 w-[90%] text-sm text-center mx-auto">
      {service.desc}
    </p>
  </a>
);


const About = () => {
  const scrollRef = useRef(null);

  const handleScroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector("div");
    const cardWidth = card ? card.offsetWidth + 16 : 320; // card width + gap
    container.scrollBy({
      left: dir === "left" ? -cardWidth * 2 : cardWidth * 2,
      behavior: "smooth",
    });
  };

  return (
    <>
    <Navbar/>
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
          className="flex overflow-x-auto no-scrollbar scroll-smooth gap-4 pb-2"
        >
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => handleScroll("left")}
            className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaArrowLeft className="text-gray-700" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaArrowRight className="text-gray-700" />
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
    </>
  );
};

export default About;
