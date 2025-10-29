import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardPatient from "./pages/DashboardPatient";
import DashboardDentist from "./pages/DashboardDentist";
import AdminPanel from "./pages/AdminPanel";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./pages/About";
export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
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
