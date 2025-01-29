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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    // Find the next pet index, ensuring that the pet has all required details
    let nextIndex = (currentPetIndex + 1) % pets.length;

    // Loop to find the next valid pet (with complete details)
    while (
      !(
        pets[nextIndex].name &&
        pets[nextIndex].breed &&
        pets[nextIndex].gender &&
        pets[nextIndex].weight &&
        pets[nextIndex].birthday &&
        //pets[nextIndex].age &&
        pets[nextIndex].image
      )
    ) {
      nextIndex = (nextIndex + 1) % pets.length;
    }

    // Set the current pet to the next valid pet
    setCurrentPetIndex(nextIndex);
  };

  const handlePrevPet = () => {
    // Find the previous pet index, ensuring that the pet has all required details
    let prevIndex =
      currentPetIndex === 0 ? pets.length - 1 : currentPetIndex - 1;

    // Loop to find the previous valid pet (with complete details)
    while (
      !(
        pets[prevIndex].name &&
        pets[prevIndex].breed &&
        pets[prevIndex].gender &&
        pets[prevIndex].weight &&
        pets[prevIndex].birthday &&
        //pets[prevIndex].age &&
        pets[prevIndex].image
      )
    ) {
      prevIndex = prevIndex === 0 ? pets.length - 1 : prevIndex - 1;
    }

    // Set the current pet to the previous valid pet
    setCurrentPetIndex(prevIndex);
  };

  const handleDelete = (petId) => {
    // Display a toast with confirmation options
    const deleteConfirmationToast = toast(
      <div className="flex flex-col items-center justify-center py-4 px-6 space-y-4">
        <span className="text-gray-700 text-center">
          Are you sure you want to delete this pet?
        </span>
        <div className="flex flex-col space-y-2">
          <button
            onClick={async () => {
              try {
                // Attempt to delete the pet
                await deletePet(petId);
                // Update the toast with a success message
                toast.update(deleteConfirmationToast, {
                  render: "Pet deleted successfully!",
                  type: "success",
                  isLoading: false,
                  autoClose: 5000,
                  closeOnClick: true,
                });
              } catch (err) {
                console.error(err);
                // Update the toast with an error message
                toast.update(deleteConfirmationToast, {
                  render: "Failed to delete the pet!",
                  type: "error",
                  isLoading: false,
                  autoClose: 5000,
                  closeOnClick: true,
                });
              }
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors w-full"
          >
            Yes
          </button>
          <button
            onClick={() => {
              toast.dismiss(deleteConfirmationToast); // Close the toast without action
            }}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors w-full"
          >
            No
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false, // Keep open until user selects an option
        closeOnClick: false, // Disable closing when clicked
        draggable: false, // Disable drag-to-close
        className: "confirmation-toast rounded-lg shadow-md", // Optional: Add custom class for styling
      }
    );
  };

  const handlePhotoUpload = async (event, petId, milestoneStage) => {
    const file = event.target.files[0]; // Get the selected file

    if (!file) {
      console.log("No file selected.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64Image = reader.result;

      try {
        setUploadedPhotos((prevState) => {
          const newState = {
            ...prevState,
            [`${petId}-${milestoneStage}`]: base64Image,
          };

          localStorage.setItem("uploadedPhotos", JSON.stringify(newState));

          return newState;
        });

        alert("Image uploaded successfully!");
      } catch (error) {
        console.error("Error processing the image:", error);
        alert("Error uploading image");
      }
    };

    reader.readAsDataURL(file);
  };

  const loadUploadedPhotosFromStorage = () => {
    const savedPhotos = localStorage.getItem("uploadedPhotos");
    if (savedPhotos) {
      setUploadedPhotos(JSON.parse(savedPhotos));
    }
  };

  useEffect(() => {
    loadUploadedPhotosFromStorage();
  }, []);

  // useEffect to track changes in uploadedPhotos state
  useEffect(() => {
    if (uploadedPhotos) {
      console.log("Uploaded photos state updated:", uploadedPhotos);
    }
  }, [uploadedPhotos]);

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
          <div className="border border-gray-300 bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-10 border-b pb-2 border-gray-200">
              Pet-Care <span className="text-green-800">Hub</span>
            </h1>
            <nav className="space-y-6">
              <Link
                to="/dashboard"
                className="flex items-center space-x-3 text-gray-800 hover:bg-green-100 rounded-lg p-3 transition-colors border border-gray-200 shadow-sm"
              >
                <span className="text-lg font-semibold">Dashboard</span>
              </Link>
              <div className="grid grid-cols-1 gap-4">
                {pets
                  .filter(
                    (pet) =>
                      pet.name &&
                      pet.breed &&
                      pet.gender &&
                      pet.weight &&
                      pet.birthday &&
                      // pet.age &&
                      pet.image
                  ) // Filter pets with all required details
                  .map((pet) => (
                    <div
                      key={pet._id}
                      className="relative border border-gray-300 rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow ml-6 mr-9"
                    >
                      <img
                        src={pet.image}
                        alt={pet.name}
                        className="w-16 h-16 object-cover rounded-full cursor-pointer"
                        onClick={() => handlePetClick(pet._id)}
                      />
                      <button
                        onClick={() => handleDelete(pet._id)}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full py-0 px-1 hover:bg-red-600"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
              </div>

              <Link
                to="/add-pet"
                className="flex items-center space-x-3 text-gray-800 hover:bg-green-100 rounded-lg p-3 transition-colors border border-gray-200 shadow-sm"
              >
                <PlusCircle size={20} />
                <span className="text-lg font-semibold">Add New</span>
              </Link>
              <Link
                to="/account"
                className="flex items-center space-x-3 text-gray-800 hover:bg-green-100 rounded-lg p-3 transition-colors border border-gray-200 shadow-sm"
              >
                <span>Account</span>
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg py-2">
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
                              `${pets[currentPetIndex]?._id}-${milestone.stage}`
                            ]
                              ? `url(${
                                  uploadedPhotos[
                                    `${pets[currentPetIndex]?._id}-${milestone.stage}`
                                  ]
                                })`
                              : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          {!uploadedPhotos[
                            `${pets[currentPetIndex]?._id}-${milestone.stage}`
                          ] && <span className="text-2xl font-bold">+</span>}
                        </label>

                        <input
                          type="file"
                          id={`upload-${pets[currentPetIndex]?.type}-${milestone.stage}`}
                          className="hidden"
                          onChange={(e) =>
                            handlePhotoUpload(
                              e,
                              pets[currentPetIndex]?._id,
                              milestone.stage
                            )
                          }
                        />

                        {uploadedPhotos[
                          `${pets[currentPetIndex]?._id}-${milestone.stage}`
                        ] && (
                          <button
                            onClick={() =>
                              setUploadedPhotos((prev) => ({
                                ...prev,
                                [`${pets[currentPetIndex]?._id}-${milestone.stage}`]:
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
      <ToastContainer />
    </>
  );
};

export default Dashboard;
