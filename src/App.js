import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Helmet } from "react-helmet";

// Components & Pages
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
import FooterSection, {
  PreFooterCTA,
  Footer,
} from "./components/FooterSection";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Consult from "./pages/Consult";
import ChatBot from "./pages/ChatBot";
import MobileApp from "./pages/MobileApp";
import SupportPage from "./components/SupportPage";
import { SignupFormDemo } from "./components/signup";

// ⛳ Layout to wrap all routes
const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // 🧠 Auto-scroll to section if hash exists
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay ensures DOM is ready
      }
    }
  }, [location]);

  const hideNavbarRoutes = ["/chatbot", "/support"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {shouldShowNavbar && (
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

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
              
              <ReviewCarousel />
              <FAQSection />
              <PreFooterCTA />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/about" element={<About />} />
        <Route path="/chatbot" element={<ChatBot />} />
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
