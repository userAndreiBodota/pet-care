import React from "react";
import dogCat from "../WelcomePage/images/cat and dog.png";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="flex justify-center gap-56 items-center bg-white p-10">
      {/* Text Section */}
      <div className="max-w-md">
        <h1 className="text-4xl font-bold ">
          Welcome to
          <span className="block"></span>
          <span className="text-5xl font-black text-gray-950">Pet-Care</span>
          <span className="text-5xl font-serif text-green-600"> Hub</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 tracking-wide">
          Your go-to resource for pet care support dedicated to helping you give
          the best care for your furry, feathered, or scaly companions!
        </p>
        <Link
          to="/discover"
          className="inline-block mt-6 bg-black text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-green-800"
        >
          Discover More
        </Link>
      </div>

      <div className="relative">
        <img src={dogCat} alt="dog and cat" className="w-80 object-cover" />

        <div className="absolute top-0 left-0 w-16 h-16 bg-black rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default WelcomePage;
