//responsive na

import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { IoArrowBack } from "react-icons/io5";
import { FaPaw } from "react-icons/fa";
import petBleeding from "../Emergency/images/petbleeding.jpg";
import Footer from "../Footer/Footer";
import petBleedingGuide from "../EmergencyHandling/image/petbleedingguide.png";

const stepsToHandleChokingPets = [
  {
    id: 1,
    title: "Assess the Situation",
    description:
      "Identify the source of the bleeding (e.g., cuts, puncture wounds). Determine if the bleeding is severe or minor.",
  },
  {
    id: 2,
    title: "Control the Bleeding",
    description:
      "For Minor Bleeding: Apply gentle pressure with a clean cloth or bandage to the wound for about 5–10 minutes. For Severe Bleeding: Use a clean cloth to apply firm pressure directly on the wound. If blood soaks through, do not remove the cloth; add more layers on top.",
  },
  {
    id: 3,
    title: "Elevate the Injury",
    description:
      "If possible, raise the bleeding area above the level of the heart to help slow bleeding.",
  },
  {
    id: 4,
    title: "Clean the Wound",
    description:
      "If the bleeding stops and the wound is minor, gently clean it with lukewarm water and mild soap. Avoid using alcohol or hydrogen peroxide.",
  },
  {
    id: 5,
    title: "Apply a Bandage",
    description:
      "Use a sterile bandage or gauze to cover the wound. Ensure it's secure but not too tight to restrict blood flow.",
  },
  {
    id: 6,
    title: "Seek Veterinary Care",
    description:
      "Regardless of severity, take your pet to the vet for a thorough examination, especially for deep or severe wounds.",
  },
  {
    id: 7,
    title: "Monitor for Signs of Shock",
    description:
      "Watch for symptoms like rapid breathing, weak pulse, or pale gums, which indicate shock and require immediate veterinary attention.",
  },
];

const Bleeding = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex justify-between items-center mt-6 mb-12">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-green-800 transition"
          >
            <IoArrowBack size={24} color="#9dbeb7" />
            <span className="ml-2 hidden sm:inline"></span>
          </button>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 mt-14 tracking-wide">
              Emergency Handling
            </h1>
            <p className="text-green-800 text-lg">
              Some Essential Actions for Pet Emergencies
            </p>
          </div>
        </div>

        <div className="img-holder relative w-full flex justify-center items-center">
          <img
            src={petBleeding}
            alt="Choking Pet"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-80 object-cover rounded-md shadow-lg"
          />
          <div className="overlay absolute inset-0 flex justify-center items-center">
            <div className="text-content bg-white bg-opacity-40 backdrop-blur-sm p-4 sm:p-6 rounded-lg w-11/12 sm:w-96 h-52 flex flex-col justify-center">
              <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">
                How to handle How to handle
              </h2>
              <h1 className="text-customGray text-3xl font-bold">
                PET BLEEDING?
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F5CC] p-6 rounded-lg shadow-md mt-6 w-4/5 mx-auto relative flex flex-col items-center mb-20">
          <FaPaw className="absolute top-4 right-4 text-green-800 w-12 h-12" />
          <h2 className="text-xl font-bold mb-4">
            STEPS TO HANDLE PET BLEEDING:
          </h2>
          <ul className="list-disc list-inside text-justify">
            {stepsToHandleChokingPets.map((step) => (
              <li key={step.id} className="mb-2">
                <span className="font-semibold">{step.title}: </span>
                {step.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center mt-12 mb-20">
          <h1 className="font-bold text-3xl sm:text-4xl mb-6 text-gray-800">
            Visual Guide
          </h1>
          <img
            src={petBleedingGuide}
            alt="Choking Guide"
            className="w-full sm:w-3/4 lg:w-1/2 rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center justify-center min-h-[20vh] bg-white mb-20 mt-32">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-4xl">
            <h1 className="font-medium text-2xl mb-4 text-gray-800">
              Want to know more?
            </h1>
            <div className="w-full flex flex-col sm:flex-row justify-between items-center">
              <h1 className="font-bold text-base mr-2">Visit:</h1>
              <a
                href="://veterinarypartner.vin.com/default.aspx?pid=19239&id=4951317"
                className="underline text-blue-600 font-medium text-lg mt-2 sm:mt-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://veterinarypartner.vin.com/default.aspx?pid=19239&id=4951317
              </a>
            </div>
            <h2 className="text-center text-green-800 mt-4">
              AND SEEK IMMEDIATE VETERINARY ASSISTANCE
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bleeding;
