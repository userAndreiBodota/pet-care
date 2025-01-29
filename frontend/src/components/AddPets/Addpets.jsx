import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { PlusCircle, LogOut, Camera, X } from "lucide-react";
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import Dog from "../AddPets/images/dog.png";
import Cat from "../AddPets/images/cat.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPets = () => {
  const { user, logout, setPetImage, petImage, registerPetStage1 } =
    useAuthStore();
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  const handleLogout = () => {
    logout();
  };
  //-------------------------------------------------------------------------------
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      // Determine MIME type based on file type
      let mimeType;
      if (file.type === "image/png") {
        mimeType = "data:image/png;base64,";
      } else if (file.type === "image/jpeg" || file.type === "image/jpg") {
        mimeType = "data:image/jpeg;base64,";
      } else {
        toast.error(
          "Unsupported file type. Please upload a JPG, JPEG, or PNG.",
          {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
        return;
      }

      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1]; // Get only the Base64 part
        const fullBase64Image = mimeType + base64String; // Combine MIME type with Base64
        setPetImage(fullBase64Image); // Save the Base64 image with MIME type prefix
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleRemoveImage = () => {
    setPetImage(null);
  };

  const handleSubmit = async () => {
    // Check if all fields are filled
    if (!petName || !petType || !petBreed || !petImage) {
      toast.warn("All fields are required, including the pet image.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Save the current state in localStorage so it can be retrieved on the next page
      localStorage.setItem(
        "petDetails",
        JSON.stringify({ petName, petType, petBreed, petImage })
      );

      return; // Prevent submission if form is incomplete
    }

    setIsSubmitting(true);

    try {
      // Register the pet and get the pet ID
      const petId = await registerPetStage1(
        petName,
        petType,
        petBreed,
        petImage,
        user.name
      );

      // Store the pet ID in local storage to persist across pages
      localStorage.setItem("petId", petId);

      // Optionally store the other pet details as well (petName, petType, etc.)
      localStorage.setItem(
        "petDetails",
        JSON.stringify({ petName, petType, petBreed, petImage })
      );

      // Display success message
      toast.success("Pet added successfully! Redirecting...", {
        position: "top-right",
        autoClose: 3000,
      });

      // Navigate to the next step (kilogram page)
      navigate("/kilogram");
    } catch (error) {
      console.error("Error adding pet:", error);
      toast.error("An error occurred while adding the pet. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-100 font-sans">
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-64 bg-gray-50 flex flex-col justify-between p-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
          <div className="border border-gray-300 bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-10">
              Pet-Care <span className="text-green-800">Hub</span>
            </h1>
            <nav className="space-y-4">
              <Link
                to="/add-pet"
                className="flex items-center space-x-3 text-gray-800 hover:bg-green-100 rounded-lg p-3 transition-colors border border-gray-200 shadow-sm"
              >
                <PlusCircle size={20} />
                <span className="text-lg font-semibold">Add New</span>
              </Link>
              <Link
                to="/dashboard"
                className="flex items-center space-x-3 text-gray-800 hover:bg-green-100 rounded-lg p-3 transition-colors border border-gray-200 shadow-sm"
              >
                <span className="text-lg font-semibold">Dashboard</span>
              </Link>
              <Link
                to="/account"
                className="flex items-center space-x-3 text-gray-800 hover:bg-green-100 rounded-lg p-3 transition-colors border border-gray-200 shadow-sm"
              >
                <span className="text-lg font-semibold">Account</span>
              </Link>
            </nav>
          </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center space-x-4 mt-10 p-4 rounded-lg bg-white shadow"
          >
            <p className="text-gray-800">Hello! {user.name}</p>
            <button
              className="ml-auto text-gray-400 hover:text-red-500"
              onClick={handleLogout}
            >
              <LogOut size={20} />
            </button>
          </motion.div>
        </motion.aside>

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex-1 flex items-center justify-center p-8 mb-10"
        >
          <div className="rounded-lg p-8 max-w-lg w-full text-center bg-white shadow-lg border border-gray-200">
            {/* Image Upload Section */}
            <motion.div className="relative mb-6 flex justify-center">
              {petImage ? (
                <div className="relative w-32 h-32">
                  <img
                    src={petImage}
                    alt="Pet"
                    className="w-32 h-32 rounded-full object-cover border-4 border-green-300 shadow-sm"
                  />
                  <button
                    onClick={handleRemoveImage}
                    className="absolute top-0 right-0 bg-white border border-gray-300 shadow-md rounded-full p-1 text-red-500 hover:bg-red-200 transition"
                    aria-label="Remove image"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center relative border border-gray-300">
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="absolute opacity-0 cursor-pointer w-32 h-32"
                  />
                  <Camera size={24} className="text-gray-500" />
                </div>
              )}
            </motion.div>

            {/* Pet Name Input */}
            <motion.div className="mb-6 text-left">
              <label className="block text-gray-700 mb-1 font-medium">
                What's your pet's name?
              </label>
              <input
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                placeholder="Your pet's name"
                className="p-3 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-green-300 focus:outline-none"
              />
            </motion.div>

            {/* Pet Type Selection */}
            <motion.div className="mb-6 text-left">
              <label className="block text-gray-700 mb-1 font-medium">
                What's your pet's kind?
              </label>
              <div className="flex justify-center gap-6 mt-4">
                <button
                  onClick={() => setPetType("Dog")}
                  className={`p-4 border rounded-lg transition ${
                    petType === "Dog"
                      ? "border-green-500 bg-green-50 shadow-md"
                      : "border-gray-300 hover:shadow"
                  }`}
                >
                  <img
                    src={Dog}
                    alt="Dog"
                    className="h-60 w-60 object-cover rounded-md"
                  />
                </button>
                <button
                  onClick={() => setPetType("Cat")}
                  className={`p-4 border rounded-lg transition ${
                    petType === "Cat"
                      ? "border-green-700 bg-green-50 shadow-md"
                      : "border-gray-300 hover:shadow"
                  }`}
                >
                  <img
                    src={Cat}
                    alt="Cat"
                    className="h-60 w-60 object-cover rounded-md"
                  />
                </button>
              </div>
            </motion.div>

            {/* Pet Breed Input */}
            <motion.div className="mb-6 flex flex-col md:flex-row items-start">
              <label className="block text-gray-700 mb-1 font-medium md:mr-4">
                What's your pet's breed?
                <p className="text-gray-500 text-sm">
                  Let us know what kind of species your pet is
                </p>
              </label>
              <input
                type="text"
                value={petBreed}
                onChange={(e) => setPetBreed(e.target.value)}
                placeholder="Input Breed"
                className="p-3 border border-gray-300 rounded-lg w-full md:w-3/5 focus:ring-2 focus:ring-green-300 focus:outline-none"
              />
            </motion.div>

            {/* Footer */}
            <motion.div className="flex justify-between items-center mt-6">
              <button
                onClick={handleBack}
                className="bg-gray-500 text-white font-semibold px-6 py-3 rounded-lg transition hover:bg-gray-600 focus:ring-2 focus:ring-green-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`bg-black text-white font-semibold px-6 py-3 rounded-lg transition ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-800 focus:ring-2 focus:ring-green-300"
                }`}
              >
                Next
              </button>
            </motion.div>
          </div>
        </motion.main>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default AddPets;
