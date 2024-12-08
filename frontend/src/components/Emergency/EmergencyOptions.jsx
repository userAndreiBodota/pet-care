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
    <div className="emergency-page p-6 flex flex-col items-center mt-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-left text-gray-600 hover:text-green-500 mb-4"
      >
        <IoArrowBack size={24} />
        <span className="ml-2 text-left">Back</span>
      </button>

      <div className="text-center max-w-6xl">
        <h1 className="font-semibold text-3xl sm:text-4xl mb-4 tracking-wider">
          Emergency Handling
        </h1>
        <p className="text-green-600 mb-8 text-lg sm:text-xl">
          Some Essential Actions for Pet Emergencies
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-center">
          {emergencies.map((emergency, index) => (
            <div
              key={index}
              className="relative w-full max-w-xs md:max-w-sm lg:max-w-md h-56 md:h-64 lg:h-80 rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={emergency.image}
                alt={emergency.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <Link to={emergency.link}>
                  <div className="bg-black w-28 h-28 rounded-full flex items-center justify-center transform translate-y-1/2">
                    <span className="text-white text-sm sm:text-lg font-semibold">
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
  );
};

export default EmergencyOptions;
