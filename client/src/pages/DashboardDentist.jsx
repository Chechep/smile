import { useEffect } from "react";
import { CalendarCheck, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardDentist() {
  useEffect(() => {
    document.title = "Dentist Dashboard - Smile App";
  }, []);

  const cards = [
    {
      title: "Upcoming Appointments",
      icon: <CalendarCheck className="w-10 h-10 text-blue-500" />,
      desc: "Manage and view today’s appointments with patients.",
      action: "View Schedule",
    },
    {
      title: "Patient Records",
      icon: <FileText className="w-10 h-10 text-green-500" />,
      desc: "Access patient dental history and notes.",
      action: "Open Records",
    },
    {
      title: "My Patients",
      icon: <Users className="w-10 h-10 text-purple-500" />,
      desc: "See all patients under your care.",
      action: "View List",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
        Welcome, Dr. Smith 🦷
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg p-8 flex flex-col justify-between"
          >
            <div>{card.icon}</div>
            <h2 className="text-xl font-semibold mt-5 dark:text-white">
              {card.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3">{card.desc}</p>
            <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition">
              {card.action}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
