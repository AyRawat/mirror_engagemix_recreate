// src/components/Custom/Statusbar.tsx
import { FileText, MessageSquare, Calendar } from "lucide-react";

interface StatusBarProps {
  createdAt: string;
}

export default function StatusBar({ createdAt }: StatusBarProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex justify-between items-center w-full py-2 px-4 text-sm text-gray-500">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <MessageSquare className="w-4 h-4" />
          <span>15</span>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <Calendar className="w-4 h-4" />
        <span>{formattedDate}</span>
      </div>
    </div>
  );
}
