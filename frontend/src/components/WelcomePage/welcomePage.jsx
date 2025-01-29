import React from "react";
import dogCat from "../WelcomePage/images/cat and dog.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations

const WelcomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center bg-white p-6 lg:p-12 gap-8 lg:gap-16">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl text-center lg:text-left"
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Welcome to
          <span className="block"></span>
          <span className="text-5xl sm:text-6xl font-black text-gray-950">
            Pet-Care
          </span>
          <span className="text-5xl sm:text-6xl font-serif text-green-600">
            Hub
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 tracking-wide">
          Your go-to resource for pet care support dedicated to helping you give
          the best care for your furry, feathered, or scaly companions!
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <Link
            to="/discover"
            className="inline-block mt-6 bg-customGray text-white text-sm sm:text-lg font-semibold py-3 px-6 rounded-full hover:bg-green-800 transform hover:translate-y-[-15px] shadow-md hover:shadow-lg transition duration-500 ease-in-out"
          >
            Discover More
          </Link>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative flex justify-center items-center"
      >
        <img
          src={dogCat}
          alt="dog and cat"
          className="w-64 sm:w-80 lg:w-96 object-cover"
        />
        {/* Decorative Elements */}
        <div className="absolute top-2 left-2 w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default WelcomePage;
