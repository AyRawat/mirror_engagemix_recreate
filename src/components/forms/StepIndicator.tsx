import { cn } from "@/lib/utils";
import StepChevronRight from "@/assets/icons/stepIndicatorChevronRight.svg";

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
              "w-8 h-8 rounded-full flex flex-shrink-0 items-center justify-center text-sm font-medium",
              index + 1 === currentStep
                ? "border border-blue-500 text-blue-500"
                : "border border-gray-300  text-gray-600"
            )}
          >
            {index + 1}
          </div>
          <span
            className={cn(
              "ml-2",
              index + 1 === currentStep
                ? "text-blue-500 font-bold text-xs "
                : "text-gray-600 text-xs font-semibold"
            )}
          >
            {step}
          </span>
          {index < steps.length - 1 && (
            <img
              src={StepChevronRight}
              alt="chevron-right"
              className="w-8 h-8 mx-2 -my-5"
            />
          )}
        </div>
      ))}
    </div>
  );
}
