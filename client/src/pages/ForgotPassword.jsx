import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email to reset your password.");
    } else {
      setMessage(
        "If this email is registered, a password reset link has been sent."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-sky-100 to-white dark:from-black dark:to-gray-950 text-gray-800 dark:text-gray-100 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-sky-600 dark:text-sky-400">
          Forgot Password?
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          Enter your registered email address to receive a password reset link.
        </p>

        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg shadow-md transition-all hover:shadow-sky-400/50"
          >
            Send Reset Link
          </motion.button>
        </form>

        {message && (
          <p className="text-center text-sm text-sky-600 dark:text-sky-400 mt-4">
            {message}
          </p>
        )}

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Remembered your password?{" "}
          <Link
            to="/login"
            className="text-sky-600 dark:text-sky-400 font-medium hover:underline"
          >
            Back to Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
