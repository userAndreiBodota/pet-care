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
      <div className="min-h-screen">
        <div className="emergency-page p-6 flex justify-center mt-12">
          <div className="text-center max-w-6xl relative">
            <button
              onClick={handleBack}
              className="absolute top-6 -left-80 mt-2 "
            >
              <IoArrowBack size={24} color="#00000" />
            </button>

            <h1 className="font-semibold text-3xl mb-4 tracking-wider">
              Recognizing and Managing Illness
            </h1>

            <p className="text-green-600">
              Early Detection and Care Tips to Keep Your Pets Healthy
            </p>
          </div>
        </div>

        <div className="flex flex-col m-24">
          <h2 className="font-semibold text-4xl uppercase">cats</h2>
        </div>

        <div className="flex justify-between items-center  w-4/5 mx-auto mb-10">
          <img src={URI} alt="URI" className="w-1/3 h-auto object-cover" />
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-2 pl-10 text-green-500">
              Feline Upper Respiratory Infection (URI):
            </h2>
            <p className="pl-10 text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Symptoms:</span> Sneezing,
              runny nose, watery eyes, coughing, fever, lethargy.
            </p>
            <p className="pl-10 text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Management:</span> Keep your
              cat in a warm, humid environment, ensure hydration, and consult a
              vet for possible antibiotics or antiviral medications.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center  w-4/5 mx-auto mb-10">
          <img src={FLUTD} alt="FLUTD" className="w-1/3 h-auto object-cover" />
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-2 pl-10 text-green-500">
              Feline Lower Urinary Tract Disease (FLUTD):
            </h2>
            <p className="pl-10 text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Symptoms:</span> Straining to
              urinate, frequent urination, blood in urine, crying out while
              urinating, licking the genital area.
            </p>
            <p className="pl-10 text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Management:</span> Increase
              water intake, maintain a stress-free environment, and consult a
              vet for dietary adjustments or medication. In severe cases,
              surgery may be required.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center  w-4/5 mx-auto mb-10">
          <img
            src={Diabetes}
            alt="Diabetes"
            className="w-1/3 h-auto object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-2 pl-10 text-green-500">
              Feline Diabetes:
            </h2>
            <p className="pl-10 text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Symptoms:</span> Increased
              thirst, frequent urination, weight loss, increased appetite,
              lethargy.
            </p>
            <p className="pl-10 text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Management:</span>Insulin
              injections as prescribed by a vet, dietary management, and regular
              blood glucose monitoring.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center  w-4/5 mx-auto mb-10">
          <img
            src={Hyperthyrodism}
            alt="Hyperthyroidism"
            className="w-1/3 h-auto object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-2 pl-10 text-green-500">
              Hyperthyroidism:
            </h2>
            <p className="pl-10 text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Symptoms:</span> Weight loss
              despite increased appetite, hyperactivity, increased thirst and
              urination, vomiting, diarrhea.
            </p>
            <p className="pl-10 text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Management:</span> Medication
              to manage thyroid levels, radioactive iodine treatment, or
              surgery. Regular vet check-ups are crucial.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center  w-4/5 mx-auto mb-40">
          <img
            src={Distemper}
            alt="Distemper"
            className="w-1/3 h-auto object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-2 pl-10 text-green-500">
              Feline Panleukopenia (Feline Distemper):
            </h2>
            <p className="pl-10 text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Symptoms:</span> Severe
              vomiting, diarrhea, fever, loss of appetite, lethargy,
              dehydration.
            </p>
            <p className="pl-10 text-black block text-lg tracking-tight">
              <span className="font-bold text-xl">Management:</span> Immediate
              veterinary care is essential. Treatment focuses on supportive
              care, such as fluids and anti-nausea medications. Vaccination is
              crucial for prevention.
            </p>
          </div>
        </div>
        {""}
        <Footer />
      </div>
    </>
  );
};

export default Cats;
