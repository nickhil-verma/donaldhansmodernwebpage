import React, { useRef, useEffect } from "react";
import createGlobe from "cobe";

const Globe = () => {
  const canvasRef = useRef(null);
  const globeRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;

    // Function to create or recreate globe with given width/height
    const createOrUpdateGlobe = (width, height) => {
      if (globeRef.current) globeRef.current.destroy();

      globeRef.current = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: height * 2,
        phi: 0,
        theta: 0,
        dark: 0, // Light mode globe
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 7,
        baseColor: [1, 1, 1], // White
        markerColor: [0.6, 0.8, 1], // Light blue (Tailwind blue-50)
        glowColor: [0.8, 0.6, 1],   // Purple-50 glow
        markers: [
          { location: [34.05, -118.24], size: 0.1 }, // LA
          { location: [51.5074, -0.1278], size: 0.07 }, // London
          { location: [34.05, -118.24], size: 0.1 },    // Los Angeles
  { location: [40.7128, -74.006], size: 0.1 },  // New York
  { location: [41.8781, -87.6298], size: 0.08 }, // Chicago
  { location: [29.7604, -95.3698], size: 0.07 }, // Houston
  { location: [33.4484, -112.074], size: 0.07 }, // Phoenix

  // China major cities
  { location: [39.9042, 116.4074], size: 0.1 },  // Beijing
  { location: [31.2304, 121.4737], size: 0.1 },  // Shanghai
  { location: [23.1291, 113.2644], size: 0.08 }, // Guangzhou
  { location: [22.5431, 114.0579], size: 0.07 }, // Shenzhen
  { location: [30.5728, 104.0668], size: 0.07 }, // Chengdu

  // Europe major cities
  { location: [51.5074, -0.1278], size: 0.1 },   // London
  { location: [48.8566, 2.3522], size: 0.1 },    // Paris
  { location: [52.52, 13.405], size: 0.08 },     // Berlin
  { location: [41.9028, 12.4964], size: 0.07 },  // Rome
  { location: [40.4168, -3.7038], size: 0.07 },  // Madrid
         ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });
    };

    // Initial size setup
    const parent = canvasRef.current.parentElement;
    const width = parent.clientWidth;
    const height = parent.clientHeight;

    createOrUpdateGlobe(width, height);

    // Resize observer to watch parent size changes
    const resizeObserver = new ResizeObserver(() => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvasRef.current.width = w * 2;
      canvasRef.current.height = h * 2;
      canvasRef.current.style.width = `${w}px`;
      canvasRef.current.style.height = `${h}px`;
      createOrUpdateGlobe(w, h);
    });

    resizeObserver.observe(parent);

    return () => {
      resizeObserver.disconnect();
      if (globeRef.current) globeRef.current.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
};

export default Globe;
