import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import DatePicker from "react-datepicker";
import { Link, useNavigate } from "react-router-dom";
import { PlusCircle, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBirthdate = () => {
  const { user, logout, petImage, registerPetStage3 } = useAuthStore();
  const [startDate, setStartDate] = useState(null);
  const [petAge, setPetAge] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Warn user before page reload
    const handleBeforeUnload = (event) => {
      const message =
        "Are you sure you want to reload the page? Your information will be lost.";
      event.returnValue = message; // Standard for modern browsers
      return message; // For older browsers
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleLogout = () => {
    logout();
  };

  // Function to calculate the pet's age dynamically
  useEffect(() => {
    if (startDate) {
      const today = new Date();
      const birthDate = new Date(startDate);
      const diffTime = today - birthDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays < 1) {
        setPetAge("Less than a day old");
      } else if (diffDays === 1) {
        setPetAge("1 day old");
      } else if (diffDays < 30) {
        setPetAge(`${diffDays} days old`);
      } else {
        const diffMonths = Math.floor(diffDays / 30);
        if (diffMonths < 12) {
          setPetAge(
            diffMonths === 1 ? "1 month old" : `${diffMonths} months old`
          );
        } else {
          const diffYears = Math.floor(diffMonths / 12);
          setPetAge(diffYears === 1 ? "1 year old" : `${diffYears} years old`);
        }
      }
    } else {
      setPetAge(""); // Reset age if no date is selected
    }
  }, [startDate]);

  // Your handleSubmit function
  const handleSubmit = async () => {
    if (!startDate || !petAge) {
      // setError("Please select a birthdate.");
      toast.error("Please select a birthdate."); // Toastify error message
      return;
    }

    setError("");
    const petId = localStorage.getItem("petId");
    if (!petId) {
      setError("Pet ID not found. Please start the process again.");
      toast.error("Pet ID not found. Please start the process again."); // Toastify error message
      return;
    }

    try {
      await registerPetStage3(petId, startDate, petAge);
      toast.success("Pet information confirmed!"); // Toastify success message
      navigate("/dashboard");
    } catch (error) {
      console.error("Error submitting pet info:", error);
      toast.error("An error occurred while confirming the pet's information."); // Toastify error message
    }
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50 font-sans">
        {/* Sidebar */}
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

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-1 flex justify-center items-center p-10"
        >
          <div className="bg-white p-10 rounded-lg shadow-xl max-w-2xl w-full text-center">
            {/* Pet Image */}
            <div className="flex justify-center">
              <img
                src={petImage || "https://via.placeholder.com/128"}
                alt="Pet"
                className="w-32 h-32 rounded-full object-cover border-4 border-green-300 shadow-sm"
              />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mt-6">
              Add Your Pet's Birthdate
            </h2>
            <p className="text-gray-600 mt-2">
              Celebrate your pet's milestones by keeping track of their age!
            </p>

            {/* Date Picker */}
            <div className="mt-6">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center"
                placeholderText="Select your pet's birthdate"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100} // Adjusts how many years are visible
                maxDate={new Date()} // Prevents selecting future dates
              />
            </div>

            {/* Pet Age Display */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700">
                Your Pet's Age:
              </h3>
              <div className="bg-green-100 border border-green-500 text-green-700 font-semibold rounded-lg p-4 mt-2 shadow-md text-xl">
                {petAge || (
                  <span className="text-gray-500">
                    Select a date to see the age
                  </span>
                )}
              </div>
            </div>

            {error && <p className="text-red-500 text-center mt-4">{error}</p>}

            {/* Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
              >
                Go Back
              </button>

              <button
                onClick={handleSubmit}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
              >
                Create New Pet
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default AddBirthdate;
