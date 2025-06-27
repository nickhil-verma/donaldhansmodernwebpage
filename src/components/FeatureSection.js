// FeatureSection.jsx
import React from "react";
// Assuming Globe is a visually appealing component related to deployment/global reach
import Globe from "./Globe"; // Ensure this path is correct
// You might want to replace ANALYTICS with a more generic "services" or "solutions" icon if available
import ANALYTICS from "../assets/analytics.png"; // Ensure this path is correct or replace with a relevant local asset

const features = [
  {
    title: "Strategic IT Consulting",
    description:
      "Align your technology with business goals. We provide expert IT strategy, roadmap development, and digital transformation guidance to drive growth and efficiency.",
    image: ANALYTICS, // Could be a flowchart, a handshake, or a 'brainstorming' icon
    className: "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Cloud Solutions & Migration",
    description:
      "Seamlessly transition to and manage robust cloud environments. Leverage AWS, Azure, and GCP for scalable, secure, and cost-effective infrastructure.",
    image: "https://cdn-icons-png.flaticon.com/512/861/861304.png", // Cloud icon
    className: "",
  },
  {
    title: "Custom Software Development",
    description:
      "Build bespoke applications tailored to your unique business needs. From web and mobile apps to enterprise solutions, we deliver high-quality, scalable software.",
    image: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png", // Code icon
    className: "",
  },
  {
    title: "Secure & Efficient Deployment",
    description:
      "With our blazing fast, cutting-edge infrastructure (backed by leading cloud providers), you can deploy solutions instantly and securely globally.",
    component: <Globe />, // The interactive globe component fits well here
    className: "sm:col-span-2 lg:col-span-2",
  },
  // Optional: You could add more features if your grid design allows for scrolling or more rows.
  // For example, if you wanted 6 cards total and adjust grid auto-rows or individual card classes.
  // {
  //   title: "Cybersecurity & Compliance",
  //   description: "Protect your assets with robust security measures and ensure compliance with industry standards and regulations.",
  //   image: "https://cdn-icons-png.flaticon.com/512/2920/2920556.png", // Shield/security icon
  //   className: "",
  // },
  // {
  //   title: "Data Analytics & AI Integration",
  //   description: "Transform raw data into actionable insights and integrate AI to automate processes and enhance decision-making.",
  //   image: "https://cdn-icons-png.flaticon.com/512/1085/1085449.png", // Data icon
  //   className: "",
  // },
];

const FeatureCard = ({ title, description, image, component, className }) => (
  <div
    className={`bg-white/90 text-black p-6 rounded-2xl border border-gray-200 backdrop-blur-md hover:scale-[1.03] transition-all duration-300 shadow-md flex flex-col ${className} h-full`}
  >
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    {image && (
      <div className="mt-4 w-full flex items-center justify-center rounded-xl overflow-hidden flex-grow">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-xl opacity-90"
        />
      </div>
    )}
    {component && (
      <div className="mt-4 w-full flex items-center justify-center flex-grow">
        {component}
      </div>
    )}
  </div>
);

const FeatureSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 text-black py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Tailored Solutions for Your Business
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide comprehensive IT consulting services designed to optimize your operations, enhance security, and drive innovation.
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(250px,auto)] gap-6"
      >
        {features.map((feat, i) => (
          <FeatureCard key={i} {...feat} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;