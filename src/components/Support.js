import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

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
    icon: "🎨", 
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

// Company information
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

const getAIResponse = (userMessage, conversationHistory = []) => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Check if message is irrelevant to tech services
  const techKeywords = ['price', 'cost', 'budget', 'time', 'timeline', 'deadline', 'technology', 'tech', 'framework', 'process', 'work', 'approach', 'website', 'app', 'mobile', 'ai', 'ml', 'blockchain', 'web3', 'design', 'development', 'devops', 'cloud', 'project', 'service', 'help', 'support', 'portfolio', 'experience', 'team', 'company', 'hello', 'hi', 'hey'];
  
  const hasRelevantKeyword = techKeywords.some(keyword => lowerMessage.includes(keyword));
  
  if (!hasRelevantKeyword && lowerMessage.length > 3) {
    return "Sorry, I didn't get you. Could you please ask about our services or how we can help with your project?";
  }
  
  // Greeting responses
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! I'm an AI agent from Donald Hans. We specialize in web development, mobile apps, AI/ML solutions, UI/UX design, blockchain development, and DevOps services. How can I help you today?";
  }
  
  // Pricing inquiries
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget')) {
    return `Our pricing varies by service: Web Development ($2,000-5,000), Mobile Apps ($5,000-15,000), AI/ML Solutions ($3,000-10,000), and Blockchain projects ($8,000-25,000). We also offer hourly rates at $50-150/hour based on complexity. What type of project are you considering?`;
  }
  
  // Timeline questions
  if (lowerMessage.includes('time') || lowerMessage.includes('long') || lowerMessage.includes('deadline')) {
    return `Our typical project timelines are: Web Development (2-6 weeks), Mobile Apps (8-16 weeks), AI/ML Solutions (6-10 weeks), and Blockchain projects (10-20 weeks). The exact timeline depends on your project's complexity and requirements. Do you have a specific deadline in mind?`;
  }
  
  // Technology questions
  if (lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('framework')) {
    return `We use cutting-edge technologies including React, Next.js, Vue.js for frontend; Node.js, Python, Java for backend; React Native, Flutter for mobile; TensorFlow, PyTorch for AI; and AWS, GCP, Azure for cloud solutions. What specific technology stack interests you?`;
  }
  
  // Process questions
  if (lowerMessage.includes('process') || lowerMessage.includes('how do you work') || lowerMessage.includes('approach')) {
    return `We follow a proven 4-step process: 1) Discovery & Planning - understanding your needs, 2) Design & Prototyping - creating mockups and wireframes, 3) Development & Testing - building and quality assurance, 4) Launch & Support - deployment and ongoing maintenance. Would you like me to elaborate on any of these steps?`;
  }
  
  // Service-specific responses
  if (lowerMessage.includes('web') || lowerMessage.includes('website')) {
    return `Great! We specialize in custom web development using modern technologies like React, Next.js, and Vue.js. Our web projects typically cost $2,000-5,000 and take 2-6 weeks to complete. What kind of website are you looking to build?`;
  }
  
  if (lowerMessage.includes('mobile') || lowerMessage.includes('app')) {
    return `Excellent! We develop both iOS and Android apps using React Native and Flutter for cross-platform solutions, or native Swift/Kotlin for platform-specific apps. Mobile projects range from $5,000-15,000 and typically take 8-16 weeks. What type of mobile app do you have in mind?`;
  }
  
  if (lowerMessage.includes('ai') || lowerMessage.includes('ml') || lowerMessage.includes('machine learning')) {
    return `Perfect! We offer AI/ML consultation and development using TensorFlow, PyTorch, and OpenAI technologies. Our AI solutions range from $3,000-10,000 and take 6-10 weeks to implement. Are you looking for chatbots, computer vision, predictive analytics, or another AI application?`;
  }
  
  if (lowerMessage.includes('blockchain') || lowerMessage.includes('web3')) {
    return `Awesome! We develop decentralized applications and smart contracts on Ethereum, Polygon, and Solana. Blockchain projects typically range from $8,000-25,000 and take 10-20 weeks. Are you interested in DeFi, NFTs, DAOs, or another Web3 application?`;
  }
  
  // Support questions
  if (lowerMessage.includes('support') || lowerMessage.includes('maintenance')) {
    return `We provide 3 months of free post-launch support, followed by maintenance packages ranging from $200-500/month depending on your needs. This includes bug fixes, updates, security patches, and feature enhancements. What kind of ongoing support are you looking for?`;
  }
  
  // Portfolio/experience questions
  if (lowerMessage.includes('portfolio') || lowerMessage.includes('experience') || lowerMessage.includes('work')) {
    return `We've completed 200+ projects since 2018, working with clients ranging from startups to Fortune 500 companies. Our team of 15+ developers and designers each have 5-10 years of experience. Would you like to know about our experience in a specific technology or industry?`;
  }
  
  // General service inquiry
  return `Hi! I'm an AI agent from Donald Hans. We're a full-service development company offering web development, mobile apps, AI/ML solutions, UI/UX design, blockchain development, and DevOps services. With 200+ completed projects and a team of 15+ experienced professionals, we'd love to help bring your ideas to life. What specific service can I help you with today?`;
};

