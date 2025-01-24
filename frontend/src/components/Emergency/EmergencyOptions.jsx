//responsive na

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import chokingImg from "../Emergency/images/petchoking.jpg";
import heatStrokeImg from "../Emergency/images/heatstroke.jpeg";
import seizureImg from "../Emergency/images/petseizures.jpg";
import poisoningImg from "../Emergency/images/petpoison.jpg";
import bleedingImg from "../Emergency/images/petbleeding.jpg";
import brokenBonesImg from "../Emergency/images/petbrokenbones.jpg";
import burnsImg from "../Emergency/images/petburns.jpg";
import eyeInjuriesImg from "../Emergency/images/peteyeinjuries.jpg";
import bloatingImg from "../Emergency/images/petbloating.jpeg";

const EmergencyOptions = () => {
  const navigate = useNavigate();
  const emergencies = [
    { name: "Choking", image: chokingImg, link: "/choking" },
    { name: "Heat Stroke", image: heatStrokeImg, link: "/heat-stroke" },
    { name: "Seizures", image: seizureImg, link: "/seizures" },
    { name: "Poisoning", image: poisoningImg, link: "/poisoning" },
    { name: "Bleeding", image: bleedingImg, link: "/bleeding" },
    {
      name: "Broken Bones",
      image: brokenBonesImg,
      link: "/broken-bones",
    },
    { name: "Burns", image: burnsImg, link: "/burns" },
    {
      name: "Eye Injuries",
      image: eyeInjuriesImg,
      link: "/eye-injuries",
    },
    { name: "Bloat", image: bloatingImg, link: "/bloat" },
  ];

  return (
    <div className="relative">
      {/* Back Arrow Button */}
      <Link
        to="/"
        className="absolute -top-3 left-6 text-xl text-gray-600 hover:text-gray-800"
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

      {/* Main Content */}
      <div className="emergency-page p-6 flex flex-col items-center mt-12">
        <div className="text-center max-w-6xl">
          <h1 className="font-semibold text-3xl sm:text-4xl mb-4 tracking-wider">
            Emergency Handling
          </h1>
          <p className="text-customGray mb-8 text-lg sm:text-xl">
            Some Essential Actions for Pet Emergencies
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-center">
            {emergencies.map((emergency, index) => (
              <div
                key={index}
                className="relative w-full max-w-xs rounded-full shadow-lg flex flex-col items-center transform transition-all duration-300 ease-in-out hover:scale-105"

              >
                <img
                  src={emergency.image}
                  alt={emergency.name}
                  className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-2xl"
                />
                <Link
                  to={emergency.link}
                  className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-green-950 w-28 h-28 rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-white text-sm sm:text-base font-semibold text-center">
                      {emergency.name}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyOptions;
