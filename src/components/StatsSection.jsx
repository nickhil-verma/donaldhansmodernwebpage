import React, { useEffect, useState, useRef } from "react";

const StatCard = ({ label, target, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false); // New state to track if animation has run
  const statCardRef = useRef(null);

  const animationDuration = 1500; // 1.5 seconds

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (statCardRef.current) {
      observer.observe(statCardRef.current);
    }

    return () => {
      if (statCardRef.current) {
        observer.unobserve(statCardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Only start the counter if the element is in view AND the animation hasn't been triggered yet
    if (inView && !animationTriggered) {
      let start = 0;
      const incrementStep = Math.max(1, Math.ceil(target / (animationDuration / 10)));

      const counter = setInterval(() => {
        start += incrementStep;
        const displayValue = Math.min(start, target);

        if (displayValue >= 1000) {
          const formattedCount = (displayValue / 1000).toFixed(1);
          setCount(formattedCount.endsWith('.0') ? `${parseInt(formattedCount)}k` : `${formattedCount}k`);
        } else {
          setCount(displayValue);
        }

        if (start >= target) {
          clearInterval(counter);
          setAnimationTriggered(true); // Set to true once animation completes
        }
      }, 10);

      return () => clearInterval(counter);
    }
    // No else block here to reset count, so it stays at the final value
  }, [inView, target, animationDuration, animationTriggered]); // Add animationTriggered to dependency array

  return (
    <div
      ref={statCardRef}
      className="  backdrop-blur p-6 rounded-xl   text-center   hover:scale-105 transition-all"
    >
      <div className="text-4xl font-bold text-blue-600">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-gray-600 font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 px-6 min-h-[50vh] bg-gradient-to-t from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          By the Numbers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard label="Lines of Code" target={16000} />
          <StatCard label="Websites Delivered" target={300} />
          <StatCard label="Firms We've Worked With" target={200} />
          <StatCard label="Years in Industry" target={7} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;