import React from "react";
import { Link } from "react-router-dom";

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
    <div className="emergency-page p-6 flex justify-center items-center  mt-12">
      <div className="text-center max-w-6xl">
        <h1 className="font-semibold text-3xl mb-4 tracking-wider">
          Emergency Handling
        </h1>
        <p className="text-green-600 mb-8">
          Some Essential Actions for Pet Emergencies
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {emergencies.map((emergency, index) => (
            <div
              key={index}
              className="relative w-80 h-56  rounded-2xl shadow-lg"
            >
              {" "}
              <img
                src={emergency.image}
                alt={emergency.name}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                <Link to={emergency.link}>
                  <div className="bg-black w-28 h-28 rounded-full flex items-center justify-center transform translate-y-1/2">
                    {" "}
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
  );
};

export default EmergencyOptions;
