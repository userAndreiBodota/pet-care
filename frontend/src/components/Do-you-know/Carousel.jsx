import React, { useState } from "react";
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

  const nextText = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === texts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-gray-100 rounded-lg p-8 flex items-center justify-between mb-12">
      <div className="w-2/3">
        <h2 className="text-lg font-bold">Do you know?</h2>
        <p className="text-sm mt-4">{texts[currentIndex]}</p>
      </div>

      <div className="w-1/3">
        <img src={Cat} alt="Cat Illustration" className="object-cover h-52" />
      </div>

      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {texts.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

      <button
        onClick={nextText}
        className="absolute right-4 top-1/2 transform -translate-y-1/2  p-2 rounded-full cursor-pointer"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
