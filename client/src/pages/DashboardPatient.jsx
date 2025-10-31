import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Stethoscope, Clock, HeartPulse, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DashboardPatient() {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "Nov 5, 2025",
      time: "10:00 AM",
      dentist: "Dr. Jane Mwangi",
      status: "Upcoming",
    },
    {
      id: 2,
      date: "Oct 21, 2025",
      time: "09:30 AM",
      dentist: "Dr. Peter Kamau",
      status: "Completed",
    },
    {
      id: 3,
      date: "Sep 10, 2025",
      time: "11:00 AM",
      dentist: "Dr. Mary Achieng",
      status: "Completed",
    },
  ]);

  const [treatments, setTreatments] = useState([
    {
      id: 1,
      date: "Oct 21, 2025",
      procedure: "Root Canal",
      dentist: "Dr. Peter Kamau",
      notes: "Successful treatment; follow-up after 2 weeks.",
    },
    {
      id: 2,
      date: "Sep 10, 2025",
      procedure: "Teeth Cleaning",
      dentist: "Dr. Mary Achieng",
      notes: "Routine cleaning and plaque removal.",
    },
  ]);

  const stats = [
    {
      icon: <CalendarDays className="w-8 h-8 text-blue-600" />,
      title: "Upcoming Appointment",
      value: "Nov 5, 10:00 AM",
      color: "bg-blue-50 dark:bg-blue-900/30",
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-green-600" />,
      title: "Assigned Dentist",
      value: "Dr. Jane Mwangi",
      color: "bg-green-50 dark:bg-green-900/30",
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-600" />,
      title: "Last Visit",
      value: "Oct 21, 2025",
      color: "bg-yellow-50 dark:bg-yellow-900/30",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-red-600" />,
      title: "Treatment Progress",
      value: "75%",
      color: "bg-red-50 dark:bg-red-900/30",
    },
  ];

  const handleDeleteAppointment = (id) => {
    if (confirm("Are you sure you want to delete this appointment?")) {
      setAppointments(appointments.filter((a) => a.id !== id));
    }
  };

  const handleDeleteTreatment = (id) => {
    if (confirm("Are you sure you want to delete this treatment record?")) {
      setTreatments(treatments.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 px-6 md:px-12 transition-colors">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Patient Dashboard
      </motion.h1>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-sm hover:shadow-md transition-all ${item.color}`}
          >
            <div className="flex items-center justify-between mb-3">{item.icon}</div>
            <h3 className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
              {item.title}
            </h3>
            <p className="text-lg font-bold text-gray-900 dark:text-white">{item.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Appointment History */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 max-w-5xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Appointment History
        </h2>
        <div className="overflow-x-auto">
          <AnimatePresence>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Time</th>
                  <th className="py-3 px-4">Dentist</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <motion.tr
                    key={appt.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition"
                  >
                    <td className="py-3 px-4 text-gray-800 dark:text-gray-200">{appt.date}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{appt.time}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{appt.dentist}</td>
                    <td
                      className={`py-3 px-4 font-medium ${
                        appt.status === "Completed" ? "text-green-600" : "text-blue-600"
                      }`}
                    >
                      {appt.status}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => handleDeleteAppointment(appt.id)}
                        className="text-red-500 hover:text-red-700 transition"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Treatment History */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Treatment History
        </h2>
        <AnimatePresence>
          <div className="space-y-4">
            {treatments.map((treat) => (
              <motion.div
                key={treat.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 flex justify-between items-start"
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">
                      {treat.procedure}
                    </p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {treat.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Dentist: <span className="font-medium">{treat.dentist}</span>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Notes: {treat.notes}</p>
                </div>
                <button
                  onClick={() => handleDeleteTreatment(treat.id)}
                  className="text-red-500 hover:text-red-700 transition mt-1"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </motion.div>

      {/* Book Appointment Section */}
      <section className="mt-16 max-w-3xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-2xl bg-blue-50 dark:bg-blue-900/30 shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Book a New Appointment
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Schedule your next visit with your preferred dentist.
          </p>
          <button
            onClick={() => navigate("/book-appointment")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg transition"
          >
            Book Now
          </button>
        </motion.div>
      </section>
    </div>
  );
}
