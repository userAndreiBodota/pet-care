import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { IoArrowBack } from "react-icons/io5";
import { FaPaw } from "react-icons/fa";
import brokenBones from "../Emergency/images/petbrokenbones.jpg";
import Footer from "../Footer/Footer";
import petBrokenBonesCauses from "../EmergencyHandling/image/brokenbonescauses.png";

const stepsToHandleChokingPets = [
  {
    id: 1,
    title: "Assess the Situation",
    description:
      "Look for signs of a fracture, such as limping, swelling, pain, or inability to use the affected limb. Avoid moving your pet too much, as this may worsen the injury.",
  },
  {
    id: 2,
    title: "Limit Movement",
    description:
      "Keep your pet as still as possible to prevent further injury. If necessary, gently restrict their movement using a blanket or by confining them.",
  },
  {
    id: 3,
    title: "Control Pain",
    description:
      "Do not give any human medications. Contact your veterinarian for advice on managing your pet's pain.",
  },
  {
    id: 4,
    title: "Seek Veterinary Care",
    description:
      "Take your pet to the veterinarian as soon as possible. They will conduct a physical examination and may perform X-rays to confirm the fracture.",
  },
  {
    id: 5,
    title: "Transport Carefully",
    description:
      "If you need to transport your pet, do so gently. Use a stretcher or a sturdy blanket to carry them if they are unable to walk.",
  },
  {
    id: 6,
    title: "Follow Veterinary Instructions",
    description:
      "After diagnosis, follow the vet’s recommendations for treatment, which may include rest, splinting, or surgery.",
  },
  {
    id: 7,
    title: "Monitor Recovery",
    description:
      "Keep an eye on your pet during recovery, watching for any signs of pain or discomfort, and follow up with your vet as directed.",
  },
];

const BrokenBones = () => {
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

        {/* Centered image section */}
        <div className="relative w-full flex justify-center items-center mt-4 mb-8">
          <img
            src={brokenBones}
            alt="Broken Bones Pet"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-80 object-cover rounded-md shadow-lg"
          />
          <div className="overlay absolute inset-0 flex justify-center items-center">
            <div className="text-content bg-white bg-opacity-40 backdrop-blur-sm p-4 sm:p-6 rounded-lg w-11/12 sm:w-96 h-52 flex flex-col justify-center">
              <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">
                How to handle How to handle
              </h2>
              <h1 className="text-customGray text-3xl font-bold">
                PET BROKEN BONES?
              </h1>
            </div>
          </div>
        </div>

        {/* Steps section */}
        <div className="bg-[#F5F5F5CC] p-6 rounded-lg shadow-md mt-6 w-4/5 mx-auto relative flex flex-col items-center mb-20">
          <FaPaw className="absolute top-4 right-4 text-green-800 w-12 h-12" />
          <h2 className="text-xl font-bold mb-4 text-center">
            STEPS TO HANDLE PET BROKEN BONES:
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

        {/* Causes image section */}
        <div className="flex flex-col items-center mt-12 mb-20">
          <h1 className="font-bold text-3xl sm:text-4xl mb-6 text-gray-800">
            Causes of Broken Bones
          </h1>
          <img
            src={petBrokenBonesCauses}
            alt="Causes of Broken Bones"
            className="w-full sm:w-3/4 lg:w-1/2 rounded-lg shadow-lg"
          />
        </div>

        {/* Additional info section */}
        <div className="flex flex-col items-center justify-center min-h-[20vh] bg-white mb-20">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-4xl">
            <h1 className="font-medium text-2xl mb-4 text-gray-800">
              Want to know more?
            </h1>
            <div className="w-full flex flex-col sm:flex-row justify-between items-center">
              <h1 className="font-bold text-base mr-2">Visit:</h1>
              <a
                href="https://thecovevets.com/blog/tough-break-how-to-handle-your-pets-broken-bone/"
                className="underline text-blue-600 font-medium text-lg mt-2 sm:mt-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://thecovevets.com/blog/tough-break-how-to-handle-your-pets-broken-bone/
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

export default BrokenBones;
