import React from "react";
import Dog from "../DiscoverPage/images/dog.png";
import { motion } from "framer-motion"; // Import motion

const WhyPetCareHub = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between mb-12">
      {/* Text Section */}
      <motion.div
        className="w-full md:w-2/3 mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Why <span className="text-green-700">Pet-Care Hub?</span>
        </h2>
        <p className="text-base md:text-lg tracking-wide text-gray-700">
          Our platform is built for convenience, offering easy-to-understand
          guides, a quick-answer chatbot, and a vet locator to find clinics near
          you. It simplifies the care process, helping you focus on giving the
          best care to your pets without the hassle of looking elsewhere.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img
          src={Dog}
          alt="Dog Illustration"
          className="object-cover w-full max-w-sm md:h-56 rounded-lg"
        />
      </motion.div>
    </div>
  );
};

export default WhyPetCareHub;
