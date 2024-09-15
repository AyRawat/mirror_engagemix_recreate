// src/components/Custom/ReplySent.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReplySentCheckIcon from "@/assets/icons/replysentcheck.svg";

interface ReplySentProps {
  reply: string;
  showHideButton?: boolean;
}

const ReplySent: React.FC<ReplySentProps> = ({
  reply,
  showHideButton = false,
}) => (
  <Card className="flex flex-col items-center pt-5 px-5 w-full rounded-bl-xl rounded-br-xl border border-gray-300 bg-purple-50">
    <CardContent className="flex flex-col items-start gap-5">
      <div className="flex items-start w-full h-18 gap-5">
        <div className="flex-shrink-0 w-1/2 font-light leading-6 text-left">
          {reply}
        </div>
        <div className="flex justify-end items-center flex-1 gap-2">
          <Badge className="flex justify-center items-center py-1 px-3 h-8 rounded-2xl bg-green-600 text-white shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Reply sent</span>
              <img src={ReplySentCheckIcon} className="h-4 w-4" />
            </div>
          </Badge>
        </div>
      </div>
      {showHideButton && (
        <div className="text-blue-600 text-center font-medium leading-6">
          Hide reply
        </div>
      )}
    </CardContent>
  </Card>
);

export default ReplySent;
