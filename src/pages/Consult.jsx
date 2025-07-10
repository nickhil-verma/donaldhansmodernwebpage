import React, { useState } from 'react';
import CONTACT from '../assets/Contactus.gif';
import Navbar from '../components/Navbar';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inputClass =
  "w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300";

const LabelInputContainer = ({ label, htmlFor, children, className = "" }) => (
  <div className={`flex w-full flex-col space-y-2 ${className}`}>
    <label htmlFor={htmlFor} className="text-sm font-medium text-blue-800">
      {label}
    </label>
    {children}
  </div>
);

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const Consult = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    service: 'SEO Marketing',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id || e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${formData.firstname} ${formData.lastname}`,
      reply_to: formData.email,
      service: formData.service,
      message: `Hi Donald Hans Team, I, ${formData.firstname} ${formData.lastname}, would like to consult about your "${formData.service}" services. You can reach me at ${formData.email}. Thank you!`,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.success('✅ Message sent successfully!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          service: 'SEO Marketing',
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast.error('❌ Failed to send message. Please try again later.');
      });
  };

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <section className='flex min-h-screen w-full flex-row max-md:flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 p-10'>
        <img src={CONTACT} alt="Contact Us" className="mix-blend-multiply object-cover" />
        <div className="shadow-input mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8">
          <h2 className="text-xl font-bold text-blue-700">Welcome to Donald Hans</h2>
          <p className="mt-2 max-w-sm text-sm text-gray-600">
            Empowering your business with intelligent solutions.
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <LabelInputContainer label="First name" htmlFor="firstname">
                <input
                  id="firstname"
                  type="text"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Tyler"
                  className={inputClass}
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer label="Last name" htmlFor="lastname">
                <input
                  id="lastname"
                  type="text"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Durden"
                  className={inputClass}
                  required
                />
              </LabelInputContainer>
            </div>

            <LabelInputContainer label="Email Address" htmlFor="email" className="mb-4">
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tyler@donaldhans.com"
                className={inputClass}
                required
              />
            </LabelInputContainer>

            <LabelInputContainer label="Choose Service" htmlFor="service" className="mb-4">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option>SEO Marketing</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Chatbot Integration</option>
              </select>
            </LabelInputContainer>

            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-blue-500 to-purple-500 font-medium text-white shadow-md transition duration-300"
              type="submit"
            >
              Submit &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      </section>

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Consult;
