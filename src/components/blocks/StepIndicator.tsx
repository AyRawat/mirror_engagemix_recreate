import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex justify-center space-x-2 mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
              index + 1 === currentStep
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            )}
          >
            {index + 1}
          </div>
          <span
            className={cn(
              "ml-2",
              index + 1 === currentStep
                ? "text-blue-500 font-medium"
                : "text-gray-600"
            )}
          >
            {step}
          </span>
          {index < steps.length - 1 && (
            <div className="w-12 h-px bg-gray-300 mx-2"></div>
          )}
        </div>
      ))}
    </div>
  );
}
