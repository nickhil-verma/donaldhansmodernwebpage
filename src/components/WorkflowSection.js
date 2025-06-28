import React from "react";
import { FaCheck } from "react-icons/fa6";
import WORKFLOW from "../assets/WORKFLOW.png";

const WorkflowSection = () => {
  return (
    <section id="webdev" className="py-16 bg-gradient-to-t from-white to-blue-50 flex flex-row max-md:flex-col items-center justify-between px-10 md:px-20 gap-12">
      <div className="flex justify-center items-center w-full md:w-1/2">
        <img
          src={WORKFLOW}
          alt="Workflow Illustration"
          className="w-[80%] md:w-[60%] mix-blend-multiply object-contain rounded-xl"
        />
      </div>
      <div className="w-full md:w-1/2">
        <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
          Connected Knowledge
        </span>
        <h2 className="text-4xl font-bold text-gray-800 mt-3 mb-4 leading-tight">
          Simplified and Powerful <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Workflow</span> 
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Explore a comprehensive toolkit designed to streamline your development and deployment processes.
        </p>
        <ul className="space-y-4 text-blue-700">
          <li className="flex items-start gap-2">
            <FaCheck className="mt-1" /> <span>Rich Documentation & Central Knowledge Base support</span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheck className="mt-1" /> <span>  GitHub Repositories & Code Snippets Support</span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheck className="mt-1" /> <span>Supportive Community & Discussion Forums</span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheck className="mt-1" /> <span>  Web Hosting & Cloud Deployments  </span>
          </li>
          <li className="flex items-start gap-2">
            <FaCheck className="mt-1" /> <span>Seamless Cloud Integration & Robust APIs</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WorkflowSection;
