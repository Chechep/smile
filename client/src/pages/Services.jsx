import {
    Smile,
    ShieldCheck,
    Stethoscope,
    Users,
    ClipboardList,
    Sparkles,
    Handshake,
    Heart,
  } from "lucide-react";
  import { motion } from "framer-motion";
  
  export default function Services() {
    const services = [
      {
        title: "Oral Health Assessment",
        icon: <Stethoscope className="w-8 h-8" />,
        desc: "We perform detailed checkups to assess your teeth, gums, and mouth for cavities, gum disease or other oral conditions.",
      },
      {
        title: "Treatment & Procedures",
        icon: <ClipboardList className="w-8 h-8" />,
        desc: "From fillings and extractions to root canals and crowns we ensure your smile stays healthy and strong.",
      },
      {
        title: "Preventive Care",
        icon: <ShieldCheck className="w-8 h-8" />,
        desc: "Professional cleanings, sealants and fluoride treatments to keep your mouth fresh and healthy.",
      },
      {
        title: "Cosmetic Dentistry",
        icon: <Sparkles className="w-8 h-8" />,
        desc: "Brighten and enhance your smile through whitening, veneers and modern cosmetic options.",
      },
      {
        title: "Disease Detection & Management",
        icon: <Heart className="w-8 h-8" />,
        desc: "Early screening for oral cancers and systemic health issues prevention starts with detection.",
      },
      {
        title: "Patient Education & Counseling",
        icon: <Users className="w-8 h-8" />,
        desc: "We take time to explain treatments and guide you toward the best oral hygiene practices.",
      },
      {
        title: "Practice Management",
        icon: <ClipboardList className="w-8 h-8" />,
        desc: "Efficient and professional care from scheduling to maintaining a clean and safe environment.",
      },
      {
        title: "Collaboration with Specialists",
        icon: <Handshake className="w-8 h-8" />,
        desc: "We work closely with orthodontists, surgeons and other health professionals for complete care.",
      },
    ];
  
    return (
      <section className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
  
        {/* ==== Header ==== */}
        <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
          <h2 className="text-4xl font-bold mb-3 text-sky-600 dark:text-sky-400">
            Our Dental Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the full range of professional dental care we provide crafted to bring confidence and comfort to every smile.
          </p>
        </div>
  
        {/* ==== Service Cards ==== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((s, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/90 dark:bg-neutral-900 rounded-2xl shadow-md hover:shadow-lg p-6 text-center transition-all duration-300 hover:-translate-y-2 border border-sky-100 dark:border-sky-900"
            >
              <div className="flex justify-center mb-4 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </div>
  
        {/* ==== Footer Text ==== */}
        <div className="mt-16 text-center text-sm text-gray-600 dark:text-gray-400 relative z-10">
          <p>Creating healthy smiles through gentle and professional care.</p>
        </div>
      </section>
    );
  }
  