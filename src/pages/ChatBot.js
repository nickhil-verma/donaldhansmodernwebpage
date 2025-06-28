import { useEffect,useState } from "react"
import React from 'react'
import { motion } from "framer-motion" 
import Pricing from "../components/Pricing";
import Documentation from "../components/Documentation";
import { SVGMaskEffect } from "../components/SVGMaskEffect";
import Support from "../components/Support";
import setOpen from "../components/Support";
const ChatBot = () => {
    React.useEffect(() => {
        document.title = "DH AI ChatBot";
    }, []);
     const [open, setOpen] = useState(false);
  return (
    
   <section className="min-w-full">
    <section>
        <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="flex w-full items-center justify-between border-t border-b border-blue-100 px-4 py-4 dark:border-purple-100">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-full bg-gradient-to-br from-purple-400 to-blue-400" />
          <h1 className="text-base font-bold md:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            DH AI ChatBot
          </h1>
        </div>
        <a href="/signup"><button className="w-24 md:w-32 transform rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-purple-500 dark:hover:bg-purple-600">
          Login
        </button></a>
      </nav>
        <Support/>
      {/* Decorative Borders */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-blue-100/80 dark:bg-purple-100/30">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-blue-100/80 dark:bg-purple-100/30">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-blue-100/80 dark:bg-purple-100/30">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-black md:text-5xl lg:text-7xl  ">
          {"Converse with Intelligence, Anytime, Anywhere"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg text-gray-700  "
        >
          Your intelligent assistant, ready to chat, learn, and help — whenever
          you need it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
           <a href="/support"><button  onClick={() =>setOpen(!open)} className="w-60 transform rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-purple-500 dark:hover:bg-purple-600">
            Try Chatbot
          </button> </a>
          <button className="w-60 transform rounded-lg border border-blue-200 bg-white px-6 py-2 font-medium text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 dark:border-purple-400 dark:bg-black dark:text-purple-100 dark:hover:bg-purple-950">
            Learn More
          </button>
        </motion.div>

       
      </div>
    </div>
    </section>
    <Documentation/>
    <section className="w-[100vw] h-[100vh] flex items-center justify-center relative">
            <SVGMaskEffect/>

    </section>
    <Pricing/>
    
   </section>
  )
}

export default ChatBot