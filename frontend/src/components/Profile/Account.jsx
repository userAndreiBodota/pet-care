import React, { useState, useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import { FaEdit } from "react-icons/fa";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { PlusCircle, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const { user, updateUser, pets, logout, getRegisteredPets, deletePet } =
    useAuthStore();
  const [formData, setFormData] = useState({
    name: user.name,
    contactNo: user.contactNo,
    dob: new Date(user.dob).toISOString().split("T")[0],
    address: user.address,
    email: user.email,
    gender: user.gender,
  });
  const [editableField, setEditableField] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await updateUser(formData);
      alert("Account details updated successfully!");
      setEditableField(null);
    } catch (err) {
      console.error(err);
      alert("Failed to update account details.");
    }
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50 font-sans">
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-64 bg-white shadow-lg flex flex-col justify-between p-6"
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

              <div className="flex flex-wrap gap-4 ">
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

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex-1 p-8"
        >
          <div className="min-h-screen bg-gray-50 p-8">
            <h2 className="text-2xl font-bold mb-6">Account Details</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center mb-6">
                <div>
                  <div className="flex items-center">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={editableField !== "name"}
                      className={`text-xl font-bold ${
                        editableField === "name"
                          ? "border-b-2 border-gray-300 focus:border-green-500 outline-none"
                          : "border-none bg-transparent cursor-not-allowed"
                      }`}
                    />
                    <FaEdit
                      className="ml-2 cursor-pointer text-gray-500"
                      onClick={() => setEditableField("name")}
                    />
                  </div>
                  <p className="text-gray-600">{formData.email}</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Contact No.", name: "contactNo" },
                  { label: "Address", name: "address" },
                  { label: "Date of Birth", name: "dob" },
                ].map((field) => (
                  <div
                    key={field.name}
                    className="flex items-center justify-between"
                  >
                    <label className="text-gray-700">{field.label}</label>
                    <div className="flex items-center w-3/4">
                      <input
                        type={field.name === "dob" ? "date" : "text"}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        disabled={editableField !== field.name}
                        className={`flex-grow ${
                          editableField === field.name
                            ? "border-b-2 border-gray-300 focus:border-green-500 outline-none"
                            : "border-none bg-transparent cursor-not-allowed"
                        }`}
                      />
                      <FaEdit
                        className="ml-2 cursor-pointer text-gray-500"
                        onClick={() => setEditableField(field.name)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </motion.main>
      </div>
    </>
  );
};

export default Account;