const SupportWidget = () => {
  const [open, setOpen] = useState(false);
  // Export setOpen for use in other files
  React.useEffect(() => {
    window.__setSupportWidgetOpen = setOpen;
    return () => { delete window.__setSupportWidgetOpen; };
  }, []);
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  // Initialize chat with welcome message when widget opens
  useEffect(() => {
    if (open && chat.length === 0) {
      setChat([{
        from: "bot",
        text: "Hi! I'm an AI agent from Donald Hans. How may I help you today? We specialize in web development, mobile apps, AI/ML solutions, UI/UX design, blockchain development, and DevOps services."
      }]);
    }
  }, [open, chat.length]);

  const handleUserChat = async (message) => {
    if (!message.trim()) return;

    const newUserMsg = { from: "user", text: message };
    setChat(prev => [...prev, newUserMsg]);
    setIsTyping(true);
    setCurrentMessage(""); // Clear input

    // Get conversation history for context
    const conversationHistory = [...chat, newUserMsg];

    setTimeout(() => {
      const botResponse = getAIResponse(message, conversationHistory);
      setChat(prev => [...prev, { from: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1200);
  };

  const resetWidget = () => {
    setChat([{
      from: "bot",
      text: "Hi! I'm an AI agent from Donald Hans. How may I help you today? We specialize in web development, mobile apps, AI/ML solutions, UI/UX design, blockchain development, and DevOps services."
    }]);
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
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Widget Window */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-96 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 animate-slideIn max-h-[85vh] overflow-hidden">
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
                >
                  🔄
                </button>
                <button
                  onClick={() => setOpen(false)}

                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="p-5">
            <div className="flex flex-col h-[400px]">
              <div className="flex-1 overflow-y-auto mb-4 space-y-3 pr-2">
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
                      {msg.text}
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
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
                  disabled={isTyping}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !isTyping && currentMessage.trim()) {
                      handleUserChat(currentMessage);
                    }
                  }}
                />
                <button
                  onClick={() => {
                    if (currentMessage.trim()) {
                      handleUserChat(currentMessage);
                    }
                  }}
                  disabled={isTyping || !currentMessage.trim()}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-sm">📤</span>
                </button>
              </div>
              
              <div className="mt-3 flex gap-2 flex-wrap">
                {quickResponses.slice(0, 3).map((response, idx) => (
                  <button 
                    key={idx}
                    onClick={() => {
                      handleUserChat(response.text);
                    }}
                    disabled={isTyping}
                    className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{response.icon}</span>
                    <span>{response.text.split(' ').slice(0, 2).join(' ')}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
      `}</style>
    </>
  );
};

export default SupportWidget;