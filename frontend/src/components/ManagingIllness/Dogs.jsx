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
      <div className="min-h-screen">
        <div className="emergency-page p-6 flex justify-center mt-12">
          <div className="text-center max-w-6xl relative">
          <button
              onClick={handleBack}
              className="absolute -top-8 left-4 mt-2"
            >
              <IoArrowBack size={24} color="#9dbeb7" />
            </button>

            <h1 className="font-semibold text-3xl mb-4 tracking-wider">
              Recognizing and Managing Illness
            </h1>

            <p className="text-green-600">
              Early Detection and Care Tips to Keep Your Pets Healthy
            </p>
          </div>
        </div>

        <div className="flex flex-col m-6 sm:m-12 lg:m-24">
          <h2 className="font-semibold text-4xl uppercase">Dogs</h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-4/5 mx-auto mb-10">
          <img
            src={Kennel}
            alt="Kennel"
            className="w-full sm:w-1/3 h-auto object-cover mb-4 sm:mb-0"
          />
          <div className="flex-grow sm:pl-10">
            <h2 className="text-3xl font-bold mb-2 text-green-500">
              Kennel Cough:
            </h2>
            <p className="text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Symptoms:</span> Persistent
              cough, runny nose, sneezing, lethargy, loss of appetite.
            </p>
            <p className="text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Management:</span> Keep your
              pet hydrated, minimize physical exertion, and consult a vet if
              symptoms persist. Isolation from other dogs is important to
              prevent the spread.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-4/5 mx-auto mb-10">
          <img
            src={HeartWorm}
            alt="HeartWorm"
            className="w-full sm:w-1/3 h-auto object-cover mb-4 sm:mb-0"
          />
          <div className="flex-grow sm:pl-10">
            <h2 className="text-3xl font-bold mb-2 text-green-500">
              Heartworm Disease:
            </h2>
            <p className="text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Symptoms:</span> Persistent
              cough, fatigue, decreased appetite, weight loss, swollen belly.
            </p>
            <p className="text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Management:</span> Prevention
              through monthly heartworm medication, and consult a vet
              immediately if symptoms appear. Treatment is available but can be
              costly and intensive.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-4/5 mx-auto mb-10">
          <img
            src={Parvo}
            alt="Parvo"
            className="w-full sm:w-1/3 h-auto object-cover mb-4 sm:mb-0"
          />
          <div className="flex-grow sm:pl-10">
            <h2 className="text-3xl font-bold mb-2 text-green-500">
              Canine Parvovirus:
            </h2>
            <p className="text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Symptoms:</span> Severe
              vomiting, diarrhea (often bloody), fever, lethargy, loss of
              appetite.
            </p>
            <p className="text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Management:</span> Seek
              immediate veterinary care. Keep the dog hydrated and isolated from
              other dogs. Vaccination is key for prevention.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-4/5 mx-auto mb-10">
          <img
            src={Hip}
            alt="Hip Dysplasia"
            className="w-full sm:w-1/3 h-auto object-cover mb-4 sm:mb-0"
          />
          <div className="flex-grow sm:pl-10">
            <h2 className="text-3xl font-bold mb-2 text-green-500">
              Hip Dysplasia:
            </h2>
            <p className="text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Symptoms:</span> Limping,
              difficulty standing up, reluctance to run or jump, decreased
              activity.
            </p>
            <p className="text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Management:</span> Weight
              management, regular exercise, physical therapy, and consult a vet
              for possible surgical options or pain management.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:w-4/5 mx-auto mb-40">
          <img
            src={Ear}
            alt="Ear Infection"
            className="w-full sm:w-1/3 h-auto object-cover mb-4 sm:mb-0"
          />
          <div className="flex-grow sm:pl-10">
            <h2 className="text-3xl font-bold mb-2 text-green-500">
              Ear Infections:
            </h2>
            <p className="text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Symptoms:</span> Ear
              scratching, head shaking, discharge from the ear, unpleasant odor,
              redness or swelling.
            </p>
            <p className="text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Management:</span> Clean the
              ears with a vet-approved solution, administer prescribed
              medication, and consult a vet if symptoms persist.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Dogs;
