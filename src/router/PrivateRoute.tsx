import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "@/contexts/auth/AuthContext";

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const authContext = useAuth();
  return authContext.isAuthenticated ? children : <Navigate to="/app" />;
};

export default PrivateRoute;
