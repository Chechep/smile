import { motion } from "framer-motion";
import { Users, Stethoscope, Calendar, Settings } from "lucide-react";

export default function AdminPanel() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Total Patients",
      value: "324",
      color: "bg-blue-50 dark:bg-blue-900/30",
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-green-600" />,
      title: "Active Dentists",
      value: "12",
      color: "bg-green-50 dark:bg-green-900/30",
    },
    {
      icon: <Calendar className="w-8 h-8 text-yellow-600" />,
      title: "Appointments Today",
      value: "48",
      color: "bg-yellow-50 dark:bg-yellow-900/30",
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: "System Settings",
      value: "Admin Access",
      color: "bg-purple-50 dark:bg-purple-900/30",
    },
  ];

  const recentActivity = [
    { name: "Dr. Sarah Mumo", action: "Approved new patient", time: "2h ago" },
    { name: "Admin John", action: "Updated dentist record", time: "4h ago" },
    { name: "Dr. Kim", action: "Added appointment slots", time: "6h ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 px-6 md:px-12 transition-colors">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Admin Dashboard
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

      {/* Recent Activity */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {recentActivity.map((log, index) => (
            <div key={index} className="py-3 flex justify-between items-center">
              <div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  {log.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {log.action}
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {log.time}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Manage Section */}
      <section className="mt-16 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-2xl bg-blue-50 dark:bg-blue-900/30 shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Manage Dentists
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Add, edit, or remove dentists from the Smile Dental network.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg transition">
            View Dentists
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-2xl bg-green-50 dark:bg-green-900/30 shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
            Manage Patients
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Review and manage patient profiles, appointments, and histories.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-lg transition">
            View Patients
          </button>
        </motion.div>
      </section>
    </div>
  );
}
