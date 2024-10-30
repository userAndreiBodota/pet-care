import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";

import Input from "../../parts/Input";
import { useAuthStore } from "../../store/authStore";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
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
              Welcome Back
            </h2>
            <p className="text-xl mb-6 text-center text-gray-600">
              Please enter your login details below.
            </p>

            <form onSubmit={handleLogin}>
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

              <div className="flex items-center mb-6">
                <Link
                  to="/forgot-password"
                  className="text-sm text-green-400 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {error && (
                <p className="text-red-500 font-semibold mb-2">{error}</p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white font-bold rounded-lg shadow-lg hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="w-6 h-6 animate-spin mx-auto" />
                ) : (
                  "Login"
                )}
              </motion.button>
            </form>
          </div>

          <div className="px-8 py-4 flex justify-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-green-400 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
