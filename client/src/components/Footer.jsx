import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
    { name: "Login", to: "/login" },
  ];

  const socials = [
    { icon: <Facebook className="w-6 h-6" />, link: "https://facebook.com" },
    { icon: <Instagram className="w-6 h-6" />, link: "https://instagram.com" },
    { icon: <Twitter className="w-6 h-6" />, link: "https://twitter.com" },
  ];

  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py-12 mt-16 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* ===== Navigation Links ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{
                  x: 5,
                  textShadow: "0 0 8px rgba(255,255,255,0.8)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.to}
                  className="hover:underline hover:text-sky-500 transition"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ===== Contact Info ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Phone className="w-4 h-4" /> +254 790 086 093
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Mail className="w-4 h-4" /> support@smile.co.ke
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <MapPin className="w-4 h-4" /> Nairobi, Kenya
            </li>
          </ul>
        </div>

        {/* ===== Social Links with Icons ===== */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  textShadow: "0px 0px 8px rgba(255,255,255,0.8)",
                  boxShadow: "0px 0px 10px rgba(255,255,255,0.6)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-3 rounded-full hover:text-sky-500 transition"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Footer Bottom ===== */}
      <div className="mt-10 text-center text-sm opacity-90">
        <p>© {new Date().getFullYear()} Smile. All rights reserved.</p>
        <p className="text-xs mt-2 opacity-70">Empowering bright smiles every day.</p>
      </div>
    </footer>
  );
}
