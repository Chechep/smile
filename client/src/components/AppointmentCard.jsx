import { Calendar, Clock, MapPin } from "lucide-react";

export default function AppointmentCard({ date, time, location, doctor }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          Appointment with {doctor}
        </h3>
        <Calendar className="w-6 h-6 text-blue-600" />
      </div>

      <div className="space-y-2 text-gray-600 dark:text-gray-400">
        <p className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-500" />
          {date} — {time}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-500" />
          {location}
        </p>
      </div>
    </div>
  );
}
