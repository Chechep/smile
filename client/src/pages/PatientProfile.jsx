import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserCircle2,
  Save,
  Lock,
  CalendarDays,
  Stethoscope,
} from "lucide-react";

export default function PatientProfile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [saved, setSaved] = useState(false);

  // Sample appointments
  const [appointments] = useState([
    {
      date: "Nov 5, 2025",
      time: "10:00 AM",
      dentist: "Dr. Jane Mwangi",
      status: "Upcoming",
    },
    {
      date: "Oct 21, 2025",
      time: "09:30 AM",
      dentist: "Dr. Peter Kamau",
      status: "Completed",
    },
    {
      date: "Sep 10, 2025",
      time: "11:00 AM",
      dentist: "Dr. Mary Achieng",
      status: "Completed",
    },
  ]);

  useEffect(() => {
    const storedName = localStorage.getItem("username");
    setUsername(storedName || "");
  }, []);

  const handleSave = () => {
    if (!username.trim()) {
      alert("Username cannot be empty.");
      return;
    }

    localStorage.setItem("username", username);

    if (password.trim()) {
      localStorage.setItem("userPassword", password);
    }

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
    localStorage.removeItem("userPassword");
    navigate("/login");
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors pt-28 px-6 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-10">
          <div className="flex flex-col items-center mb-6">
            <UserCircle2 className="text-sky-600 dark:text-sky-400 mb-3" size={60} />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Patient Profile
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Manage your account details
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Change Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-3 text-gray-400 dark:text-gray-500"
                />
                <input
                  type="password"
                  placeholder="New password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-sky-500 outline-none transition"
                />
              </div>
            </div>

            <button
              onClick={handleSave}
              className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-lg transition-all shadow-md"
            >
              <Save size={18} />
              Save Changes
            </button>

            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-all shadow-md"
            >
              <Lock size={18} />
              Logout
            </button>
          </div>

          {saved && (
            <div className="mt-6 text-center text-green-600 dark:text-green-400 font-medium animate-pulse">
              ✅ Changes saved successfully!
            </div>
          )}
        </div>

        {/* My Appointments Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-6">
            <CalendarDays className="text-sky-600 dark:text-sky-400" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              My Appointments
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Dentist</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition"
                  >
                    <td className="py-3 px-4 text-gray-800 dark:text-gray-200">
                      {appt.date}
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      {appt.time}
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      {appt.dentist}
                    </td>
                    <td
                      className={`py-3 px-4 font-medium ${
                        appt.status === "Completed"
                          ? "text-green-600"
                          : "text-sky-600"
                      }`}
                    >
                      {appt.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-right mt-6">
            <button
              onClick={() => navigate("/book-appointment")}
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white py-2 px-5 rounded-lg transition-all shadow-md"
            >
              <Stethoscope size={18} />
              Book New Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
