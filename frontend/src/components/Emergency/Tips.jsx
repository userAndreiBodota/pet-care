//responsive na

import Cat from "../Do-you-know/image/cat.png";
import React, { useState } from "react";

const Tips = () => {
  const texts = [
    <span>
      <strong>Regular Veterinary Check-ups: </strong> Schedule annual wellness
      exams with your veterinarian. These visits allow for early detection of
      health issues and ensure your pet's vaccinations and preventive
      medications are up to date.
    </span>,
    <span>
      <strong>Proper Nutrition: </strong> Feed your pet a balanced diet
      appropriate for their age, breed, size, and activity level. Avoid
      overfeeding or feeding table scraps, as this can lead to obesity and other
      health problems.
    </span>,
    <span>
      <strong>Exercise and Mental Stimulation: </strong> Provide regular
      exercise and mental stimulation to keep your pet physically fit and
      mentally engaged. This can include walks, playtime, puzzle toys, and
      training sessions.
    </span>,
    <span>
      <strong>Dental Care: </strong> Practice good dental hygiene by brushing
      your pet's teeth regularly with pet-specific toothpaste and providing
      dental treats or toys. Dental problems can lead to pain, infection, and
      other health issues if left untreated.
    </span>,
    <span>
      <strong>Parasite Prevention: </strong> Protect your pet from fleas, ticks,
      heartworms, and other parasites by using preventive medications
      recommended by your veterinarian. Regularly check your pet for signs of
      parasites, such as scratching or skin irritation.
    </span>,
    <span>
      <strong>Grooming and Hygiene: </strong> Maintain your pet's grooming and
      hygiene needs, including regular brushing, bathing, nail trimming, and ear
      cleaning. This helps prevent skin issues, matting, and ear infections, and
      promotes overall well-being.
    </span>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextText = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === texts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10 mb-8 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide mb-5 text-center">
          Tips for Maintaining Healthy Pets
        </h1>
        <p className="font-medium text-base sm:text-lg text-green-600 text-center">
          Simple Practices to Keep Your Pets Happy and Thriving
        </p>
      </div>
      <div className="relative w-full max-w-4xl mx-auto bg-gray-100 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between mb-12">
        <div className="w-full sm:w-2/3 mb-4 sm:mb-0">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">Tips for Maintaining Healthy Pets</h2>
          <p className="text-sm sm:text-base mt-4 text-center">{texts[currentIndex]}</p>
        </div>

        <div className="w-full sm:w-1/3 flex justify-center mb-4 sm:mb-0">
          <img src={Cat} alt="Cat Illustration" className="object-cover h-52 sm:h-64 md:h-80" />
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
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full cursor-pointer text-gray-800 hover:bg-gray-200 transition"
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Tips;
