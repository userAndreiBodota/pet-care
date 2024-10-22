import React from "react";
import { FaFirstAid, FaPaw, FaCapsules } from "react-icons/fa";
import { Link } from "react-router-dom";

const PetCareSection = () => {
  return (
    <div className="pet-section-container w-full h-96 ">
      {/* PET TITLE */}
      <div className="pet-section-text text-center">
        <h1 className="title text-3xl text-gray-900 mb-4">
          Pet Care <span className="text-green-400">Sections</span>
        </h1>
        <p className="text tracking-wide text-lg text-gray-700 mb-11">
          Your Essential Guide to Keeping Pets Healthy and Happy
        </p>
      </div>

      {/*OPTIONS */}
      <div className="options-container flex justify-center items-center">
        <div className="options flex gap-20 text-center">
          <div className="emergency w-80 bg-customGray h-48 rounded-lg flex items-center justify-center">
            <Link to="/emergency" className="flex flex-col items-center">
              <FaFirstAid
                size={122}
                color="white"
                style={{ marginBottom: "8px" }}
              />
              <span className="text-customWhite font-bold tracking-wider">
                Emergency Handling
              </span>
            </Link>
          </div>
          <div className="pet-care w-80 bg-customGray rounded-lg flex items-center justify-center">
            <Link to="/general" className="flex flex-col items-center">
              <FaPaw size={122} color="white" style={{ marginBottom: "8px" }} />
              <span className="text-customWhite font-bold tracking-wider">
                General Pet Care
              </span>
            </Link>
          </div>
          <div className="managing w-80 bg-customGray rounded-lg flex items-center justify-center">
            <Link to="/recognizing" className="flex flex-col items-center">
              <FaCapsules
                size={122}
                color="white"
                style={{ marginBottom: "8px" }}
              />
              <span className="text-customWhite font-bold tracking-wider">
                Recognizing and Managing Illness
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCareSection;
