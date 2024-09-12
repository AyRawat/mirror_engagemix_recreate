import React from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  title: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  buttonText,
  onButtonClick,
}) => (
  <header className="flex justify-between items-center mb-8">
    <h1 className="text-2xl font-bold">{title}</h1>
    <div className="flex items-center space-x-4">
      <Bell className="h-5 w-5 text-gray-500" />
      {buttonText !== "No Button" && (
        <Button
          onClick={onButtonClick}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {buttonText}
        </Button>
      )}
      {title === "Projects" && (
        <Avatar>
          <AvatarImage src="/placeholder-avatar.jpg" />
          <AvatarFallback>JW</AvatarFallback>
        </Avatar>
      )}
    </div>
  </header>
);

export default Header;
