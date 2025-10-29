import { motion } from "framer-motion";
import { CalendarDays, Users, Clock, ClipboardList } from "lucide-react";

export default function DentistPanel() {
  const stats = [
    {
      icon: <CalendarDays className="w-8 h-8 text-blue-600" />,
      title: "Today's Appointments",
      value: "14",
      color: "bg-blue-50 dark:bg-blue-900/30",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Total Patients",
      value: "92",
      color: "bg-green-50 dark:bg-green-900/30",
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-600" />,
      title: "Next Appointment",
      value: "2:30 PM",
      color: "bg-yellow-50 dark:bg-yellow-900/30",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-purple-600" />,
      title: "Pending Reports",
      value: "5",
      color: "bg-purple-50 dark:bg-purple-900/30",
    },
  ];

  const appointments = [
    {
      patient: "John Doe",
      time: "09:00 AM",
      service: "Dental Cleaning",
      status: "Completed",
    },
    {
      patient: "Mary Wanjiku",
      time: "10:30 AM",
      service: "Root Canal",
      status: "Ongoing",
    },
    {
      patient: "Kevin Otieno",
      time: "12:00 PM",
      service: "Checkup",
      status: "Upcoming",
    },
    {
      patient: "Grace Achieng",
      time: "2:30 PM",
      service: "Filling",
      status: "Upcoming",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 px-6 md:px-12 transition-colors">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Dentist Dashboard
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
            <div className="flex items-center justify-between mb-3">
              {item.icon}
            </div>
            <h3 className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
              {item.title}
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {item.value}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Appointment List */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Today's Appointments
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                <th className="py-3 px-4">Patient</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Service</th>
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
                    {appt.patient}
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                    {appt.time}
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                    {appt.service}
                  </td>
                  <td
                    className={`py-3 px-4 font-medium ${
                      appt.status === "Completed"
                        ? "text-green-600"
                        : appt.status === "Ongoing"
                        ? "text-yellow-600"
                        : "text-blue-600"
                    }`}
                  >
                    {appt.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Manage Section */}
      <section className="mt-16 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-2xl bg-blue-50 dark:bg-blue-900/30 shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Manage Appointments
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            View, reschedule, or cancel patient appointments.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg transition">
            View All
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-2xl bg-green-50 dark:bg-green-900/30 shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Patient Records
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Access and update medical histories or treatment notes.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-lg transition">
            View Records
          </button>
        </motion.div>
      </section>
    </div>
  );
}
