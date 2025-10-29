import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

export default function PatientProfile() {
  const [form, setForm] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+254712345678",
    address: "Nairobi, Kenya",
    age: "28",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 px-6 md:px-12 transition-colors">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Update Your Profile
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow p-8 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {[
          { label: "Full Name", name: "name", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone Number", name: "phone", type: "text" },
          { label: "Age", name: "age", type: "number" },
          { label: "Address", name: "address", type: "text" },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />
          </div>
        ))}

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium shadow transition w-full"
        >
          Save Changes
        </motion.button>
      </motion.form>
    </div>
  );
}
