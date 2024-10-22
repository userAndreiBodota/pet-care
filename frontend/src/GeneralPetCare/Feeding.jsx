import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
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
              General Pet Care
            </h1>

            <p className="text-green-600">
              Essential Guidelines for Keeping Your Pets Safe and Healthy
            </p>
          </div>
        </div>

        <div className="flex flex-col m-24 gap-6">
          <h1 className="font-bold text-3xl">Feeding Guidelines:</h1>
          <h2 className="font-semibold text-2xl">Dogs:</h2>
          <p className="font-normal text-xl tracking tracking-wide">
            Proper nutrition is key to maintaining your dog’s health, energy,
            and overall quality of life. Feeding routines and diet composition
            should be tailored to their age, breed, and activity level.
          </p>
        </div>

        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Scheduled Meals
            </h2>
            <p className="pl-10 text-customWhite">
              Establish a regular feeding schedule by offering meals at the same
              time each day. This helps create structure and can prevent
              digestive issues like bloating.
            </p>
          </div>
          <img
            src={dogScheduled}
            alt="Dog Schedules Meals"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-between items-center bg-customGrey rounded-lg w-4/5 mx-auto mb-10">
          <img
            src={dogPortion}
            alt="Dog Portion"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Portion Control
            </h2>
            <p className="pl-10 text-customWhite">
              Measure out portion sizes according to your dog’s weight, age, and
              activity level. Overfeeding can lead to obesity, so it’s important
              to follow feeding guidelines provided by your veterinarian.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Balanced Diet
            </h2>
            <p className="pl-10 text-customWhite">
              Provide a balanced diet with the correct ratio of protein, fats,
              and carbohydrates. Dogs need a variety of nutrients for strong
              muscles, healthy skin, and a shiny coat. Consult your vet for
              advice on the best food for your dog’s specific needs.
            </p>
          </div>
          <img
            src={dogBalanced}
            alt="Dog Balanced Eating"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-between items-center bg-customGrey rounded-lg w-4/5 mx-auto mb-10">
          <img
            src={dogWater}
            alt="Dog Fresh Water"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Fresh Water
            </h2>
            <p className="pl-10 text-customWhite">
              Always ensure your dog has access to fresh water throughout the
              day, especially after exercise. Proper hydration is essential for
              their overall health.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Healthy Treats
            </h2>
            <p className="pl-10 text-customWhite">
              Treats are useful for training but should be given in moderation.
              Opt for low-fat, low-sugar options like fruits (e.g., apple
              slices) or vet-approved treats to maintain a healthy diet.
            </p>
          </div>
          <img
            src={dogTreats}
            alt="Dog Treats"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        {/*CATS */}
        <div className="flex flex-col m-24 gap-6">
          <h2 className="font-semibold text-2xl">Cats:</h2>
          <p className="font-normal text-xl tracking tracking-wide">
            Cats are obligate carnivores, meaning their diet should be rich in
            animal-based proteins. Proper feeding habits ensure they receive the
            necessary nutrients for a long, healthy life.
          </p>
        </div>

        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Multiple Small Meals
            </h2>
            <p className="pl-10 text-customWhite">
              Unlike dogs, cats prefer to eat smaller meals multiple times
              throughout the day. Offering 3-4 small meals a day helps mimic
              their natural hunting and eating patterns
            </p>
          </div>
          <img
            src={catSmallMeals}
            alt="Cat Small Meals"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-between items-center bg-customGrey rounded-lg w-4/5 mx-auto mb-10">
          <img
            src={catHighProtein}
            alt="Cat High Protein"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              High Protein Diet
            </h2>
            <p className="pl-10 text-customWhite">
              Choose high-quality cat food that is rich in animal-based
              proteins. Cats thrive on diets that include meats like chicken,
              turkey, or fish, which provide essential amino acids for muscle
              maintenance
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Wet Food
            </h2>
            <p className="pl-10 text-customWhite">
              Incorporate wet food into your cat’s diet to increase their
              hydration levels. Cats often do not drink enough water on their
              own, and wet food can help compensate for this.
            </p>
          </div>
          <img
            src={catWetFood}
            alt="Chase Wet Food"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-between items-center bg-customGrey rounded-lg w-4/5 mx-auto mb-10">
          <img
            src={catMonitor}
            alt="Cat Monitor Weight"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Monitor Weight
            </h2>
            <p className="pl-10 text-customWhite">
              Regularly assess your cat’s weight and adjust portion sizes based
              on their activity level and age. Overfeeding can lead to obesity,
              which is a common issue in house cats.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-40">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Fresh Water
            </h2>
            <p className="pl-10 text-customWhite">
              Keep a constant supply of fresh water available. Consider using a
              pet fountain, as many cats prefer running water and are more
              likely to drink from it.
            </p>
          </div>
          <img
            src={catWater}
            alt="Cat Fresh Water"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feeding;
