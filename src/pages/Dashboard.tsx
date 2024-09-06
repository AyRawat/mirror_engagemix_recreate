import React from "react";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatsComponent from "@/components/blocks/StatsComponent";
import ProjectManagement from "@/pages/ProjectManagment";

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

const Header = () => (
  <header className="flex justify-between items-center mb-8">
    <h1 className="text-2xl font-bold">Welcome, Juwon.</h1>
    <div className="flex items-center space-x-4">
      <Bell className="h-5 w-5 text-gray-500" />
      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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

const Stats = () => (
  <div className="grid grid-cols-6 gap-4 mb-8">
    {[
      { label: "Projects", value: "0" },
      { label: "Keywords Tracked", value: "0" },
      { label: "Mentions", value: "0" },
      { label: "Leads", value: "0" },
      { label: "Link Clicks", value: "0" },
      { label: "Impressions", value: "0" },
    ].map((stat, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm"
      >
        <span className="text-3xl font-bold text-gray-800 mb-2">
          {stat.value}
        </span>
        <span className="text-sm text-gray-500">{stat.label}</span>
      </div>
    ))}
  </div>
);

const ProjectList = () => (
  <div>
    <div className="flex justify-between items-start mb-4">
      <div className="w-1/2 items-start">
        <h2 className="text-xl font-semibold mb-2 text-left">Projects</h2>
        <Tabs defaultValue="active" className="w-full text-left">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex justify-end items-center space-x-4 mb-4 w-1/2">
        <Button variant="outline">
          All platforms <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline">
          Last 24 hours <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline">
          Import/export <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
    {[1, 2, 3].map((_, index) => (
      <Card key={index} className="mb-4">
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <ExternalLink className="h-4 w-4" />
                <span className="font-semibold">www.Homelade.io</span>
              </div>
              <div className="flex space-x-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  8 keywords
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Brand voice:Jovial
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-white w-8 h-8">
                  <AvatarImage src="/placeholder-avatar-1.jpg" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white w-8 h-8">
                  <AvatarImage src="/placeholder-avatar-2.jpg" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white w-8 h-8">
                  <AvatarImage src="/placeholder-avatar-3.jpg" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-sm text-gray-500">1 | 15</div>
              <div className="text-sm text-gray-500">Mar 23</div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default function Component() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        <Banner />
        <StatsComponent />
        <ProjectManagement />
      </main>
    </div>
  );
}
