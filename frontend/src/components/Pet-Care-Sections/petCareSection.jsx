//RESPONSIVENESS DONE

import React from "react";
import { FaFirstAid, FaPaw, FaCapsules } from "react-icons/fa";
import { Link } from "react-router-dom";

const PetCareSection = () => {
  return (
    <div className="pet-section-container w-full bg-white py-10">
      {/* PET TITLE */}
      <div className="pet-section-text text-center px-4">
        <h1 className="title text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Pet Care <span className="text-green-400">Sections</span>
        </h1>
        <p className="text text-base sm:text-lg text-gray-700 mb-8 tracking-wide">
          Your Essential Guide to Keeping Pets Healthy and Happy
        </p>
      </div>

      {/* OPTIONS */}
      <div className="options-container flex flex-wrap justify-center gap-8 px-4">
        {/* Emergency Handling */}
        <div className="option w-72 sm:w-80 bg-customGray h-48 rounded-lg flex items-center justify-center text-center shadow-lg">
          <Link to="/emergency" className="flex flex-col items-center">
            <FaFirstAid
              size={64}
              color="white"
              className="mb-4"
            />
            <span className="text-customWhite font-bold tracking-wide text-sm sm:text-base">
              Emergency Handling
            </span>
          </Link>
        </div>

        {/* General Pet Care */}
        <div className="option w-72 sm:w-80 bg-customGray h-48 rounded-lg flex items-center justify-center text-center shadow-lg">
          <Link to="/general" className="flex flex-col items-center">
            <FaPaw
              size={64}
              color="white"
              className="mb-4"
            />
            <span className="text-customWhite font-bold tracking-wide text-sm sm:text-base">
              General Pet Care
            </span>
          </Link>
        </div>

        {/* Recognizing and Managing Illness */}
        <div className="option w-72 sm:w-80 bg-customGray h-48 rounded-lg flex items-center justify-center text-center shadow-lg">
          <Link to="/recognizing" className="flex flex-col items-center">
            <FaCapsules
              size={64}
              color="white"
              className="mb-4"
            />
            <span className="text-customWhite font-bold tracking-wide text-sm sm:text-base text-center">
              Recognizing and Managing Illness
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCareSection;
