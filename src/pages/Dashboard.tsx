import React, { useState } from "react";
import {
  Bell,
  ChevronDown,
  ExternalLink,
  FileText,
  LayoutDashboard,
  MessageSquare,
  PieChart,
  Settings,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StatsComponent from "@/components/Custom/StatsComponent";
import ProjectManagement from "@/pages/ProjectManagment";
import ProductAnalysis from "@/components/blocks/ProductAnalysis";
import CustomSheet from "@/components/Custom/CustomSheet";
import { config } from "process";

const Sidebar = () => (
  <div className="w-64 bg-[#1c2536] text-white p-4 h-screen flex flex-col rounded-xl overflow-hidden">
    <div className="text-2xl font-bold mb-8 text-left">EM</div>
    <nav className="space-y-1 flex-grow">
      <Button
        variant="ghost"
        className="w-full justify-start text-white hover:bg-[#2a3548]"
      >
        <LayoutDashboard className="mr-2 h-5 w-5" />
        Dashboard
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-white hover:bg-[#2a3548]"
      >
        <FileText className="mr-2 h-5 w-5" />
        Projects
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-white hover:bg-[#2a3548]"
      >
        <MessageSquare className="mr-2 h-5 w-5" />
        Social media
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-white hover:bg-[#2a3548]"
      >
        <PieChart className="mr-2 h-5 w-5" />
        Analytics
      </Button>
      <Button
        variant="ghost"
        className="w-full justify-start text-white hover:bg-[#2a3548]"
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

const Header = ({ onNewProjectClick }: { onNewProjectClick: () => void }) => (
  <header className="flex justify-between items-center mb-8">
    <h1 className="text-2xl font-bold">Welcome, Juwon.</h1>
    <div className="flex items-center space-x-4">
      <Bell className="h-5 w-5 text-gray-500" />
      <Button
        onClick={onNewProjectClick}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        + New project
      </Button>
      <Avatar>
        <AvatarImage src="/placeholder-avatar.jpg" />
        <AvatarFallback>JW</AvatarFallback>
      </Avatar>
    </div>
  </header>
);

const Banner = () => (
  <div className="bg-[#e8eeff] rounded-lg p-6 mb-8 flex justify-between items-center">
    <div>
      <h2 className="text-2xl font-bold mb-2">
        Track Keywords, Generate Responses, Boost Sales
      </h2>
      <p className="text-gray-600">
        We help you grow sales by mentioning your business when your keywords
        are mentioned
      </p>
    </div>
    <img
      src="/placeholder-banner-image.png"
      alt="Banner illustration"
      className="w-1/3"
    />
  </div>
);

export default function Component() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleNewProjectClick = () => {
    setIsSheetOpen(true);
  };

  function handleNextStep(config: any): void {
    // Implement the logic for the next step here
    // For example, you can navigate to the next page or update some state
    console.log("Handling next step", config);
  }
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header onNewProjectClick={handleNewProjectClick} />
        <Banner />
        <StatsComponent />
        <ProjectManagement />
      </main>
      <CustomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
    </div>
  );
}
