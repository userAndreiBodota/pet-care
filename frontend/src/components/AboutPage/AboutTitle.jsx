//responsive na 

import React from "react";

const AboutSection = () => {
  const teamMembers = [
    {
      name: "Andrei Bodota",
      email: "bodotaandrei@gmail.com",
      imgSrc: "/images/Andy.png",
    },
    {
      name: "Jm Dinglasan",
      email: "jm.dinglasan19@gmail.com",
      imgSrc: "/images/Jm.png",
    },
    {
      name: "Jemen Pastor",
      email: "pastorjemen@gmail.com",
      imgSrc: "/images/Jemen.png",
    },
    {
      name: "Jc Remolacio",
      email: "jcremolacio17@gmail.com",
      imgSrc: "/images/Jc.png",
    },
    {
      name: "Yuki Villanueva",
      email: "vgmiyu@gmail.com",
      imgSrc: "/images/Yuki.png",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-10 px-4 sm:px-6 lg:px-8 w-full mb-32">
      <h1 className="text-4xl md:text-5xl text-center mb-6 md:mb-8 tracking-wider font-bold">
        About Us
      </h1> 

      <h2 className="text-md sm:text-lg text-center mb-8 text-gray-600">
        Meet the Team Behind PetCare Hub
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center w-full hover:scale-105 transform transition duration-300"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-100 rounded-full flex-shrink-0 mb-4">
              {member.imgSrc ? (
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="rounded-full object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-500">No Image</div>
              )}
            </div>

            <h3 className="text-lg font-semibold text-center mb-2">{member.name}</h3>
            <p className="text-gray-600 text-center">{member.email}</p>

            <div className="mt-4">
              <img
                src="/images/aboutUsIcon.png"
                alt="Custom Icon"
                className="h-6 w-6 mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
