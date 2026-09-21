import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import LoginPage from "./pages/Loginpage";
import AdminDashboard from "./pages/Admindashboard";
import CitizenDashboard from "./pages/Citizendashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterPage from "./Authpages/Registerpage";
import SubmitComplaint from "./pages/Submitcomplaint";


function app() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />}/>
      

      //login Protected Route
      <Route element={<ProtectedRoute role="admin" />} >
      <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      //citizen Protected Route //
      <Route element={<ProtectedRoute role="citizen" />}>   
       <Route path="/citizen" element={<CitizenDashboard />} />
       <Route path="/submit" element={<SubmitComplaint />} />
       </Route>  


    </Routes>
    
    </BrowserRouter>
  );

}

export default app;