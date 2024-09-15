// src/components/Custom/Statusbar.tsx
import { MessageSquare, Calendar } from "lucide-react";

interface StatusBarProps {
  createdAt: string;
  mentions: number; // Add mentions prop
}

export default function StatusBar({ createdAt, mentions }: StatusBarProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex justify-between items-center w-full py-2 px-4 text-sm text-gray-500">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <MessageSquare className="w-4 h-4" />
          <span>{mentions}</span> {/* Use mentions prop */}
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <Calendar className="w-4 h-4" />
        <span>{formattedDate}</span>
      </div>
    </div>
  );
}
