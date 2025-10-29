import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
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
      navigate("/dashboard-patient");
    } else if (email === mockEmails.dentist) {
      navigate("/dashboard-dentist");
    } else if (email === mockEmails.admin) {
      navigate("/admin-panel");
    } else {
      alert("Invalid email. Use one of the mock accounts to test roles.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
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
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          {/* Mock Email Buttons */}
          <div className="flex flex-wrap justify-between gap-2 mb-4">
            <button
              type="button"
              onClick={() => fillMockEmail("patient")}
              className="text-sm bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-600 transition"
            >
              Patient Email
            </button>
            <button
              type="button"
              onClick={() => fillMockEmail("dentist")}
              className="text-sm bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-600 transition"
            >
              Dentist Email
            </button>
            <button
              type="button"
              onClick={() => fillMockEmail("admin")}
              className="text-sm bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-600 transition"
            >
              Admin Email
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md transition-all"
          >
            Log In
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center mt-4">
            <span className="h-px bg-gray-300 dark:bg-gray-700 w-1/4"></span>
            <span className="text-sm mx-3 text-gray-500">or</span>
            <span className="h-px bg-gray-300 dark:bg-gray-700 w-1/4"></span>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-600 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Login with Google</span>
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
