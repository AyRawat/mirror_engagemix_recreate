// src/components/project/NoProjectCard.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import LensPaperIcon from "@/assets/icons/lensPaper.svg";

interface NoProjectCardProps {
  onCreateProject: () => void;
}

const NoProjectCard: React.FC<NoProjectCardProps> = ({ onCreateProject }) => {
  return (
    <Card className="mb-4 border border-gray-300 rounded-2xl h-42">
      <CardContent className="p-6 flex flex-col items-center justify-center">
        <FileText className="w-16 h-16 text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
        <p className="text-gray-500 mb-4">
          Create your first project to get started
        </p>
        <Button
          onClick={onCreateProject}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Create Project
        </Button>
      </CardContent>
    </Card>
  );
};

export default NoProjectCard;
