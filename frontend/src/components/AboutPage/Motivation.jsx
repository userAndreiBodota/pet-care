import React from "react";
import { motion } from "framer-motion"; // Import motion for animations

const Motivation = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-10 h-auto -mt-12">
      {/* Title with sliding fade-in effect */}
      <motion.h1
        className="text-3xl md:text-4xl text-gray-950 tracking-wider font-semibold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}  // Start from above with no opacity
        animate={{ opacity: 1, y: 0 }}    // Animate to normal position with full opacity
        transition={{ duration: 0.8 }}     // Transition over 0.8 seconds
      >
        Motivation behind <span className="text-green-800">the Website</span>
      </motion.h1>

      {/* Subtitle with sliding fade-in effect */}
      <motion.h2
        className="text-md md:text-lg text-center mb-8 text-gray-600"
        initial={{ opacity: 0, y: -30 }}  // Start from above with no opacity
        animate={{ opacity: 1, y: 0 }}    // Animate to normal position with full opacity
        transition={{ duration: 0.8, delay: 0.2 }} // Slight delay for the subtitle
      >
        Inspiring Pet Owners to Provide Exceptional Care for Their Furry Friends
      </motion.h2>

      {/* Content box with sliding fade-in effect */}
      <div className="relative bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-4xl mb-24">
        <img
          src="/images/paw.png"
          alt="PetCare Hub Image"
          className="absolute inset-0 w-full h-full object-cover rounded-lg z-0 opacity-30"
        />

        <div className="relative z-10">
          <motion.p
            className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}  // Start from a bit below with no opacity
            animate={{ opacity: 1, y: 0 }}    // Animate to normal position with full opacity
            transition={{ duration: 0.8, delay: 0.4 }} // Slight delay for the paragraph
          >
            &quot;The idea for PetCare Hub came from our love for animals and
            the need to make pet care easier for owners. We saw that many pet
            owners have a hard time finding trustworthy information about
            emergencies, daily care, and health tips for their pets. Our goal is
            to create a single platform where pet owners can easily find expert
            advice, ask questions, and locate nearby vet clinics. By gathering
            all these resources in one place, we hope to help pet owners take
            the best care of their pets and make pet ownership a more enjoyable
            journey.&quot;
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
