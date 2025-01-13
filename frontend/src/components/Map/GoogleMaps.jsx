//reponsiveness done!

import React from "react";

const GoogleMaps = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* Title Section */}
      <div className="title text-center mb-4">
        <h1 className="font-semibold text-2xl md:text-3xl mb-4 tracking-wide">
          Find Nearby <span className="text-green-500">Vet Clinic</span>
        </h1>
      </div>

      {/* Subtitle Section */}
      <div className="paragraph text-center tracking-wider text-gray-600 mb-8">
        <p className="text-sm md:text-base">
          Locate Trusted Veterinary Services in your Area
        </p>
      </div>

      {/* Map Section */}
      <div className="flex justify-center">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31599.56837448644!2d121.07440816022445!3d14.31596055775225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6b55c60e3cb1%3A0x401cc70e6606e7c1!2sBi%C3%B1an%2C%20Laguna%2C%20Philippines!5e0!3m2!1sen!2sus!4v1694715867687!5m2!1sen!2sus"
          className="w-full max-w-4xl h-64 sm:h-96 border-0 rounded-lg shadow-md"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMaps;
