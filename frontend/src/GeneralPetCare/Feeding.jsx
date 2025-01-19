//responsive

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack, IoFilterSharp } from "react-icons/io5";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import dogScheduled from "../GeneralPetCare/images/Dogs/dogScheduled.jpg";
import dogPortion from "../GeneralPetCare/images/Dogs/dogPortion.jpg";
import dogBalanced from "../GeneralPetCare/images/Dogs/dogBalanced.jpg";
import dogTreats from "../GeneralPetCare/images/Dogs/dogTreats.jpg";
import dogWater from "../GeneralPetCare/images/Dogs/dogWater.jpg";
import catSmallMeals from "../GeneralPetCare/images/Cats/catSmallMeals.png";
import catHighProtein from "../GeneralPetCare/images/Cats/catHighProtein.jpg";
import catWetFood from "../GeneralPetCare/images/Cats/catWetFood.jpg";
import catMonitor from "../GeneralPetCare/images/Cats/catMonitor.jpg";
import catWater from "../GeneralPetCare/images/Cats/catWater.jpg";
const Feeding = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("Dogs");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleBack = () => {
    navigate(-1);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <div className="emergency-page p-6 flex justify-center mt-12">
          <div className="text-center max-w-6xl relative">
            <button
              onClick={handleBack}
              className="absolute -top-8 -left-96 mt-2"
            >
              <IoArrowBack size={24} color="#9dbeb7" />
            </button>

            <h1 className="font-semibold text-3xl mb-4 tracking-wider">
              General Pet Care
            </h1>

            <p className="text-green-600">
              Essential Guidelines for Keeping Your Pets Safe and Healthy
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={toggleDropdown}
            className="px-6 py-2 font-semibold text-white rounded-lg bg-green-600 flex items-center"
          >
            <IoFilterSharp size={20} className="mr-2" />
            {filter}
          </button>

          {isDropdownOpen && (
            <div className="absolute mt-2 bg-white shadow-lg rounded-lg">
              <button
                onClick={() => {
                  setFilter("Dogs");
                  setIsDropdownOpen(false);
                }}
                className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-200"
              >
                Dogs
              </button>
              <button
                onClick={() => {
                  setFilter("Cats");
                  setIsDropdownOpen(false);
                }}
                className="block px-4 py-2 w-full text-left text-gray-700 hover:bg-gray-200"
              >
                Cats
              </button>
            </div>
          )}
        </div>

        {/* Dog Content */}
        {filter == "Dogs" && (
          <>
            <div className="flex flex-col px-6 sm:px-8 lg:px-24 pb-6 gap-6">
              <h1 className="font-bold text-3xl">Feeding Guidelines:</h1>
              <h2 className="font-semibold text-2xl">{filter}:</h2>
              <p className="font-normal text-xl tracking-wide">
                Proper nutrition is key to maintaining your dog’s health,
                energy, and overall quality of life. Feeding routines and diet
                composition should be tailored to their age, breed, and activity
                level.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center bg-customGray rounded-lg w-11/12 sm:w-4/5 mx-auto mb-10">
              <div className="flex-grow p-4 sm:p-10">
                <h2 className="text-xl font-bold mb-2 text-customWhite">
                  Scheduled Meals
                </h2>
                <p className="text-customWhite">
                  Establish a regular feeding schedule by offering meals at the
                  same time each day. This helps create structure and can
                  prevent digestive issues like bloating.
                </p>
              </div>
              <img
                src={dogScheduled}
                alt="Dog Schedules Meals"
                className="w-full sm:w-1/3 h-auto rounded-lg object-cover mb-4 sm:mb-0"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center bg-customGrey rounded-lg w-11/12 sm:w-4/5 mx-auto mb-10">
              <img
                src={dogPortion}
                alt="Dog Portion"
                className="w-full sm:w-1/3 h-auto rounded-lg object-cover mb-4 sm:mb-0"
              />
              <div className="flex-grow p-4 sm:p-10">
                <h2 className="text-xl font-bold mb-2 text-customWhite">
                  Portion Control
                </h2>
                <p className="text-customWhite">
                  Measure out portion sizes according to your dog’s weight, age,
                  and activity level. Overfeeding can lead to obesity, so it’s
                  important to follow feeding guidelines provided by your
                  veterinarian.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center bg-customGray rounded-lg w-11/12 sm:w-4/5 mx-auto mb-10">
              <div className="flex-grow p-4 sm:p-10">
                <h2 className="text-xl font-bold mb-2 text-customWhite">
                  Balanced Diet
                </h2>
                <p className="text-customWhite">
                  Provide a balanced diet with the correct ratio of protein,
                  fats, and carbohydrates. Dogs need a variety of nutrients for
                  strong muscles, healthy skin, and a shiny coat. Consult your
                  vet for advice on the best food for your dog’s specific needs.
                </p>
              </div>
              <img
                src={dogBalanced}
                alt="Dog Balanced Eating"
                className="w-full sm:w-1/3 h-auto rounded-lg object-cover mb-4 sm:mb-0"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center bg-customGray rounded-lg w-11/12 sm:w-4/5 mx-auto mb-10">
              <img
                src={dogWater}
                alt="Dog Fresh Water"
                className="w-full sm:w-1/3 h-auto rounded-lg object-cover mb-4 sm:mb-0"
              />
              <div className="flex-grow p-4 sm:p-10">
                <h2 className="text-xl font-bold mb-2 text-customWhite">
                  Fresh Water
                </h2>
                <p className="text-customWhite">
                  Always ensure your dog has access to fresh water throughout
                  the day, especially after exercise. Proper hydration is
                  essential for their overall health.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center bg-customGray rounded-lg w-11/12 sm:w-4/5 mx-auto mb-10">
              <div className="flex-grow p-4 sm:p-10">
                <h2 className="text-xl font-bold mb-2 text-customWhite">
                  Healthy Treats
                </h2>
                <p className="text-customWhite">
                  Treats are useful for training but should be given in
                  moderation. Opt for low-fat, low-sugar options like fruits
                  (e.g., apple slices) or vet-approved treats to maintain a
                  healthy diet.
                </p>
              </div>
              <img
                src={dogTreats}
                alt="Dog Treats"
                className="w-full sm:w-1/3 h-auto rounded-lg object-cover mb-4 sm:mb-0"
              />
            </div>
          </>
        )}

        {/* Cats */}
        <div className="flex flex-col px-6 sm:px-8 lg:px-24 pb-6 gap-6">
          <h1 className="font-bold text-3xl">Feeding Guidelines:</h1>
          <h2 className="font-semibold text-2xl">{filter}:</h2>
          <p className="font-normal text-xl tracking-wide">
            Cats are obligate carnivores, meaning their diet should be rich in
            animal-based proteins. Proper feeding habits ensure they receive the
            necessary nutrients for a long, healthy life.
          </p>
        </div>
        {filter == "Cats" && (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-center bg-customGray rounded-lg w-11/12 sm:w-4/5 mx-auto mb-10">
              <div className="flex-grow p-4 sm:p-10">
                <h2 className="text-xl font-bold mb-2 text-customWhite">
                  Multiple Small Meals
                </h2>
                <p className="text-customWhite">
                  Unlike dogs, cats prefer to eat smaller meals multiple times
                  throughout the day. Offering 3-4 small meals a day helps mimic
                  their natural hunting and eating patterns
                </p>
              </div>
              <img
                src={catSmallMeals}
                alt="Cat Small Meals"
                className="w-full sm:w-1/3 h-auto rounded-lg object-cover mb-4 sm:mb-0"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center bg-customGrey rounded-lg w-11/12 sm:w-4/5 mx-auto mb-10">
              <img
                src={catHighProtein}
                alt="Cat High Protein"
                className="w-full sm:w-1/3 h-auto rounded-lg object-cover mb-4 sm:mb-0"
              />
              <div className="flex-grow p-4 sm:p-10">
                <h2 className="text-xl font-bold mb-2 text-customWhite">
                  High Protein Diet
                </h2>
                <p className="text-customWhite">
                  Choose high-quality cat food that is rich in animal-based
                  proteins. Cats thrive on diets that include meats like
                  chicken, turkey, or fish, which provide essential amino acids
                  for muscle maintenance
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center bg-customGray rounded-lg w-11/12 sm:w-4/5 mx-auto mb-10">
              <div className="flex-grow p-4 sm:p-10">
                <h2 className="text-xl font-bold mb-2 text-customWhite">
                  Wet Food
                </h2>
                <p className="text-customWhite">
                  Incorporate wet food into your cat’s diet to increase their
                  hydration levels. Cats often do not drink enough water on
                  their own, and wet food can help compensate for this.
                </p>
              </div>
              <img
                src={catWetFood}
                alt="Chase Wet Food"
                className="w-full sm:w-1/3 h-auto rounded-lg object-cover mb-4 sm:mb-0"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center bg-customGray rounded-lg w-11/12 sm:w-4/5 mx-auto mb-10">
              <img
                src={catMonitor}
                alt="Cat Monitor Weight"
                className="w-full sm:w-1/3 h-auto rounded-lg object-cover mb-4 sm:mb-0"
              />
              <div className="flex-grow p-4 sm:p-10">
                <h2 className="text-xl font-bold mb-2 text-customWhite">
                  Monitor Weight
                </h2>
                <p className="text-customWhite">
                  Regularly assess your cat’s weight and adjust portion sizes
                  based on their activity level and age. Overfeeding can lead to
                  obesity, which is a common issue in house cats.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center bg-customGray rounded-lg w-11/12 sm:w-4/5 mx-auto mb-40">
              <div className="flex-grow p-4 sm:p-10">
                <h2 className="text-xl font-bold mb-2 text-customWhite">
                  Fresh Water
                </h2>
                <p className="text-customWhite">
                  Keep a constant supply of fresh water available. Consider
                  using a pet fountain, as many cats prefer running water and
                  are more likely to drink from it.
                </p>
              </div>
              <img
                src={catWater}
                alt="Cat Fresh Water"
                className="w-full sm:w-1/3 h-auto rounded-lg object-cover mb-4 sm:mb-0"
              />
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Feeding;
