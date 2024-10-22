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
      <div className="min-h-screen">
        <div className="emergency-page p-6 flex justify-center mt-12">
          <div className="text-center max-w-6xl relative">
            <button
              onClick={handleBack}
              className="absolute top-6 -left-96 mt-2 ml-4"
            >
              <IoArrowBack size={24} color="#9dbeb7" />
            </button>

            <h1 className="font-semibold text-3xl mb-4 tracking-wider">
              Emergency Handling
            </h1>

            <p className="text-green-600">
              Some Essential Actions for Pet Emergencies
            </p>
          </div>
        </div>
        <div className="img-holder relative w-full flex justify-center items-center">
          <img
            src={seizurePet}
            alt="Choking Pet"
            className="w-5/6 h-80 object-cover rounded-md"
            style={{ objectFit: "cover" }}
          />
          <div className="overlay absolute inset-0 flex justify-center items-center -left-2/4">
            <div className="text-content bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg w-96 h-52 flex flex-col justify-center">
              <h2 className="text-white text-xl font-semibold mb-2">
                How to handle
              </h2>
              <h1 className="text-green-500 text-3xl font-bold">
                PET SEIZURES?
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F5CC] p-6 rounded-lg shadow-md mt-6 w-4/5 mx-auto relative flex flex-col items-center mb-20">
          <FaPaw className="absolute top-4 right-4 text-green-500 w-12 h-12" />{" "}
          <h2 className="text-xl font-bold mb-4">
            STEPS TO HANDLE PET SEIZURE:
          </h2>
          <ul className="list-disc list-inside text-left">
            {stepsToHandleChokingPets.map((step) => (
              <li key={step.id} className="mb-2">
                <span className="font-semibold">{step.title}: </span>
                {step.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center flex-col items-center h-4/5 mb-28">
          <h1 className="font-bold text-4xl mb-10 tracking-wide">
            Visual Guide
          </h1>
          <img src={dogSeizureGuide} alt="Choking Guide" width={850} />
          <img src={catSeizureGuide} alt="Choking Guide" width={850} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-20">
        <h1 className="font-medium tracking-wider text-2xl">
          Want to know more?
        </h1>
        <div className="flex">
          <div
            className="bg-[#F6F8F9] backdrop-blur-[24px] rounded-lg p-6 mt-10 max-w-4xl shadow-md 
      gap-10 flex"
          >
            <h1 className="font-bold text-base">Visit:</h1>
            <div className="flex flex-col">
              <a
                href="https://www.pdsa.org.uk/pet-help-and-advice/pet-health-hub/other-veterinary-advice/first-aid-for-fitsseizures-in-pets"
                className="underline text-blue-600 font-medium text-lg"
              >
                https://www.pdsa.org.uk/pet-help-and-advice/pet-health-hub/other-veterinary-advice/first-aid-for-fitsseizures-in-pets
              </a>
              <h2 className="text-center text-green-500">
                {" "}
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
