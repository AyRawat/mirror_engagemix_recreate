import { useState } from "react";
import CreateAccount from "@/components/blocks/CreateAccount";
import ProductAnalysis from "@/components/blocks/ProductAnalysis";
import SearchConfiguration from "@/components/blocks/SearchConfiguration";
import KeywordConfiguration from "@/components/blocks/KeywordConfiguration";
import { StepIndicator } from "@/components/Custom/StepIndicator";
import KeywordCard from "@/components/blocks/KeywordCard";
import { useNavigate } from "react-router-dom";
import KeywordCardBackground from "@/assets/KeywordCardBackground.svg";

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
            onNext={() => setCurrentStep(4)}
            onBack={() => setCurrentStep(3)}
          />
        );
      default:
        navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_5fr] gap-8 w-[1384px] h-[1024px]">
          {/* Left Column - Social Media Post Card */}
          <div
            className="bg-gradient-to-br  p-4 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${KeywordCardBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <KeywordCard />
          </div>

          {/* Right Column - Create Account Form with Progress Indicator */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Placeholder for Create Account Form */}
            <div>
              <div className="">
                <StepIndicator
                  steps={[
                    "Create account",
                    "Website analysis",
                    "Keyword & Search configuration",
                  ]}
                  currentStep={currentStep}
                />
              </div>
              {renderStepContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
