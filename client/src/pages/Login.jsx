import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mockEmails = {
    patient: "patient@example.com",
    dentist: "dentist@example.com",
    admin: "admin@example.com",
  };

  const fillMockEmail = (role) => {
    setEmail(mockEmails[role]);
    setPassword("123456");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === mockEmails.patient) {
      login(email, "patient");
      navigate("/dashboard-patient");
    } else if (email === mockEmails.dentist) {
      login(email, "dentist");
      navigate("/dashboard-dentist");
    } else if (email === mockEmails.admin) {
      login(email, "admin");
      navigate("/admin-panel");
    } else {
      alert("Invalid email. Use one of the mock accounts to test roles.");
    }
  };

  const handleGoogleLogin = () => {
    // Mock Google login: always logs in as patient
    login("googleuser@example.com", "patient");
    navigate("/dashboard-patient");
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
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Log in to manage your appointments and smile brighter!
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
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

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
            />
            <div className="text-right mt-2">
              <Link
                to="/forgot-password"
                className="text-sm text-sky-600 dark:text-sky-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-2 mb-4">
            {Object.keys(mockEmails).map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => fillMockEmail(role)}
                className="text-sm bg-sky-100 dark:bg-gray-800 text-sky-600 dark:text-sky-400 px-3 py-1 rounded-lg hover:shadow-md hover:bg-sky-200 dark:hover:bg-gray-700 transition"
              >
                {role.charAt(0).toUpperCase() + role.slice(1)} Email
              </button>
            ))}
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg shadow-md transition-all hover:shadow-sky-400/50"
          >
            Log In
          </motion.button>

          {/* Divider */}
          <div className="flex items-center justify-center mt-4">
            <span className="h-px bg-gray-300 dark:bg-gray-700 w-1/4"></span>
            <span className="text-sm mx-3 text-gray-500 dark:text-gray-400">
              or
            </span>
            <span className="h-px bg-gray-300 dark:bg-gray-700 w-1/4"></span>
          </div>

          {/* Google Login Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-700 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Login with Google</span>
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-sky-600 dark:text-sky-400 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
