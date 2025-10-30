import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Smile, Heart, Calendar } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
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

  const testimonials = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* ===== Hero Section ===== */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20">
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Brighten Your Smile with{" "}
            <span className="text-sky-600">Smile Dental</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Experience professional dental care with a personal touch. From
            check-ups to cosmetic procedures — we make your smile shine
            confidently.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to="/about"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition"
            >
              Explore Services
            </Link>
            <Link
              to="/login"
              className="border border-sky-600 hover:bg-sky-600 hover:text-white text-sky-600 font-semibold py-3 px-6 rounded-xl shadow transition"
            >
              Get Started
            </Link>
          </div>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1606813902912-0d7a3b3b5e29?auto=format&fit=crop&w=800&q=80"
          alt="Dental Care"
          className="w-full md:w-1/2 rounded-3xl shadow-lg mb-10 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        />
      </section>

      {/* ===== Services Section ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 px-6 md:px-16 bg-white dark:bg-gray-800 transition-colors"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Our Dental Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index * 0.2}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-lg transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Testimonials ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900 transition-colors"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          What Our Patients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index * 0.2}
              whileHover={{ scale: 1.03 }}
              className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition text-center"
            >
              <User className="w-10 h-10 text-sky-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                “{testimonial.review}”
              </p>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-sky-600 dark:text-sky-400">
                {testimonial.rating} / 5.0
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Mission & Vision ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10"
      >
        <motion.div variants={fadeInUp} custom={0.1}>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            At <span className="font-semibold text-sky-600">Smile Dental</span>,
            we’re dedicated to making dental care accessible, comfortable, and
            tailored to every patient’s needs. Our mission is to promote oral
            health through technology and compassion — one smile at a time.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} custom={0.2}>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We aim to be the leading dental provider in Kenya, known for
            innovation, digital convenience, and a patient-first approach that
            makes every visit pleasant, transparent, and empowering.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}
