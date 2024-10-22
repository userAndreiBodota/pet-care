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
        <div className="text-center max-w-6xl">
          <h1 className="font-semibold text-3xl mb-4 tracking-wider">
            Recognizing and Managing Illness
          </h1>
          <p className="text-green-600 mb-8">
            Early Detection and Care Tips to Keep Your Pets Healthy
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 justify-center">
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
    </>
  );
};

export default Managing;
