import { Smile, Heart, User, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <Smile className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Teeth Whitening",
      desc: "Brighten your smile safely with our advanced whitening treatment.",
    },
    {
      icon: <Heart className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Cosmetic Dentistry",
      desc: "Enhance your smile with veneers, bonding, and aesthetic solutions.",
    },
    {
      icon: <User className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Family Dental Care",
      desc: "Comprehensive, gentle care for patients of all ages.",
    },
    {
      icon: <Calendar className="w-10 h-10 text-blue-600 mb-4" />,
      title: "Regular Checkups",
      desc: "Maintain your oral health with biannual cleanings and exams.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Our Dental Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition text-center"
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
  );
}
