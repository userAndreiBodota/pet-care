import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { IoArrowBack } from "react-icons/io5";
import { FaPaw } from "react-icons/fa";
import eyeInjuryPet from "../Emergency/images/peteyeinjuries.jpg";
import Footer from "../Footer/Footer";
import petEyeGuide from "../EmergencyHandling/image/peteyeguide.png";
const stepsToHandleChokingPets = [
  {
    id: 1,
    title: "Assess the Injury",
    description:
      "Look for signs such as squinting, redness, tearing, swelling, or visible trauma to the eye.",
  },
  {
    id: 2,
    title: "Prevent Rubbing",
    description:
      "Stop your pet from scratching or rubbing the eye, as this can worsen the injury.",
  },
  {
    id: 3,
    title: "Flush the Eye",
    description:
      "If there’s debris or a foreign object, gently rinse the eye with sterile saline solution or clean water. Do not use eye drops meant for humans.",
  },
  {
    id: 4,
    title: "Avoid Touching the Eye",
    description:
      "Do not try to remove anything stuck in the eye with your hands or tweezers.",
  },
  {
    id: 5,
    title: "Protect the Eye",
    description:
      "Small Pets: Use your fingers to create a 'C' shape around their abdomen and thrust inward and upward. Large Pets: Place a fist just below the rib cage and thrust inward and upward.",
  },
  {
    id: 6,
    title: "Check the Mouth",
    description:
      "If possible, use an Elizabethan collar (cone) to prevent your pet from further aggravating the injury.",
  },
  {
    id: 7,
    title: "Seek Veterinary Care",
    description:
      "Eye injuries can worsen quickly, so take your pet to the veterinarian for a proper diagnosis and treatment.",
  },
  {
    id: 8,
    title: "Monitor for Symptoms",
    description:
      "Keep an eye on signs like excessive blinking, cloudiness, or discharge, which may indicate the injury is serious or worsening.",
  },
];
const EyeInjury = () => {
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
            src={eyeInjuryPet}
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
                PET EYE INJURIES?
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F5CC] p-6 rounded-lg shadow-md mt-6 w-4/5 mx-auto relative flex flex-col items-center mb-20">
          <FaPaw className="absolute top-4 right-4 text-green-500 w-12 h-12" />{" "}
          <h2 className="text-xl font-bold mb-4">
            STEPS TO HANDLE PET EYE INJURIES:
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
          <img src={petEyeGuide} alt="Choking Guide" width={850} />
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
                href="https://www.vravet.com/site/blog/2022/05/16/eye-injuries-in-pets-causes-symptoms-and-treatment
"
                className="underline text-blue-600 font-medium text-lg"
              >
                https://www.vravet.com/site/blog/2022/05/16/eye-injuries-in-pets-causes-symptoms-and-treatment
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

export default EyeInjury;
