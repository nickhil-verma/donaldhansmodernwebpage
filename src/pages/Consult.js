import React from 'react'
import CONTACT from "../assets/Contactus.gif";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
const inputClass =
  "w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300";

const iconClass = "h-4 w-4 text-blue-600";

const LabelInputContainer = ({ label, htmlFor, children, className = "" }) => (
  <div className={`flex w-full flex-col space-y-2 ${className}`}>
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium text-blue-800"
    >
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }
  return (
    <section className=' flex min-h-screen w-full flex-row max-md:flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50 p-10'>
      <img src={CONTACT} alt="Contact Us" className=" mix-blend-multiply  object-cover" />
      <div className="shadow-input mx-auto w-full max-w-md rounded-none   p-4 md:rounded-2xl md:p-8">
      <h2 className="text-xl font-bold text-blue-700">
        Welcome to Donald Hans
      </h2>
      <p className="mt-2 max-w-sm text-sm text-gray-600">
        Empowering your business with intelligent solutions.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer label="First name" htmlFor="firstname">
            <input
              id="firstname"
              type="text"
              placeholder="Tyler"
              className={inputClass}
            />
          </LabelInputContainer>
          <LabelInputContainer label="Last name" htmlFor="lastname">
            <input
              id="lastname"
              type="text"
              placeholder="Durden"
              className={inputClass}
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer label="Email Address" htmlFor="email" className="mb-4">
          <input
            id="email"
            type="email"
            placeholder="tyler@donalhans.com"
            className={inputClass}
          />
        </LabelInputContainer>

        <LabelInputContainer label="Password" htmlFor="password" className="mb-4">
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className={inputClass}
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-blue-500 to-purple-500 font-medium text-white shadow-md transition duration-300"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        <div className="flex flex-col space-y-4">
          {[
            {
              label: "Continue with GitHub",
              icon: <IconBrandGithub className={iconClass} />,
            },
            {
              label: "Continue with Google",
              icon: <IconBrandGoogle className={iconClass} />,
            },
          ].map((provider, idx) => (
            <button
              key={idx}
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-blue-50 px-4 font-medium text-blue-900 hover:bg-blue-100 transition"
              type="button"
            >
              {provider.icon}
              <span className="text-sm">{provider.label}</span>
              <BottomGradient />
            </button>
          ))}
        </div>
      </form>
    </div>
    </section>
  )
}

export default Consult