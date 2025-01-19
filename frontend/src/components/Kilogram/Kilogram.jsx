import React, { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { PlusCircle, LogOut } from "lucide-react";
import { motion } from "framer-motion";

const Kilogram = () => {
  const { user, logout, petImage, registerPetStage2 } = useAuthStore();
  const [weight, setWeight] = useState(22.2);
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!gender) {
      alert("Please select your pet's gender.");
      return;
    }

    const petId = localStorage.getItem("petId");
    if (!petId) {
      alert("Pet ID not found. Please start the process again.");
      return;
    }

    try {
      await registerPetStage2(petId, gender, weight);
      navigate("/addbirthdate");
    } catch (error) {
      console.error("Error updating pet details:", error);
      alert(`An error occurred: ${error.message || error}`);
    }
  };

  const handleLogout = () => {
    logout();
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
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
            <div className="flex gap-40 mt-8">
              <div className="flex-col">
                <h2 className="text-sm">What's your pet's gender?</h2>
                <h3 className="text-sm">Let us know what gender your pet is</h3>
              </div>
              <form className="max-w-md mx-auto">
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Your pet's gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </form>
            </div>

            <div className="mt-10">
              <h2 className="text-lg font-semibold mb-2">
                What's your pet's weight?
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Adjust the weight according to reality.
              </p>
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4">{weight} kg</h3>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={weight}
                  onChange={handleWeightChange}
                  className="w-full"
                />
                <div className="flex justify-center mt-4">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="border p-2 rounded-lg text-center w-20"
                  />
                  <span className="ml-2">kg</span>
                </div>
                <motion.div className="flex justify-between mt-6">
                  <button
                    onClick={handleSubmit}
                    className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                  >
                    Confirm
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Kilogram;
