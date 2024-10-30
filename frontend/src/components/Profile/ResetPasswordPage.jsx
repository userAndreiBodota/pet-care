import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { Loader, Lock } from "lucide-react";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/authStore";
import Input from "../../parts/Input";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, error, isLoading, message } = useAuthStore();

  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await resetPassword(token, password);

      toast.success(
        "Password reset successfully, redirecting to login page..."
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Error resetting password");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className="p-8 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center text-black bg-gradient-to-r from-gray-700 to-gray-900 text-transparent bg-clip-text">
              Reset Password
            </h2>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {message && (
              <p className="text-green-500 text-sm mb-4">{message}</p>
            )}

            <form onSubmit={handleSubmit}>
              <Input
                icon={Lock}
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Input
                icon={Lock}
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

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
                  "Set New Password"
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default ResetPasswordPage;