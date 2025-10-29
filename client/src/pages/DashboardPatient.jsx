export default function DashboardPatient() {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            Patient Dashboard
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Welcome to your Smile Dental dashboard! Here you can view appointments, 
            manage your profile, and communicate with your dentist.
          </p>
  
          {/* Stats Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md text-center">
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">3</h2>
              <p className="text-gray-600 dark:text-gray-400">Upcoming Appointments</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md text-center">
              <h2 className="text-xl font-semibold text-green-600 dark:text-green-400">2</h2>
              <p className="text-gray-600 dark:text-gray-400">Completed Visits</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md text-center">
              <h2 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400">1</h2>
              <p className="text-gray-600 dark:text-gray-400">Pending Payment</p>
            </div>
          </div>
  
          {/* Upcoming Appointments */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Upcoming Appointments
            </h2>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                  Dr. Jane Doe — Orthodontist
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Date: November 5, 2025 • 10:30 AM
                </p>
              </div>
  
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                  Dr. John Smith — Pediatric Dentist
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Date: November 12, 2025 • 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  