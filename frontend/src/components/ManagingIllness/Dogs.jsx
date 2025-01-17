//responsive

import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { IoArrowBack } from "react-icons/io5";
import Kennel from "../ManagingIllness/images/kennel.jpeg";
import Parvo from "../ManagingIllness/images/parvo.jpeg";
import Hip from "../ManagingIllness/images/dysplasia.jpg";
import Ear from "../ManagingIllness/images/ear.jpg";
import HeartWorm from "../ManagingIllness/images/heartworm.jpeg";
import Footer from "../Footer/Footer";

const Dogs = () => {
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
            Dogs
          </h2>
        </div>

        {/* Disease Cards with Background Colors and Hover Effect */}
        {[ 
          {
            image: Kennel,
            name: "Kennel Cough",
            symptoms: "Persistent cough, runny nose, sneezing, lethargy, loss of appetite.",
            management: "Keep your pet hydrated, minimize physical exertion, and consult a vet if symptoms persist. Isolation from other dogs is important to prevent the spread.",
            bgColor: "bg-customGray"
          },
          {
            image: HeartWorm,
            name: "Heartworm Disease",
            symptoms: "Persistent cough, fatigue, decreased appetite, weight loss, swollen belly.",
            management: "Prevention through monthly heartworm medication, and consult a vet immediately if symptoms appear. Treatment is available but can be costly and intensive.",
            bgColor: "bg-customGrey"
          },
          {
            image: Parvo,
            name: "Canine Parvovirus",
            symptoms: "Severe vomiting, diarrhea (often bloody), fever, lethargy, loss of appetite.",
            management: "Seek immediate veterinary care. Keep the dog hydrated and isolated from other dogs. Vaccination is key for prevention.",
            bgColor: "bg-customGray"
          },
          {
            image: Hip,
            name: "Hip Dysplasia",
            symptoms: "Limping, difficulty standing up, reluctance to run or jump, decreased activity.",
            management: "Weight management, regular exercise, physical therapy, and consult a vet for possible surgical options or pain management.",
            bgColor: "bg-customGrey"
          },
          {
            image: Ear,
            name: "Ear Infections",
            symptoms: "Ear scratching, head shaking, discharge from the ear, unpleasant odor, redness or swelling.",
            management: "Clean the ears with a vet-approved solution, administer prescribed medication, and consult a vet if symptoms persist.",
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

export default Dogs;
