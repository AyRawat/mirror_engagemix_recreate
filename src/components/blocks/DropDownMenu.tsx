import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideIcon } from "lucide-react";

interface DropdownMenuOption {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
}

interface DropdownMenuItemsProps {
  isOpen: boolean;
  onClose: () => void;
  options: DropdownMenuOption[];
}

const DropdownMenuItems: React.FC<DropdownMenuItemsProps> = ({
  isOpen,
  onClose,
  options,
}) => {
  return (
    <DropdownMenu open={isOpen} onOpenChange={onClose}>
      <DropdownMenuTrigger />
      <DropdownMenuContent align="end" className="w-56">
        {options.map((option, index) => (
          <DropdownMenuItem
            key={index}
            className="flex items-center py-2 px-4 gap-2"
            onClick={option.onClick}
          >
            <option.icon className="h-5 w-5" />
            <span className="text-sm">{option.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuItems;
