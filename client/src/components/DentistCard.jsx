export default function DentistCard({ dentist }) {
    return (
      <div className="p-4 border rounded-xl bg-white dark:bg-gray-800 shadow hover:scale-105 transition">
        <img
          src={dentist.photo}
          alt={dentist.name}
          className="w-24 h-24 rounded-full mx-auto object-cover"
        />
        <h3 className="text-center mt-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
          Dr. {dentist.name}
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400">{dentist.specialty}</p>
      </div>
    );
  }
  