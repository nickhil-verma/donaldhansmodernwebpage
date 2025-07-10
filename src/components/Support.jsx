import React, { useRef, useState, useEffect } from "react";
import { MessageCircle } from "lucide-react"; // Keeping this as it's used for the chat icon

// Company and services information (provided by the user)
const services = [
  {
    id: "web-dev",
    name: "Web Development",
    icon: "🌐",
    description: "Custom websites & web applications"
  },
  {
    id: "mobile-dev",
    name: "Mobile App Development",
    icon: "📱",
    description: "iOS & Android native/hybrid apps"
  },
  {
    id: "ai-ml",
    name: "AI/ML Consultation",
    icon: "🤖",
    description: "Machine learning & AI solutions"
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    icon: "🎨", // Changed from  to a standard emoji for better display consistency
    description: "User interface & experience design"
  },
  {
    id: "web3",
    name: "Web3 & Blockchain",
    icon: "⛓️",
    description: "Decentralized apps & smart contracts"
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: "☁️",
    description: "Infrastructure & deployment solutions"
  }
];

const companyInfo = {
  name: "Donald Hans",
  established: "2018",
  teamSize: "15+ developers and designers",
  experience: "5-10 years per team member",
  projectsCompleted: "200+",
  clientRange: "Startups to Fortune 500 companies",
  technologies: {
    frontend: ["React", "Next.js", "Vue.js", "Angular"],
    backend: ["Node.js", "Python", "Java", "PHP"],
    mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
    ai: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
    cloud: ["AWS", "GCP", "Azure", "Docker", "Kubernetes"],
    blockchain: ["Ethereum", "Polygon", "Solana", "Smart Contracts"]
  },
  pricing: {
    hourly: "$50-150/hour based on complexity",
    projects: {
      basicWebsite: "$2,000-5,000",
      mobileApp: "$5,000-15,000",
      aiSolution: "$3,000-10,000",
      blockchain: "$8,000-25,000"
    }
  },
  timeline: {
    webDevelopment: "2-6 weeks",
    mobileApp: "8-16 weeks",
    aiSolution: "6-10 weeks",
    blockchain: "10-20 weeks"
  },
  support: "3 months free post-launch, then $200-500/month maintenance packages"
};


