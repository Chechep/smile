import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Smile<span className="text-gray-900 dark:text-gray-100">Dental</span>
        </Link>

        <div className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-medium">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/services" className="hover:text-blue-500">Services</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          <Link to="/login" className="hover:text-blue-500">Login</Link>
        </div>

        <div className="flex items-center space-x-4">
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
