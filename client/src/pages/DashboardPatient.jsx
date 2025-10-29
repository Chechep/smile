import { useEffect } from "react";
import { CalendarDays, MessageCircle, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPatient() {
  useEffect(() => {
    document.title = "Patient Dashboard - Smile App";
  }, []);

  const cards = [
    {
      title: "Book Appointment",
      icon: <CalendarDays className="w-10 h-10 text-blue-500" />,
      desc: "Schedule a new appointment with your preferred dentist.",
      action: "Book Now",
    },
    {
      title: "View Records",
      icon: <ClipboardList className="w-10 h-10 text-green-500" />,
      desc: "Access your dental history and past treatments.",
      action: "View Records",
    },
    {
      title: "Messages",
      icon: <MessageCircle className="w-10 h-10 text-yellow-500" />,
      desc: "Chat with your dentist or clinic support.",
      action: "Open Chat",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
        Welcome, Patient 👋
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
