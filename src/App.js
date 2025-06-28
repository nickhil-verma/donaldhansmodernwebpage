import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import MobileApp from "./pages/MobileApp";
import SupportPage from "./components/SupportPage";

 
const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

 
  const hideNavbarRoutes = ["/Chatbot" ,"/Support" ];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Donald Hans | Home</title>
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
              <PreFooterCTA />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/about" element={<About />} />
        <Route path="/Chatbot" element={<ChatBot />} />
        <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/support" element={<SupportPage />} />
        <Route path="/signup" element={<SignupFormDemo />} />
      </Routes>

      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
