//responsive na

import Tipsbg from "../Do-you-know/image/tipsbg.png";
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
      <div className="flex flex-col items-center mt-28 mb-8 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide mb-5 text-center">
          Tips for Maintaining Healthy Pets
        </h1>
        <p className="font-medium text-base sm:text-lg text-green-800 text-center">
          Simple Practices to Keep Your Pets Happy and Thriving
        </p>
      </div>

      <div
        className="relative w-full max-w-5xl mx-auto bg-cover bg-center rounded-lg p-8 sm:p-16 flex flex-col items-start justify-center mb-40 mt-10"
        style={{ backgroundImage: `url(${Tipsbg})` }}
      >
        <div className="w-full sm:w-12/12 mb-4 sm:mb-0 bg-opacity-75 rounded-lg p-6 flex flex-col items-start">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Tips for Maintaining Healthy Pets
          </h2>
          <p className="text-base sm:text-lg mt-2 w-full">
            {texts[currentIndex]}
          </p>
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
