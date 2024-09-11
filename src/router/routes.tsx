import Dashboard from "@/pages/Dashboard";
import LandingPage from "@/pages/LandingPage";
import { createBrowserRouter } from "react-router-dom";
import SocialMediaResults from "@/pages/SocialMediaResults";
import { ConfigurationPage } from "@/pages/ConfigurationPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
