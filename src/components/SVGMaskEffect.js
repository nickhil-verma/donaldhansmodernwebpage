"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SVGMaskEffect() {
  const canvasRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, { stiffness: 250, damping: 25 });
  const y = useSpring(mouseY, { stiffness: 250, damping: 25 });

  // Different text for default and reveal
 const defaultText =
  "Meet Donald Hans' AI Chat Agent — your smart partner in transforming business infrastructure with precision and speed.";

const revealText =
  "At Donald Hans, our mission is to deliver innovative IT solutions that future-proof your business and fuel digital growth.";


  const circleRadius = 140;
  const textLineHeight = 30;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    // Draw default black text
    ctx.fillStyle = "#000";
    ctx.font = "bold 24px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const defaultLines = defaultText.split(". ");
    defaultLines.forEach((line, i) => {
      ctx.fillText(line.trim(), width / 2, height / 2 + i * textLineHeight);
    });

    // Draw reveal white text only inside the circle
    if (hovering) {
      ctx.save();

      const currentX = mouseX.get();
      const currentY = mouseY.get();
      ctx.beginPath();
      ctx.arc(currentX, currentY, circleRadius, 0, Math.PI * 2);
      ctx.clip();

      ctx.fillStyle = "#fff";
      const revealLines = revealText.split(". ");
      revealLines.forEach((line, i) => {
        ctx.fillText(line.trim(), width / 2, height / 2 + i * textLineHeight);
      });

      ctx.restore();
    }

    requestAnimationFrame(draw);
  }, [hovering, mouseX, mouseY, defaultText, revealText]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    resizeCanvas();
    draw();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [draw]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      className="relative w-full h-[40rem]  bg-white overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Canvas handling both default and masked reveal text */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-40"
      />

      {/* Black circle that follows cursor smoothly */}
      {hovering && (
        <motion.div
          className="absolute w-[280px] h-[280px] rounded-full bg-black pointer-events-none z-20"
          style={{
            x,
            y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        />
      )}
    </div>
  );
}
