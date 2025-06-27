import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Clients from "./components/Clients";
import WorkflowSection from "./components/WorkflowSection";
import Support from "./components/Support";
import FeatureSection from "./components/FeatureSection";
import Analytics from "./components/Analytics";
import TechStackSection from "./components/TechStackSection";
import StatsSection from "./components/StatsSection";
import ReviewCarousel from "./components/ReviewCarousel";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import Projects from "./pages/Projects";
import Consult from "./pages/Consult";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Donald Hans | Home  </title>
                <meta
                  name="description"
                  content="Explore streamlined workflows, analytics, tech stack, and client support."
                />
              </Helmet>

              <HeroSection />
              <Clients />
              <WorkflowSection />
              <Support />
              <FeatureSection />
              <Analytics />
              <TechStackSection />
              <StatsSection />
              <ReviewCarousel />
              <FAQSection />
            </>
          }
        />
        {/* You can add more <Route />s here if needed */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/consult" element={<Consult/>} />
       
      </Routes>

      <FooterSection />
    </Router>
  );
};

export default App;
