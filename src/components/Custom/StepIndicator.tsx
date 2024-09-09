import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex justify-center space-x-2 mb-8 border border-gray-300 rounded-full">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center p-2">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
              index + 1 === currentStep
                ? "bg-blue-500 text-white"
                : "border border-gray-300 rounded-full text-gray-600"
            )}
          >
            {index + 1}
          </div>
          <span
            className={cn(
              "ml-2",
              index + 1 === currentStep
                ? "text-blue-500 font-medium text-xs"
                : "text-gray-600 text-xs"
            )}
          >
            {step}
          </span>
          {index < steps.length - 1 && (
            <ChevronRight className="text-gray-400 w-5 h-5 mx-4" />
          )}
        </div>
      ))}
    </div>
  );
}
