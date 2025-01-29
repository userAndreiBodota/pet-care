import React, { useState, useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { PlusCircle, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Kilogram = () => {
  const { user, logout, petImage, registerPetStage2 } = useAuthStore();
  const [weight, setWeight] = useState(0.0);
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  // Handle Toast notification when an error occurs
  const notify = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  useEffect(() => {
    // Set up beforeunload event to warn the user about page reload
    const handleBeforeUnload = (event) => {
      // Custom message may not always be displayed, but it triggers the prompt
      const message = "Are you sure you want to reload the page? Your information will be lost.";
      event.returnValue = message; // Standard for modern browsers
      return message; // For older browsers
    };

    // Attach the event listener when the component mounts
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleSubmit = async () => {
    if (!petImage) {
      notify("Please upload a pet image before proceeding.");
      return;
    }

    if (!gender) {
      notify("Please select your pet's gender.");
      return;
    }

    if (weight <= 0.0) {
      notify("Please set a valid weight greater than 0.0 kg.");
      return;
    }

    const petId = localStorage.getItem("petId");
    if (!petId) {
      notify("Pet ID not found. Please start the process again.");
      return;
    }

    try {
      await registerPetStage2(petId, gender, weight);
      navigate("/addbirthdate");
      toast.success("Pet details updated successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error updating pet details:", error);
      notify(`An error occurred: ${error.message || error}`);
    }
  };

  const handleLogout = () => {
    logout();
  };

  // Save pet image to localStorage when it changes
  const handleImageChange = (newImage) => {
    localStorage.setItem("petImage", newImage); // Save the image to localStorage
    useAuthStore.setState({ petImage: newImage }); // Update state with new image
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-100 font-sans">
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-60 bg-gray-50 flex flex-col justify-between p-6 border-r border-gray-200 shadow-md"
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
            className="flex items-center space-x-4 mt-10 p-4 rounded-lg bg-white shadow border"
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
          <div className="relative max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            {/* Pet Image */}
            {petImage ? (
              <img
                src={petImage}
                alt="Pet"
                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-green-300 shadow-sm"
              />
            ) : (
              <img
                src="https://via.placeholder.com/128"
                alt=""
                className="w-32 h-32 rounded-full object-cover mx-auto border border-gray-300"
              />
            )}

            {/* Gender Selection */}
            <div className="flex items-center justify-between mt-8">
              <div>
                <h2 className="text-sm font-semibold text-gray-700">
                  What's your pet's gender?
                </h2>
                <p className="text-sm text-gray-500">
                  Let us know what gender your pet is
                </p>
              </div>
              <form className="w-1/2">
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2 focus:ring-2 focus:ring-green-300"
                >
                  <option value="">Your pet's gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </form>
            </div>

            {/* Weight Input */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold mb-2">
                What's your pet's weight?
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Adjust the weight accurately.
              </p>
              <div className="flex flex-col items-center">
                {/* Weight Display */}
                <div className="w-full bg-gray-50 border border-gray-300 p-6 rounded-lg shadow">
                  <h3 className="text-4xl font-bold text-gray-700 mb-4">
                    {weight.toFixed(1)} kg
                  </h3>

                  {/* Slider */}
                  <input
                    type="range"
                    min="0.1"
                    max="50"
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                    className="w-full accent-green-700"
                  />
                </div>
                {/* Submit and Back Button */}
                <motion.div className="mt-6 flex space-x-96">
                  <button
                    onClick={() => navigate(-1)} // This will navigate back to the previous page
                    className="bg-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-600 transition"
                  >
                    Go Back
                  </button>

                  <button
                    onClick={handleSubmit}
                    className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                  >
                    Next
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Kilogram;
