import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Free Plan",
    price: "$0",
    description: "Ideal for hobbyists or light usage. Try our AI chatbot experience.",
    features: [
      "✅ 10 messages/day",
      "❌ API access",
      "❌ Priority support",
      "❌ Analytics dashboard",
      "❌ Multiple chatbot instances",
    ],
    gradient: "from-purple-400 to-blue-400",
    border: "border-purple-200",
  },
  {
    title: "Pro Plan",
    price: "$9/mo",
    description: "Perfect for professionals needing more access and functionality.",
    features: [
      "✅ 1000 messages/day",
      "✅ Basic API access",
      "✅ Email support",
      "✅ Analytics dashboard",
      "❌ Multiple chatbot instances",
    ],
    gradient: "from-blue-500 to-purple-500",
    border: "border-blue-200",
  },
  {
    title: "Enterprise",
    price: "$90/mo",
    description: "Designed for businesses needing robust chatbot infrastructure.",
    features: [
      "✅ Unlimited messages",
      "✅ Unlimited API calls",
      "✅ 24/7 premium support",
      "✅ Advanced analytics dashboard",
      "✅ Multiple chatbot instances",
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
      delay: i * 0.1,
      duration: 0.4,
      type: "spring",
    },
  }),
};

const Pricing = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 via-white to-blue-50 p-10">
      <h2 className="text-5xl font-bold text-center text-purple-800 mb-4">
        AI ChatBot Pricing
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-xl mb-12">
        Choose the plan that fits your needs and unlock the full power of AI-driven conversations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={`bg-white rounded-3xl shadow-2xl p-8 border-t-8 ${plan.border} transform transition duration-300 hover:scale-105`}
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

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
