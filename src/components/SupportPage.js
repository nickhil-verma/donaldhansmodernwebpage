import React, { useRef, useState, useEffect } from "react";

const App = () => {
     useEffect(() => {
      document.title = "Donald Hans | Chat bot";
    }, []);
   
  const [open, setOpen] = useState(true);
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const messagesEndRef = useRef(null); // Used to indicate the very bottom of the chat
  const scrollContainerRef = useRef(null); // Ref for the main scrollable chat area

  useEffect(() => {
    if (open && chat.length === 0) {
      setChat([
        {
          from: "bot",
          text:
            "Hi! I'm an AI agent from Donald Hans. How may I help you today? We specialize in web development, mobile apps, AI/ML solutions, UI/UX design, blockchain development, and DevOps services.",
        },
      ]);
    }
  }, [open, chat.length]);

  // Scroll only if user is near the bottom or if the bot is typing
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);

    // Only auto-scroll if the user is at or near the bottom, or if the bot is typing a new message
    if (distanceFromBottom < 100 || isTyping) {
      container.scrollTop = container.scrollHeight; // Directly set scroll position
    }
  }, [chat, isTyping]); // Trigger effect when chat or typing status changes

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

  // Smart context addition for the AI prompt
  const addSmartContext = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    // Manual Helmet for "Donald Hans | Chat bot"
 

    const timeKeywords = ["time", "duration", "how long", "timeline", "deadline", "when"];
    const costKeywords = ["cost", "price", "budget", "expensive", "cheap", "fee", "payment", "money"];
    const irrelevantKeywords = ["asdf", "random", "nonsense", "blah", "unrelated", "i don't understand"]; // Added "i don't understand" for more robustness

    const hasTimeQuery = timeKeywords.some(keyword => lowerMessage.includes(keyword));
    const hasCostQuery = costKeywords.some(keyword => lowerMessage.includes(keyword));
    // Check if the message is potentially irrelevant or simply "I don't understand" type of query
    const isIrrelevantOrUnclear = irrelevantKeywords.some(keyword => lowerMessage.includes(keyword));

    let additionalInstructions = "";

    if (hasTimeQuery || hasCostQuery) {
      additionalInstructions += `
Important instructions for this response:
- If asked about TIME/TIMELINE: Provide rough estimates like "typically **2-4 weeks** for simple projects, **2-3 months** for complex ones" but always mention it depends on requirements.
- If asked about COST/PRICING: DO NOT provide specific prices. Instead, clearly state: "Pricing varies based on project complexity and requirements." and ALWAYS include this HTML link as a button: <a href="/consult" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 8px 16px; border-radius: 6px; text-decoration: none; display: inline-block; margin-top: 8px; font-weight: 500;">Get Free Consultation</a>. This link must be fully functional HTML.
- The entire response should be concise and under 60 words, unless absolutely necessary.
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

    return `${userMessage}\n\n${additionalInstructions}`;
  };

  const getAIResponse = async (userMessage, chatHistory) => {
    setIsTyping(true);

    const formattedHistory = chatHistory.map((msg) => ({
      role: msg.from === "user" ? "user" : "model",
      // If the message contains HTML, ensure it's still treated as text for the model input
      parts: [{ text: msg.text.replace(/<[^>]*>/g, '') }], // Strip HTML tags for API input
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

    const apiKey = process.env.REACT_APP_GEMINI_API_KEY; // Ensure you have your API key set in .env
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

  if (!open) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setOpen(true)}
          className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
          aria-label="Open chat"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:h-[600px] h-[calc(100vh-2rem)]">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex justify-between items-center rounded-t-xl">
          <div>
            <h2 className="text-xl font-semibold">Donald Hans AI Chat Support</h2>
            <p className="text-sm opacity-90">Online • Ask anything</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={resetWidget}
              className="text-white p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition"
              aria-label="Reset chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
              </svg>
            </button>
            <a href="/chatbot"><button
              onClick={() => setOpen(false)}
              className="text-white p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button></a>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollContainerRef}
          className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50"
        >
          {chat.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-lg px-4 py-2 text-sm max-w-[80%] md:max-w-[70%] shadow-sm ${
                  msg.from === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white text-gray-800 rounded-bl-none border" // Removed font-normal from here
                }`}
              >
                {formatText(msg.text)} {/* No longer passing sender to formatText */}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white px-3 py-1 rounded-lg text-sm text-gray-600 animate-pulse border border-gray-300">
                Donald Hans is typing...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 flex gap-2 border-t border-gray-200 bg-white">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleUserChat(currentMessage)}
            placeholder="Ask about our services, timeline, or anything else..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isTyping}
          />
          <button
            onClick={() => handleUserChat(currentMessage)}
            disabled={isTyping || !currentMessage.trim()}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-xl hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
