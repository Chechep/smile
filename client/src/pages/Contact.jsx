import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-16 transition-colors">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Us
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Have questions or need to schedule an appointment? Our team is here to help you.
          </p>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-500" /> info@smiledental.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-blue-500" /> +254 712 345 678
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-blue-500" /> Nairobi, Kenya
            </p>
          </div>

          <iframe
            className="w-full h-64 rounded-2xl mt-8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.0303668288722!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c8b1e5f37%3A0x1a0dc5c3a45b12f4!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <form className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}
