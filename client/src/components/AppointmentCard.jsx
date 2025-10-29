export default function AppointmentCard({ appointment }) {
    return (
      <div className="p-4 border rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
          {appointment.patientName}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Date: {appointment.date}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Dentist: {appointment.dentist}
        </p>
      </div>
    );
  }
  