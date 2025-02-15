// src/components/blocks/ProjectCard.tsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, MoreHorizontal, Archive, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusBar from "@/components/project/Statusbar";
import DropdownMenuItems from "@/components/blocks/DropDownMenu";
import FacebookIcon from "@/assets/icons/facebook.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import LinkedInIcon from "@/assets/icons/linkedinIcon.svg";
import RedditIcon from "@/assets/icons/redditIcon.svg";
import HackernewsIcon from "@/assets/icons/hackernews.svg";
import QuoraIcon from "@/assets/icons/quora.svg";
import { IProjectAnalytics, ProjectDto } from "@/apis/types";
import { useAuth } from "@/contexts/auth/AuthContext"; // Import useAuth

interface ProjectCardProps {
  project: ProjectDto;
  onClick: (project: ProjectDto) => void;
  analyticsData: IProjectAnalytics; // Add mentions prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  analyticsData,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useAuth(); // Extract user data from AuthContext
  console.log("mentions", analyticsData);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleArchive = () => {
    console.log("Archive clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  const handleProjectClick = () => {
    onClick(project);
  };

  const options = [
    { label: "Archive", icon: Archive, onClick: handleArchive },
    { label: "Delete", icon: Trash, onClick: handleDelete },
  ];

  const iconMap: { [key: string]: string } = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    linkedin: LinkedInIcon,
    reddit: RedditIcon,
    hackernews: HackernewsIcon,
    quora: QuoraIcon,
  };

  // Compute initials from user name
  const getInitials = (name: string) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("");
    return initials.toUpperCase();
  };

  return (
    <Card className="mb-4 border border-gray-300 rounded-2xl h-42">
      <CardContent className="p-3">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center">
            <ExternalLink className="h-4 w-4 mr-2 text-gray-500" />
            <span 
              className="font-semibold cursor-pointer hover:underline" 
              onClick={handleProjectClick}
            >
              {project.name}
            </span>
          </div>
          <div className="relative">
            <Button
              variant="outline"
              size="icon"
              onClick={handleDropdownToggle} // Toggle the dropdown
            >
              <MoreHorizontal className="h-5 w-5" />
            </Button>
            <DropdownMenuItems
              isOpen={isDropdownOpen}
              onClose={handleCloseDropdown}
              options={options}
            />
          </div>
        </div>
        <div className="flex space-x-2 mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {project.keywords.length} keywords
          </span>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Brand voice: Jovial
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex -space-x-2">
            <Avatar className="border-2 border-white w-8 h-8">
              <AvatarImage src={user?.avatarUrl || "/placeholder-avatar.jpg"} />
              <AvatarFallback>
                {user ? getInitials(user.name) : "?"}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              {project.sources.map((source) => (
                <img
                  key={source}
                  src={iconMap[source]}
                  alt={`${source} icon`}
                  className="h-8 w-8"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-[#dfe1e6] my-1" />
        <StatusBar
          createdAt={project?.createdAt}
          mentions={analyticsData.replies || 0}
          posts={analyticsData.posts || 0}
        />{" "}
        {/* Pass mentions prop */}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
