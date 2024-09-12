import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ChatInterface = () => {
  return (
    <div className="relative w-80 h-[450px]">
      <Card className="absolute top-0 left-0 w-full h-full transform rotate-[5deg] origin-top-left shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardContent className="p-4 space-y-4">
          <div className="bg-green-100 p-3 rounded-2xl">
            <p className="text-green-800 text-sm">
              Tell us what keywords you want to track
            </p>
          </div>
          <div className="bg-blue-100 p-3 rounded-2xl">
            <p className="text-blue-800 text-sm">Tell us about your business</p>
          </div>
          <div className="bg-orange-100 p-3 rounded-2xl">
            <p className="text-orange-800 text-sm">
              Generate replies and leads when the keywords are mentioned
            </p>
          </div>
          <div className="bg-gray-100 p-3 rounded-2xl">
            <p className="text-gray-800 text-sm">Replying to @omobolarle</p>
            <p className="text-gray-600 text-sm mt-2">
              Check out BeautyBeas for your wigs and shop via their official
              website...
            </p>
          </div>
          <Input placeholder="Type your message..." />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatInterface;
