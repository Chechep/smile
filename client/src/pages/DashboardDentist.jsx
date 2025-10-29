import { useEffect } from "react";
import { CalendarCheck, FileText, Users } from "lucide-react";

export default function DashboardDentist() {
  useEffect(() => {
    document.title = "Dentist Dashboard - Smile App";
  }, []);

  const cards = [
    {
      title: "Upcoming Appointments",
      icon: <CalendarCheck className="w-8 h-8 text-blue-500" />,
      desc: "Manage and view today’s appointments with patients.",
      action: "View Schedule",
    },
    {
      title: "Patient Records",
      icon: <FileText className="w-8 h-8 text-green-500" />,
      desc: "Access patient dental history and notes.",
      action: "Open Records",
    },
    {
      title: "My Patients",
      icon: <Users className="w-8 h-8 text-purple-500" />,
      desc: "See all patients under your care.",
      action: "View List",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 md:p-10 transition-colors">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Welcome, Dr. Smith 🦷
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between"
          >
            <div>{card.icon}</div>
            <h2 className="text-xl font-semibold mt-4 dark:text-white">
              {card.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{card.desc}</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition">
              {card.action}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
