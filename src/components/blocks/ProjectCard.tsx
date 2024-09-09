import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusBar from "../Custom/Statusbar";
import DropdownMenuItems from "@/components/blocks/DropDownMenu";
import FacebookIcon from "@/assets/icons/facebook";
import TwitterIcon from "@/assets/icons/twitter";

interface ProjectCardProps {
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ onClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Card className="mb-4 cursor-pointer border border-gray-300 rounded-lg">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center">
            <ExternalLink className="h-4 w-4 mr-2 text-gray-500" />
            <span className="font-semibold" onClick={onClick}>
              www.Homelade.io
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
            />
          </div>
        </div>
        <div className="flex space-x-2 mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            8 keywords
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
              <Button
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
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[998px] h-px bg-[#dfe1e6] my-2" />
        <StatusBar />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
