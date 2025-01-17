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
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-8 sm:px-10 lg:px-12">
      <motion.div
        id="pet-details-card"
        className="max-w-lg sm:max-w-xl w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Header */}
        <div className="flex items-center flex-col p-8">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-32 h-32 rounded-full border-2 border-gray-300"
          />
          <h1 className="mt-6 text-2xl font-semibold">{pet.name}</h1>
          <p className="text-sm text-gray-500">
            {pet.type} | {pet.breed}
          </p>
        </div>

        {/* Details Section */}
        <div className="px-8 py-6 border-t border-gray-200">
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Gender</span>
            <span className="text-gray-900">{pet.gender}</span>
          </div>

          <div className="flex justify-between py-2">
            <span className="text-gray-600">Weight</span>
            <span className="text-gray-900">{pet.weight} kg</span>
          </div>
        </div>

        {/* Important Dates */}
        <div className="px-8 py-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700">
            Important Dates
          </h3>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Birthday</span>
            <span className="text-gray-900">
              {new Date(pet.birthday).toLocaleDateString()}
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Age</span>
            <span className="text-gray-900">{pet.age} years old</span>
          </div>
        </div>

        {/* Fur Parent Section */}
        <div className="px-8 py-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700">Fur Parent</h3>
          <div className="flex items-center py-3">
            <div>
              <p className="text-gray-900 font-semibold">{pet.owner}</p>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-semibold mb-8 text-center">
          Pet Identification
        </h1>

        <div className=" max-w-3xl mx-auto flex justify-center">
          <div
            id="pet-id-card"
            className="bg-gray-700 text-white rounded-lg shadow-lg p-8 w-3/4 relative"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">PET ID</h2>
            </div>

            {/* Details */}
            <div className="flex">
              <div className="flex-1">
                <p className="mb-3">
                  <span className="font-bold">Name:</span> {pet.name}
                </p>
                <p className="mb-3">
                  <span className="font-bold">Breed:</span> {pet.breed}
                </p>
                <p className="mb-3">
                  <span className="font-bold">DOB:</span>{" "}
                  {new Date(pet.birthday).toLocaleDateString()}
                </p>
                <p className="mb-3">
                  <span className="font-bold">Age:</span> {pet.age} years
                </p>
                <p className="mb-3">
                  <span className="font-bold">Gender:</span> {pet.gender}
                </p>
              </div>
              <div className="flex-shrink-0 ml-6">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-40 h-40 rounded-full border-4 border-white object-cover"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-8">
              <div>
                <p className="font-semibold">{pet.owner}</p>
              </div>
              <p className="font-bold">OWNER</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={generatePDF}
            className="bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800"
          >
            Save as PDF
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default PetDetails;
