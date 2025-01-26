import React, { useState, useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { PlusCircle, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Account = () => {
  const navigate = useNavigate();
  const { user, updateUser, pets, logout, getRegisteredPets, deletePet } =
    useAuthStore();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    contactNo: user?.contactNo || "",
    dob: user?.dob ? new Date(user.dob).toISOString().split("T")[0] : "",
    address: user?.address || "",
    email: user?.email || "",
    gender: user?.gender || "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      getRegisteredPets();
    }
  }, [user, getRegisteredPets]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    // Check if all fields are filled
    for (const [key, value] of Object.entries(formData)) {
      if (!value.trim() && key !== "gender") {
        toast.error(`${key[0].toUpperCase() + key.slice(1)} is required.`);
        return false;
      }
    }

    // Check if the contact number has exactly 11 digits
    if (!/^\d{11}$/.test(formData.contactNo)) {
      toast.error("Contact number must contain exactly 11 digits.");
      return false;
    }

    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    try {
      await updateUser(user._id, formData);
      toast.success("Account Details Updated Successfully!");
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update account details.");
    }
  };

  const handleLogout = () => {
    logout();
  };

  const handlePetClick = (petId) => {
    navigate(`/pets/${petId}`);
  };

  const handleDelete = async (petId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this pet?"
    );
    if (!confirmed) return;

    try {
      await deletePet(petId);
      toast.success("Pet deleted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete the pet!");
    }
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gradient-to-r from-gray-50 to-blue-50 font-sans">
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-64 bg-white shadow-lg rounded-lg flex flex-col justify-between p-6 border border-gray-200"
        >
          {/* SIDEBAR */}
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
              <div className="flex flex-wrap gap-4">
                {pets.map((pet) => (
                  <div
                    key={pet._id}
                    className="relative border border-gray-300 rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-16 h-16 object-cover rounded-full cursor-pointer"
                      onClick={() => handlePetClick(pet._id)}
                    />
                    <button
                      onClick={() => handleDelete(pet._id)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
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

          {/* SIDEBAR */}
          <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg border border-gray-200">
            <p className="text-gray-800">Hello, {user?.name}</p>
            <button
              onClick={handleLogout}
              className="ml-auto text-red-500 hover:text-red-600"
            >
              <LogOut size={20} />
            </button>
          </div>
        </motion.aside>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex-1 p-8"
        >
          <div
            className={`p-8 rounded-lg shadow-lg max-w-4xl mx-auto border ${
              isEditing
                ? "bg-green-50 border-green-400"
                : "bg-gray-50 border-gray-300"
            } transition-colors`}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Account Details
              </h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 bg-customGray text-white rounded-lg shadow hover:bg-customGrey transition-colors"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
            </div>
            <div className="space-y-6">
              {[
                { label: "Name", name: "name" },
                { label: "Email", name: "email", disabled: true },
                { label: "Contact No.", name: "contactNo" },
                { label: "Address", name: "address" },
                { label: "Date of Birth", name: "dob" },
              ].map((field) => (
                <div
                  key={field.name}
                  className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                  <label
                    className="text-gray-700 font-medium w-1/4"
                    htmlFor={field.name}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    type={field.name === "dob" ? "date" : "text"}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    disabled={!isEditing || field.disabled}
                    className={`w-3/4 px-4 py-2 rounded-lg border ${
                      isEditing
                        ? "border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        : "bg-gray-100 border-gray-300 cursor-not-allowed"
                    }`}
                  />
                </div>
              ))}
            </div>
            {isEditing && (
              <div className="text-center mt-8">
                <button
                  onClick={handleSave}
                  className="bg-customGray text-white px-8 py-3 rounded-lg shadow hover:bg-customGrey transition-colors"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </motion.main>
      </div>
      <ToastContainer />
    </>
  );
};

export default Account;
