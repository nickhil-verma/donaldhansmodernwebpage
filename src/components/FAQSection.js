// FAQSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiX } from "react-icons/fi";

const faqData = [
  {
  question: "What industries do you specialize in?",
  answer:
    "We have experience across industries including healthcare, e-commerce, education, logistics, and fintech, with tailored solutions for each."
},
{
  question: "Do you build custom software or only provide consultation?",
  answer:
    "We do both. From advising on tech strategy to fully developing custom web and mobile applications, we cover end-to-end solutions."
},
{
  question: "Can you help us migrate from legacy systems?",
  answer:
    "Yes. We specialize in smooth migration from outdated systems to modern, scalable platforms with minimal downtime."
},
{
  question: "What is your typical project timeline?",
  answer:
    "Project timelines vary, but we typically deliver MVPs in 4–8 weeks and full-scale solutions within 3–6 months depending on scope."
},
{
  question: "How do you ensure data security and compliance?",
  answer:
    "We follow best practices in cybersecurity, encryption, and compliance with standards like GDPR, HIPAA, and ISO certifications."
},
{
  question: "Do you provide cloud infrastructure setup and management?",
  answer:
    "Absolutely. We set up, manage, and optimize cloud services including AWS, Azure, and Google Cloud tailored to your needs."
},
{
  question: "Can you support our remote or distributed teams?",
  answer:
    "Yes. We design collaboration workflows, cloud systems, and remote access solutions ideal for hybrid or fully remote teams."
},
{
  question: "Do you offer UI/UX design services?",
  answer:
    "Yes. We create user-friendly, responsive, and accessible interfaces backed by UX research and modern design tools."
},
{
  question: "How is pricing determined for your services?",
  answer:
    "Pricing depends on project scope, duration, and complexity. We offer flexible models including hourly, fixed-price, and retainer-based."
},
{
  question: "What makes your consultancy different from others?",
  answer:
    "We combine strategic thinking, full-stack development, and long-term partnership—backed by real-world experience across domains."
}

];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <motion.div
    layout
    className="border-b w-full  border-gray-200 py-4 cursor-pointer"
    initial={false}
    onClick={onClick}
  >
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-medium text-gray-800">{question}</h3>
      <motion.div
        initial={false}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.5 }}
        className="text-blue-600 text-xl"
      >
        <FiPlus />
      </motion.div>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.p
          className="mt-3 text-gray-600 text-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {answer}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="px-6 py-20 max-w-full  mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">FAQ</h2>
      <motion.div
        layout
        className="bg-white/80 rounded-2xl shadow-md border border-gray-200 p-6"
      >
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default FAQSection;
