import Dashboard from "@/pages/Dashboard";
import LandingPage from "@/pages/LandingPage";
import { createBrowserRouter } from "react-router-dom";
import { CreateAccountPage } from "@/pages/CreateAccountPage";
import { ProductAnalysisPage } from "@/pages/ProductAnalysispage";
import { SearchConfigurationPage } from "@/pages/SearchConfigurationPage";
import { KeywordConfigurationPage } from "@/pages/KeywordConfigurationPage";
import SocialMediaResults from "@/pages/SocialMediaResults";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/create-account",
    element: <CreateAccountPage />,
  },
  {
    path: "/product-analysis",
    element: <ProductAnalysisPage />,
  },
  {
    path: "/search-configuration",
    element: <SearchConfigurationPage />,
  },
  {
    path: "/keyword-configuration",
    element: <KeywordConfigurationPage />,
  },
  {
    path: "/social-media-results",
    element: <SocialMediaResults />,
  },
]);
