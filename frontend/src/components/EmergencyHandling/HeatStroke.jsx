import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { IoArrowBack } from "react-icons/io5";
import { FaPaw } from "react-icons/fa";
import petHeatStroke from "../Emergency/images/heatstroke.jpeg";
import Footer from "../Footer/Footer";
import heatstrokeGuide from "../EmergencyHandling/image/heatstroke.png";

const stepsToHandleChokingPets = [
  {
    id: 1,
    title: "Recognize Symptoms",
    description:
      "Look for signs such as excessive panting, drooling, weakness, vomiting, disorientation, or collapse.",
  },
  {
    id: 2,
    title: "Move to a Cooler Area",
    description:
      "Immediately take your pet to a shaded or air-conditioned space.",
  },
  {
    id: 3,
    title: "Apply Cool Water",
    description:
      "Wet your pet with cool (not cold) water, focusing on the belly, paws, and groin. You can also use wet towels or ice packs wrapped in a cloth.",
  },
  {
    id: 4,
    title: "Encourage Hydration",
    description:
      "Offer small amounts of cool water. Do not force them to drink, as this may cause choking.",
  },
  {
    id: 5,
    title: "Monitor Temperature",
    description:
      "Use a rectal thermometer to check your pet's temperature. A temperature above 103°F (39.4°C) is concerning.",
  },
  {
    id: 6,
    title: "Take to the Vet",
    description:
      "Regardless of improvement, take your pet to the veterinarian for evaluation and treatment.",
  },
  {
    id: 7,
    title: "Prevent Future Heat Stroke",
    description:
      "Keep your pet hydrated, avoid exercise during peak heat, and provide plenty of shade.",
  },
];

const HeatStroke = () => {
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

        {/* Responsive image section */}
        <div className="relative w-full flex justify-center items-center mt-4 mb-8">
          <img
            src={petHeatStroke}
            alt="Pet Heat Stroke"
            className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 h-80 object-cover rounded-md shadow-lg"
            style={{ objectFit: "cover" }}
          />
          <div className="overlay absolute inset-0 flex justify-center items-center">
            <div className="text-content bg-white bg-opacity-40 backdrop-blur-sm p-4 sm:p-6 rounded-lg w-11/12 sm:w-96 h-52 flex flex-col justify-center">
              <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">
                How to handle
              </h2>
              <h1 className="text-customGray text-3xl font-bold">
                PET HEAT STROKE?
              </h1>
            </div>
          </div>
        </div>

        {/* Steps section */}
        <div className="bg-[#F5F5F5CC] p-4 sm:p-6 rounded-lg shadow-md mt-6 w-full sm:w-4/5 mx-auto relative flex flex-col items-center mb-20">
          <FaPaw className="absolute top-4 right-4 text-green-800 w-8 h-8 sm:w-12 sm:h-12" />
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">
            STEPS TO HANDLE PET HEAT STROKE:
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

        {/* Visual guide section */}
        <div className="flex flex-col items-center mt-12 mb-20">
          <h1 className="font-bold text-3xl sm:text-4xl mb-6 text-gray-800">
            Visual Guide
          </h1>
          <img
            src={heatstrokeGuide}
            alt="Heat Stroke Guide"
            className="w-full sm:w-3/4 lg:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Additional information section */}
      <div className="flex flex-col justify-center items-center min-h-[15vh] mb-20">
        <h1 className="font-medium tracking-wider text-xl sm:text-2xl -mb-4">
          Want to know more?
        </h1>
        <div className="flex w-full justify-center">
          <div className="bg-[#F6F8F9] backdrop-blur-[24px] rounded-lg p-4 sm:p-6 mt-10 max-w-4xl shadow-md flex flex-col sm:flex-row items-center gap-6">
            <h1 className="font-bold text-sm sm:text-base mb-9">Visit:</h1>
            <div className="flex flex-col">
              <a
                href="https://www.rspcapetinsurance.org.au/pet-care/health-and-wellbeing/heatstroke-hyperthermia"
                className="underline text-blue-600 font-medium text-sm sm:text-lg"
              >
                https://www.rspcapetinsurance.org.au/pet-care/health-and-wellbeing/heatstroke-hyperthermia
              </a>
              <h2 className="text-center text-green-800 mt-2 sm:mt-4">
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

export default HeatStroke;
