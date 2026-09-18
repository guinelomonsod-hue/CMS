import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({role}) {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null;


    if (!token || !user ) {
        return <Navigate to="/login" replace />;    
    }

    if (user?.role !== role) {
        return <Navigate to="/" replace />;
    }
    return <Outlet /> ;
}

export default  ProtectedRoute;