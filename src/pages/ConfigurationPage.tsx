import { useState } from "react";
import CreateAccount from "@/components/blocks/CreateAccount";
import ProductAnalysis from "@/components/blocks/ProductAnalysis";
import SearchConfiguration from "@/components/blocks/SearchConfiguration";
import KeywordConfiguration from "@/components/blocks/KeyworkConfiguration";
import { StepIndicator } from "@/components/blocks/StepIndicator";
import KeywordCard from "@/components/blocks/KeywordCard";
import { useNavigate } from "react-router-dom";

export function ConfigurationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <CreateAccount onNext={() => setCurrentStep(2)} />;
      case 2:
        return (
          <ProductAnalysis
            onNext={() => setCurrentStep(3)}
            onBack={() => setCurrentStep(1)}
          />
        );
      case 3:
        return (
          <SearchConfiguration
            onNext={() => setCurrentStep(4)}
            onBack={() => setCurrentStep(2)}
          />
        );
      case 4:
        return (
          <KeywordConfiguration
            onNext={() => setCurrentStep(5)}
            onBack={() => setCurrentStep(3)}
          />
        );
      default:
        navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      <StepIndicator
        steps={[
          "Create account",
          "Product analysis",
          "Search configuration",
          "Keyword configuration",
        ]}
        currentStep={currentStep}
      />
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-12">
        <div className="relative">
          <KeywordCard />
        </div>
        <div>{renderStepContent()}</div>
      </div>
    </div>
  );
}
