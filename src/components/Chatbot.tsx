import React, { useState, useRef, useEffect } from "react";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm TankBot, your virtual assistant. How can I help you learn about TankStack's services today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hello! Welcome to TankStack. I'm here to help you learn about our technology solutions. What would you like to know?";
    }

    if (message.includes("service") || message.includes("what do you do")) {
      return "We offer 5 main services: IT Consulting & Tech Support, Software & Systems Integration, Cloud & Data Solutions, Cybersecurity & Risk Management, and AI & Automation Consulting. Which one interests you most?";
    }

    if (message.includes("it consulting") || message.includes("tech support")) {
      return "Our IT Consulting & Tech Support includes 24/7 technical support, system maintenance, infrastructure planning, and performance optimization. We keep your systems running smoothly so you can focus on your business.";
    }

    if (message.includes("integration") || message.includes("software")) {
      return "Our Software & Systems Integration service helps connect your tools and platforms. We provide API development, data synchronization, workflow automation, and legacy system integration to eliminate data silos.";
    }

    if (message.includes("cloud") || message.includes("data")) {
      return "Our Cloud & Data Solutions include cloud migration, data analytics, backup & recovery, and cost optimization. We help you leverage scalable infrastructure that grows with your business.";
    }

    if (message.includes("security") || message.includes("cyber")) {
      return "Our Cybersecurity & Risk Management services protect your business with security audits, threat detection, compliance management, and employee training. We keep your digital assets safe.";
    }

    if (
      message.includes("ai") ||
      message.includes("automation") ||
      message.includes("artificial intelligence")
    ) {
      return "Our AI & Automation Consulting helps streamline operations through process automation, chatbot development, AI strategy, and machine learning solutions. Let technology work for you!";
    }

    if (message.includes("team") || message.includes("who are you")) {
      return "TankStack has 4 expert team members: Athi, Hloni, Vutomi, and Cameron. Each brings unique skills to solve your tech challenges.";
    }

    if (
      message.includes("contact") ||
      message.includes("reach") ||
      message.includes("talk")
    ) {
      return "You can reach us through our contact form below, email us at tankstackinfo@gmail.com, or call us at (078 349-TANK. We'd love to discuss how we can help your business!";
    }

    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("pricing")
    ) {
      return "Our pricing varies based on your specific needs and project scope. We offer customized solutions to fit your budget. Contact us for a free consultation and personalized quote!";
    }

    if (message.includes("thank") || message.includes("thanks")) {
      return "You're very welcome! Is there anything else you'd like to know about TankStank's services? I'm here to help!";
    }

    if (message.includes("bye") || message.includes("goodbye")) {
      return "Thanks for chatting with me! Feel free to reach out anytime if you have more questions. Have a great day!";
    }

    return "I'd be happy to help you with that! You can ask me about our services (IT consulting, software integration, cloud solutions, cybersecurity, or AI automation), our team, pricing, or how to contact us. What would you like to know more about?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(inputText),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 flex items-center">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold">TankBot</div>
              <div className="text-xs opacity-90">
                Online • Ask me anything!
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm leading-relaxed ${
                    message.isUser
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 max-w-xs px-4 py-2 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-colors duration-200 flex items-center justify-center"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
