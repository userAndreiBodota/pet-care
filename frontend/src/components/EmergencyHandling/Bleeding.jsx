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
            src={petBleeding}
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
                PET BLEEDING?
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F5CC] p-6 rounded-lg shadow-md mt-6 w-4/5 mx-auto relative flex flex-col items-center mb-20">
          <FaPaw className="absolute top-4 right-4 text-green-500 w-12 h-12" />{" "}
          <h2 className="text-xl font-bold mb-4">
            STEPS TO HANDLE PET BLEEDING:
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
          <img src={petBleedingGuide} alt="Choking Guide" width={850} />
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
                href="https://veterinarypartner.vin.com/default.aspx?pid=19239&id=4951317"
                className="underline text-blue-600 font-medium text-lg"
              >
                https://veterinarypartner.vin.com/default.aspx?pid=19239&id=4951317
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

export default Bleeding;
