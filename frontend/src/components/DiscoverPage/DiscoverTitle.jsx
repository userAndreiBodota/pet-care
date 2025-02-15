import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Blur from "../DiscoverPage/images/discoverBlur.png";
import { motion } from "framer-motion"; // Import motion

const DiscoverTitle = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-lvh mx">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-green-500 z-10"
      >
        <IoArrowBack size={24} />
        <span className="ml-2"></span>
      </button>
      <img
        src={Blur}
        alt="Container for Discover Title"
        style={{ width: "80%", height: "500px" }}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-2xl md:text-4xl text-center text-gray-900 mb-4"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What is <span className="font-bold text-gray-950">Pet Care</span>{" "}
          <span className="text-green-700">Hub?</span>
        </motion.h1>
        <motion.p
          className="text-sm md:text-base text-center max-w-prose text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          PetCare Hub is an all-in-one website designed to support pet owners
          and enthusiasts by providing valuable resources on pet care. Whether
          you're a new pet owner or experienced, our platform offers essential
          information such as pet care tips, emergency handling guides, and
          health advice tailored for various pets like dogs, cats, birds, and
          more. With an interactive chatbot to answer questions and a map
          feature to find nearby vet clinics, PetCare Hub makes it easy for you
          to access everything you need to keep your pets happy and healthy.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default DiscoverTitle;
