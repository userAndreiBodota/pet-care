import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FaEdit } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";

function PetDetails() {
  const { id } = useParams(); // Get the pet ID from the URL
  const { pets, isLoading, error, getRegisteredPets, updatePetDetails } =
    useAuthStore(); // Get pets and update function from store
  const [pet, setPet] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // State to toggle editing mode
  const [updatedPetData, setUpdatedPetData] = useState({
    name: "",
    breed: "",
    gender: "",
    weight: "",
    birthday: "",
    age: "",
    image: "",
  });
  const [setNewImage] = useState(null); // State for new image

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
        setUpdatedPetData({
          name: foundPet.name,
          gender: foundPet.gender,
          weight: foundPet.weight,
          birthday: foundPet.birthday,
          age: foundPet.age,
          image: foundPet.image,
        });
      } else {
        console.log("Pet not found for id:", id);
      }
    }
  }, [pets, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPetData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedPetData((prevState) => ({
          ...prevState,
          image: reader.result, // Preview the image
        }));
      };
      reader.readAsDataURL(file); // Preview the image
    }
  };

  const handleUpdatePet = async () => {
    try {
      // Update pet details using the updatedPetData state
      const updatedPet = await updatePetDetails(id, updatedPetData);
      // Set the updated data back to pet state
      setPet(updatedPet);
      setIsEditing(false); // Turn off editing mode after update
      alert("Pet details updated successfully");
    } catch (error) {
      console.error("Error updating pet details:", error);
      alert("Failed to update pet details");
    }
  };

  const generatePDF = () => {
    const element = document.getElementById("pet-id-card"); // Get only the Pet ID card section
    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Get the aspect ratio of the canvas
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const aspectRatio = imgWidth / imgHeight;

      // Set the width and height for the PDF, ensuring the aspect ratio is maintained
      const pdfWidth = 500; // Set a fixed width for the PDF
      const pdfHeight = pdfWidth / aspectRatio; // Calculate height to maintain aspect ratio

      const pdf = new jsPDF({
        orientation: "landscape", // Landscape orientation for wider content
        unit: "px", // Use pixel units for accurate dimensions
        format: [pdfWidth, pdfHeight], // Adjust PDF size to maintain aspect ratio
      });

      // Calculate the X and Y position to center the image in the PDF
      const xOffset = (pdf.internal.pageSize.width - pdfWidth) / 2;
      const yOffset = (pdf.internal.pageSize.height - pdfHeight) / 2;

      // Add the image to the PDF at the calculated position
      pdf.addImage(imgData, "PNG", xOffset, yOffset, pdfWidth, pdfHeight);
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
          <div className="relative">
            <img
              src={updatedPetData.image}
              alt={updatedPetData.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-gray-300"
            />
            {isEditing && (
              <FaEdit
                onClick={() =>
                  alert("Change image functionality will be added")
                }
                className="absolute top-0 right-0 text-gray-700 cursor-pointer text-xl"
              />
            )}
            {isEditing && (
              <div className="mt-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="p-2 border border-gray-300 rounded-lg"
                />
              </div>
            )}
          </div>
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={updatedPetData.name}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-lg"
              />
            ) : (
              updatedPetData.name
            )}
          </h1>
          <p className="mt-4 text-s sm:text-2 font-normal">
            {isEditing ? (
              <input
                type="text"
                name="breed"
                value={updatedPetData.breed} // Ensure this matches the state variable for breed
                onChange={handleInputChange} // This should update the breed in state
                className="p-2 border border-gray-300 rounded-lg"
              />
            ) : (
              pet.breed
            )}
          </p>
        </div>
        {/* Editable Details Section */}
        <div className="px-4 sm:px-8 py-4 border-t border-gray-200">
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Gender</span>
            {isEditing ? (
              <input
                type="text"
                name="gender"
                value={updatedPetData.gender}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-lg"
              />
            ) : (
              <span className="text-gray-900">{updatedPetData.gender}</span>
            )}
            {isEditing && (
              <FaEdit
                onClick={() => {}}
                className="text-gray-700 cursor-pointer text-xl"
              />
            )}
          </div>

          <div className="flex justify-between py-1">
            <span className="text-gray-600">Weight</span>
            {isEditing ? (
              <input
                type="number"
                name="weight"
                value={updatedPetData.weight}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-lg"
              />
            ) : (
              <span className="text-gray-900">{updatedPetData.weight} kg</span>
            )}
            {isEditing && (
              <FaEdit
                onClick={() => {}}
                className="text-gray-700 cursor-pointer text-xl"
              />
            )}
          </div>
        </div>
        {/* Important Dates */}
        <div className="px-4 sm:px-8 py-4 border-t border-gray-200">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-700">
            Important Dates
          </h3>
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Birthday</span>
            {isEditing ? (
              <input
                type="date"
                name="birthday"
                value={updatedPetData.birthday}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-lg"
              />
            ) : (
              <span className="text-gray-900">
                {new Date(updatedPetData.birthday).toLocaleDateString()}
              </span>
            )}
          </div>
          <div className="flex justify-between py-1">
            <span className="text-gray-600">Age</span>
            {isEditing ? (
              <input
                type="number"
                name="age"
                value={updatedPetData.age}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-lg"
              />
            ) : (
              <span className="text-gray-900">
                {updatedPetData.age} years old
              </span>
            )}
          </div>
        </div>

        {/* Pet Identification Section */}
        <div
          id="pet-id-card"
          className="flex flex-col justify-center items-center h-screen bg-white -mt-32 -mb-28 px-4"
        >
          <div className="w-[600px] bg-customGray text-white rounded-lg shadow-xl p-6 relative">
            {/* Header */}
            <div className="bg-black text-white text-2xl font-bold py-2 px-4 rounded-t-lg">
              PET ID
            </div>

            {/* Card Content */}
            <div className="bg-gray-300 text-black p-4 rounded-xl mt-4 flex justify-between">
              {/* Details Section */}
              <div className="w-2/3">
                <div className="mb-4 flex items-center">
                  <span className="font-bold mr-4 w-24">NAME:</span>
                  <span className="border border-white px-3 py-2 rounded-xl bg-white w-52 text-center">
                    {pet.name || "John Doe"}
                  </span>
                </div>
                <div className="mb-4 flex items-center">
                  <span className="font-bold mr-4 w-24">BREED:</span>
                  <span className="border border-white px-3 py-2 rounded-xl bg-white w-52 text-center">
                    {pet.breed || "Golden Retriever"}
                  </span>
                </div>
                <div className="mb-4 flex items-center">
                  <span className="font-bold mr-4 w-24">DOB:</span>
                  <span className="border border-white px-3 py-2 rounded-xl bg-white w-52 text-center">
                    {pet.birthday
                      ? new Date(pet.birthday).toLocaleDateString()
                      : "01/01/2020"}
                  </span>
                </div>
                <div className="mb-4 flex items-center">
                  <span className="font-bold mr-4 w-24">AGE:</span>
                  <span className="border border-white px-3 py-2 rounded-xl bg-white w-52 text-center">
                    {pet.age || "3 years"}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-4 w-24">GENDER:</span>
                  <span className="border border-white px-3 py-2 rounded-xl bg-white w-52 text-center">
                    {pet.gender || "Male"}
                  </span>
                </div>
              </div>

              {/* Pet Image */}
              <div className="w-1/3 flex justify-center items-center">
                <img
                  src={pet.image || "https://via.placeholder.com/120"}
                  alt={pet.name || "Pet"}
                  className="w-44 h-44 rounded-full border-4 border-white object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-evenly items-center mt-6">
              <div className="bg-black text-white py-2 px-8 rounded font-bold">
                OWNER
              </div>
              <div className="bg-gray-300 text-black py-2 px-6 rounded text-center font-bold">
                {pet.owner || "Jane Smith"}
              </div>

              <button
                onClick={generatePDF}
                className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Save as PDF
              </button>
            </div>

            {/* Decorative Paw Prints */}
            <div className="absolute bottom-4 right-4 text-white opacity-80">
              <FaPaw size={50} />
            </div>
            <div className="absolute top-4 right-4 text-white opacity-80">
              <FaPaw size={50} />
            </div>
          </div>
        </div>

        {/* Save Button */}
        {isEditing && (
          <div className="flex justify-center mt-10 mb-20">
            <button
              onClick={handleUpdatePet}
              className="bg-gray-900 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-gray-800"
            >
              Save Changes
            </button>
          </div>
        )}

        {/* Toggle Edit Mode Button */}
        {!isEditing && (
          <div className="flex justify-center mt-10 mb-20">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-customGray text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-customGrey"
            >
              Edit Pet Details
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default PetDetails;
