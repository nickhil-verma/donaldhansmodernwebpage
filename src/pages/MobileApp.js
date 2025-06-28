import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FAQSection from '../components/FAQSection';
import { PreFooterCTA } from '../components/FooterSection';
import Navbar from '../components/Navbar';

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
    <>
    <Navbar/>
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
          
          <a href='/consult'>
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
          </a>
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
        {/* Build With Us Now Section */}
<section className="relative py-24 bg-gradient-to-br from-white via-indigo-50 to-purple-50 px-4 text-center overflow-hidden">
  {/* Optional background blur & radial overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.08),transparent_50%)]" />
  <div className="absolute inset-0 backdrop-blur-sm bg-white/10" />

  <div className="relative z-10 max-w-4xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
    >
      Build With Us Now
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-lg md:text-xl text-slate-600 font-light mb-10 leading-relaxed"
    >
      Whether you're launching a startup or upgrading your enterprise platform, our expert team is ready to co-create your mobile-first future.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <a href="/consult">
        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-3 py-1 animate-bounce rounded-full text-lg font-semibold shadow-lg shadow-indigo-500/25 transition-all duration-300">
          Start Now
        </button>
      </a>
    </motion.div>
  </div>
</section>

     
      
    
      <FAQSection />
      <PreFooterCTA/>
    </div>
    </>
  );
};

export default MobileApp;