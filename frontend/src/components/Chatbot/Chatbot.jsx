import React, { useState, useEffect, useRef } from "react";

const ChatSupport = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [userMessages, setUserMessages] = useState([]);
  const [botMessages, setBotMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const chatEndRef = useRef(null); // Reference to scroll to the bottom

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const responses = {
    greetings: ["hello", "hi", "hey"],
    vetCare: ["vet", "veterinarian", "doctor"],
    feeding: ["feed", "diet", "nutrition"],
    mentalStimulation: ["mental", "stimulate", "play"],
    dentalCare: ["dental", "teeth", "grooming"],
    fleasTicks: ["fleas", "ticks", "parasites"],
    exercise: ["exercise", "active"],
    bathGrooming: ["bath", "shower", "grooming"],
    socialization: ["social", "friendly"],
    adoption: ["adopt", "adoption"],
    age: ["age", "old"],
    petInsurance: ["pet insurance"],
    allergies: ["allergy", "sensitive"],
    sick: ["sick", "ill"],
    boredom: ["bored", "lonely"],
  };

  const defaultReply = "I'm sorry, I don't understand that yet.";

  const responsesMap = {
    greetings: "Hello! How can I assist you with your pet today?",
    vetCare:
      "You should take your pet to the vet at least once a year for a checkup and vaccinations.",
    feeding:
      "A balanced diet tailored to your pet’s age, breed, size, and activity level is important for their health.",
    mentalStimulation:
      "Try puzzle toys, training sessions, and games like fetch or hide and seek to keep your pet mentally engaged!",
    dentalCare:
      "Regularly brush your pet’s teeth with pet-safe toothpaste and provide dental chews to prevent issues.",
    fleasTicks:
      "Use vet-recommended flea and tick preventatives, and check your pet regularly for signs of infestations.",
    exercise:
      "Exercise is key to keeping your pet healthy. Regular walks, playtime, and activities are important.",
    bathGrooming:
      "Give your pet a bath as needed based on their breed and activity level, and regularly groom them to maintain their coat.",
    socialization:
      "Socializing your pet with other animals and people is important for their well-being. Start early if possible!",
    adoption:
      "Adopting a pet is a great way to give them a loving home! Make sure you choose a pet that fits your lifestyle and home.",
    age: "The ideal age for a pet to start regular vet visits is as a young adult, but it’s never too late to care for them!",
    petInsurance:
      "Pet insurance can help cover medical costs, especially in emergencies. It’s a good idea for peace of mind.",
    allergies:
      "Some pets have food or environmental allergies. If you suspect an allergy, consult your vet for guidance.",
    sick: "If your pet is showing signs of illness, such as vomiting, lethargy, or loss of appetite, take them to the vet.",
    boredom:
      "If your pet seems bored or lonely, provide more playtime, social interaction, or consider adopting a companion.",
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      // Capture user message
      setUserMessages([...userMessages, userInput]);

      // Normalize user input to lowercase
      const normalizedInput = userInput.toLowerCase();

      // Check if the input matches any keyword categories and get the response
      let botReply = defaultReply;

      // Iterate through response categories
      for (let key in responses) {
        if (responses[key].some((phrase) => normalizedInput.includes(phrase))) {
          botReply = responsesMap[key];
          break;
        }
      }

      // Add bot's response
      setBotMessages([...botMessages, botReply]);
      setUserInput(""); // Clear input after sending
    }
  };

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  // Scroll to the bottom every time the messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [userMessages, botMessages]);

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

            {/* User's Messages */}
            {userMessages.map((message, index) => (
              <div key={index} className="flex items-start justify-end">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg shadow-sm">
                  {message}
                </div>
              </div>
            ))}

            {/* Bot's Responses */}
            {botMessages.map((message, index) => (
              <div key={index} className="flex items-start">
                <img
                  src="/images/furbot.png"
                  alt="FurBot Logo"
                  className="w-6 h-6 rounded-full mr-3"
                />
                <div className="bg-blue-100 text-gray-800 px-4 py-2 rounded-lg shadow-sm">
                  {message}
                </div>
              </div>
            ))}

            {/* Scroll to bottom */}
            <div ref={chatEndRef} />
          </div>

          {/* User Input Field */}
          <div className="flex items-center p-3 border-t border-gray-300">
            <input
              type="text"
              className="flex-grow p-2 border rounded-lg focus:outline-none"
              placeholder="Ask me anything..."
              value={userInput}
              onChange={handleUserInput}
            />
            <button
              className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSupport;
