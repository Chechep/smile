import { Users, HeartPulse, Award } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <div className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-700 dark:to-blue-500 text-white">
        <h1 className="text-4xl font-bold mb-4">About Smile Dental Care</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Bringing confident smiles to life through expert dental care,
          innovation, and compassion.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            At <span className="font-semibold text-blue-600">Smile Dental</span>, 
            we’re dedicated to making dental care accessible, comfortable, and 
            tailored to your unique needs. Our mission is to promote oral health 
            through modern technology and a compassionate approach — one smile at a time.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Our Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We aim to be the leading dental care provider by integrating 
            innovative treatments, digital convenience, and patient-centered care 
            — ensuring that every visit feels comfortable, transparent, and rewarding.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white dark:bg-gray-800 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Our Core Values
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <Users className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Patient First</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Every decision we make starts with what’s best for our patients — 
              ensuring comfort, trust, and satisfaction at every visit.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <HeartPulse className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Compassion & Care</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We combine medical excellence with empathy to make every patient feel valued, 
              heard, and cared for like family.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <Award className="w-10 h-10 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Excellence</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our dentists, hygienists, and support team strive for continuous learning 
              and innovation to deliver top-quality dental care.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 text-white">
        <h2 className="text-3xl font-bold mb-4">Join Our Family of Smiles</h2>
        <p className="max-w-2xl mx-auto mb-8 opacity-90">
          Discover a dental experience that’s comfortable, transparent, and 
          tailored just for you. Let’s make your smile brighter — together.
        </p>
        <a
          href="/signup"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl shadow hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
