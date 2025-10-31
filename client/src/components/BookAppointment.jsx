import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, User, Clock, FileText } from "lucide-react";

export default function BookAppointment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    dentist: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.time || !formData.dentist || !formData.reason) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Save appointment in localStorage
    const newAppointment = {
      date: formData.date,
      time: formData.time,
      dentist: formData.dentist,
      status: "Upcoming",
      reason: formData.reason,
    };

    const existing = JSON.parse(localStorage.getItem("appointments") || "[]");
    existing.unshift(newAppointment); // add to top
    localStorage.setItem("appointments", JSON.stringify(existing));

    alert("Appointment booked successfully!");
    navigate("/dashboard-patient");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white dark:from-black dark:to-gray-950 pt-24 px-6 md:px-12 flex justify-center items-center transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-2xl border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-sky-600 dark:text-sky-400">
          Book Appointment
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Fill in the details below to schedule your next visit.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Select Date</label>
            <div className="flex items-center border rounded-lg p-3 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <CalendarDays className="w-5 h-5 text-sky-600 dark:text-sky-400 mr-2" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium mb-1">Select Time</label>
            <div className="flex items-center border rounded-lg p-3 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <Clock className="w-5 h-5 text-sky-600 dark:text-sky-400 mr-2" />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
              />
            </div>
          </div>

          {/* Dentist */}
          <div>
            <label className="block text-sm font-medium mb-1">Select Dentist</label>
            <div className="flex items-center border rounded-lg p-3 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <User className="w-5 h-5 text-sky-600 dark:text-sky-400 mr-2" />
              <select
                name="dentist"
                value={formData.dentist}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
              >
                <option value="">Choose dentist...</option>
                <option value="Dr. Jane Mwangi">Dr. Jane Mwangi</option>
                <option value="Dr. Peter Kamau">Dr. Peter Kamau</option>
                <option value="Dr. Mary Achieng">Dr. Mary Achieng</option>
              </select>
            </div>
          </div>

          {/* Reason for Visit */}
          <div>
            <label className="block text-sm font-medium mb-1">Reason for Visit</label>
            <div className="flex items-start border rounded-lg p-3 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <FileText className="w-5 h-5 text-sky-600 dark:text-sky-400 mr-2 mt-1" />
              <textarea
                name="reason"
                rows="3"
                placeholder="Describe your symptoms or reason for visit..."
                value={formData.reason}
                onChange={handleChange}
                className="w-full bg-transparent outline-none resize-none text-gray-800 dark:text-gray-100"
              ></textarea>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={() => navigate("/dashboard-patient")}
              className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-5 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
            >
              Back to Dashboard
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg shadow-md transition"
            >
              Confirm Booking
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
