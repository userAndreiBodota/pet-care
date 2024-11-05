import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { PlusCircle, LogOut, Camera, X } from "lucide-react";
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import Dog from "../AddPets/images/dog.png";
import Cat from "../AddPets/images/cat.png";

const AddPets = () => {
  const { user, logout, setPetImage, petImage } = useAuthStore();
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPetImage(imageURL);
    }
  };

  const handleRemoveImage = () => {
    setPetImage(null);
  };

  const handleSubmit = () => {
    // Check if all fields are filled out
    if (!petName || !petType || !petBreed || !petImage) {
      alert("All fields are required, including the pet image.");
    } else {
      console.log({ petName, petType, petBreed });
      navigate("/kilogram"); // Navigate only if all fields are filled
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
            <h1 className="text-2xl font-bold text-gray-800 mb-10">
              Pet-Care <span className="text-green-500">Hub</span>
            </h1>
            <nav className="space-y-4">
              <Link
                to="/add-pet"
                className="flex items-center space-x-2 text-gray-700 hover:text-green-500"
              >
                <PlusCircle size={20} />
                <span className="text-lg font-semibold">Add New</span>
              </Link>
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-lg p-2"
              >
                <span>Dashboard</span>
              </Link>
              <Link
                to="/account"
                className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-lg p-2"
              >
                <span>Account</span>
              </Link>
            </nav>
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
          <div className="rounded-lg p-8 max-w-lg w-full text-center">
            <motion.div className="relative mb-6 flex justify-center">
              {petImage ? (
                <div className="relative w-32 h-32">
                  <img
                    src={petImage}
                    alt="Pet"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <button
                    onClick={handleRemoveImage}
                    className="absolute top-0 right-0 bg-white rounded-full p-1 text-red-500 hover:bg-red-200"
                    aria-label="Remove image"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center relative">
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="absolute opacity-0 cursor-pointer w-32 h-32"
                  />
                  <Camera size={24} className="text-gray-500" />
                </div>
              )}
            </motion.div>

            <motion.div className="mb-6 text-left">
              <label className="block text-gray-700 mb-1">
                What's your pet's name?
              </label>
              <input
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                placeholder="Your pet's name"
                className="p-3 border border-gray-300 rounded w-full"
              />
            </motion.div>

            {/* Pet Type Selection */}
            <motion.div className="mb-6 text-left">
              <label className="block text-gray-700 mb-1">
                What's your pet's kind?
              </label>
              <div className="flex justify-center gap-6 mt-2">
                <button
                  onClick={() => setPetType("Dog")}
                  className={`p-4 border rounded ${
                    petType === "Dog" ? "border-green-500" : "border-gray-300"
                  }`}
                >
                  <img src={Dog} alt="Dog" className="h-60 w-60 object-cover" />
                </button>
                <button
                  onClick={() => setPetType("Cat")}
                  className={`p-4 border rounded ${
                    petType === "Cat" ? "border-green-500" : "border-gray-300"
                  }`}
                >
                  <img src={Cat} alt="Cat" className="h-60 w-60 object-cover" />
                </button>
              </div>
            </motion.div>

            {/* Pet Breed Input */}
            <motion.div className="mb-6 flex justify-between items-start">
              <label className="block text-gray-700 mb-1 mr-4">
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
                className="p-2 border border-gray-300 rounded w-full md:w-3/5"
              />
            </motion.div>

            <motion.div className="flex justify-between mt-6">
              Go to the next step
              <button
                onClick={handleSubmit}
                className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Confirm
              </button>
            </motion.div>
          </div>
        </motion.main>
      </div>
      <Footer />
    </>
  );
};

export default AddPets;
