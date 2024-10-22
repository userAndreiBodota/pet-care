import React from "react";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import dogWalking from "../GeneralPetCare/images/Dogs/dogWalking.png";
import dogFetch from "../GeneralPetCare/images/Dogs/dogFetch.jpeg";
import dogAgility from "../GeneralPetCare/images/Dogs/dogAgility.jpeg";
import dogSwimming from "../GeneralPetCare/images/Dogs/dogSwimming.jpeg";
import dogPlayDate from "../GeneralPetCare/images/Dogs/dogPlayDate.jpg";
import catToys from "../GeneralPetCare/images/Cats/catToys.jpg";
import catClimbing from "../GeneralPetCare/images/Cats/catClimbing.jpeg";
import catChase from "../GeneralPetCare/images/Cats/catChase.jpg";
import catPuzzle from "../GeneralPetCare/images/Cats/catPuzzle.jpg";
import catExplore from "../GeneralPetCare/images/Cats/catExplore.jpg";
import Footer from "../components/Footer/Footer";

const Exercising = () => {
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
          <h1 className="font-bold text-3xl">Daily Exercise: </h1>
          <h2 className="font-semibold text-2xl">Dogs:</h2>
          <p className="font-normal text-xl tracking tracking-wide">
            Regular physical activity is crucial for dogs to maintain a healthy
            weight, reduce stress, and prevent boredom. Incorporating a variety
            of exercises ensures both their physical and mental stimulation.
          </p>
        </div>

        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Walking
            </h2>
            <p className="pl-10 text-customWhite">
              Take your dog on a brisk 30-minute walk around the neighborhood or
              local park. This helps maintain cardiovascular health and allows
              your dog to explore its surroundings, which is mentally
              stimulating.
            </p>
          </div>
          <img
            src={dogWalking}
            alt="Dog Walking"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-between items-center bg-customGrey rounded-lg w-4/5 mx-auto mb-10">
          <img
            src={dogFetch}
            alt="Dog Fetching"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Fetch
            </h2>
            <p className="pl-10 text-customWhite">
              Play a game of fetch using a ball or frisbee in your backyard,
              park, or open field. This activity is great for both physical
              exertion and interactive bonding time between you and your dog.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Agility Training
            </h2>
            <p className="pl-10 text-customWhite">
              Set up a simple agility course in your yard with jumps, tunnels,
              and obstacles. Not only does this offer a fun challenge, but it
              also improves your dog’s coordination and focus.
            </p>
          </div>
          <img
            src={dogAgility}
            alt="Dog Agility Training"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-between items-center bg-customGrey rounded-lg w-4/5 mx-auto mb-10">
          <img
            src={dogSwimming}
            alt="Dog Swimming"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Swimming
            </h2>
            <p className="pl-10 text-customWhite">
              If your dog enjoys water, take them for a swim at a dog-friendly
              beach or pool. Swimming is a low-impact exercise that’s easy on
              the joints and excellent for dogs of all ages, especially older
              dogs or those with joint problems.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Playdates
            </h2>
            <p className="pl-10 text-customWhite">
              Arrange playdates with other dogs to provide your dog with social
              interaction and exercise. Regular socialization helps reduce
              anxiety and behavioral issues.
            </p>
          </div>
          <img
            src={dogPlayDate}
            alt="Dog Play Date"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        {/*CATS */}
        <div className="flex flex-col m-24 gap-6">
          <h2 className="font-semibold text-2xl">Cats:</h2>
          <p className="font-normal text-xl tracking tracking-wide">
            While cats are generally more independent, they still require
            physical activity to stay healthy. Engaging them in daily play will
            help prevent obesity and behavioral issues.
          </p>
        </div>

        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Interactive Toys
            </h2>
            <p className="pl-10 text-customWhite">
              Use toys like feather wands, laser pointers, or motorized mice for
              daily play sessions. This mimics the natural hunting behavior and
              keeps them mentally sharp.
            </p>
          </div>
          <img
            src={catToys}
            alt="Cat Toys"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-between items-center bg-customGrey rounded-lg w-4/5 mx-auto mb-10">
          <img
            src={catClimbing}
            alt="Cat Climbing"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Climbing
            </h2>
            <p className="pl-10 text-customWhite">
              Install a cat tree or set up shelves for climbing and jumping.
              Cats enjoy elevated spaces where they can observe their
              surroundings. Vertical space also encourages physical activity as
              they leap and climb.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Chase Games
            </h2>
            <p className="pl-10 text-customWhite">
              Drag a string, ribbon, or toy across the floor for your cat to
              chase. This replicates the thrill of hunting and allows your cat
              to release pent-up energy.
            </p>
          </div>
          <img
            src={catChase}
            alt="Chase Games"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-between items-center bg-customGrey rounded-lg w-4/5 mx-auto mb-10">
          <img
            src={catPuzzle}
            alt="Cat Puzzle"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Puzzle Feeders
            </h2>
            <p className="pl-10 text-customWhite">
              Incorporate puzzle feeders or treat-dispensing toys during
              mealtime. These devices stimulate your cat’s mind and engage their
              problem-solving instincts, encouraging both mental and physical
              exercise.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-40">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Exploration
            </h2>
            <p className="pl-10 text-customWhite">
              If possible, allow your cat to explore a safe, enclosed outdoor
              space like a catio (cat patio). Fresh air and new scents offer
              mental stimulation while keeping them protected from potential
              dangers.
            </p>
          </div>
          <img
            src={catExplore}
            alt="Cat Explore"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Exercising;
