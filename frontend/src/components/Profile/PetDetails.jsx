import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function PetDetails() {
  const { id } = useParams(); // Get the pet ID from the URL
  console.log("Pet ID from URL:", id); // Log the id to check

  const { pets, isLoading, error, getRegisteredPets } = useAuthStore(); // Get pets from store
  const [pet, setPet] = useState(null);

  useEffect(() => {
    if (pets.length === 0) {
      getRegisteredPets();
    }
  }, [getRegisteredPets, pets.length]);

  useEffect(() => {
    if (pets.length > 0 && id) {
      const foundPet = pets.find((pet) => pet._id.toString() === id.toString());
      if (foundPet) {
        setPet(foundPet);
      } else {
        console.log("Pet not found for id:", id);
      }
    }
  }, [pets, id]);

  const generatePDF = () => {
    const element = document.getElementById("pet-id-card"); // Get only the Pet ID card
    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [500, 300], // Adjust size to match the card
      });
      pdf.addImage(imgData, "PNG", 0, 0, 500, 300);
      pdf.save(`${pet.name}-PetID.pdf`); // Save as PetID.pdf
    });
  };

  if (isLoading) {
    return <p>Loading pet details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!pet) {
    return <p>Pet not found</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <motion.div
        id="pet-details-card"
        className="max-w-lg sm:max-w-xl w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Header */}
        <div className="flex items-center flex-col p-6 sm:p-8">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-gray-300"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold">{pet.name}</h1>
          <p className="text-xs sm:text-sm text-gray-500">
            {pet.type} | {pet.breed}
          </p>
        </div>

        {/* Details Section */}
        <div className="px-4 sm:px-8 py-4 border-t border-gray-200">
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Gender</span>
            <span className="text-gray-900">{pet.gender}</span>
          </div>

          <div className="flex justify-between py-1">
            <span className="text-gray-600">Weight</span>
            <span className="text-gray-900">{pet.weight} kg</span>
          </div>
        </div>

        {/* Important Dates */}
        <div className="px-4 sm:px-8 py-4 border-t border-gray-200">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-700">
            Important Dates
          </h3>
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Birthday</span>
            <span className="text-gray-900">
              {new Date(pet.birthday).toLocaleDateString()}
            </span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Age</span>
            <span className="text-gray-900">{pet.age} years old</span>
          </div>
        </div>

        {/* Fur Parent Section */}
        <div className="px-4 sm:px-8 py-4 border-t border-gray-200">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-700">
            Fur Parent
          </h3>
          <div className="flex items-center py-2">
            <div>
              <p className="text-gray-900 font-semibold">{pet.owner}</p>
            </div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
          Pet Identification
        </h1>

        <div className="max-w-3xl mx-auto flex justify-center">
          <div
            id="pet-id-card"
            className="bg-gray-700 text-white rounded-lg shadow-lg p-6 sm:p-8 w-11/12 sm:w-3/4 relative"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl sm:text-3xl font-bold">PET ID</h2>
            </div>

            {/* Details */}
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex-1 mb-4 sm:mb-0">
                <div className="flex items-center mb-2">
                  <span className="font-bold">Name:</span>
                  <span className="ml-2">{pet.name}</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="font-bold">Breed:</span>
                  <span className="ml-2">{pet.breed}</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="font-bold">DOB:</span>
                  <span className="ml-2">
                    {new Date(pet.birthday).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="font-bold">Age:</span>
                  <span className="ml-2">{pet.age} years</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="font-bold">Gender:</span>
                  <span className="ml-2">{pet.gender}</span>
                </div>
              </div>
              <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-4">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white object-cover"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6">
              <div>
                <p className="font-semibold">{pet.owner}</p>
              </div>
              <p className="font-bold">OWNER</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={generatePDF}
            className="bg-gray-900 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-gray-800"
          >
            Save as PDF
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default PetDetails;
