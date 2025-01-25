import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { IoArrowBack } from "react-icons/io5";
import { FaPaw } from "react-icons/fa";
import seizurePet from "../Emergency/images/petseizures.jpg";
import Footer from "../Footer/Footer";
import catSeizureGuide from "../EmergencyHandling/image/catseizureguide.png";
import dogSeizureGuide from "../EmergencyHandling/image/dogseizureguide.png";

const stepsToHandleChokingPets = [
  {
    id: 1,
    title: "Ensure Safety",
    description:
      "Clear the area of any objects that could cause injury. Move your pet to a soft, flat surface if possible.",
  },
  {
    id: 2,
    title: "Time the Seizure",
    description: "Note how long it lasts. Seek help if it exceeds 5 minutes.",
  },
  {
    id: 3,
    title: "Do Not Restrain",
    description:
      "Avoid holding your pet down or putting your hands in their mouth.",
  },
  {
    id: 4,
    title: "Monitor and Observe",
    description:
      "Take note of your pet’s movements and behaviors during the seizure.",
  },
  {
    id: 5,
    title: "Provide Comfort",
    description:
      "After the seizure, speak softly to your pet and let them rest in a quiet space.",
  },
  {
    id: 6,
    title: "Seek Veterinary Care",
    description:
      "Contact your veterinarian for advice and record details of the seizure.",
  },
  {
    id: 7,
    title: "Educate Yourself",
    description:
      "Learn about seizures to manage your pet’s condition effectively.",
  },
];

const Seizures = () => {
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
            src={seizurePet}
            alt="Pet Seizure"
            className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 h-80 object-cover rounded-md shadow-lg"
            style={{ objectFit: "cover" }}
          />
          <div className="overlay absolute inset-0 flex justify-center items-center">
            <div className="text-content bg-white bg-opacity-40 backdrop-blur-sm p-4 sm:p-6 rounded-lg w-11/12 sm:w-96 h-52 flex flex-col justify-center">
              <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">
                How to handle
              </h2>
              <h1 className="text-customGray text-3xl font-bold">
                PET SEIZURES?
              </h1>
            </div>
          </div>
        </div>

        {/* Steps section */}
        <div className="bg-[#F5F5F5CC] p-4 sm:p-6 rounded-lg shadow-md mt-6 w-full sm:w-4/5 mx-auto relative flex flex-col items-center mb-20">
          <FaPaw className="absolute top-4 right-4 text-green-800 w-8 h-8 sm:w-12 sm:h-12" />
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            STEPS TO HANDLE PET SEIZURE:
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
            src={dogSeizureGuide}
            alt="Dog Seizure Guide"
            className="w-full sm:w-3/4 lg:w-1/2 rounded-lg shadow-lg mb-6"
          />
          <img
            src={catSeizureGuide}
            alt="Cat Seizure Guide"
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
            <h1 className="font-bold text-sm sm:text-base mb-16">Visit:</h1>
            <div className="flex flex-col">
              <a
                href="https://www.pdsa.org.uk/pet-help-and-advice/pet-health-hub/other-veterinary-advice/first-aid-for-fitsseizures-in-pets"
                className="underline text-blue-600 font-medium text-sm sm:text-lg"
              >
                https://www.pdsa.org.uk/pet-help-and-advice/pet-health-hub/other-veterinary-advice/first-aid-for-fitsseizures-in-pets
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

export default Seizures;
