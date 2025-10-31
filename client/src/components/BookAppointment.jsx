import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  CalendarDays, 
  Clock, 
  FileText, 
  Shield, 
  Heart, 
  Sparkles, 
  Scissors, 
  AlignCenter, 
  Baby, 
  AlertTriangle, 
  Scan,
  Stethoscope 
} from "lucide-react";

export default function BookAppointment() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    problem: "",
  });

  const services = [
    {
      id: "preventive",
      title: "Preventive Care",
      icon: <Shield className="w-8 h-8" />,
      desc: "Conduct regular oral examinations and check-ups. Clean teeth and remove plaque and tartar. Apply fluoride treatments and dental sealants.",
      details: [
        "Regular oral examinations and check-ups",
        "Professional teeth cleaning",
        "Fluoride treatments and dental sealants",
        "Oral hygiene and diet education"
      ]
    },
    {
      id: "restorative",
      title: "Restorative Treatments",
      icon: <Heart className="w-8 h-8" />,
      desc: "Fill cavities, place crowns, bridges, and veneers. Perform root canal therapy and replace missing teeth.",
      details: [
        "Fill cavities caused by tooth decay",
        "Place crowns, bridges, and veneers",
        "Root canal therapy",
        "Dentures or implants for missing teeth"
      ]
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      icon: <Sparkles className="w-8 h-8" />,
      desc: "Teeth whitening, correct minor misalignments with veneers or bonding. Improve appearance of teeth and smile.",
      details: [
        "Teeth whitening",
        "Veneers and bonding",
        "Smile enhancement",
        "Cosmetic corrections"
      ]
    },
    {
      id: "surgery",
      title: "Oral Surgery",
      icon: <Scissors className="w-8 h-8" />,
      desc: "Extract teeth including wisdom teeth. Perform minor surgical procedures and place dental implants.",
      details: [
        "Tooth extraction (including wisdom teeth)",
        "Minor surgical procedures",
        "Dental implant placement",
        "Gum and jaw surgeries"
      ]
    },
    {
      id: "orthodontics",
      title: "Orthodontics",
      icon: <AlignCenter className="w-8 h-8" />,
      desc: "Align teeth using braces or clear aligners. Correct bite issues and improve dental alignment.",
      details: [
        "Braces and clear aligners",
        "Teeth alignment",
        "Bite correction",
        "Orthodontic consultations"
      ]
    },
    {
      id: "periodontal",
      title: "Periodontal (Gum) Care",
      icon: <Stethoscope className="w-8 h-8" />,
      desc: "Diagnose and treat gum diseases. Perform deep cleaning and provide guidance on maintaining healthy gums.",
      details: [
        "Gum disease diagnosis and treatment",
        "Deep cleaning (scaling and root planing)",
        "Gingivitis and periodontitis care",
        "Gum health maintenance"
      ]
    },
    {
      id: "pediatric",
      title: "Pediatric Dentistry",
      icon: <Baby className="w-8 h-8" />,
      desc: "Specialized care for children, including preventive care, education, and early intervention.",
      details: [
        "Children's dental care",
        "Preventive care for kids",
        "Early intervention",
        "Child-friendly dental education"
      ]
    },
    {
      id: "emergency",
      title: "Emergency Care",
      icon: <AlertTriangle className="w-8 h-8" />,
      desc: "Treat dental trauma, relieve severe dental pain or infections. Emergency dental services.",
      details: [
        "Dental trauma treatment",
        "Pain relief and infection control",
        "Chipped or knocked-out teeth",
        "Emergency consultations"
      ]
    },
    {
      id: "diagnostic",
      title: "Diagnostic Services",
      icon: <Scan className="w-8 h-8" />,
      desc: "Take and interpret dental X-rays and scans. Diagnose oral diseases and screen for oral cancers.",
      details: [
        "Dental X-rays and scans",
        "Oral disease diagnosis",
        "Oral cancer screening",
        "Early condition detection"
      ]
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceSelect = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  const isWeekday = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay();
    return day >= 1 && day <= 5; // Monday to Friday
  };

  const isBusinessHours = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    return totalMinutes >= 9 * 60 && totalMinutes <= 17 * 60; // 9 AM to 5 PM
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedService || !formData.date || !formData.time || !formData.problem) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Validate date is weekday (Monday to Friday)
    if (!isWeekday(formData.date)) {
      alert("Appointments are only available from Monday to Friday. Please select a weekday.");
      return;
    }

    // Validate time is between 9 AM and 5 PM
    if (!isBusinessHours(formData.time)) {
      alert("Appointments are only available between 9:00 AM and 5:00 PM. Please select a time within business hours.");
      return;
    }

    // Save appointment in localStorage for patient
    const newAppointment = {
      id: Date.now().toString(),
      date: formData.date,
      time: formData.time,
      service: selectedService,
      problem: formData.problem,
      status: "Upcoming",
      patientName: "Current User",
      timestamp: new Date().toISOString(),
    };

    const existingAppointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    existingAppointments.unshift(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(existingAppointments));

    // Also save to dentist dashboard
    const dentistAppointments = JSON.parse(localStorage.getItem("dentistAppointments") || "[]");
    dentistAppointments.unshift({
      ...newAppointment,
      type: "new",
    });
    localStorage.setItem("dentistAppointments", JSON.stringify(dentistAppointments));

    alert("Appointment booked successfully!");
    navigate("/dashboard-patient");
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-24 px-6 md:px-12 transition-colors">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-sky-600 dark:text-sky-400">
            Book Appointment
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Select a service, describe your problem, and choose your preferred date and time.
          </p>

          {/* Services Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 text-center">
              Choose a Service
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                    selectedService === service.title
                      ? "border-sky-500 bg-sky-50 dark:bg-sky-900/20 shadow-lg"
                      : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-sky-300 dark:hover:border-sky-600"
                  }`}
                >
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className={`p-3 rounded-full mb-4 ${
                      selectedService === service.title
                        ? "bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-400"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                    }`}>
                      {service.icon}
                    </div>
                    <h4 className={`font-bold text-lg mb-2 ${
                      selectedService === service.title
                        ? "text-sky-700 dark:text-sky-300"
                        : "text-gray-800 dark:text-gray-200"
                    }`}>
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="text-left w-full mb-4">
                      <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-sky-500 mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleServiceSelect(service.title)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                      selectedService === service.title
                        ? "bg-sky-600 hover:bg-sky-700 text-white shadow-md"
                        : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {selectedService === service.title ? "Selected" : "Select Service"}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Problem Description */}
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-800 dark:text-gray-200">
                Describe Your Problem or Concern
              </label>
              <div className="flex items-start border rounded-lg p-3 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                <FileText className="w-5 h-5 text-sky-600 dark:text-sky-400 mr-2 mt-1" />
                <textarea
                  name="problem"
                  rows="4"
                  placeholder="Please describe your symptoms, concerns, or reason for visit in detail. This helps us prepare for your appointment..."
                  value={formData.problem}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none resize-none text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                ></textarea>
              </div>
            </div>

            {/* Date and Time Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-800 dark:text-gray-200">
                  Select Date (Monday - Friday)
                </label>
                <div className="flex items-center border rounded-lg p-3 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <CalendarDays className="w-5 h-5 text-sky-600 dark:text-sky-400 mr-2" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
                  />
                </div>
                {formData.date && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Selected: {formatDate(formData.date)}
                  </p>
                )}
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-800 dark:text-gray-200">
                  Select Time (9:00 AM - 5:00 PM)
                </label>
                <div className="flex items-center border rounded-lg p-3 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <Clock className="w-5 h-5 text-sky-600 dark:text-sky-400 mr-2" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    min="09:00"
                    max="17:00"
                    className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-100"
                  />
                </div>
              </div>
            </div>

            {/* Selected Service Display */}
            {selectedService && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg"
              >
                <p className="text-sm text-sky-700 dark:text-sky-300 font-semibold">
                  <strong>Selected Service:</strong> {selectedService}
                </p>
              </motion.div>
            )}

            {/* Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => navigate("/dashboard-patient")}
                className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition font-medium"
              >
                Back to Dashboard
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={!selectedService}
                className={`px-8 py-3 rounded-lg shadow-md transition font-medium ${
                  selectedService
                    ? "bg-sky-600 hover:bg-sky-700 text-white"
                    : "bg-gray-400 dark:bg-gray-600 text-gray-200 cursor-not-allowed"
                }`}
              >
                Confirm Booking
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}