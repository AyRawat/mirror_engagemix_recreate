import { useState } from "react";
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

  const handleNewProjectClick = () => {
    setIsSheetOpen(true);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "social-media":
        return <SocialMedia />;
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
            <ProjectManagement />
          </>
        );
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen overflow-hidden">
      <Sidebar onNavClick={setActiveSection} activeSection={activeSection} />
      <main className="flex-1 p-8 max-w-7xl mx-auto overflow-hidden">
        {renderContent()}
      </main>
      <CustomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
    </div>
  );
}
