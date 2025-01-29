import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FaEdit } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [newImage, setNewImage] = useState(null); // State to store the new image

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
          breed: foundPet.breed,
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

  // Update pet details WITH TOASTIFY
  const handleUpdatePet = async () => {
    try {
      if (newImage) {
        const imageUrl = await uploadImage(newImage);
        setUpdatedPetData((prevState) => ({
          ...prevState,
          image: imageUrl,
        }));
      }

      const updatedPet = await updatePetDetails(id, updatedPetData);
      setPet(updatedPet);
      setIsEditing(false);

      // Success toast
      toast.success("Pet details updated successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: true,
        className: "bg-green-600 text-white rounded-lg shadow-lg p-4",
      });
    } catch (error) {
      console.error("Error updating pet details:", error);

      // Error toast
      toast.error("Failed to update pet details. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: true,
        className: "bg-red-600 text-white rounded-lg shadow-lg p-4",
      });
    }
  };

  const uploadImage = async (file) => {
    // Implement your image upload logic here
    // For example, you could upload the image to Firebase Storage or an external API
    const imageUrl = URL.createObjectURL(file); // Simulated image URL for now
    return imageUrl;
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
    toast.info("Loading Pet Details"); // Show loading toast
    // return <p>Loading pet details...</p>;
  }

  if (error) {
    toast.error(error); // Show error toast
    return <p>{error}</p>;
  }

  if (!pet) {
    toast.warning("Pet not found"); // Show pet not found toast
    return <p>Pet not found</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 ">
      <motion.div
        id="pet-details-card"
        className="max-w-lg sm:max-w-xl w-full bg-white shadow-xl rounded-xl overflow-hidden border border-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Header */}
        <div className="flex items-center flex-col p-6 sm:p-8 text-center bg-gradient-to-b from-green-100 to-green-50">
          {/* Profile Image Section */}
          <div className="relative mb-6">
            <img
              src={updatedPetData.image}
              alt={updatedPetData.name}
              className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border-4 border-green-800 mx-auto object-cover"
            />
            {isEditing && (
              <div className="absolute bottom-2 right-2">
                {/* Edit icon */}
                <FaEdit
                  onClick={() => document.getElementById("imageUpload").click()}
                  className="text-green-800 cursor-pointer text-2xl hover:text-green-600"
                />
                {/* Hidden file input */}
                <input
                  type="file"
                  accept="image/*"
                  id="imageUpload"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
            )}
          </div>

          {/* Name and Breed Section */}
          <div className="flex flex-col items-center px-4 sm:px-8 py-10">
            <div className="bg-white shadow-lg rounded-lg w-full sm:w-96 p-6 border-2 border-gray-200">
              <h2 className="text-lg font-semibold text-green-800 border-b-2 border-green-700 pb-2 mb-4">
                Pet Identity
              </h2>

              {/* Name Field */}
              <div className="flex justify-between items-center w-full py-3">
                <span className="text-gray-700 font-medium w-32 text-left">
                  Name:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={updatedPetData.name}
                    onChange={handleInputChange}
                    className="p-3 border-2 border-green-800 rounded-lg text-gray-800 w-full text-center bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition duration-200 ease-in-out"
                  />
                ) : (
                  <div className="p-3 border-2 border-green-800 rounded-lg bg-green-50 text-gray-800 w-full text-center">
                    {updatedPetData.name}
                  </div>
                )}
              </div>

              {/* Breed Field */}
              <div className="flex justify-between items-center w-full py-3">
                <span className="text-gray-700 font-medium w-32 text-left">
                  Breed:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    name="breed"
                    id="breed"
                    value={updatedPetData.breed}
                    onChange={handleInputChange}
                    className="p-3 border-2 border-green-800 rounded-lg text-gray-800 w-full text-center bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition duration-200 ease-in-out"
                  />
                ) : (
                  <div className="p-3 border-2 border-green-800 rounded-lg bg-green-50 text-gray-800 w-full text-center">
                    {updatedPetData.breed}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Editable Details Section */}
        <div className="flex flex-col items-center px-4 sm:px-8 py-10 border-t-4 border-gray-300 bg-gradient-to-b from-green-100 to-green-50">
          <div className="bg-white shadow-lg rounded-lg w-full sm:w-96 p-6 border-2 border-gray-200">
            <h2 className="text-lg font-semibold text-green-800 border-b-2 border-green-700 pb-2 mb-4">
              Pet Details
            </h2>

            {/* Gender Field */}
            <div className="flex justify-between items-center w-full py-3">
              <span className="text-gray-700 font-medium w-32 text-left">
                Gender:
              </span>
              {isEditing ? (
                <input
                  type="text"
                  name="gender"
                  value={updatedPetData.gender}
                  onChange={handleInputChange}
                  className="p-3 border-2 border-green-800 rounded-lg text-gray-800 w-full text-center bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition duration-200 ease-in-out"
                />
              ) : (
                <div className="p-3 border-2 border-green-800 rounded-lg bg-green-50 text-gray-800 w-full text-center">
                  {updatedPetData.gender}
                </div>
              )}
            </div>

            {/* Weight Field */}
            <div className="flex justify-between items-center w-full py-3">
              <span className="text-gray-700 font-medium w-32 text-left">
                Weight:
              </span>
              {isEditing ? (
                <input
                  type="number"
                  name="weight"
                  value={updatedPetData.weight}
                  onChange={handleInputChange}
                  className="p-3 border-2 border-green-800 rounded-lg text-gray-800 w-full text-center bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition duration-200 ease-in-out"
                />
              ) : (
                <div className="p-3 border-2 border-green-800 rounded-lg bg-green-50 text-gray-800 w-full text-center">
                  {updatedPetData.weight} kg
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center px-4 sm:px-8 py-10 border-t-4 border-gray-300 bg-gradient-to-b from-green-100 to-green-50">
          <div className="bg-white shadow-lg rounded-lg w-full sm:w-96 p-6 border-2 border-gray-200">
            <h2 className="text-lg font-semibold text-green-800 border-b-2 border-green-700 pb-2 mb-4">
              Additional Information
            </h2>

            {/* Birthday Field */}
            <div className="flex justify-between items-center w-full py-3">
              <span className="text-gray-700 font-medium w-32 text-left">
                Birthday:
              </span>
              {isEditing ? (
                <input
                  type="date"
                  name="birthday"
                  value={
                    updatedPetData.birthday || pet.birthday
                      ? new Date(updatedPetData.birthday || pet.birthday)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  onChange={handleInputChange}
                  className="p-3 border-2 border-green-800 rounded-lg text-gray-800 w-full text-center bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition duration-200 ease-in-out"
                />
              ) : (
                <div className="p-3 border-2 border-green-800 rounded-lg bg-green-50 text-gray-800 w-full text-center">
                  {pet.birthday
                    ? new Date(pet.birthday).toLocaleDateString()
                    : "No date provided"}
                </div>
              )}
            </div>

            {/* Age Field */}
            <div className="flex justify-between items-center w-full py-3">
              <span className="text-gray-700 font-medium w-32 text-left">
                Age:
              </span>
              {isEditing ? (
                <input
                  type="number"
                  name="age"
                  value={updatedPetData.age}
                  onChange={handleInputChange}
                  className="p-3 border-2 border-green-800 rounded-lg text-gray-800 w-full text-center bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 transition duration-200 ease-in-out"
                />
              ) : (
                <div className="p-3 border-2 border-green-800 rounded-lg bg-green-50 text-gray-800 w-full text-center">
                  {updatedPetData.age}
                </div>
              )}
            </div>
          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="flex justify-center mt-4 mb-24">
              <button
                onClick={handleUpdatePet}
                className="bg-customGray text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-customGrey"
              >
                Save Changes
              </button>
            </div>
          )}

          {/* Toggle Edit Mode Button */}
          {!isEditing && (
            <div className="flex justify-center mt-4 mb-24">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-customGray text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-customGrey mt-5"
              >
                Edit Pet Details
              </button>
            </div>
          )}
        </div>

        {/* Pet Identification Section */}
        <div
          id="pet-id-card"
          className="flex flex-col justify-center items-center bg-gradient-to-b from-green-100 to-green-50 px-4 py-8 -mt-24 border-t-4 border-gray-300"
        >
          <div className="w-full max-w-3xl bg-customGray text-white rounded-2xl shadow-2xl p-6 relative mx-auto">
            {/* Header */}
            <div className="bg-black text-white text-2xl font-bold py-3 px-6 rounded-xl shadow-md">
              PET ID
            </div>

            {/* Card Content */}
            <div className="bg-gray-100 text-black p-6 rounded-xl mt-4 flex flex-wrap sm:flex-nowrap justify-between shadow-lg">
              {/* Details Section */}
              <div className="w-full sm:w-2/3">
                <div className="mb-4 flex items-center">
                  <span className="font-bold mr-4 w-24 text-gray-800">
                    NAME:
                  </span>
                  <span className="border border-gray-300 px-4 py-2 rounded-lg bg-white w-full sm:w-52 text-center shadow-sm">
                    {pet.name || "John Doe"}
                  </span>
                </div>
                <div className="mb-4 flex items-center">
                  <span className="font-bold mr-4 w-24 text-gray-800">
                    BREED:
                  </span>
                  <span className="border border-gray-300 px-4 py-2 rounded-lg bg-white w-full sm:w-52 text-center shadow-sm">
                    {pet.breed || "Golden Retriever"}
                  </span>
                </div>
                <div className="mb-4 flex items-center">
                  <span className="font-bold mr-4 w-24 text-gray-800">
                    Birthdate:
                  </span>
                  <span className="border border-gray-300 px-4 py-2 rounded-lg bg-white w-full sm:w-52 text-center shadow-sm">
                    {pet.birthday
                      ? new Date(pet.birthday).toLocaleDateString()
                      : "01/01/2020"}
                  </span>
                </div>
                <div className="mb-4 flex items-center">
                  <span className="font-bold mr-4 w-24 text-gray-800">
                    AGE:
                  </span>
                  <span className="border border-gray-300 px-4 py-2 rounded-lg bg-white w-full sm:w-52 text-center shadow-sm">
                    {pet.age || "3 years"}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-4 w-24 text-gray-800">
                    GENDER:
                  </span>
                  <span className="border border-gray-300 px-4 py-2 rounded-lg bg-white w-full sm:w-52 text-center shadow-sm">
                    {pet.gender || "Male"}
                  </span>
                </div>
              </div>

              {/* Pet Image */}
              <div className="w-full sm:w-1/3 flex justify-center items-center mt-6 sm:mt-0">
                <img
                  src={pet.image || "https://via.placeholder.com/120"}
                  alt={pet.name || "Pet"}
                  className="w-36 h-36 rounded-full border-4 border-gray-300 object-cover shadow-lg ml-5"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-evenly items-center mt-6">
              <div className="bg-black text-white py-2 px-8 rounded font-bold shadow">
                OWNER
              </div>
              <div className="bg-gray-300 text-black py-2 px-6 rounded text-center font-bold shadow-sm">
                {pet.owner || "Jane Smith"}
              </div>
            </div>

            {/* Decorative Paw Prints */}
            <div className="absolute bottom-4 right-4 text-gray-300 opacity-80">
              <FaPaw size={50} />
            </div>
            <div className="absolute top-4 right-4 text-gray-300 opacity-80">
              <FaPaw size={50} />
            </div>
          </div>
        </div>

        {/* Save as PDF Button */}
        <div className="flex justify-center items-center bg-gradient-to-b from-green-100 to-green-50 px-11 py-10 -mt-10">
          <button
            onClick={generatePDF}
            disabled={isEditing} // Disable the button if in edit mode
            className={`${
              isEditing
                ? "bg-gray-400 text-gray-700 cursor-not-allowed" // Disabled style
                : "bg-customGray text-white hover:bg-customGrey" // Enabled style
            } px-6 py-3 rounded-lg font-semibold shadow-md transition duration-200`}
          >
            Download as PDF
          </button>
        </div>
      </motion.div>
      {/* ToastContainer is necessary for toasts to be shown */}
      <ToastContainer />
    </div>
  );
}

export default PetDetails;
