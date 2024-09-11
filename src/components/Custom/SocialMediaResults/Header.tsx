import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = ({ onInviteClick }: { onInviteClick: () => void }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="mr-2"
          onClick={handleBackClick}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-lg font-semibold">Www.Homelade.io</h1>
      </div>
      <div className="flex -space-x-2">
        <Avatar className="h-8 w-8">
          <AvatarFallback>OK</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white w-8 h-8">
          <AvatarImage src="/placeholder-avatar-1.jpg" />
          <AvatarFallback>U1</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white w-8 h-8">
          <AvatarImage src="/placeholder-avatar-2.jpg" />
          <AvatarFallback>U2</AvatarFallback>
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
