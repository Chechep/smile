import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:scale-105 transition-all bg-white dark:bg-gray-800 shadow-md"
    >
      {darkMode ? (
        <Sun className="text-yellow-400 w-5 h-5" />
      ) : (
        <Moon className="text-gray-800 w-5 h-5" />
      )}
    </button>
  );
}
