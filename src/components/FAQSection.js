// FAQSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiX } from "react-icons/fi";

const faqData = [
  {
    question: "What services do you offer as an IT consultancy?",
    answer:
      "We offer IT infrastructure planning, cybersecurity, cloud migration, software development, and SEO/digital marketing solutions."
  },
  {
    question: "Can you integrate your solutions with our existing systems?",
    answer:
      "Absolutely. We specialize in seamless integration with your current tech stack, including CRMs, ERPs, and cloud platforms."
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer:
      "Yes, we provide post-deployment support, maintenance, and optimization to ensure long-term success."
  },
  {
    question: "Is there a minimum project size or budget?",
    answer:
      "No project is too small. We work with startups to enterprises, tailoring our services to your scale and needs."
  },
  {
    question: "Can you help optimize our website for performance and SEO?",
    answer:
      "Yes. We audit and optimize your website for speed, SEO, mobile responsiveness, and user experience."
  },
  {
    question: "How do we get started with a consultation?",
    answer:
      "Just click our 'Free Consultation' button or contact us directly. We'll assess your needs and recommend the best strategy."
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
