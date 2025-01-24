//RESPONSIVE DONE

import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { Link } from "react-router-dom";
import { PlusCircle, LogOut } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Newborn from "../Profile/image/newborndog.png";
import Puppy from "../Profile/image/puppy.png";
import Juniordog from "../Profile/image/juniordog.png";
import Adultdog from "../Profile/image/adultdog.png";
import Maturedog from "../Profile/image/maturedog.png";
import Seniordog from "../Profile/image/seniordog.png";
import NewbornCat from "../Profile/image/newborncat.png";
import Kitten from "../Profile/image/kitten.png";
import Juniorcat from "../Profile/image/juniorcat.png";
import Adultcat from "../Profile/image/adultcat.png";
import Maturecat from "../Profile/image/maturecat.png";
import Seniorcat from "../Profile/image/seniorcat.png";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, pets, getRegisteredPets, logout, deletePet } = useAuthStore();
  const [currentPetIndex, setCurrentPetIndex] = useState(0);
  const [uploadedPhotos, setUploadedPhotos] = useState({});
  const addMilestone = useAuthStore((state) => state.addMilestone);
  useEffect(() => {
    if (user) {
      getRegisteredPets();
    }
  }, [user, getRegisteredPets]);

  const handlePetClick = (petId) => {
    navigate(`/pets/${petId}`);
  };

  const handleLogout = () => {
    logout();
  };

  const handleNextPet = () => {
    setCurrentPetIndex((prevIndex) => (prevIndex + 1) % pets.length);
  };

  const handlePrevPet = () => {
    setCurrentPetIndex((prevIndex) =>
      prevIndex === 0 ? pets.length - 1 : prevIndex - 1
    );
  };

  const handleDelete = async (petId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this pet?"
    );
    if (!confirmed) return;

    try {
      await deletePet(petId);
      alert("Pet deleted successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to delete the pet");
    }
  };

  const handlePhotoUpload = async (e, petType, stage) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedPhotos((prev) => ({
        ...prev,
        [`${petType}-${stage}`]: URL.createObjectURL(file),
      }));

      const petId = pets[currentPetIndex]._id; // Replace with the actual pet ID

      try {
        await addMilestone(petId, stage, file);
        console.log("Photo uploaded successfully");
      } catch (error) {
        console.log("Error uploading photo", error);
      }
    }
  };

  const getMilestonesForPet = (type) => {
    const dogMilestones = [
      {
        stage: "Newborn",
        description: "A small, sleeping puppy.",
        ageRange: "0 - 2 weeks",
        visual:
          "A very young puppy, blind and deaf, fully dependent on its mother.",
        src: Newborn,
      },
      {
        stage: "Puppy",
        description: "Playful, clumsy puppy.",
        ageRange: "2 wks - 6 mos",
        visual: "Exploring the world, learning to walk, play, and socialize.",
        src: Puppy,
      },
      {
        stage: "Junior",
        description: "Energetic dog in training.",
        ageRange: "6 mos - 1 year",
        visual: "Adolescence, with rapid physical growth and training needed.",
        src: Juniordog,
      },
      {
        stage: "Adult",
        description: "Strong and healthy adult dog.",
        ageRange: "1 - 3 years",
        visual: "Full maturity, physically developed, and behaviorally stable.",
        src: Adultdog,
      },
      {
        stage: "Mature",
        description: "Calm, balanced dog.",
        ageRange: "3 - 7 years",
        visual: "Dogs are in their prime but begin to slow down slightly.",
        src: Maturedog,
      },
      {
        stage: "Senior",
        description: "A slow older dog with gray fur.",
        ageRange: "7+ years",
        visual:
          "Dogs enter old age, often slower with age-related health needs.",
        src: Seniordog,
      },
    ];

    // Milestones for Cats
    const catMilestones = [
      {
        stage: "Kitten",
        description: "A tiny kitten just opening its eyes.",
        ageRange: "0 - 2 months",
        visual:
          "Dependent on its mother, learning basic behaviors and developing motor skills.",
        src: NewbornCat,
      },
      {
        stage: "Young Cat",
        description: "Playful and curious.",
        ageRange: "2 - 6 months",
        visual: "Exploring the world, learning to hunt and socialize.",
        src: Kitten,
      },
      {
        stage: "Junior",
        description: "A curious and active young cat.",
        ageRange: "6 months - 2 years",
        visual:
          "Building strength and skills, full of energy and playful behavior.",
        src: Juniorcat,
      },
      {
        stage: "Adult",
        description: "Confident and independent adult cat.",
        ageRange: "2 - 6 years",
        visual:
          "Fully mature, maintaining physical health and exhibiting stable behavior.",
        src: Adultcat,
      },
      {
        stage: "Mature",
        description: "A calm and wise cat.",
        ageRange: "6 - 10 years",
        visual:
          "Entering a slower stage of life, but still active and curious.",
        src: Maturecat,
      },
      {
        stage: "Senior",
        description: "A senior cat with a gentle demeanor.",
        ageRange: "10+ years",
        visual:
          "Enjoying a relaxed lifestyle, with age-related health considerations.",
        src: Seniorcat,
      },
    ];

    return type === "Dog" ? dogMilestones : catMilestones;    
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50 font-sans flex-col lg:flex-row">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="lg:w-64 w-full bg-white shadow-lg flex flex-col justify-between p-6"
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-10">
              Pet-Care <span className="text-green-500">Hub</span>
            </h1>
            <nav className="space-y-6">
              <Link
                to="/dashboard"
                className="flex items-center space-x-3 text-gray-800 hover:bg-gray-100 rounded-lg p-3"
              >
                <span className="text-lg font-semibold">Dashboard</span>
              </Link>

              <div className="flex flex-wrap gap-4">
                {pets.map((pet) => (
                  <div key={pet._id} className="relative">
                    <img
                      key={pet.id}
                      src={pet.image}
                      alt={pet.name}
                      className="w-16 h-16 object-cover rounded-full cursor-pointer"
                      onClick={() => handlePetClick(pet._id)}
                    />
                    <button
                      onClick={() => handleDelete(pet._id)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>

              <Link
                to="/add-pet"
                className="flex items-center space-x-3 text-gray-800 hover:bg-gray-100 rounded-lg p-3"
              >
                <PlusCircle size={20} />
                <span className="text-lg font-semibold">Add New</span>
              </Link>
              <Link
                to="/account"
                className="flex items-center space-x-3 text-gray-800 hover:bg-gray-100 rounded-lg p-3"
              >
                <span>Account</span>
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-800">Hello, {user.name}</p>
            <button onClick={handleLogout} className="ml-auto text-red-500">
              <LogOut size={20} />
            </button>
          </div>
        </motion.aside>

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex-1 p-8"
        >
          {/* Pets Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Pets</h2>
            {pets.length > 0 ? (
              <div className="relative flex justify-center items-center gap-4 bg-black p-6 rounded-lg shadow-lg lg:w-full md:w-3/4 w-full mx-auto">
                <button
                  onClick={handlePrevPet}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
                >
                  &lt;
                </button>

                <div className="text-center">
                  <h3 className="flex items-center text-xl font-semibold text-white">
                    {pets[currentPetIndex].gender === "Male" ? (
                      <FontAwesomeIcon icon={faMars} className="mr-2" />
                    ) : (
                      <FontAwesomeIcon icon={faVenus} className="mr-2" />
                    )}
                    {pets[currentPetIndex].name}
                  </h3>
                  <p className="text-sm text-white">
                    {pets[currentPetIndex].type} | {pets[currentPetIndex].breed}
                  </p>
                </div>

                <div className="relative w-32 h-32 mx-6">
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-400 opacity-30 blur-lg"></div>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-500 opacity-50 blur-xl"></div>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gray-600 opacity-70 blur-2xl"></div>
                  <img
                    src={pets[currentPetIndex].image}
                    alt={pets[currentPetIndex].name}
                    className="relative w-32 h-32 object-cover rounded-full"
                  />
                </div>

                <button
                  onClick={handleNextPet}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
                >
                  &gt;
                </button>
              </div>
            ) : (
              <Link
                to="/add-pet"
                className="flex flex-col items-center justify-center p-6 bg-gray-100 text-gray-500 rounded-lg"
              >
                <PlusCircle size={40} />
                <p>Add Pet</p>
              </Link>
            )}
          </section>

          <div>
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Your Pet's Growth
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {getMilestonesForPet(pets[currentPetIndex]?.type).map(
                  (milestone, index) => (
                    <div
                      key={index}
                      className="relative flex flex-col items-center gap-4"
                    >
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                        <label
                          htmlFor={`upload-${pets[currentPetIndex]?.type}-${milestone.stage}`}
                          className="flex items-center justify-center w-full h-full bg-gray-300 text-gray-700 cursor-pointer hover:bg-gray-400 relative"
                          style={{
                            backgroundImage: uploadedPhotos[
                              `${pets[currentPetIndex]?.type}-${milestone.stage}`
                            ]
                              ? `url(${
                                  uploadedPhotos[
                                    `${pets[currentPetIndex]?.type}-${milestone.stage}`
                                  ]
                                })`
                              : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          {!uploadedPhotos[
                            `${pets[currentPetIndex]?.type}-${milestone.stage}`
                          ] && <span className="text-2xl font-bold">+</span>}
                        </label>
                        <input
                          type="file"
                          id={`upload-${pets[currentPetIndex]?.type}-${milestone.stage}`}
                          className="hidden"
                          onChange={(e) =>
                            handlePhotoUpload(
                              e,
                              pets[currentPetIndex]?.type,
                              milestone.stage
                            )
                          }
                        />
                        {uploadedPhotos[
                          `${pets[currentPetIndex]?.type}-${milestone.stage}`
                        ] && (
                          <button
                            onClick={() =>
                              setUploadedPhotos((prev) => ({
                                ...prev,
                                [`${pets[currentPetIndex]?.type}-${milestone.stage}`]:
                                  null, // Remove the uploaded image
                              }))
                            }
                            className="absolute top-1 right-1 bg-gray-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-500"
                          >
                            &times;
                          </button>
                        )}
                      </div>

                      {/* Milestone Details */}
                      <div className="w-full bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center gap-2">
                        <img
                          src={milestone.src}
                          alt={`${milestone.stage} visual`}
                          className="w-20 h-20 object-contain mb-2"
                        />
                        <div className="w-full bg-black text-white text-center p-2 rounded-lg">
                          <p className="text-sm font-medium">
                            {milestone.description}
                          </p>
                        </div>
                        <div className="w-full bg-gray-200 text-gray-700 text-sm text-center p-2 rounded-lg">
                          <p>
                            <span className="font-bold">
                              {milestone.ageRange}
                            </span>
                          </p>
                          <p>{milestone.visual}</p>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>
          </div>
        </motion.main>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
