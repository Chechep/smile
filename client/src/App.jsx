import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardPatient from "./pages/DashboardPatient";
import DashboardDentist from "./pages/DashboardDentist";
import AdminPanel from "./pages/AdminPanel";
import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/patient" element={<DashboardPatient />} />
          <Route path="/dentist" element={<DashboardDentist />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </AppProvider>
  );
}
