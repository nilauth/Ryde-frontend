// ProtectedRoute.tsx
import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  role: string;
}

const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
  const { userRole } = useAuth();

  if (!userRole || userRole !== role) {
    return <Navigate to="/unauthorized-page" />;
  }

  return children;
};

export default ProtectedRoute;
