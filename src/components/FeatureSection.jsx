 
import React from "react";
import CLOUDIMG from "../assets/Cloudimage.png"
import CUSTOMSOFTWARE from "../assets/Customsoftwaredev.png";
import Globe from "./Globe";   
 import ANALYTICS from "../assets/analytics.png";  

const features = [
  {
   title: "Tech Strategy That Actually Moves the Needle",
description:
  "Forget generic IT advice. We deliver bold, business-driven technology strategies that unlock growth, streamline operations, and future-proof your digital presence. From roadmap to execution, we help you make smarter, faster, and more impactful tech decisions that align perfectly with your vision.",

    image: ANALYTICS,  
    className: "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Cloud Solutions & Migration",
    description:
      "Seamlessly transition to and manage robust cloud environments. Leverage AWS, Azure, and GCP for scalable, secure, and cost-effective infrastructure.",
    image: CLOUDIMG, 
    className: "",
  },
  {
    title: "Custom Software Development",
    description:
      "Build bespoke applications tailored to your unique business needs. From web and mobile apps to enterprise solutions, we deliver high-quality, scalable software.",
    image: CUSTOMSOFTWARE,  
    className: "",
  },
  {
    title: "Go Global in Seconds",
description: "Leverage a secure, high-speed deployment pipeline built on world-class cloud infrastructure—engineered to scale with you, anywhere on Earth.",

    component: <Globe  />,  
    className: "sm:col-span-2 max:md-h   lg:col-span-2",
  },
   
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
          className="w-full h-full mix-blend-multiply    object-contain rounded-3xl opacity-90"
        />
      </div>
    )}
    {component && (
      <div className="mt-4 w-full min-h-60 flex items-center justify-center flex-grow">
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
  With deep roots in Silicon Valley, we help you align technology with business goals — streamlining operations, enhancing security, and unlocking new opportunities through smart, strategic innovation.
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