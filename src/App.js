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
 import FooterSection, { PreFooterCTA, Footer } from "./components/FooterSection";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Consult from "./pages/Consult";
import ChatBot from "./pages/ChatBot";
import { SignupFormDemo } from "./components/signup";
 

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      

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
              <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
              <PreFooterCTA />
            </>
          }
        />
        {/* You can add more <Route />s here if needed */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/consult" element={<Consult/>} />
        <Route path="/about" element={<About />} />
        <Route path="/Chatbot" element={<ChatBot/>} />
        <Route path="/signup" element={<SignupFormDemo/>} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
