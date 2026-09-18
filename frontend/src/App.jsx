import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import LoginPage from "./pages/Loginpage";
import AdminDashboard from "./pages/Admindashboard";
import CitizenDashboard from "./pages/Citizendashboard";
import ProtectedRoute from "./components/ProtectedRoute";


function app() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<ProtectedRoute />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/citizen" element={<CitizenDashboard />} />
    </Routes>
    
    </BrowserRouter>
  )

}

export default app;