//responsiveness

import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { IoArrowBack } from "react-icons/io5";
import URI from "../ManagingIllness/images/uri.jpeg";
import FLUTD from "../ManagingIllness/images/flutd.jpg";
import Diabetes from "../ManagingIllness/images/diabetes.jpg";
import Hyperthyrodism from "../ManagingIllness/images/hyperthyrodism.jpeg";
import Distemper from "../ManagingIllness/images/distemper.jpeg";
import Footer from "../Footer/Footer";

const Cats = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="emergency-page p-6 flex justify-center mt-12">
          <div className="text-center max-w-6xl relative">
            <button
              onClick={handleBack}
              className="absolute -top-8 -left-96 mt-2 transform hover:scale-110 transition-all duration-300"
            >
              <IoArrowBack size={24} color="#9dbeb7" />
            </button>

            <h1 className="font-semibold text-3xl mb-4 tracking-wider text-gray-800 transition-all duration-500 ease-in-out">
              Recognizing and Managing Illness
            </h1>

            <p className="text-green-600 text-lg tracking-wide">
              Early Detection and Care Tips to Keep Your Pets Healthy
            </p>
          </div>
        </div>

        <div className="flex flex-col m-6 sm:m-12 lg:m-24">
          <h2 className="font-bold text-4xl uppercase text-left text-green-700 tracking-wider">
            Cats
          </h2>
        </div>

        {/* Disease Cards with Background Colors and Hover Effect */}
        {[ 
          {
            image: URI,
            name: "Feline Upper Respiratory Infection (URI)",
            symptoms: "Sneezing, runny nose, watery eyes, coughing, fever, lethargy.",
            management: "Keep your cat in a warm, humid environment, ensure hydration, and consult a vet for possible antibiotics or antiviral medications.",
            bgColor: "bg-customGray"
          },
          {
            image: FLUTD,
            name: "Feline Lower Urinary Tract Disease (FLUTD)",
            symptoms: "Straining to urinate, frequent urination, blood in urine, crying out while urinating, licking the genital area.",
            management: "Increase water intake, maintain a stress-free environment, and consult a vet for dietary adjustments or medication. In severe cases, surgery may be required.",
            bgColor: "bg-customGrey"
          },
          {
            image: Diabetes,
            name: "Feline Diabetes",
            symptoms: "Increased thirst, frequent urination, weight loss, increased appetite, lethargy.",
            management: "Insulin injections as prescribed by a vet, dietary management, and regular blood glucose monitoring.",
            bgColor: "bg-customGray"
          },
          {
            image: Hyperthyrodism,
            name: "Hyperthyroidism",
            symptoms: "Weight loss despite increased appetite, hyperactivity, increased thirst and urination, vomiting, diarrhea.",
            management: "Medication to manage thyroid levels, radioactive iodine treatment, or surgery. Regular vet check-ups are crucial.",
            bgColor: "bg-customGrey"
          },
          {
            image: Distemper,
            name: "Feline Panleukopenia (Feline Distemper)",
            symptoms: "Severe vomiting, diarrhea, fever, loss of appetite, lethargy, dehydration.",
            management: "Immediate veterinary care is essential. Treatment focuses on supportive care, such as fluids and anti-nausea medications. Vaccination is crucial for prevention.",
            bgColor: "bg-customGray"
          }
        ].map((disease, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row justify-between items-center w-full sm:w-4/5 mx-auto mb-12 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-200 rounded-2xl p-4 sm:p-6 ${disease.bgColor}`}
          >
            <img
              src={disease.image}
              alt={disease.name}
              className="w-full sm:w-1/3 h-auto object-cover mb-4 sm:mb-0 rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-110"
            />
            <div className="flex-grow sm:pl-10 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-2 text-white">
                {disease.name}:
              </h2>
              <p className="text-white block text-lg tracking-tight">
                <span className="font-bold text-xl">Symptoms:</span> {disease.symptoms}
              </p>
              <p className="text-white block text-lg tracking-tight">
                <span className="font-bold text-xl">Management:</span> {disease.management}
              </p>
            </div>
          </div>
        ))}

        <Footer />
      </div>
    </>
  );
};

export default Cats;

