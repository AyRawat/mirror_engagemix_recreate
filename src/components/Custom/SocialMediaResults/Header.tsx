import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/auth/AuthContext"; // Import useAuth

interface HeaderProps {
  onInviteClick: () => void;
  projectName: string; // Add projectName prop
}

const Header: React.FC<HeaderProps> = ({ onInviteClick, projectName }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/dashboard");
  };
  const { user } = useAuth(); // Extract user data from AuthContext

  const getInitials = (name: string) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("");
    return initials.toUpperCase();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="mr-2"
          onClick={handleBackClick}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-lg font-semibold">{projectName}</h1>{" "}
        {/* Use projectName */}
      </div>
      <div className="flex -space-x-2">
        <Avatar className="border-2 border-white w-8 h-8">
          <AvatarImage src={user?.avatarUrl || "/placeholder-avatar.jpg"} />
          <AvatarFallback>{user ? getInitials(user.name) : "?"}</AvatarFallback>
        </Avatar>
        <Avatar
          className="border-2 border-white w-8 h-8 cursor-pointer"
          onClick={onInviteClick}
        >
          <Plus className="h-7 w-7 text-white bg-black" />
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
