import React from "react";
import exerciseImg from "../PetCare/images/Exercise.jpg";
import feedingImg from "../PetCare/images/Feeding.jpg";
import groomingImg from "../PetCare/images/grooming.jpg";
import { Link } from "react-router-dom";

const General = () => {
  const generals = [
    { name: "Exercising", image: exerciseImg, link: "/exercising" },
    { name: "Feeding", image: feedingImg, link: "/feeding" },
    { name: "Grooming", image: groomingImg, link: "/grooming" },
  ];

  return (
    <div className="emergency-page p-6 flex justify-center items-center mt-8">
      <div className="text-center max-w-6xl">
        <h1 className="font-semibold text-3xl mb-4 tracking-wider">
          General Pet Care
        </h1>
        <p className="text-green-600 mb-8">
          Essential Guidelines for Keeping Your Pets Safe and Healthy
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
          {generals.map((general, index) => (
            <div
              key={index}
              className="relative w-80 h-56  rounded-2xl shadow-lg"
            >
              {" "}
              <img
                src={general.image}
                alt={general.name}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                <Link to={general.link}>
                  <div className="bg-black w-28 h-28 rounded-full flex items-center justify-center transform translate-y-1/2">
                    {" "}
                    <span className="text-white text-lg font-semibold">
                      {general.name}
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

export default General;
