import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const NoAccountSection = () => (
  <div className="flex flex-col items-center justify-center mt-16">
    <FileText className="w-16 h-16 text-gray-400 mb-4" />
    <h3 className="text-xl font-semibold mb-2">No account added</h3>
    <p className="text-gray-500 mb-4">Add a new account</p>
    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
      + Connect account
    </Button>
  </div>
);

export default NoAccountSection;
