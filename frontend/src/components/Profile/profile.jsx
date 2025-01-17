import React from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

const Profile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    const isSignupInProgress = localStorage.getItem("signupEmail") !== null;
    if (isSignupInProgress) {
      navigate("/signup");
    } else {
      navigate(-1);
    }
  };

  const handleGetStarted = () => {
    navigate("/signup");
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Personalized Pet Profiles
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-md">
          Create personalized profiles for each of your beloved pets on Pet-Care
          Hub. Share their name, breed, and age while connecting with a vibrant
          community.
        </p>
        <div className="flex flex-col items-center w-full max-w-xs">
          <motion.button
            onClick={handleGetStarted}
            className="bg-black text-white w-full py-3 rounded-md text-lg font-semibold mb-4 hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            Get Started
          </motion.button>
          <button
            onClick={handleBack}
            className="text-gray-500 hover:text-gray-700"
          >
            Sign up later
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
