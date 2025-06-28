"use client";
import React from "react";

const Documentation = () => {
  const apiCode = `fetch("https://Donaldhans.chatbot.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
  },
  body: JSON.stringify({
    message: "Hello, chatbot!"
  })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`;

  return (
    <section className="min-h-screen w-full px-6 py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 mb-16">
        Build amazing bots <br /> with <span className="inline-block font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">DonaldHans API</span>
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Description & Download */}
        <div>
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Documentation 📘</h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-base">
            Learn how to connect with the DonaldHans ChatBot API. Use our secure POST endpoint to send messages and receive intelligent responses in real time.
          </p>
          <a
            href="/DonaldHansChatbotAPI.pdf"
            download
            className="inline-block px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow hover:opacity-90 transition"
          >
            📥 Download PDF
          </a>
        </div>

        {/* Right Side - Mac Window with Code */}
        <div className="rounded-xl overflow-hidden border border-gray-300 shadow-xl">
          {/* MacOS Title Bar */}
          <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 border-b">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="ml-4 text-sm text-gray-500">chat-api.js</span>
          </div>

          {/* Code Block */}
          <pre className="bg-black text-green-400 text-sm p-6 overflow-x-auto font-mono leading-relaxed">
            <code>{apiCode}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
