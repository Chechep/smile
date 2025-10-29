import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardPatient from "./pages/DashboardPatient";
import DashboardDentist from "./pages/DashboardDentist";
import AdminPanel from "./pages/AdminPanel";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main className="flex-grow pt-20"> {/* Adds space under fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
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
