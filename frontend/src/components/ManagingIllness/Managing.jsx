//responsive

import React from "react";
import { Link } from "react-router-dom";
import Cat from "../ManagingIllness/images/Cat.png";
import Dog from "../ManagingIllness/images/Dog.png";

const Managing = () => {
  const emergencies = [
    { name: "Dogs", image: Dog, link: "/dogs" },
    { name: "Cats", image: Cat, link: "/cats" },
  ];

  return (
    <>
      <div className="emergency-page p-6 flex justify-center items-center mt-8">
        {/* Back Arrow Button */}
        <Link
          to="/"
          className="absolute top-28 left-6 text-xl text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <div className="text-center max-w-6xl w-full">
          <h1 className="font-semibold text-3xl mb-4 tracking-wider">
            Recognizing and Managing Illness
          </h1>
          <p className="text-green-800 mb-8">
            Early Detection and Care Tips to Keep Your Pets Healthy
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center lg:flex lg:justify-center lg:w-full lg:mx-auto">
            {emergencies.map((emergency, index) => (
              <div
                key={index}
                className="relative w-80 h-56 rounded-2xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src={emergency.image}
                  alt={emergency.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                  <Link to={emergency.link}>
                    <div className="bg-green-950 w-28 h-28 rounded-full flex items-center justify-center transform translate-y-1/2">
                      <span className="text-white text-lg font-semibold">
                        {emergency.name}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Managing;
