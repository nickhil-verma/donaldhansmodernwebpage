"use client"; // This directive is typically used in Next.js for client-side components.

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Custom Content Components for each card ---
// These components will be displayed as the "content" of each card
// when it's selected/expanded in the carousel. They include relevant text and images.

const AIContent = () => (
  <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl mt-6 border border-purple-100">
    <p className="text-gray-700 text-lg font-light max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <span className="font-medium text-gray-900 block mb-2">
        AI-Driven Market Intelligence
      </span>
      Advanced algorithms analyze consumer behavior patterns, predict market trends, and identify emerging opportunities across global markets.
    </p>
    <img
      src="https://images.unsplash.com/photo-1620712948950-c651e737715b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="AI Analytics"
      className="w-full max-w-lg h-64 object-cover mt-8 rounded-2xl shadow-lg"
    />
  </div>
);

const DataContent = () => (
  <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl mt-6 border border-blue-100">
    <p className="text-gray-700 text-lg font-light max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <span className="font-medium text-gray-900 block mb-2">
        Real-Time Data Analytics
      </span>
      Transform raw data into actionable insights with our comprehensive analytics platform for informed decision-making.
    </p>
    <img
      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Data Analytics"
      className="w-full max-w-lg h-64 object-cover mt-8 rounded-2xl shadow-lg"
    />
  </div>
);

const TrendsContent = () => (
  <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl mt-6 border border-indigo-100">
    <p className="text-gray-700 text-lg font-light max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <span className="font-medium text-gray-900 block mb-2">
        Trend Forecasting
      </span>
      Stay ahead of market shifts with predictive models that identify emerging trends before they become mainstream.
    </p>
    <img
      src="https://images.unsplash.com/photo-1517050081485-c689626e38a2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Market Trends"
      className="w-full max-w-lg h-64 object-cover mt-8 rounded-2xl shadow-lg"
    />
  </div>
);

const CompetitorContent = () => (
  <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl mt-6 border border-violet-100">
    <p className="text-gray-700 text-lg font-light max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <span className="font-medium text-gray-900 block mb-2">
        Competitive Intelligence
      </span>
      Monitor competitor strategies, pricing models, and market positioning to maintain your competitive edge.
    </p>
    <img
      src="https://images.unsplash.com/photo-1543269824-34ad849b252d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Competitive Analysis"
      className="w-full max-w-lg h-64 object-cover mt-8 rounded-2xl shadow-lg"
    />
  </div>
);

const ConsumerContent = () => (
  <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl mt-6 border border-blue-100">
    <p className="text-gray-700 text-lg font-light max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <span className="font-medium text-gray-900 block mb-2">
        Consumer Behavior Analysis
      </span>
      Deep dive into customer preferences, purchase patterns, and demographic insights for targeted marketing strategies.
    </p>
    <img
      src="https://images.unsplash.com/photo-1510127599026-64670df5522e?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Consumer Research"
      className="w-full max-w-lg h-64 object-cover mt-8 rounded-2xl shadow-lg"
    />
  </div>
);

const InsightsContent = () => (
  <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-2xl mt-6 border border-purple-100">
    <p className="text-gray-700 text-lg font-light max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <span className="font-medium text-gray-900 block mb-2">
        Strategic Market Insights
      </span>
      Custom research reports and strategic recommendations tailored to your industry and business objectives.
    </p>
    <img
      src="https://images.unsplash.com/photo-1549692520-cb4f077839c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Strategic Insights"
      className="w-full max-w-lg h-64 object-cover mt-8 rounded-2xl shadow-lg"
    />
  </div>
);

// --- Card Data ---
const cardData = [
  {
    id: "ai-intelligence",
    category: "AI Analytics",
    title: "Market Intelligence",
    shortDescription: "Leverage AI to analyze consumer behavior and predict market trends with precision.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AIContent />,
  },
  {
    id: "data-analytics",
    category: "Data Science",
    title: "Analytics Platform",
    shortDescription: "Transform raw data into actionable insights for informed decision-making.",
    src: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DataContent />,
  },
  {
    id: "trend-forecasting",
    category: "Forecasting",
    title: "Trend Analysis",
    shortDescription: "Stay ahead of market shifts with predictive models and trend identification.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <TrendsContent />,
  },
  {
    id: "competitive-intelligence",
    category: "Intelligence",
    title: "Competitive Edge",
    shortDescription: "Monitor competitor strategies and market positioning to maintain your edge.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CompetitorContent />,
  },
  {
    id: "consumer-behavior",
    category: "Behavioral",
    title: "Consumer Insights",
    shortDescription: "Deep dive into customer preferences and purchase patterns for targeted marketing.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <ConsumerContent />,
  },
  {
    id: "strategic-insights",
    category: "Strategy",
    title: "Market Strategy",
    shortDescription: "Custom research reports and strategic recommendations for your business objectives.",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <InsightsContent />,
  },
];

