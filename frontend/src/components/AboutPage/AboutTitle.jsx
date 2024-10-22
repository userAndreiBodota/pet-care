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
    <section className="flex flex-col items-center mt-10 w-full mb-32">
      <h1 className="text-5xl text-center mb-8 tracking-wider">About Us</h1>

      <h2 className="text-lg text-center mb-8 text-gray-600">
        Meet the Team Behind PetCare Hub
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-lg p-4 flex items-center justify-between w-full ${
              index >= 3 ? "md:col-span-1 lg:col-span-1" : ""
            }`}
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex-shrink-0 mr-4">
              {member.imgSrc ? (
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="rounded-full object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-500"></div>
              )}
            </div>

            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.email}</p>
            </div>

            <div className="ml-4 flex-shrink-0">
              <img
                src="/images/aboutUsIcon.png"
                alt="Custom Icon"
                className="h-6 w-6"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
