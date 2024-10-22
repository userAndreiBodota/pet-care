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
            src={petBurns}
            alt="Choking Pet"
            className="w-5/6 h-80 object-cover rounded-md"
            style={{ objectFit: "cover" }}
          />
          <div className="overlay absolute inset-0 flex justify-center items-center -left-2/4">
            <div className="text-content bg-white bg-opacity-20 backdrop-blur-sm p-6 rounded-lg w-96 h-52 flex flex-col justify-center">
              <h2 className="text-white text-xl font-semibold mb-2">
                How to handle
              </h2>
              <h1 className="text-green-500 text-3xl font-bold">PET BURNS?</h1>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F5CC] p-6 rounded-lg shadow-md mt-6 w-4/5 mx-auto relative flex flex-col items-center mb-20">
          <FaPaw className="absolute top-4 right-4 text-green-500 w-12 h-12" />{" "}
          <h2 className="text-xl font-bold mb-4">STEPS TO HANDLE PET BURNS:</h2>
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
            Heal Pet Wound
          </h1>
          <img src={petBurnGuide} alt="Choking Guide" width={850} />
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
                href="https://animalemergencycare.net/aecprevents/understanding-and-treating-burns-on-your-pet/"
                className="underline text-blue-600 font-medium text-lg"
              >
                https://animalemergencycare.net/aecprevents/understanding-and-treating-burns-on-your-pet/
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

export default Burns;
