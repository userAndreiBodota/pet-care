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
            src={brokenBones}
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
                PET BROKEN BONES?
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F5F5CC] p-6 rounded-lg shadow-md mt-6 w-4/5 mx-auto relative flex flex-col items-center mb-20">
          <FaPaw className="absolute top-4 right-4 text-green-500 w-12 h-12" />{" "}
          <h2 className="text-xl font-bold mb-4">
            STEPS TO HANDLE PET BROKEN BONES:
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
            Causes of Broken Bones
          </h1>
          <img src={petBrokenBonesCauses} alt="Choking Guide" width={850} />
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
                href="https://thecovevets.com/blog/tough-break-how-to-handle-your-pets-broken-bone/"
                className="underline text-blue-600 font-medium text-lg"
              >
                https://thecovevets.com/blog/tough-break-how-to-handle-your-pets-broken-bone/
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

export default BrokenBones;
