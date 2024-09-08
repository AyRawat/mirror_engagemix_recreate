import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Archive, Trash } from "lucide-react";

interface DropdownMenuItemsProps {
  isOpen: boolean;
  onClose: () => void;
}

const DropdownMenuItems: React.FC<DropdownMenuItemsProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <DropdownMenu open={isOpen} onOpenChange={onClose}>
      <DropdownMenuTrigger />
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem className="flex items-center py-2 px-4 gap-2">
          <Archive className="h-5 w-5" />
          <span className="text-sm">Archive</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center py-2 px-4 gap-2">
          <Trash className="h-5 w-5" />
          <span className="text-sm">Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuItems;
