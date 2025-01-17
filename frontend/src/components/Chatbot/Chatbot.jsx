import React, { useState } from "react";

const ChatSupport = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const questionsAndAnswers = [
    {
      question: "How do I reset my password?",
      answer: "Go to the account settings and click 'Reset Password'.",
    },
    {
      question: "Where can I view my orders?",
      answer:
        "You can view your orders in the 'My Orders' section of your account.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact support via the 'Contact Us' page or email us at support@example.com.",
    },
    {
      question: "What is the return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase. See details on our 'Return Policy' page.",
    },
    {
      question: "How can I update my profile information?",
      answer:
        "Go to 'My Account' and click 'Edit Profile' to update your information.",
    },
  ];

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
    setSelectedQuestionIndex(null);
  };

  const handleQuestionClick = (index) => {
    setSelectedQuestionIndex(index);
  };

  return (
    <div className="fixed bottom-4 right-10 z-50">
      <button
        className="w-16 h-16 rounded-full shadow-lg focus:outline-none flex items-center justify-center"
        onClick={toggleChat}
      >
        <img
          src="/images/chatLogo.png"
          alt="Chat Icon"
          className="w-20 h-20 object-cover"
        />
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="absolute bottom-20 right-0 bg-white w-80 rounded-lg shadow-lg flex flex-col">
          {/* Header */}
          <div className="flex items-center bg-gray-100 p-3 border-b border-gray-300 rounded-t-lg">
            <img
              src="/images/furbot.png"
              alt="Chat Logo"
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <p className="font-bold text-gray-800">Furbot</p>
              <p className="text-sm text-gray-500">Active now</p>
            </div>
            <button
              className="ml-auto text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={toggleChat}
            >
              ✖
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-4 flex-grow overflow-y-auto">
            {/* Initial FurBot Message */}
            <div className="flex items-start">
              <img
                src="/images/furbot.png"
                alt="FurBot Logo"
                className="w-6 h-6 rounded-full mr-3"
              />
              <div className="bg-blue-100 text-gray-800 px-4 py-2 rounded-lg shadow-sm">
                Hello, I'm Furbot, your personal assistant for all things
                pet-related! How can I help you today?
              </div>
            </div>

            {/* Questions */}
            {selectedQuestionIndex === null &&
              questionsAndAnswers.map((item, index) => (
                <button
                  key={index}
                  className="w-full text-left bg-gray-100 hover:bg-gray-200 text-sm py-2 px-3 rounded-md mb-2 focus:outline-none"
                  onClick={() => handleQuestionClick(index)}
                >
                  {item.question}
                </button>
              ))}

            {selectedQuestionIndex !== null && (
              <div>
                <p className="font-semibold text-gray-700 mb-2">
                  {questionsAndAnswers[selectedQuestionIndex].question}
                </p>

                <p className="bg-blue-100 text-gray-800 px-4 py-2 rounded-lg shadow-sm">
                  {questionsAndAnswers[selectedQuestionIndex].answer}
                </p>

                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 focus:outline-none"
                  onClick={() => setSelectedQuestionIndex(null)}
                >
                  Back to Questions
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSupport;
