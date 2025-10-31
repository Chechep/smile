import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardPatient from "./pages/DashboardPatient";
import DashboardDentist from "./pages/DashboardDentist";
import AdminPanel from "./pages/DashboardAdmin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ForgotPassword from "./pages/ForgotPassword";
import { ThemeProvider } from "./context/ThemeContext";
import BookAppointment from "./components/BookAppointment";
import PatientProfile from "./pages/Profile";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main className="flex-grow pt-20"> {/* Adds space under fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/patient-profile" element={<PatientProfile />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard-patient" element={<DashboardPatient />} />
            <Route path="/dashboard-dentist" element={<DashboardDentist />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
