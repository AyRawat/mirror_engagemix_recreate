import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/auth/AuthContext";
import AddMemberIcon from "@/assets/icons/addmember.svg";

interface HeaderProps {
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  onInviteClick?: () => void;
  projectName?: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  buttonText,
  onButtonClick,
  onInviteClick,
  projectName,
  showBackButton = false,
}) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleBackClick = () => {
    navigate("/dashboard");
  };

  const getInitials = (name: string) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("");
    return initials.toUpperCase();
  };

  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center">
        {showBackButton && (
          <Button
            variant="outline"
            size="icon"
            className="mr-2"
            onClick={handleBackClick}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        )}
        <h1 className="text-2xl font-bold">{title || projectName}</h1>
      </div>
      <div className="flex items-center space-x-4">
        {title && <Bell className="h-5 w-5 text-gray-500" />}
        {buttonText && buttonText !== "No Button" && (
          <Button
            onClick={onButtonClick}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {buttonText}
          </Button>
        )}
        <div className="flex -space-x-2">
          <Avatar className="border-2 border-white w-8 h-8">
            <AvatarImage src={user?.avatarUrl || "/placeholder-avatar.jpg"} />
            <AvatarFallback>
              {user ? getInitials(user.name) : "?"}
            </AvatarFallback>
          </Avatar>
          {onInviteClick && (
            <Avatar
              className="border-2 border-white w-8 h-8 cursor-pointer"
              onClick={onInviteClick}
            >
              <img src={AddMemberIcon} className="h-7 w-7" />
            </Avatar>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
