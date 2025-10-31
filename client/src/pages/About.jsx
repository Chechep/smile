import { motion } from "framer-motion";
import {
  Users,
  HeartPulse,
  Award,
  Smile,
  Heart,
  User,
  Calendar,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AboutServices() {
  const services = [
    {
      icon: <Smile className="w-12 h-12 text-sky-600 mb-4 mx-auto" />,
      title: "Teeth Whitening",
      desc: "Brighten your smile safely with our advanced whitening treatment.",
    },
    {
      icon: <Heart className="w-12 h-12 text-sky-600 mb-4 mx-auto" />,
      title: "Cosmetic Dentistry",
      desc: "Enhance your smile with veneers, bonding, and aesthetic solutions.",
    },
    {
      icon: <User className="w-12 h-12 text-sky-600 mb-4 mx-auto" />,
      title: "Family Dental Care",
      desc: "Comprehensive, gentle care for patients of all ages.",
    },
    {
      icon: <Calendar className="w-12 h-12 text-sky-600 mb-4 mx-auto" />,
      title: "Regular Checkups",
      desc: "Maintain your oral health with biannual cleanings and exams.",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* ===== Hero Section ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center py-16 px-6 bg-gradient-to-r from-sky-900 to-sky-500 dark:from-black dark:to-sky-700 text-white"
      >
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Bringing confident smiles to life through expert dental care,
          innovation and compassion.
        </p>
      </motion.div>

      {/* ===== Our Services ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 px-6 md:px-16 bg-white dark:bg-black transition-colors"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
        Dental Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index * 0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl dark:bg-gray-900 shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== Core Values ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white dark:bg-black py-16 px-6"
      >
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-10">
        Core Values
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            variants={fadeInUp}
            custom={0.1}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <Users className="w-12 h-12 text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Patient First
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Every decision we make starts with what’s best for our patients
              ensuring comfort, trust, and satisfaction at every visit.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            custom={0.2}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <HeartPulse className="w-12 h-12 text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Compassion & Care
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We combine medical excellence with empathy to make every patient
              feel valued, heard, and cared for like family.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            custom={0.3}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <Award className="w-12 h-12 text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our dentists, hygienists, and support team strive for continuous
              learning and innovation to deliver top-quality dental care.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* ===== Mission & Vision ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white dark:bg-black max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10"
      >
        <motion.div variants={fadeInUp} custom={0.1}>
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            At <span className="font-semibold text-sky-500">Smile</span>, we’re
            dedicated to making dental care accessible, comfortable, and
            tailored to your unique needs. Our mission is to promote oral health
            through modern technology and a compassionate approach — one smile
            at a time.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} custom={0.2}>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We aim to be the leading dental care provider by integrating
            innovative treatments, digital convenience, and patient-centered
            care — ensuring that every visit feels comfortable, transparent, and
            rewarding.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
