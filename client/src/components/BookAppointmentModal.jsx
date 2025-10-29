import { useState } from "react";
import { Calendar, Clock, X } from "lucide-react";

export default function BookAppointmentModal({ isOpen, onClose, dentist }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking confirmed:", { dentist, date, time, notes });
    alert(`Appointment booked with ${dentist.name} on ${date} at ${time}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full max-w-md p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          Book Appointment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Dentist
            </label>
            <input
              type="text"
              value={dentist?.name || ""}
              disabled
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Select Date
            </label>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-500" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Select Time
            </label>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
              <Clock className="w-5 h-5 text-blue-500" />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700 dark:text-gray-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Additional Notes
            </label>
            <textarea
              rows="3"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Describe symptoms or preferences..."
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium shadow-md transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
