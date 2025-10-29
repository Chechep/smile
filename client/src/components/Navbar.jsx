import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useAppContext();

  return (
    <nav className="backdrop-blur-lg fixed top-0 left-0 w-full z-50 shadow-md border-b border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Smile 🦷
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-blue-500 dark:hover:text-blue-300">
            Home
          </Link>
          <Link to="/login" className="hover:text-blue-500 dark:hover:text-blue-300">
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all"
          >
            Sign Up
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
