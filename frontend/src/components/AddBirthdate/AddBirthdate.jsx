import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DatePicker from "react-datepicker";
import { Link, useNavigate } from "react-router-dom";
import { PlusCircle, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import "react-datepicker/dist/react-datepicker.css";

const AddBirthdate = () => {
  const { user, logout, petImage, registerPetStage3 } = useAuthStore();
  const [startDate, setStartDate] = useState(null);
  const [petAge, setPetAge] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const handleSubmit = async () => {
    if (!startDate || !petAge) {
      setError("Please select both the birthdate and enter the pet's age.");
      return;
    }

    setError("");
    const petId = localStorage.getItem("petId"); // Retrieve petId from localStorage
    if (!petId) {
      setError("Pet ID not found. Please start the process again.");
      return;
    }

    try {
      await registerPetStage3(petId, startDate, petAge); // Submit birthdate and age
      alert("Pet information confirmed!");
      navigate("/dashboard"); // Navigate to the next step or finish
    } catch (error) {
      console.error("Error submitting pet info:", error);
      alert("An error occurred while confirming the pet's information.");
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
          className="w-60 bg-gray-50 flex flex-col justify-between p-6"
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

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex-1 flex justify-center items-start p-8"
        >
          <div className="relative max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
            {petImage ? (
              <img
                src={petImage}
                alt="Pet"
                className="w-32 h-32 rounded-full object-cover mx-auto"
              />
            ) : (
              <img
                src="https://via.placeholder.com/128"
                alt="Placeholder"
                className="w-32 h-32 rounded-full object-cover mx-auto"
              />
            )}
            <div className="text-center mt-12">
              <div className="flex flex-col">
                <h2>Whats your pet's important date</h2>
                <span>Celebrate your pet's milestone</span>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="relative max-w-sm">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholderText="Select date"
                />
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-col">
                <h2>What is your pet's age?</h2>
                <span>
                  Celebrate your pet's milestones by knowing their age!
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center mt-4">
              <div className="relative max-w-sm">
                <input
                  type="number"
                  min="0"
                  value={petAge}
                  onChange={(e) => setPetAge(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter pet's age in years"
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-center mt-4">{error}</p>}

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
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default AddBirthdate;
