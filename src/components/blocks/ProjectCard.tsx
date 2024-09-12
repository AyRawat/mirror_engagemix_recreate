// src/components/blocks/ProjectCard.tsx
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, MoreHorizontal, Archive, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusBar from "../Custom/Statusbar";
import DropdownMenuItems from "@/components/blocks/DropDownMenu";
import FacebookIcon from "@/assets/icons/facebook";
import TwitterIcon from "@/assets/icons/twitter";
import LinkedInIcon from "@/assets/icons/linkedinIcon.svg";
import RedditIcon from "@/assets/icons/redditIcon.svg";
import { ProjectDto } from "@/apis/types";
import { useDispatch } from "@/hooks/DispatchHook";
import { fetchPosts } from "@/store/postSlice";

interface ProjectCardProps {
  project: ProjectDto;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();

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
    dispatch(fetchPosts(project.id));
    onClick();
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
  };

  return (
    <Card className="mb-4 cursor-pointer border border-gray-300 rounded-2xl">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center">
            <ExternalLink className="h-4 w-4 mr-2 text-gray-500" />
            <span className="font-semibold" onClick={handleProjectClick}>
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
            <div className="flex space-x-2">
              {project.sources.map((source) => (
                <img
                  key={source}
                  src={iconMap[source]}
                  alt={`${source} icon`}
                  className="h-8 w-8"
                />
              ))}
              {/* <Button
                variant="outline"
                size="icon"
                className="h-8 flex items-center justify-center"
              >
                <FacebookIcon />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 flex items-center justify-center"
              >
                <TwitterIcon />
              </Button> */}
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-[#dfe1e6] my-2" />
        <StatusBar />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
