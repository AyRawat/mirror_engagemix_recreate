import React from "react";
import { Button } from "@/components/ui/button";
import UpgradePlan from "@/components/blocks/UpgradeNow";
import DashboardLogo from "@/assets/Dashboard/DashboardLogo.svg";
import ProjectLogo from "@/assets/Dashboard/ProjectLogo.svg";
import SocialMediaLogo from "@/assets/Dashboard/SocialLogo.svg";
import AnalyticsLogo from "@/assets/Dashboard/AnalyticsLogo.svg";
import SettingsLogo from "@/assets/Dashboard/SettingsLogo.svg";
import NotificationLogo from "@/assets/Dashboard/NotificationLogo.svg";
import EngageMixLogo from "@/assets/Dashboard/EngageMixLogo.svg";

interface SidebarProps {
  onNavClick: (section: string) => void;
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavClick, activeSection }) => (
  <div className="w-72 bg-[#101928] text-white p-4 flex flex-col rounded-xl overflow-hidden max-h-screen">
    <div className="mb-8 text-left">
      <img src={EngageMixLogo} alt="EngageMix" className="h-full w-full" />
    </div>
    <nav className="space-y-1 flex-grow">
      <Button
        variant="ghost"
        className={`w-full justify-start text-[#98A2B3] hover:bg-[#2a3548] hover:text-white ${
          activeSection === "dashboard" ? "bg-[#2a3548] text-white" : ""
        }`}
        onClick={() => onNavClick("dashboard")}
      >
        <img src={DashboardLogo} alt="Dashboard" className="mr-2 h-5 w-5" />
        Dashboard
      </Button>
      <Button
        variant="ghost"
        className={`w-full justify-start text-[#98A2B3] hover:bg-[#2a3548] hover:text-white ${
          activeSection === "projects" ? "bg-[#2a3548] text-white" : ""
        }`}
        onClick={() => onNavClick("projects")}
      >
        <img src={ProjectLogo} alt="Projects" className="mr-2 h-5 w-5" />
        Projects
      </Button>
      <Button
        variant="ghost"
        className={`w-full justify-start text-[#98A2B3] hover:bg-[#2a3548] hover:text-white ${
          activeSection === "social-media" ? "bg-[#2a3548] text-white" : ""
        }`}
        onClick={() => onNavClick("social-media")}
      >
        <img
          src={SocialMediaLogo}
          alt="Social media"
          className="mr-2 h-5 w-5"
        />
        Social media
      </Button>
      <Button
        variant="ghost"
        className={`w-full justify-start text-[#98A2B3] hover:bg-[#2a3548] hover:text-white ${
          activeSection === "analytics" ? "bg-[#2a3548] text-white" : ""
        }`}
        onClick={() => onNavClick("analytics")}
      >
        <img src={AnalyticsLogo} alt="Analytics" className="mr-2 h-5 w-5" />
        Analytics
      </Button>
      <Button
        variant="ghost"
        className={`w-full justify-start text-[#98A2B3] hover:bg-[#2a3548] hover:text-white ${
          activeSection === "settings" ? "bg-[#2a3548] text-white" : ""
        }`}
        onClick={() => onNavClick("settings")}
      >
        <img src={SettingsLogo} alt="Settings" className="mr-2 h-5 w-5" />
        Settings
      </Button>
      <Button
        variant="ghost"
        className={`w-full justify-start text-[#98A2B3] hover:bg-[#2a3548] hover:text-white ${
          activeSection === "notification"
            ? "bg-[#2a3548] hover:text-white"
            : ""
        }`}
        onClick={() => onNavClick("notification")}
      >
        <img
          src={NotificationLogo}
          alt="Notification"
          className="mr-2 h-5 w-5"
        />
        Notifications
      </Button>
    </nav>
    <UpgradePlan />
  </div>
);

export default Sidebar;
