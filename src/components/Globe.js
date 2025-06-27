// Globe.jsx
import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Utility to convert lat/lon to 3D position
function latLongToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return [x, y, z];
}

function DotGlobe() {
  const globeRef = useRef();

  // Rotate globe slowly
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0015;
    }
  });

  // Create white dots for continents (mock positions for now)
  const dots = useMemo(() => {
    const positions = [];
    for (let lat = -60; lat <= 80; lat += 10) {
      for (let lon = -180; lon <= 180; lon += 10) {
        if (Math.random() > 0.7) { // Randomly place dots to simulate continents
          positions.push(latLongToVector3(lat, lon, 1.52));
        }
      }
    }
    return positions;
  }, []);

  // Pin for Los Angeles (approx. lat 34.05, lon -118.24)
  const laPosition = latLongToVector3(34.05, -118.24, 1.53);

  return (
    <>
      {/* Glow Effect - Increased opacity for better visibility */}
      <mesh scale={1.05}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.15} /> {/* Increased opacity */}
      </mesh>

      {/* Main Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#0f172a" // Keeping dark color but relying on improved lighting
          metalness={0.2}
          roughness={0.9}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Dots representing continents - Changed to cyan for visibility on white background */}
      {dots.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshBasicMaterial color="#06b6d4" /> {/* Cyan color (Tailwind cyan-500) */}
        </mesh>
      ))}

      {/* Pin at Los Angeles */}
      <mesh position={laPosition}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={1} />
      </mesh>
    </>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-64"> {/* Ensure parent div provides dimensions */}
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.7} /> {/* Increased ambient light */}
        <directionalLight position={[3, 3, 3]} intensity={0.8} color="#3B82F6" /> {/* Original blue light */}
        <directionalLight position={[-3, -3, -3]} intensity={0.5} color="#FFFFFF" /> {/* New white light from another angle */}
        <Suspense fallback={null}>
          <DotGlobe />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}