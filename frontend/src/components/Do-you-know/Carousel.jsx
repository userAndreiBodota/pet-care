import React, { useState, useEffect, useCallback } from "react";
import Cat from "../Do-you-know/image/cat.png";

const Carousel = () => {
  const texts = [
    "Owning a pet can improve your mental health! Studies show that spending time with pets can reduce stress, anxiety, and even lower blood pressure, making them great companions for emotional well-being!",
    "Pets live in the present moment, and spending time with them can encourage mindfulness and help reduce overthinking or worrying about the future.",
    "Animal-assisted therapy is used to support people with conditions like PTSD, autism, or depression, as the interaction with animals can have a calming and healing effect.",
    "Taking care of a pet helps cultivate empathy, as owners learn to be attentive to their pet’s needs and emotions, which can also translate into more compassion in human relationships.",
    "Caring for a pet fosters a sense of responsibility and accomplishment, which can lead to improved self-esteem and confidence.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("left"); // Direction for sliding effect (left or right)

  const nextText = useCallback(() => {
    setDirection("left"); // Slide to the left when moving forward
    setCurrentIndex((prevIndex) =>
      prevIndex === texts.length - 1 ? 0 : prevIndex + 1
    );
  }, [texts.length]);

  // Automatic sliding with a 5-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextText();
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [nextText]);

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-gray-100 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between mb-12 shadow-lg mt-16">
      {/* Text Section */}
      <div
        className={`w-full sm:w-2/3 text-center sm:text-left mb-6 sm:mb-0 transition-all duration-500 ease-in-out transform ${
          direction === "left" ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          opacity: 1,
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Do you know?</h2>
        <p className="text-sm sm:text-base mt-4 text-gray-700 leading-relaxed">
          {texts[currentIndex]}
        </p>
      </div>

      {/* Image Section */}
      <div
        className={`w-full sm:w-1/3 flex justify-center transition-transform duration-500 ease-in-out transform ${
          direction === "left" ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          transition: "transform 0.5s ease",
        }}
      >
        <img
          src={Cat}
          alt="Cat Illustration"
          className="object-cover h-40 sm:h-52 rounded-md"
        />
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {texts.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={nextText}
        className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 bg-gray-200 hover:bg-gray-300 rounded-full cursor-pointer shadow-md transition-transform duration-300"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
