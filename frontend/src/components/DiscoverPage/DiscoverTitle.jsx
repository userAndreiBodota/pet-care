import React from "react";
import Blur from "../DiscoverPage/images/discoverBlur.png";

const DiscoverTitle = () => {
  return (
    <div className="relative h-lvh mx">
      <img
        src={Blur}
        alt="Container for Discover Title"
        style={{ width: "80%", height: "500px" }}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 ">
        <h1 className="text-2xl md:text-4xl text-center text-gray-900 mb-4">
          What is <span className="font-bold text-gray-950">Pet Care</span>{" "}
          <span className="text-green-700">Hub?</span>
        </h1>
        <p className="text-sm md:text-base text-center max-w-prose text-gray-700">
          PetCare Hub is an all-in-one website designed to support pet owners
          and enthusiasts by providing valuable resources on pet care. Whether
          you're a new pet owner or experienced, our platform offers essential
          information such as pet care tips, emergency handling guides, and
          health advice tailored for various pets like dogs, cats, birds, and
          more. With an interactive chatbot to answer questions and a map
          feature to find nearby vet clinics, PetCare Hub makes it easy for you
          to access everything you need to keep your pets happy and healthy.
        </p>
      </div>
    </div>
  );
};

export default DiscoverTitle;
