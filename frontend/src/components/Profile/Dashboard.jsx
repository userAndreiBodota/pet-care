import React from "react";
import { useAuthStore } from "../../store/authStore";
import { Link } from "react-router-dom";
import { PlusCircle, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-100 font-sans">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="w-64 bg-gray-50 flex flex-col justify-between p-6"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-gray-800 mb-10">
              Pet-Care <span className="text-green-500">Hub</span>
            </h1>

            {/* Navigation Links */}
            <nav className="space-y-4">
              <Link
                to="/add-pet"
                className="flex items-center space-x-2 text-gray-700 hover:text-green-500"
              >
                <PlusCircle size={20} />
                <span className="text-lg font-semibold">Add New</span>
              </Link>
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-lg p-2"
              >
                <span>Dashboard</span>
              </Link>
              <Link
                to="/account"
                className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 rounded-lg p-2"
              >
                <span>Account</span>
              </Link>
            </nav>
          </motion.div>

          {/* User Profile */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center space-x-4 mt-10 p-4 rounded-lg bg-w shadow"
          >
            <p className="text-gray-800">Hello! {user.name}</p>

            <div></div>
            <button className="ml-auto text-gray-400 hover:text-red-500">
              <LogOut
                size={20}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
              />
            </button>
          </motion.div>
        </motion.aside>

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex-1 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center max-w-md mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Uh Oh!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Looks like you have no profiles set up at this moment, add your
              pet now
            </p>
            <div className="flex justify-center mb-8">
              <img
                src="/path/to/placeholder-image.png" // Add your image path here
                alt="No Pets"
                className="w-40 h-40 opacity-50"
              />
            </div>
            <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Add a pet now
            </button>
          </motion.div>
        </motion.main>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
