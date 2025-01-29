import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { IoArrowBack } from "react-icons/io5";
import { FaPaw } from "react-icons/fa";
import petBurns from "../Emergency/images/petburns.jpg";
import Footer from "../Footer/Footer";
import petBurnGuide from "../EmergencyHandling/image/petburnguide.png";

const stepsToHandleChokingPets = [
  {
    id: 1,
    title: "Assess the Severity",
    description:
      "First-Degree Burns: Redness and minor swelling (like a sunburn). Second-Degree Burns: Blisters and more severe swelling. Third-Degree Burns: Charred skin or deep tissue damage.",
  },
  {
    id: 2,
    title: "Remove the Source of Burn",
    description:
      "Check if your pet is coughing or gagging. If they can still breathe, encourage them to cough.",
  },
  {
    id: 3,
    title: "Cool the Burn",
    description:
      "First Aid: Hold the affected area under cool (not cold) running water for 10–20 minutes. For Larger Areas: Use a cool, wet cloth to gently apply to the burn. Do not ice the burn, as it can cause further damage.",
  },
  {
    id: 4,
    title: "Do Not Break Blisters",
    description:
      "If blisters are present, do not pop them, as this can lead to infection.",
  },
  {
    id: 5,
    title: "Cover the Burn",
    description:
      "Use a clean, non-stick bandage or cloth to cover the burn to protect it from dirt and infection.",
  },
  {
    id: 6,
    title: "Avoid Home Remedies",
    description:
      "Do not apply ointments, creams, or oils unless directed by a veterinarian.",
  },
  {
    id: 7,
    title: "Seek Veterinary Care",
    description:
      "Take your pet to the veterinarian, especially for second- or third-degree burns, as they may require more extensive treatment.",
  },
  {
    id: 8,
    title: "Monitor for Infection",
    description:
      "Keep an eye on the burn site for signs of infection, such as increased redness, swelling, or discharge.",
  },
];

const Burns = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 mb-12">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-green-800 transition mb-4 sm:mb-0"
          >
            <IoArrowBack size={24} color="#9dbeb7" />
            <span className="ml-2 hidden sm:inline"></span>
          </button>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 mt-14 tracking-wide">
              Emergency Handling
            </h1>
            <p className="text-green-600">
              Some Essential Actions for Pet Emergencies
            </p>
          </div>
        </div>

        {/* Centered image section */}
        <div className="relative flex justify-center items-center mb-6">
          <img
            src={petBurns}
            alt="Choking Pet"
            className="w-full max-w-5xl h-80 md:h-96 object-cover rounded-md"
          />
          <div className="overlay absolute inset-0 flex justify-center items-center">
            <div className="text-content bg-white bg-opacity-40 backdrop-blur-sm p-4 sm:p-6 rounded-lg w-11/12 sm:w-96 h-52 flex flex-col justify-center ml-20">
              <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">
                How to handle How to handle
              </h2>
              <h1 className="text-customGray text-2xl sm:text-3xl font-bold">
                PET BURNS?
              </h1>
            </div>
          </div>
        </div>

        {/* Steps section */}
        <div className="bg-[#F5F5F5CC] p-6 rounded-lg shadow-md mt-6 w-full sm:w-4/5 mx-auto relative flex flex-col items-center mb-20">
          <FaPaw className="absolute top-4 right-4 text-green-500 w-10 h-10 sm:w-12 sm:h-12" />
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            STEPS TO HANDLE PET BURNS:
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

        {/* Guide image section */}
        <div className="flex flex-col items-center mb-10 sm:mb-28">
          <h1 className="font-bold text-3xl sm:text-4xl mb-6 tracking-wide">
            Heal Pet Wound
          </h1>
          <img
            src={petBurnGuide}
            alt="Choking Guide"
            className="w-full max-w-5xl h-auto"
          />
        </div>

        {/* Additional information section */}
        <div className="flex flex-col justify-center items-center min-h-[30vh] mb-20">
          <h1 className="font-medium tracking-wider text-2xl -mb-4">
            Want to know more?
          </h1>
          <div className="bg-[#F6F8F9] backdrop-blur-[24px] rounded-lg p-6 mt-10 max-w-4xl shadow-md flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
            <h1 className="font-bold text-base mb-14">Visit:</h1>
            <div className="flex flex-col items-center sm:items-start">
              <a
                href="https://animalemergencycare.net/aecprevents/understanding-and-treating-burns-on-your-pet/"
                className="underline text-blue-600 font-medium text-lg"
              >
                https://animalemergencycare.net/aecprevents/understanding-and-treating-burns-on-your-pet/
              </a>
              <h2 className="text-center sm:text-left text-green-500 mt-2">
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

export default Burns;
