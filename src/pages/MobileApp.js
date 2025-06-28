import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQSection from '../components/FAQSection';
import { PreFooterCTA } from '../components/FooterSection';

const galleryItems = [
  {
    title: "Seamless User Experience",
    desc: "Our mobile interface is designed with user-centric interactions, ensuring smooth and intuitive navigation that feels natural and responsive.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Powerful Features",
    desc: "Packed with modern tools and cutting-edge technology — manage everything from a single, unified application interface.",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Elegant Design",
    desc: "Our aesthetic is minimalist yet impactful, with an emphasis on clarity, functionality, and perfect brand alignment.",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center",
  },
];

const FloatingShape = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full opacity-20 ${className}`}
    animate={{
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const MobileApp = () => {
  const [selectedPlan, setSelectedPlan] = useState('Pro');

  const plans = [
    {
      title: "Starter",
      price: "$9",
      features: ["Basic Support", "App Preview", "1 Project"],
      popular: false,
    },
    {
      title: "Pro",
      price: "$29",
      features: ["Priority Support", "Unlimited Projects", "Analytics"],
      popular: true,
    },
    {
      title: "Enterprise",
      price: "$99",
      features: ["Dedicated Manager", "Custom Features", "24/7 Support"],
      popular: false,
    },
  ];

  return (
    <div className="bg-white py-10 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20 px-4 text-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingShape className="w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 top-10 left-10" delay={0} />
          <FloatingShape className="w-48 h-48 bg-gradient-to-r from-blue-400 to-cyan-400 top-32 right-20" delay={2} />
          <FloatingShape className="w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 bottom-20 left-1/4" delay={4} />
          <FloatingShape className="w-40 h-40 bg-gradient-to-r from-pink-400 to-rose-400 bottom-32 right-1/3" delay={6} />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,193,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,193,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Blurred Background Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
          >
            Elevate Your
            <br />
            <span className="text-4xl md:text-6xl font-light italic">Mobile Experience</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Discover the power of modern mobile solutions designed for performance, 
            <span className="font-medium text-indigo-600"> simplicity</span>, and 
            <span className="font-medium text-purple-600"> elegance</span>.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-xl shadow-indigo-500/25 transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,69,193,0.1),transparent_50%)]" />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              Features That Matter
            </h2>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
              Every detail crafted with precision and purpose
            </p>
          </motion.div>

          <div className="space-y-24 max-w-7xl mx-auto">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
                    <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                      Premium Feature
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-300" />
                    <img
                      src={item.img}
                      alt={item.title}
                      className="relative rounded-3xl shadow-2xl w-full object-cover h-80 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-24 px-4 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_70%)]" />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-700 font-light">
              Flexible pricing for every stage of your journey
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <input
                    type="radio"
                    id={plan.title}
                    name="pricing"
                    value={plan.title}
                    checked={selectedPlan === plan.title}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="sr-only"
                  />
                  <label
                    htmlFor={plan.title}
                    className={`block cursor-pointer rounded-3xl p-8 transition-all duration-300 ${
                      selectedPlan === plan.title
                        ? 'bg-dark/20 backdrop-blur-sm border-2 border-black/50 shadow-2xl scale-105'
                        : 'bg-dark/10 backdrop-blur-sm border-2 border-black/20 hover:bg-white/15 hover:border-white/30'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-black">{plan.price}</span>
                        <span className="text-xl text-black/70">/mo</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <FaCheckCircle className="text-green-400 flex-shrink-0" />
                          <span className="text-black/90">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`w-full py-3 px-6 rounded-2xl font-semibold text-center transition-all duration-300 ${
                      selectedPlan === plan.title
                        ? 'bg-white text-indigo-900 shadow-lg'
                        : 'bg-white/20 text-gray-700 hover:bg-white/30'
                    }`}>
                      {selectedPlan === plan.title ? 'Selected' : 'Select Plan'}
                    </div>
                  </label>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-12 py-4 rounded-2xl text-lg font-semibold shadow-xl shadow-pink-500/25 transition-all duration-300 hover:scale-105">
                Start with {selectedPlan}
              </button>
            </motion.div>
          </div>
          
        </div>
      </section>
    
      <FAQSection />
      <PreFooterCTA/>
    </div>
  );
};

export default MobileApp;