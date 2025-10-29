import DentistCard from "../components/DentistCard";

export default function Home() {
  const dentists = [
    { name: "Jane Doe", specialty: "Orthodontist", photo: "https://source.unsplash.com/100x100/?dentist" },
    { name: "John Smith", specialty: "Pediatric Dentist", photo: "https://source.unsplash.com/100x100/?doctor" },
  ];

  return (
    <div className="pt-24 pb-10 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Smile Dental App 🦷</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {dentists.map((dentist, i) => (
          <DentistCard key={i} dentist={dentist} />
        ))}
      </div>
    </div>
  );
}
