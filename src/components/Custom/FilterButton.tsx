import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface FilterButtonProps {
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({ children }) => (
  <Button variant="outline" className="text-gray-500">
    {children}
    <ChevronDown className="ml-2 h-4 w-4" />
  </Button>
);

export default FilterButton;
