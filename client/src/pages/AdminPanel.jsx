import { useEffect } from "react";
import { Users, ClipboardList, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminPanel() {
  useEffect(() => {
    document.title = "Admin Panel - Smile App";
  }, []);

  const cards = [
    {
      title: "Manage Users",
      icon: <Users className="w-10 h-10 text-blue-500" />,
      desc: "Add, edit, or remove patients and dentists from the system.",
      action: "Open Users",
    },
    {
      title: "Appointments",
      icon: <ClipboardList className="w-10 h-10 text-green-500" />,
      desc: "Track and oversee all clinic appointments.",
      action: "View All",
    },
    {
      title: "Settings",
      icon: <Settings className="w-10 h-10 text-yellow-500" />,
      desc: "Configure system preferences and permissions.",
      action: "Configure",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
        Admin Panel ⚙️
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
