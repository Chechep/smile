import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

export default function BookAppointment() {
  const [form, setForm] = useState({
    date: "",
    time: "",
    dentist: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.time || !form.dentist || !form.reason) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Appointment booked successfully!");
    setForm({ date: "", time: "", dentist: "", reason: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 px-6 md:px-12 transition-colors">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Book a New Appointment
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow p-8 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Dentist</label>
          <select
            name="dentist"
            value={form.dentist}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
          >
            <option value="">Select Dentist</option>
            <option>Dr. Jane Mwangi</option>
            <option>Dr. Peter Kamau</option>
            <option>Dr. Mary Achieng</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Reason for Visit</label>
          <textarea
            name="reason"
            value={form.reason}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            placeholder="Describe your dental issue or reason for booking..."
          ></textarea>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium shadow transition w-full"
        >
          Confirm Appointment
        </motion.button>
      </motion.form>
    </div>
  );
}
