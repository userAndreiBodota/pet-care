import React from "react";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import dogBrushing from "../GeneralPetCare/images/Dogs/dogbrushing.jpeg";
import dogBathing from "../GeneralPetCare/images/Dogs/dogbathing.jpg";
import dogCleaning from "../GeneralPetCare/images/Dogs/dogcleaning.jpg";
import dogTrimming from "../GeneralPetCare/images/Dogs/dogtrimming.jpeg";
import dogDental from "../GeneralPetCare/images/Dogs/dogdental.jpeg";
import catBrushing from "../GeneralPetCare/images/Cats/catbrushing.jpeg";
import catBathing from "../GeneralPetCare/images/Cats/catbathing.jpg";
import catCleaning from "../GeneralPetCare/images/Cats/catcleaning.jpeg";
import catTrimming from "../GeneralPetCare/images/Cats/cattrimming.jpg";
import catDental from "../GeneralPetCare/images/Cats/catdental.jpg";
import Footer from "../components/Footer/Footer";

const Grooming = () => {
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
          <h1 className="font-bold text-3xl">Grooming: </h1>
          <h2 className="font-semibold text-2xl">Dogs:</h2>
          <p className="font-normal text-xl tracking tracking-wide">
            Grooming your dog regularly not only keeps them looking clean but
            also helps maintain their skin and coat health. Regular grooming
            prevents skin issues and can alert you to any early signs of health
            problems.
          </p>
        </div>

        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Brushing
            </h2>
            <p className="pl-10 text-customWhite">
              Brush your dog’s coat weekly to remove loose fur and prevent
              tangles, especially in breeds with long or dense coats. Regular
              brushing helps distribute natural oils, keeping the coat shiny and
              healthy.
            </p>
          </div>
          <img
            src={dogBrushing}
            alt="Dog Brushing"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-between items-center bg-customGrey rounded-lg w-4/5 mx-auto mb-10">
          <img
            src={dogBathing}
            alt="Dog Bathing"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Bathing
            </h2>
            <p className="pl-10 text-customWhite">
              Bathe your dog every 1-3 months or as needed, using a gentle
              dog-specific shampoo. Bathing too frequently can strip their coat
              of natural oils, leading to dry skin.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Ear Cleaning
            </h2>
            <p className="pl-10 text-customWhite">
              Clean your dog’s ears monthly with a vet-approved cleaner to
              prevent wax build-up and infections. Regular ear checks help
              detect early signs of ear mites or infections.
            </p>
          </div>
          <img
            src={dogCleaning}
            alt="Dog Ear Cleaning"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-between items-center bg-customGrey rounded-lg w-4/5 mx-auto mb-10">
          <img
            src={dogTrimming}
            alt="Dog Trimming"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Nail Trimming
            </h2>
            <p className="pl-10 text-customWhite">
              Trim your dog’s nails every 3-4 weeks to prevent overgrowth and
              discomfort. Long nails can cause pain or difficulty walking.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Dental Care
            </h2>
            <p className="pl-10 text-customWhite">
              Brush your dog’s teeth several times a week with a dog-specific
              toothpaste. Dental chews or toys can help maintain oral hygiene
              between brushing sessions, preventing tartar build-up and gum
              disease.
            </p>
          </div>
          <img
            src={dogDental}
            alt="Dog Dental"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        {/*CATS */}
        <div className="flex flex-col m-24 gap-6">
          <h2 className="font-semibold text-2xl">Cats:</h2>
          <p className="font-normal text-xl tracking tracking-wide">
            Cats are generally good at grooming themselves, but they still
            require regular grooming assistance to stay in top condition.
          </p>
        </div>

        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Brushing
            </h2>
            <p className="pl-10 text-customWhite">
              For short-haired cats, brush them weekly, while long-haired cats
              need daily brushing to prevent matting and reduce shedding.
              Regular brushing helps reduce hairballs and keeps their coat
              smooth.
            </p>
          </div>
          <img
            src={catBrushing}
            alt="Cat Brushing"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-between items-center bg-customGrey rounded-lg w-4/5 mx-auto mb-10">
          <img
            src={catTrimming}
            alt="Cat Trimming"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Nail Trimming
            </h2>
            <p className="pl-10 text-customWhite">
              Trim your cat’s nails every 2-4 weeks. Keeping their nails at a
              manageable length prevents injury to themselves or damage to your
              furniture.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-10">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Ear Cleaning
            </h2>
            <p className="pl-10 text-customWhite">
              Check and clean your cat’s ears monthly using a cotton ball and a
              vet-approved cleaner. Cleaning helps prevent infections caused by
              wax build-up.
            </p>
          </div>
          <img
            src={catCleaning}
            alt="Cat Cleaning"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-between items-center bg-customGrey rounded-lg w-4/5 mx-auto mb-10">
          <img
            src={catDental}
            alt="Cat Dental"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Dental Care
            </h2>
            <p className="pl-10 text-customWhite">
              Brush your cat’s teeth regularly using a cat-specific toothbrush
              and toothpaste. Providing dental treats or chew toys can also
              promote oral health.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-customGray rounded-lg w-4/5 mx-auto mb-40">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2 pl-10 text-customWhite">
              Bathing
            </h2>
            <p className="pl-10 text-customWhite">
              Though most cats are good at keeping themselves clean, occasional
              baths may be necessary if they get particularly dirty. Always use
              a shampoo specifically formulated for cats to avoid skin
              irritation.
            </p>
          </div>
          <img
            src={catBathing}
            alt="Cat Bathing"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Grooming;
