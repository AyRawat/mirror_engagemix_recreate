import Dashboard from "@/pages/Dashboard";
import { createBrowserRouter, Navigate } from "react-router-dom";
import SocialMediaResults from "@/pages/SocialMediaResults";
import { ConfigurationPage } from "@/pages/ConfigurationPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/app" />,
  },
  {
    path: "/app",
    element: <ConfigurationPage />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/social-media-results",
    element: (
      <PrivateRoute>
        <SocialMediaResults />
      </PrivateRoute>
    ),
  },
]);
