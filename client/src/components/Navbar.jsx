import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  LogOut,
  UserCircle2,
  Stethoscope,
  Shield,
} from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setUserRole(role);
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isLoggedIn");
    setUserRole(null);
    setIsLoggedIn(false);
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Pick correct icon based on user role
  const roleIcon =
    userRole === "patient" ? (
      <UserCircle2 size={20} />
    ) : userRole === "dentist" ? (
      <Stethoscope size={20} />
    ) : userRole === "admin" ? (
      <Shield size={20} />
    ) : null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Smile<span className="text-gray-900 dark:text-gray-100">Dental</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-blue-500 transition ${
                location.pathname === link.path
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          {!isLoggedIn && (
            <Link
              to="/login"
              className={`hover:text-blue-500 transition ${
                location.pathname === "/login"
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : ""
              }`}
            >
              Login
            </Link>
          )}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Role Icon + Label */}
          {isLoggedIn && userRole && (
            <div className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
              {roleIcon}
              <span className="capitalize">{userRole}</span>
            </div>
          )}

          {/* Dark Mode Toggle */}
          <DarkModeToggle />

          {/* Logout Icon */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-600 dark:hover:text-red-400 transition"
              title="Logout"
            >
              <LogOut size={22} />
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-700 backdrop-blur-xl shadow-lg transition-all">
          <div className="flex flex-col items-center py-4 space-y-4 text-gray-700 dark:text-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`hover:text-blue-500 transition ${
                  location.pathname === link.path
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            {!isLoggedIn && (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={`hover:text-blue-500 transition ${
                  location.pathname === "/login"
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : ""
                }`}
              >
                Login
              </Link>
            )}

            {isLoggedIn && (
              <>
                <div className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  {roleIcon}
                  <span className="capitalize">{userRole}</span>
                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-red-500 hover:text-red-600 dark:hover:text-red-400 transition"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
