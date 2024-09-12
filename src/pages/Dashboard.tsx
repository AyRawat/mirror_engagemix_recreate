// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@/hooks";
import { fetchProjects } from "@/store/projectsSlice";
import { RootState } from "@/store/store";
import StatsComponent from "@/components/Custom/StatsComponent";
import ProjectManagement from "@/pages/ProjectManagment";
import CustomSheet from "@/components/Custom/CustomSheet";
import SocialMedia from "@/components/Custom/SocialMedia";
import Banner from "@/components/Custom/Banner";
import Header from "@/components/Custom/Header";
import Sidebar from "@/components/blocks/Sidebar";
import { useAuth } from "@/contexts/auth/AuthContext";
import DashboardBanner from "@/assets/Dashboard/Banner.svg";
import {
  setAccountData,
  setProductData,
  setKeywords,
  setSearchConfig,
  setProjectName,
} from "@/store/formSlice"; // Import actions
import Analytics from "@/components/Custom/Analytics/Analytics";

export default function Dashboard() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);
  const projectsStatus = useSelector(
    (state: RootState) => state.projects.status
  );
  const { user } = useAuth();

  useEffect(() => {
    if (projectsStatus === "idle") {
      dispatch(fetchProjects());
    }
  }, [projectsStatus, dispatch]);

  const handleNewProjectClick = () => {
    setIsSheetOpen(true);
  };

  const handleResetForms = () => {
    dispatch(
      setAccountData({ email: "", password: "", firstName: "", lastName: "" })
    );
    dispatch(
      setProductData({
        companyName: "",
        companyDomain: "",
        companyDescription: "",
      })
    );
    dispatch(setKeywords([]));
    dispatch(setSearchConfig({ platforms: [] }));
    dispatch(setProjectName(""));
  };

  const stats = [
    { label: "Projects", value: projects.length.toString() },
    { label: "Keywords Tracked", value: "0" },
    { label: "Mentions", value: "0" },
    { label: "Leads", value: "0" },
    { label: "Link Clicks", value: "0" },
    { label: "Impressions", value: "0" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "analytics":
        return <Analytics />;
      case "social-media":
        return <SocialMedia />;
      case "projects":
        return (
          <>
            <Header
              title={`Welcome, ${user?.name || "User"}.`}
              buttonText="+ New project"
              onButtonClick={handleNewProjectClick}
            />
            <StatsComponent stats={stats} />
            <ProjectManagement isProjectsSection={true} projects={projects} />
          </>
        );
      default:
        return (
          <>
            <Header
              title={`Welcome, ${user?.name || "User"}.`}
              buttonText="+ New project"
              onButtonClick={handleNewProjectClick}
            />
            <Banner bannerSvg={DashboardBanner} />
            <StatsComponent stats={stats} />
            <ProjectManagement isProjectsSection={false} projects={projects} />
          </>
        );
    }
  };

  return (
    <div className="flex bg-gray-50 h-[96vh] w-[1712px]">
      <Sidebar onNavClick={setActiveSection} activeSection={activeSection} />
      <main className="flex-1 p-8 max-w-7xl mx-auto overflow-hidden">
        {renderContent()}
      </main>
      <CustomSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        onReset={handleResetForms} // Pass the reset function
      />
    </div>
  );
}
