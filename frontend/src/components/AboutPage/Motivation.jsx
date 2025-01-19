//responsive na

import React from "react";

const Motivation = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-10 h-auto -mt-12">
      <h1 className="text-3xl md:text-4xl text-gray-950 tracking-wider font-semibold mb-4 text-center">
        Motivation behind <span className="text-green-800">the Website</span>
      </h1>
      <h2 className="text-md md:text-lg text-center mb-8 text-gray-600">
        Inspiring Pet Owners to Provide Exceptional Care for Their Furry Friends
      </h2>

      <div className="relative bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-4xl mb-24">
        <img
          src="/images/paw.png"
          alt="PetCare Hub Image"
          className="absolute inset-0 w-full h-full object-cover rounded-lg z-0 opacity-30"
        />

        <div className="relative z-10">
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed text-center">
            &quot;The idea for PetCare Hub came from our love for animals and
            the need to make pet care easier for owners. We saw that many pet
            owners have a hard time finding trustworthy information about
            emergencies, daily care, and health tips for their pets. Our goal is
            to create a single platform where pet owners can easily find expert
            advice, ask questions, and locate nearby vet clinics. By gathering
            all these resources in one place, we hope to help pet owners take
            the best care of their pets and make pet ownership a more enjoyable
            journey.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Motivation;
