import React from "react";
import Dog from "../DiscoverPage/images/dog.png";

const WhyPetCareHub = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto bg-gray-100 rounded-lg p-8 flex items-center justify-between mb-12">
      {/* Text Section */}
      <div className="w-2/3">
        <h2 className="text-2xl">
          Why <span className="font-bold">Pet-Care Hub?</span>
        </h2>
        <p className="text-lg mt-4 tracking-wider">
          Our platform is built for convenience, offering easy-to-understand
          guides, a quick-answer chatbot, and a vet locator to find clinics near
          you. It simplifies the care process, helping you focus on giving the
          best care to your pets without the hassle of looking elsewhere.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-1/3">
        <img
          src={Dog}
          alt="Cat Illustration"
          className="object-cover h-56 absolute top-0 right-4"
        />
      </div>
    </div>
  );
};

export default WhyPetCareHub;
