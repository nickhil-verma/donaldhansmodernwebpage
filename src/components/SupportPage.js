import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const SupportPage = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    if (open && chat.length === 0) {
      setChat([{
        from: "bot",
        text: "Hi! I'm an AI agent from Donald Hans. How may I help you today? We specialize in web development, mobile apps, AI/ML solutions, UI/UX design, blockchain development, and DevOps services."
      }]);
    }
  }, [open, chat.length]);

  const getAIResponse = (userMessage) => {
    const lower = userMessage.toLowerCase();
    const includes = (words) => words.some(word => lower.includes(word));

    if (!includes(["price", "cost", "budget", "time", "technology", "process", "app", "ai", "blockchain", "web", "support", "portfolio", "team", "experience", "hello", "hi", "hey"])) {
      return "Sorry, I didn't get you. Could you please ask about our services or how we can help with your project?";
    }

    if (includes(["hello", "hi", "hey"])) return "Hello! I'm an AI agent from Donald Hans. How can I help you today?";
    if (includes(["price", "cost", "budget"])) return "Our pricing varies by service: Web ($2,000-5,000), Mobile ($5,000-15,000), AI ($3,000-10,000), Blockchain ($8,000-25,000). Hourly: $50-150/hr.";
    if (includes(["time", "timeline", "deadline"])) return "Typical timelines: Web (2-6 weeks), Mobile (8-16 weeks), AI (6-10 weeks), Blockchain (10-20 weeks).";
    if (includes(["technology", "tech", "framework"])) return "We use React, Next.js, Vue, Node.js, Python, AWS, TensorFlow, Ethereum, and more.";
    if (includes(["process", "approach"])) return "We follow a 4-step process: Discovery, Design, Development, Deployment."
    if (includes(["web", "website"])) return "We build custom websites using modern frameworks like React & Next.js."
    if (includes(["mobile", "app"])) return "We build mobile apps using React Native, Flutter, Swift, and Kotlin."
    if (includes(["ai", "ml", "machine learning"])) return "We offer AI/ML development using TensorFlow, PyTorch, and OpenAI."
    if (includes(["blockchain", "web3"])) return "We develop dApps and smart contracts on Ethereum, Polygon, Solana."
    if (includes(["support", "maintenance"])) return "We offer 3 months free support, then $200-500/month maintenance."
    if (includes(["portfolio", "experience", "projects"])) return "200+ projects delivered since 2018. Team of 15+ experts."

    return "Hi! I'm an AI agent from Donald Hans. What service are you looking for today?";
  };

  const handleUserChat = (message) => {
    if (!message.trim()) return;
    const userMsg = { from: "user", text: message };
    setChat(prev => [...prev, userMsg]);
    setIsTyping(true);
    setCurrentMessage("");

    setTimeout(() => {
      const botMsg = getAIResponse(message);
      setChat(prev => [...prev, { from: "bot", text: botMsg }]);
      setIsTyping(false);
    }, 1200);
  };

  const resetWidget = () => {
    setChat([{
      from: "bot",
      text: "Hi! I'm an AI agent from Donald Hans. How may I help you today?"
    }]);
    setIsTyping(false);
    setCurrentMessage("");
  };

  return (
    <section className="min-h-screen bg-white text-gray-800 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Support Chat Interface</h1>
      <div className="max-w-3xl mx-auto border rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Donald Hans AI Chat Support</h2>
            <p className="text-sm">Online • Ask anything about our services</p>
          </div>
          <div className="flex gap-2">
            <button onClick={resetWidget} className="text-white">🔄</button>
            <button onClick={() => setOpen(false)} className="text-white">✖</button>
          </div>
        </div>

        <div className="p-4 h-[400px] overflow-y-auto space-y-3">
          {chat.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`rounded-xl px-4 py-2 text-sm max-w-[70%] ${msg.from === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}>{msg.text}</div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 px-3 py-1 rounded-xl animate-pulse text-sm">Typing...</div>
            </div>
          )}
        </div>

        <div className="p-4 flex gap-2 border-t">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border rounded-xl text-sm focus:ring focus:ring-blue-300"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleUserChat(currentMessage);
            }}
          />
          <button
            onClick={() => handleUserChat(currentMessage)}
            disabled={isTyping || !currentMessage.trim()}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-xl hover:shadow-md transition disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportPage;