const SupportWidget = () => {
  const [open, setOpen] = useState(false); // Widget starts closed by default
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const messagesEndRef = useRef(null); // Used to scroll to the bottom of messages
  const scrollContainerRef = useRef(null); // Ref for the scrollable chat body

  // Export setOpen for external use if needed (from user's original code)
  useEffect(() => {
    window.__setSupportWidgetOpen = setOpen;
    return () => { delete window.__setSupportWidgetOpen; };
  }, []);

  // Initialize chat with welcome message when widget opens
  useEffect(() => {
    if (open && chat.length === 0) {
      setChat([{
        from: "bot",
        text: "Hi! I'm an AI agent from Donald Hans. How may I help you today? We specialize in web development, mobile apps, AI/ML solutions, UI/UX design, blockchain development, and DevOps services."
      }]);
    }
  }, [open, chat.length]);

  // Scroll to the bottom of the chat when new messages arrive or bot is typing
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Only auto-scroll if the user is at or near the bottom, or if the bot is typing
    // This prevents forced scrolling if the user has manually scrolled up to read history
    const { scrollTop, scrollHeight, clientHeight } = container;
    const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

    if (distanceFromBottom < 100 || isTyping) { // If within 100px of bottom or bot is typing
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat, isTyping]);


  // Enhanced text formatting with HTML support and bolding only for **text**
  const formatText = (text) => {
    // If the text contains HTML tags, use dangerouslySetInnerHTML
    const htmlPattern = /<[^>]+>/;
    if (htmlPattern.test(text)) {
      return <div dangerouslySetInnerHTML={{ __html: text }} />;
    }

    // Parse for **bold** markdown
    const parts = [];
    let lastIndex = 0;
    const regex = /\*\*(.*?)\*\*/g; // Regex to find text enclosed by double asterisks
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Add text before the bold part
      if (match.index > lastIndex) {
        parts.push(<span key={`plain-${lastIndex}`}>{text.substring(lastIndex, match.index)}</span>);
      }
      // Add the bold part
      parts.push(<strong key={`bold-${match.index}`}>{match[1]}</strong>);
      lastIndex = regex.lastIndex;
    }

    // Add any remaining text after the last bold part
    if (lastIndex < text.length) {
      parts.push(<span key={`plain-${lastIndex}`}>{text.substring(lastIndex)}</span>);
    }

    return <>{parts}</>;
  };

  // Smart context addition for the AI prompt to guide its responses
  const addSmartContext = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Keywords for specific response types
    const timeKeywords = ["time", "duration", "how long", "timeline", "deadline", "when"];
    const costKeywords = ["cost", "price", "budget", "expensive", "cheap", "fee", "payment", "money"];
    const irrelevantKeywords = ["asdf", "random", "nonsense", "blah", "unrelated", "i don't understand", "what are you"];

    const hasTimeQuery = timeKeywords.some(keyword => lowerMessage.includes(keyword));
    const hasCostQuery = costKeywords.some(keyword => lowerMessage.includes(keyword));
    const isIrrelevantOrUnclear = irrelevantKeywords.some(keyword => lowerMessage.includes(keyword));

    let additionalInstructions = "";

    // Build base companyDetails string. This will be sent to the LLM regardless.
    // We'll then add specific instructions on how to use this info.
    const baseCompanyDetails = `Donald Hans was established in ${companyInfo.established} with a team of ${companyInfo.teamSize} (each ${companyInfo.experience} experience). We've completed ${companyInfo.projectsCompleted} projects for clients from ${companyInfo.clientRange}.
    Our services include: ${services.map(s => `${s.name} (${s.description})`).join(', ')}.
    Technologies: Frontend: ${companyInfo.technologies.frontend.join(', ')}. Backend: ${companyInfo.technologies.backend.join(', ')}. Mobile: ${companyInfo.technologies.mobile.join(', ')}. AI: ${companyInfo.technologies.ai.join(', ')}. Cloud: ${companyInfo.technologies.cloud.join(', ')}. Blockchain: ${companyInfo.technologies.blockchain.join(', ')}.
    Support: ${companyInfo.support}.
    Typical timelines: Web Development: ${companyInfo.timeline.webDevelopment}, Mobile App: ${companyInfo.timeline.mobileApp}, AI Solution: ${companyInfo.timeline.aiSolution}, Blockchain: ${companyInfo.timeline.blockchain}.
    Pricing ranges for internal reference (DO NOT OUTPUT DIRECTLY): Hourly: ${companyInfo.pricing.hourly}. Projects: Basic Website: ${companyInfo.pricing.projects.basicWebsite}, Mobile App: ${companyInfo.pricing.projects.mobileApp}, AI Solution: ${companyInfo.pricing.projects.aiSolution}, Blockchain: ${companyInfo.pricing.projects.blockchain}.`;

    if (hasCostQuery) {
      additionalInstructions += `
Important instructions for this response:
- The user is asking about pricing.
- Your response must be in HTML format.
- DO NOT include any specific numbers or ranges for pricing in your response.
- Instead, ONLY state: "<strong>Pricing varies based on project complexity and requirements.</strong>"
- IMMEDIATELY follow this with the HTML consultation button: <a href="/consult" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; display: inline-block; margin-top: 8px; font-weight: 500;">Get Free Consultation</a>.
- Keep the overall HTML response very concise, under 30 words, primarily focusing on the variable pricing statement and the consultation button.`;
    } else if (hasTimeQuery) {
      additionalInstructions += `
Important instructions for this response:
- If asked about TIME/TIMELINE: Provide rough estimates from the company details (e.g., "**2-6 weeks** for web development) and always mention it depends on project complexity and requirements.
- The response must be concise, under 60 words unless absolutely necessary.
- Emphasize important keywords in **bold**.`;
    } else if (isIrrelevantOrUnclear) {
        additionalInstructions += `
Important instructions for this response:
- The user's query seems unclear or irrelevant. Respond with "Sorry, I can't understand. Can you explain a bit more?"
- Keep the response very concise, under 15 words.`;
    } else {
        additionalInstructions += `
Important instructions for this response:
- Keep the response concise, under 50 words unless absolutely necessary.
- Emphasize important keywords in **bold**.`;
    }

    // Combine user message with comprehensive company details and specific instructions
    return `${baseCompanyDetails}\n\nUser query: ${userMessage}\n\n${additionalInstructions}`;
  };

  const getAIResponse = async (userMessage, chatHistory) => {
    setIsTyping(true);

    const formattedHistory = chatHistory.map((msg) => ({
      role: msg.from === "user" ? "user" : "model",
      // Strip HTML tags for the model's input to ensure clean text context
      parts: [{ text: typeof msg.text === 'string' ? msg.text.replace(/<[^>]*>/g, '') : msg.text }],
    }));

    // Add smart context to user message
    const enhancedMessage = addSmartContext(userMessage);

    formattedHistory.push({
      role: "user",
      parts: [{ text: enhancedMessage }],
    });

    const payload = {
      contents: formattedHistory,
    };

    const apiKey = process.env.REACT_APP_GEMINI_API_KEY; // Canvas will automatically provide the API key at runtime
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const error = await res.json();
        console.error("API Error:", error);
        return "Oops! I encountered an error. Please try again later.";
      }

      const result = await res.json();
      const reply =
        result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
      return reply;
    } catch (err) {
      console.error("Fetch failed:", err);
      return "Something went wrong. Check your connection and try again.";
    } finally {
      setIsTyping(false);
    }
  };

  const handleUserChat = async (message) => {
    if (!message.trim()) return;

    const userMsg = { from: "user", text: message };
    setChat((prev) => [...prev, userMsg]);
    setCurrentMessage("");

    // Pass the message and the *current* chat state for context
    const botText = await getAIResponse(message, [...chat, userMsg]);
    const botMsg = { from: "bot", text: botText };
    setChat((prev) => [...prev, botMsg]);
  };

  const resetWidget = () => {
    setChat([
      {
        from: "bot",
        text:
          "Hi! I'm an AI agent from Donald Hans. How may I help you today? We specialize in web development, mobile apps, AI/ML solutions, UI/UX design, blockchain development, and DevOps services.",
      },
    ]);
    setIsTyping(false);
    setCurrentMessage("");
  };

  const quickResponses = [
    { text: "What are your pricing options?", icon: "💰" },
    { text: "How long does a typical project take?", icon: "⏱️" },
    { text: "Can you tell me about your process?", icon: "🔄" },
    { text: "What technologies do you use?", icon: "⚙️" },
    { text: "Do you provide ongoing support?", icon: "🛠️" },
    { text: "Can you show me your portfolio?", icon: "📋" }
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed animate-pulse bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Widget Window */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-96 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 animate-slideIn max-h-[85vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white rounded-t-3xl">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">Donald Hans AI Support</h3>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Online</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={resetWidget}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  title="Reset Chat"
                  aria-label="Reset chat"
                >
                  {/* Using inline SVG for Reset icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                  </svg>
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  title="Close Chat"
                  aria-label="Close chat"
                >
                  {/* Using inline SVG for Close icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50"
          >
            {chat.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 rounded-2xl text-sm max-w-[85%] ${
                    msg.from === "user"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-br-md"
                      : "bg-gray-100 text-gray-800 rounded-bl-md"
                  }`}
                >
                  {formatText(msg.text)}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                 
                </div>
              </div>
            )}
            <div ref={messagesEndRef} /> {/* Invisible element to scroll to */}
          </div>

          {/* Quick Responses and Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="mt-2 flex gap-2 flex-wrap mb-4">
              {quickResponses.map((response, idx) => (
                <button
                  key={idx}
                  onClick={() => handleUserChat(response.text)}
                  disabled={isTyping}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{response.icon}</span>
                  <span>{response.text.split(' ').slice(0, 3).join(' ')}</span> {/* Show first 3 words */}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isTyping && currentMessage.trim()) {
                    handleUserChat(currentMessage);
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all outline-none"
                disabled={isTyping}
              />
              <button
                onClick={() => {
                  if (currentMessage.trim()) {
                    handleUserChat(currentMessage);
                  }
                }}
                disabled={isTyping || !currentMessage.trim()}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <span className="text-sm">
                  {/* Inline SVG for Send icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind CSS keyframes for slideIn animation if not globally defined */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </>
  );
};

export default SupportWidget;
