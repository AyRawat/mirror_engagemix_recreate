// src/components/Custom/ReplySent.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ReplySentProps {
  reply: string;
}

const ReplySent: React.FC<ReplySentProps> = ({ reply }) => (
  <Card className="flex flex-col items-center pt-5 px-5 w-full rounded-bl-xl rounded-br-xl border border-gray-300 bg-purple-50">
    <CardContent className="flex flex-col items-start gap-5">
      <div className="flex items-start w-full h-18 gap-5">
        <div className="flex-shrink-0 w-1/2 font-light leading-6 ">{reply}</div>
        <div className="flex justify-end items-center flex-1 gap-2">
          <Badge className="flex justify-center items-center py-1 px-3 h-8 rounded-lg bg-green-600 text-white shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Reply sent</span>
              <svg
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.14529 6.26286C9.38287 6.04527 9.39907 5.67628 9.18148 5.4387C8.96389 5.20112 8.5949 5.18491 8.35732 5.4025L6.20361 7.375L5.64529 6.86366C5.40771 6.64607 5.03872 6.66227 4.82112 6.89985C4.60353 7.13743 4.61974 7.50642 4.85732 7.72401L5.80962 8.59619C6.03259 8.8004 6.37462 8.8004 6.59759 8.59619L9.14529 6.26286Z"
                  fill="#F9FAFB"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.0013 1.16602C3.77964 1.16602 1.16797 3.77769 1.16797 6.99935C1.16797 10.221 3.77964 12.8327 7.0013 12.8327C10.223 12.8327 12.8346 10.221 12.8346 6.99935C12.8346 3.77769 10.223 1.16602 7.0013 1.16602ZM2.33464 6.99935C2.33464 4.42202 4.42397 2.33268 7.0013 2.33268C9.57863 2.33268 11.668 4.42202 11.668 6.99935C11.668 9.57668 9.57863 11.666 7.0013 11.666C4.42397 11.666 2.33464 9.57668 2.33464 6.99935Z"
                  fill="#F9FAFB"
                />
              </svg>
            </div>
          </Badge>
        </div>
      </div>
      <div className="text-blue-600 text-center font-medium leading-6">
        Hide reply
      </div>
    </CardContent>
  </Card>
);

export default ReplySent;
