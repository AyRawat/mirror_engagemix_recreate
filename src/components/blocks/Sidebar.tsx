import React from "react";
import { Button } from "@/components/ui/button";
import {
  Bell,
  FileText,
  LayoutDashboard,
  MessageSquare,
  PieChart,
  Settings,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface SidebarProps {
  onNavClick: (section: string) => void;
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavClick, activeSection }) => (
  <div className="w-64 bg-[#1c2536] text-white p-4 flex flex-col rounded-xl overflow-hidden max-h-screen">
    <div className="text-2xl font-bold mb-8 text-left">EM</div>
    <nav className="space-y-1 flex-grow">
      <Button
        variant="ghost"
        className={`w-full justify-start text-white hover:bg-[#2a3548] ${
          activeSection === "dashboard" ? "bg-[#2a3548]" : ""
        }`}
        onClick={() => onNavClick("dashboard")}
      >
        <LayoutDashboard className="mr-2 h-5 w-5" />
        Dashboard
      </Button>
      <Button
        variant="ghost"
        className={`w-full justify-start text-white hover:bg-[#2a3548] ${
          activeSection === "projects" ? "bg-[#2a3548]" : ""
        }`}
        onClick={() => onNavClick("projects")}
      >
        <FileText className="mr-2 h-5 w-5" />
        Projects
      </Button>
      <Button
        variant="ghost"
        className={`w-full justify-start text-white hover:bg-[#2a3548] ${
          activeSection === "social-media" ? "bg-[#2a3548]" : ""
        }`}
        onClick={() => onNavClick("social-media")}
      >
        <MessageSquare className="mr-2 h-5 w-5" />
        Social media
      </Button>
      <Button
        variant="ghost"
        className={`w-full justify-start text-white hover:bg-[#2a3548] ${
          activeSection === "analytics" ? "bg-[#2a3548]" : ""
        }`}
        onClick={() => onNavClick("analytics")}
      >
        <PieChart className="mr-2 h-5 w-5" />
        Analytics
      </Button>
      <Button
        variant="ghost"
        className={`w-full justify-start text-white hover:bg-[#2a3548] ${
          activeSection === "settings" ? "bg-[#2a3548]" : ""
        }`}
        onClick={() => onNavClick("settings")}
      >
        <Settings className="mr-2 h-5 w-5" />
        Settings
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-white hover:bg-[#2a3548]"
      >
        <Bell className="mr-2 h-5 w-5" />
        Notifications
      </Button>
    </nav>
    <Card className="mt-auto bg-[#2a3548] text-white border-none">
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">Upgrade your plan to unlock</h3>
        <p className="text-sm mb-4">
          You are now using the free plan. Upgrade plan to continue using...
        </p>
        <p className="text-sm mb-2">Free plan</p>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full w-1/3"></div>
        </div>
        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
          Upgrade now
        </Button>
      </CardContent>
    </Card>
  </div>
);

export default Sidebar;
