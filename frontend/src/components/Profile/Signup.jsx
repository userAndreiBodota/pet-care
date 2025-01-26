import { motion } from "framer-motion";
import { Loader, Lock, Mail, User, Phone, Calendar, Home } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "../../store/authStore.js";
import PasswordStrengthMeter from "../../parts/passWordStrengthMeter";
import Input from "../../parts/Input";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signup(email, password, name, contactNo, dob, address);
      navigate("/validation-code");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />

      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-black">
              Create Account
            </h2>
            <p className="text-xl mb-6 text-center text-gray-600">
              Welcome! Please enter your information below and get started.
            </p>

            <form onSubmit={handleSignUp}>
              <Input
                icon={User}
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                icon={Mail}
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                icon={Lock}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                icon={Phone}
                type="text"
                placeholder="Contact Number"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
              <Input
                icon={Calendar}
                type="date"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <Input
                icon={Home}
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              {error && (
                <p className="text-red-500 font-semibold mt-2">{error}</p>
              )}

              {/* <PasswordStrengthMeter password={password} /> */}

              <motion.button
                className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white font-bold rounded-lg shadow-lg hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="animate-spin mx-auto" size={24} />
                ) : (
                  "Sign Up"
                )}
              </motion.button>
            </form>
          </div>
          <div className="px-8 py-4 flex justify-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link to={"/login"} className="text-green-400 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
