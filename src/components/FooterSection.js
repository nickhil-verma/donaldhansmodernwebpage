// FooterSection.jsx
import React from "react";

const PreFooterCTA = () => (
  <div className="bg-gradient-to-t min-h-[70vh] items-center justify-center align-middle flex flex-col to-purple-50 from-white  text-black py-16 px-6 text-center">
    <h2 className="text-3xl sm:text-4xl max-w-[40%] max-md:max-w-[60%] font-bold mb-4">
      Increase your brand visibility using React & Tailwind
    </h2>
    <p className="text-lg opacity-90 mb-6">
      Donald Hans provides cutting-edge IT solutions tailored to your business growth.
    </p>
    <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
      Get Started
    </button>
  </div>
);

const Footer = () => (
  <footer className=" border-t bg-gradient-to-t from-blue-100 to-white border-gray-200">
    <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mb-10 md:mb-0">
          <div className="text-xl font-bold text-blue-600 mb-2">Donald Hans</div>
          <p className="text-gray-600 max-w-sm">
            Empowering brands through modern web development and IT solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Solutions</h4>
            <ul className="text-gray-600 space-y-2">
              <li>IT Consulting</li>
              <li>Web Development</li>
              <li>Cloud Services</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="text-gray-600 space-y-2">
              <li>Submit a Ticket</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="text-gray-600 space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="text-gray-600 space-y-2">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Donald Hans. All rights reserved.
      </div>
    </div>
  </footer>
);

const FooterSection = () => (
  <>
    <PreFooterCTA />
    <Footer />
  </>
);

export default FooterSection;