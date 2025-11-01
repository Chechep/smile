import { motion } from "framer-motion";
import { CalendarDays, Users, Clock, ClipboardList, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function DentistPanel() {
  const [showAllPatients, setShowAllPatients] = useState(false);

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

  const patients = [
    {
      name: "John Doe",
      issue: "Toothache and sensitivity",
      phone: "+254 712 345 678",
      email: "john.doe@email.com",
      lastVisit: "2024-01-15"
    },
    {
      name: "Mary Wanjiku",
      issue: "Root canal treatment",
      phone: "+254 723 456 789",
      email: "mary.wanjiku@email.com",
      lastVisit: "2024-01-10"
    },
    {
      name: "Kevin Otieno",
      issue: "Regular dental checkup",
      phone: "+254 734 567 890",
      email: "kevin.otieno@email.com",
      lastVisit: "2024-01-08"
    },
    {
      name: "Grace Achieng",
      issue: "Cavity filling",
      phone: "+254 745 678 901",
      email: "grace.achieng@email.com",
      lastVisit: "2024-01-05"
    },
    {
      name: "David Kamau",
      issue: "Teeth whitening",
      phone: "+254 756 789 012",
      email: "david.kamau@email.com",
      lastVisit: "2024-01-03"
    },
    {
      name: "Sarah Mwende",
      issue: "Gum disease treatment",
      phone: "+254 767 890 123",
      email: "sarah.mwende@email.com",
      lastVisit: "2023-12-28"
    }
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
        className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 max-w-5xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Today's Appointments
          </h2>
          <button
            onClick={() => setShowAllPatients(!showAllPatients)}
            className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-lg transition font-medium"
          >
            {showAllPatients ? "Show Appointments" : "View All Patients"}
          </button>
        </div>

        {!showAllPatients ? (
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
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                  <th className="py-3 px-4">Patient Name</th>
                  <th className="py-3 px-4">Medical Issue</th>
                  <th className="py-3 px-4">Phone</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Last Visit</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition"
                  >
                    <td className="py-3 px-4 text-gray-800 dark:text-gray-200 font-medium">
                      {patient.name}
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      {patient.issue}
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        {patient.phone}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {patient.email}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      {patient.lastVisit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* Manage Section */}
      <section className="mt-8 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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