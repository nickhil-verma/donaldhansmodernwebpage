import React from "react";
import SEO from "../assets/SEO.svg";
import DEVELOPMENT from "../assets/Development.gif";
import CHATBOT from "../assets/Chatbot.gif";

const About = () => {
  return (
    <section className="pt-20 pb-20 bg-gradient-to-t from-blue-100 to-white text-black px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Donald Hans</h1>
        <p className="text-gray-700 text-lg">
          We help businesses grow by delivering modern IT solutions that drive results.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            title: "SEO & IT Consultancy",
            desc: "Strategize your online growth with expert SEO and tailored IT consultation for scaling businesses.",
            img: SEO,
          },
          {
            title: "Webpage Development",
            desc: "Build responsive, fast, and beautiful websites using the latest tech stacks including React and Tailwind.",
            img: DEVELOPMENT,
          },
          {
            title: "Chatbot Integration",
            desc: "Automate and enhance customer experience with intelligent chatbot solutions integrated into your platform.",
            img: CHATBOT,
          }
        ].map((service, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-tr from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="mx-auto mb-4 w-[70%] h-[70%] object-contain mix-blend-multiply"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/64x64/dbeafe/1e40af?text=${encodeURIComponent(service.title)}`;
              }}
            />
            <h3 className="text-lg font-semibold text-blue-900 text-center mb-2">{service.title}</h3>
            <p className="text-gray-700 w-[90%] text-sm text-center">{service.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a href="/consult" className="inline-block">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition">
            Book a Consultation
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;
