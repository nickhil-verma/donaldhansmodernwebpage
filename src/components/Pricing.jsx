import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    title: "Free Plan",
    price: "$0",
    description: "Ideal for hobbyists or trying out our chatbot.",
    features: [
      "✅ 10 messages/day",
      "✅ Store customer name & email",
      "❌ API access",
      "❌ Custom branding",
      "❌ Analytics dashboard",
      "❌ Priority support",
    ],
    gradient: "from-purple-400 to-blue-400",
    border: "border-purple-200",
  },
  {
    title: "Pro Plan",
    price: "$9/mo",
    description: "Best for creators and small businesses.",
    features: [
      "✅ 1,000 messages/day",
      "✅ Store customer name & email",
      "✅ Basic API access",
      "✅ Analytics dashboard",
      "✅ Custom branding",
      "❌ 24/7 support",
    ],
    gradient: "from-blue-500 to-purple-500",
    border: "border-blue-200",
  },
  {
    title: "Enterprise",
    price: "$90/mo",
    description: "Enterprise-grade chatbot infrastructure & support.",
    features: [
      "✅ Unlimited messages",
      "✅ Store customer name & email",
      "✅ Unlimited API access",
      "✅ Advanced analytics dashboard",
      "✅ Custom branding & workflows",
      "✅ 24/7 premium support",
    ],
    gradient: "from-purple-600 to-blue-600",
    border: "border-purple-300",
  },
];

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      type: "spring",
    },
  }),
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handlePlanClick = (title) => {
    setSelectedPlan(title);
  };

  const handleCheckout = () => {
    navigate("/consult");
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 via-white to-blue-50 p-10">
      <h2 className="text-5xl font-bold text-center text-purple-800 mb-4">
        AI ChatBot Pricing
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-xl mb-12">
        Choose the plan that fits your needs and unlock the full power of AI-driven conversations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => {
          const isSelected = selectedPlan === plan.title;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              onClick={() => handlePlanClick(plan.title)}
              className={`cursor-pointer bg-white rounded-3xl shadow-2xl p-8 border-t-8 ${plan.border} transform transition duration-300 hover:scale-105 ${
                isSelected ? "ring-4 ring-blue-400" : ""
              }`}
            >
              <div
                className={`bg-gradient-to-r ${plan.gradient} text-transparent bg-clip-text text-3xl font-extrabold mb-3`}
              >
                {plan.title}
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {plan.price}
              </div>
              <p className="text-gray-500 mb-6">{plan.description}</p>

              <div className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={featureVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-gray-700 text-sm flex items-start"
                  >
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={isSelected ? handleCheckout : () => handlePlanClick(plan.title)}
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  isSelected
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {isSelected ? "Proceed to Checkout" : "Choose Plan"}
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
