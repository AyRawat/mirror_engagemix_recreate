import { FileText, MessageSquare, Calendar } from "lucide-react";

export default function StatusBar() {
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
        <span>Mar 23</span>
      </div>
    </div>
  );
}
