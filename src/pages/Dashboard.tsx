import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "@/store/projectsSlice";
import { RootState } from "@/store/store";
import StatsComponent from "@/components/Custom/StatsComponent";
import ProjectManagement from "@/pages/ProjectManagment";
import CustomSheet from "@/components/Custom/CustomSheet";
import SocialMedia from "@/components/Custom/SocialMedia";
import Banner from "@/components/Custom/Banner";
import Header from "@/components/Custom/Header";
import Sidebar from "@/components/blocks/Sidebar";

export default function Dashboard() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);
  const projectsStatus = useSelector(
    (state: RootState) => state.projects.status
  );
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    console.log("Token", token);

    if (projectsStatus === "idle") {
      dispatch(fetchProjects());
    }
  }, [projectsStatus, dispatch]);

  const handleNewProjectClick = () => {
    setIsSheetOpen(true);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "social-media":
        return <SocialMedia />;
      case "projects":
        return (
          <>
            <Header
              title="Welcome, Juwon."
              buttonText="+ New project"
              onButtonClick={handleNewProjectClick}
            />
            <StatsComponent />
            <ProjectManagement isProjectsSection={true} projects={projects} />
          </>
        );
      default:
        return (
          <>
            <Header
              title="Welcome, Juwon."
              buttonText="+ New project"
              onButtonClick={handleNewProjectClick}
            />
            <Banner />
            <StatsComponent />
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
      <CustomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
    </div>
  );
}
