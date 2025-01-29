import React from "react";
import { FaFirstAid, FaPaw, FaCapsules } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations

const PetCareSection = () => {
  return (
    <div className="pet-section-container w-full bg-white py-10">
      {/* PET TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="pet-section-text text-center px-4"
      >
        <h1 className="title text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Pet Care <span className="text-green-600">Sections</span>
        </h1>
        <p className="text text-base sm:text-lg text-gray-700 mb-8 tracking-wide">
          Your Essential Guide to Keeping Pets Healthy and Happy
        </p>
      </motion.div>

      {/* OPTIONS */}
      <div className="options-container flex flex-wrap justify-center gap-8 px-4">
        {/* Emergency Handling */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="option w-72 sm:w-80 bg-customGray h-48 rounded-lg flex items-center justify-center text-center shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-xl"
        >
          <Link to="/emergency" className="flex flex-col items-center">
            <FaFirstAid size={64} color="white" className="mb-4" />
            <span className="text-customWhite font-bold tracking-wide text-sm sm:text-base">
              Emergency Handling
            </span>
          </Link>
        </motion.div>

        {/* General Pet Care */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="option w-72 sm:w-80 bg-customGray h-48 rounded-lg flex items-center justify-center text-center shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-xl"
        >
          <Link to="/general" className="flex flex-col items-center">
            <FaPaw size={64} color="white" className="mb-4" />
            <span className="text-customWhite font-bold tracking-wide text-sm sm:text-base">
              General Pet Care
            </span>
          </Link>
        </motion.div>

        {/* Recognizing and Managing Illness */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="option w-72 sm:w-80 bg-customGray h-48 rounded-lg flex items-center justify-center text-center shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-xl"
        >
          <Link to="/recognizing" className="flex flex-col items-center">
            <FaCapsules size={64} color="white" className="mb-4" />
            <span className="text-customWhite font-bold tracking-wide text-sm sm:text-base text-center">
              Recognizing and Managing Illness
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PetCareSection;
