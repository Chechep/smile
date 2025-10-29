import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Heart, User, Star } from "lucide-react";
import DentistCard from "../components/DentistCard";
import AppointmentCard from "../components/AppointmentCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20">
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Brighten Your Smile with <span className="text-blue-600">Smile Dental</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Experience professional dental care with a personal touch. 
            From check-ups to cosmetic procedures — we make your smile shine confidently.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition"
            >
              Book Appointment
            </Link>
            <Link
              to="/about"
              className="border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-semibold py-3 px-6 rounded-xl shadow transition"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1606813902912-0d7a3b3b5e29?auto=format&fit=crop&w=800&q=80"
          alt="Dental Care"
          className="w-full md:w-1/2 rounded-3xl shadow-lg mb-10 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-16 bg-white dark:bg-gray-800 transition-colors">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Our Dental Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Heart className="w-10 h-10 text-blue-600 mb-4" />,
              title: "Cosmetic Dentistry",
              desc: "Get the smile of your dreams with whitening, veneers, and more.",
            },
            {
              icon: <User className="w-10 h-10 text-blue-600 mb-4" />,
              title: "Family Care",
              desc: "Gentle, comprehensive dental care for all ages — kids to seniors.",
            },
            {
              icon: <Calendar className="w-10 h-10 text-blue-600 mb-4" />,
              title: "Check-ups & Cleaning",
              desc: "Keep your teeth healthy and bright with regular check-ups.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-lg transition text-center"
              whileHover={{ scale: 1.03 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Dentists */}
      <section className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 transition-colors">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Meet Our Specialists
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <DentistCard
            name="Dr. Sarah Mumo"
            specialty="Orthodontist"
            image="https://images.unsplash.com/photo-1606813902912-0d7a3b3b5e29?auto=format&fit=crop&w=500&q=80"
            rating={4.9}
          />
          <DentistCard
            name="Dr. Daniel Kim"
            specialty="Cosmetic Dentist"
            image="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80"
            rating={4.8}
          />
          <DentistCard
            name="Dr. Maria Wekesa"
            specialty="Pediatric Dentist"
            image="https://images.unsplash.com/photo-1588776814546-99b76fb-5c66b6?auto=format&fit=crop&w=500&q=80"
            rating={5.0}
          />
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 text-white transition">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready for Your Healthier Smile?
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Book an appointment today and start your journey toward a confident, radiant smile.
        </p>
        <Link
          to="/signup"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl shadow hover:bg-gray-100 transition"
        >
          Book Now
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-16 bg-white dark:bg-gray-800 transition-colors">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          What Our Patients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Jane Mwangi",
              review:
                "Amazing experience! The staff were so kind and professional. I finally enjoy my dental visits!",
              rating: 5,
            },
            {
              name: "Brian Otieno",
              review:
                "Dr. Kim gave me the perfect smile I’ve always wanted. Highly recommend Smile Dental!",
              rating: 4.8,
            },
            {
              name: "Lilian Wambui",
              review:
                "Their tech and attention to detail are unmatched. The environment is clean and comfortable.",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-lg transition text-center"
              whileHover={{ scale: 1.03 }}
            >
              <Star className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                “{testimonial.review}”
              </p>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                ⭐ {testimonial.rating} / 5.0
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
