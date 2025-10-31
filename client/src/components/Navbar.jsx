import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, UserCircle2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo or Username */}
        {user ? (
          <button
            onClick={() => navigate("/patient-profile")}
            className="flex items-center gap-2 text-2xl font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 transition"
          >
            <UserCircle2 size={22} />
            <span className="capitalize">{user.username}</span>
          </button>
        ) : (
          <Link
            to="/"
            className="text-2xl font-bold text-sky-600 dark:text-sky-400"
          >
            Smile
          </Link>
        )}

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-sky-500 transition ${
                location.pathname === link.path
                  ? "text-sky-600 dark:text-sky-400 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          {!user && (
            <Link to="/login" className="hover:text-sky-500 transition">
              Login
            </Link>
          )}
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          {user && (
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-600 transition"
            >
              <LogOut size={22} />
            </button>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-700 shadow-lg transition-all">
          <div className="flex flex-col items-center py-4 space-y-4 text-gray-700 dark:text-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`hover:text-sky-500 transition ${
                  location.pathname === link.path
                    ? "text-sky-600 dark:text-sky-400 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            {!user && (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-500 transition"
              >
                Login
              </Link>
            )}
            {user && (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
