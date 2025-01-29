import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/authStore";

const Profile = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    const emailVerified = localStorage.getItem("emailVerified");
    if (isAuthenticated && !emailVerified) {
      navigate("/dashboard");
    } else if (!isAuthenticated && emailVerified) {
      localStorage.removeItem("emailVerified");
    }
  }, [isAuthenticated, navigate]);

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
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Personalized Pet Profiles
        </motion.h1>
        <motion.p
          className="text-center text-gray-600 mb-8 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Create personalized profiles for each of your beloved pets on Pet-Care
          Hub. Share their name, breed, and age while connecting with a vibrant
          community.
        </motion.p>
        <div className="flex flex-col items-center w-full max-w-xs">
          <motion.button
            onClick={handleGetStarted}
            className="bg-black text-white w-full py-3 rounded-md text-lg font-semibold mb-4 hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Get Started
          </motion.button>
          <motion.button
            onClick={handleBack}
            className="text-gray-500 hover:text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Sign up later
          </motion.button>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Profile;
