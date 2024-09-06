import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronDown,
  ExternalLink,
  Filter,
  Calendar,
  Download,
  Maximize2,
  MoreHorizontal,
} from "lucide-react";

const FilterButton = ({ children }: { children: React.ReactNode }) => (
  <Button variant="outline" className="text-gray-500">
    {children}
    <ChevronDown className="ml-2 h-4 w-4" />
  </Button>
);

const ProjectCard = ({ onClick }: { onClick: () => void }) => (
  <Card className="mb-4 cursor-pointer">
    <CardContent className="p-4">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center">
          <ExternalLink className="h-4 w-4 mr-2 text-gray-500" />
          <span className="font-semibold" onClick={onClick}>
            www.Homelade.io
          </span>
        </div>
        <Button variant="outline" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex space-x-2 mb-2">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          8 keywords
        </span>
        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
          Brand voice:Jovial
        </span>
      </div>
      <div className="flex justify-between items-center">
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
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">1 | 15</span>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="h-4 w-4 fill-current text-blue-500"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-4 w-4 fill-current text-blue-400"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </Button>
          </div>
          <span className="text-sm text-gray-500">Mar 23</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function ProjectManagement() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/social-media-results");
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-left">Projects</h2>
      <div className="flex justify-between items-center mb-3">
        <Tabs defaultValue="active" className="w-[400px] text-left">
          <TabsList>
            <TabsTrigger value="active" className="flex-1">
              Active
            </TabsTrigger>
            <TabsTrigger value="archived" className="flex-1">
              Archived
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex space-x-2">
          <FilterButton>
            <Filter className="mr-2 h-4 w-4" />
            All platforms
          </FilterButton>
          <FilterButton>
            <Calendar className="mr-2 h-4 w-4" />
            Last 24 hours
          </FilterButton>
          <FilterButton>
            <Download className="mr-2 h-4 w-4" />
            Import/export
          </FilterButton>
          <Button variant="outline" size="icon">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div>
        <ProjectCard onClick={handleCardClick} />
        <ProjectCard onClick={handleCardClick} />
      </div>
    </div>
  );
}