// --- Card Component ---
const ResearchCard = ({ data, isExpanded, onExpand, onCollapse }) => {
  // Define variants for the text content within the card
  const textContentVariants = {
    rest: { opacity: 1, y: 0 }, // Default state (visible, no vertical offset)
    hover: { opacity: 1, y: 0 }, // No change for category/title on hover
  };

  // Define variants for the short description specifically
  const shortDescriptionVariants = {
    rest: { opacity: 0, y: 10 }, // Hidden and slightly offset by default
    hover: { opacity: 1, y: 0 }, // Visible and moved to original position on hover
  };

  return (
    <motion.div
      layout
      initial="rest" // Set initial state for root motion.div to "rest"
      whileHover="hover" // Trigger "hover" state for all child motion components with variants
      animate="rest" // Always animate to "rest" when not hovered
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`
        relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700
        ${isExpanded
          ? "col-span-full row-span-full z-50 p-8 bg-gradient-to-br from-purple-50/90 via-blue-50/90 to-indigo-50/90 backdrop-blur-2xl border border-white/20 shadow-2xl"
          : "bg-white/60 backdrop-blur-lg p-2 hover:bg-white/80 border border-white/30 shadow-xl hover:shadow-2xl hover:scale-105 group" // Added 'group' class here
        }
        ${isExpanded ? "h-auto max-h-[90vh] overflow-y-auto" : "h-80"}
        flex flex-col
      `}
      onClick={() => (isExpanded ? onCollapse() : onExpand(data.id))}
    >
      {!isExpanded && (
        <div className="relative w-full h-full flex flex-col justify-end p-6 text-white">
          <img
            src={data.src}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/E0E0E0/333333?text=Image+Error`; }}
          />
          {/* Darker gradient on hover for better text readability and layering */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-2xl group-hover:from-black/95 group-hover:via-black/70 transition-all duration-300"></div>
          <motion.div
            variants={textContentVariants} // Apply text content variants to this container
            className="relative z-10 flex flex-col justify-end h-full" // Ensure content is at the bottom and takes full height
          >
            <p className="text-sm font-light opacity-90 mb-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              {data.category}
            </p>
            <h3 className="text-2xl font-light leading-tight mb-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              {data.title}
            </h3>
            {/* Short description on hover - controlled by parent's whileHover via variants */}
            <motion.p
              variants={shortDescriptionVariants} // Apply short description variants
              transition={{ duration: 0.2, ease: "easeOut" }} // Smoother transition for description
              className="text-sm font-light leading-snug text-white/90 relative z-10 mt-2"
              style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
            >
              {data.shortDescription}
            </motion.p>
          </motion.div>
        </div>
      )}

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="w-full flex-grow flex flex-col"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCollapse();
              }}
              className="absolute top-6 right-6 bg-white/20 backdrop-blur-lg text-gray-700 rounded-full p-3 hover:bg-white/30 transition-all duration-300 z-50 border border-white/30"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img
              src={data.src}
              alt={data.title}
              className="w-full h-72 object-cover rounded-2xl shadow-xl mb-8 border border-white/20"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x450/E0E0E0/333333?text=Image+Error`; }}
            />

            <div className="text-center mb-6">
              <p className="text-base font-light text-gray-600 mb-2" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                {data.category}
              </p>
              <h2 className="text-4xl font-light text-gray-900" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                {data.title}
              </h2>
            </div>

            {data.content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main Component ---
export function MarketResearch() {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleExpand = (id) => {
    setExpandedCardId(id);
  };

  const handleCollapse = () => {
    setExpandedCardId(null);
  };

  return (
    <div className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-ultralight text-gray-900 mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Market & Research
          </h1>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Advanced analytics and intelligence for data-driven decisions
          </p>
        </motion.div>

        <div className={`grid gap-8 transition-all duration-700 ease-out ${expandedCardId ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
          <AnimatePresence mode="wait">
            {expandedCardId ? (
              <ResearchCard
                key={expandedCardId}
                data={cardData.find((card) => card.id === expandedCardId)}
                isExpanded={true}
                onExpand={handleExpand}
                onCollapse={handleCollapse}
              />
            ) : (
              cardData.map((card) => (
                <ResearchCard
                  key={card.id}
                  data={card}
                  isExpanded={false}
                  onExpand={handleExpand}
                  onCollapse={handleCollapse}
                />
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default MarketResearch;
