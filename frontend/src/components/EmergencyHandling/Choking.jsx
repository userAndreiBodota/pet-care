//responive na

import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { IoArrowBack } from "react-icons/io5";
import { FaPaw } from "react-icons/fa";
import chokingpet from "../Emergency/images/petchoking.jpg";
import Footer from "../Footer/Footer";
import chokingGuide from "../EmergencyHandling/image/chokingGuide.png";

const stepsToHandleChokingPets = [
  {
    id: 1,
    title: "Stay Calm",
    description:
      "Your calmness will help you think clearly and reassure your pet.",
  },
  {
    id: 2,
    title: "Assess the Situation",
    description:
      "Check if your pet is coughing or gagging. If they can still breathe, encourage them to cough.",
  },
  {
    id: 3,
    title: "Position Your Pet",
    description:
      "For small pets, hold them with their back against your chest. For larger pets, have them stand or lay on their side.",
  },
  {
    id: 4,
    title: "Perform Back Blows",
    description:
      "Small Pets: Give firm blows between the shoulder blades with your palm. Large Pets: Stand behind them, place your arms around their waist, and deliver 3-5 firm back blows.",
  },
  {
    id: 5,
    title: "Perform Abdominal Thrusts",
    description:
      "Small Pets: Use your fingers to create a 'C' shape around their abdomen and thrust inward and upward. Large Pets: Place a fist just below the rib cage and thrust inward and upward.",
  },
  {
    id: 6,
    title: "Check the Mouth",
    description:
      "If you can safely see the object, try to remove it with your fingers. Avoid putting your fingers deep into the throat.",
  },
  {
    id: 7,
    title: "Monitor Your Pet",
    description:
      "After dislodging the object, observe your pet for any signs of distress, coughing, or difficulty breathing.",
  },
  {
    id: 8,
    title: "Seek Veterinary Care",
    description:
      "Regardless of the outcome, take your pet to the vet for an evaluation to ensure there are no injuries or remaining obstructions.",
  },
];

const Choking = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="flex justify-between items-center mt-6 mb-12">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-green-500 transition"
          >
            <IoArrowBack size={24} color="#9dbeb7" />
            <span className="ml-2 hidden sm:inline">Back</span>
          </button>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 tracking-wide">
              Emergency Handling
            </h1>

            <p className="text-green-600 text-lg sm:text-xl">
              Some Essential Actions for Pet Emergencies
            </p>
          </div>
        </div>
        <div className="img-holder relative w-full flex justify-center items-center">
          <img
            src={chokingpet}
            alt="Choking Pet"
            className="w-full sm:w-5/6 h-64 sm:h-80 object-cover rounded-md"
          />
          <div className="overlay absolute inset-0 flex justify-center items-center">
            <div className="text-content bg-white bg-opacity-20 backdrop-blur-sm p-4 sm:p-6 rounded-lg w-11/12 sm:w-96 h-52 flex flex-col justify-center">
              <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">
                How to handle
              </h2>
              <h1 className="text-green-500 text-2xl sm:text-3xl font-bold">
                CHOKING PET?
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F5CC] p-4 sm:p-6 rounded-lg shadow-md mt-6 w-full sm:w-4/5 mx-auto relative flex flex-col items-center mb-20">
          <FaPaw className="absolute top-4 right-4 text-green-500 w-8 h-8 sm:w-12 sm:h-12" />
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            STEPS TO HANDLE CHOKING PETS:
          </h2>
          <ul className="list-disc list-inside text-justify w-full sm:w-3/4">
            {stepsToHandleChokingPets.map((step) => (
              <li key={step.id} className="mb-2 text-sm sm:text-base">
                <span className="font-semibold">{step.title}: </span>
                {step.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center flex-col items-center h-4/5 mb-28">
          <h1 className="font-bold text-3xl sm:text-4xl mb-6 tracking-wide">
            Visual Guide
          </h1>
          <img
            src={chokingGuide}
            alt="Choking Guide"
            className="w-full sm:w-[850px] h-auto"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-20">
        <h1 className="font-medium tracking-wider text-xl sm:text-2xl mb-4">
          Want to know more?
        </h1>
        <div className="flex w-full justify-center">
          <div className="bg-[#F6F8F9] backdrop-blur-[24px] rounded-lg p-4 sm:p-6 mt-10 max-w-4xl shadow-md flex flex-col sm:flex-row items-center gap-6">
            <h1 className="font-bold text-sm sm:text-base">Visit:</h1>
            <div className="flex flex-col">
              <a
                href="https://animalervolusia.com/blog/how-to-help-a-choking-pet/"
                className="underline text-blue-600 font-medium text-sm sm:text-lg"
              >
                https://animalervolusia.com/blog/how-to-help-a-choking-pet/
              </a>
              <h2 className="text-center text-green-500 mt-2 sm:mt-4">
                AND SEEK IMMEDIATE VETERINARY ASSISTANCE
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Choking;
