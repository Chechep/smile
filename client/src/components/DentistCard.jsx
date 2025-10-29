import { useState } from "react";
import { Star } from "lucide-react";
import BookAppointmentModal from "./BookAppointment";

export default function DentistCard({ name, specialty, image, rating }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
        <img src={image} alt={name} className="w-full h-56 object-cover" />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
            {name}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
            {specialty}
          </p>
          <div className="flex justify-center items-center gap-1 mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-gray-700 dark:text-gray-300">{rating}</span>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium shadow-md transition"
          >
            Book Now
          </button>
        </div>
      </div>

      <BookAppointmentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        dentist={{ name, specialty }}
      />
    </>
  );
}
