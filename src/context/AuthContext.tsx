// src/context/AuthContext.tsx
import UserService from "@/services/userService";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface AuthContextType {
  userRole: string | null;
  setUserRole: React.Dispatch<React.SetStateAction<string | null>>;
  fetchUserRole: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<string | null>(() => {
    return localStorage.getItem("role");
  });

  const fetchUserRole = async () => {
    try {
      const user = await UserService.getCurrentUser();
      const role = user.role;
      setUserRole(role);
      localStorage.setItem("role", role);
    } catch (error) {
      console.error("Failed to fetch user role:", error);
      setUserRole(null);
    }
  };

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setUserRole(storedRole);
    } else {
      fetchUserRole();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userRole, setUserRole, fetchUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth }; 
