import { useState } from "react";
import CreateAccount from "@/components/blocks/CreateAccount";
import ProductAnalysis from "@/components/blocks/ProductAnalysis";
import SearchConfiguration from "@/components/blocks/SearchConfiguration";
import KeywordConfiguration from "@/components/blocks/KeywordConfiguration";
import { StepIndicator } from "@/components/Custom/StepIndicator";
import KeywordCard from "@/components/blocks/KeywordCard";
import { useNavigate } from "react-router-dom";
import KeywordCardBackground from "@/assets/KeywordCardBackground.svg";
import { api } from "@/apis";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type Source = "hackernews" | "reddit" | "linkedin" | "twitter" | "quora";

export function ConfigurationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const productData = useSelector((state: RootState) => state.form.productData);
  const keywordsData = useSelector((state: RootState) => state.form.keywords);
  const projectName = useSelector((state: RootState) => state.form.projectName);
  const [keywords, setKeywords] = useState<string[]>(keywordsData);
  const searchConfig = useSelector(
    (state: RootState) => state.form.searchConfig
  );

  const handleNext = async () => {
    if (currentStep === 4) {
      // Collect all data and make the API call
      const projectData = {
        name: projectName, // Use projectName from Redux store
        companyDomain: productData.companyDomain,
        companyDescription: productData.companyDescription,
        companyName: productData.companyName,
        keywords: keywordsData,
        sources: searchConfig.platforms.map(
          (str) => str.toLowerCase() as Source
        ),
      };
      console.log(projectData);

      try {
        const createdProject = await api.projects.create(projectData);
        console.log("Created Project", createdProject);

        navigate("/dashboard");
      } catch (error) {
        console.error("Failed to create project:", error);
      }
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

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
          <KeywordConfiguration
            onNext={() => setCurrentStep(4)}
            onBack={() => setCurrentStep(2)}
          />
        );
      case 4:
        return (
          <SearchConfiguration
            onNext={handleNext}
            onBack={() => setCurrentStep(3)}
          />
        );
      default:
        navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="h-[96vh] flex pt-[0.5rem] pb-[2.5rem] justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_6fr] gap-8 w-full max-w-screen-3xl max-h-screen overflow-hidden">
          {/* Left Column - Social Media Post Card */}
          <div
            className="bg-gradient-to-br p-4 rounded-lg shadow-lg relative w-[24rem]"
            style={{
              backgroundImage: `url(${KeywordCardBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <KeywordCard /> */}
          </div>

          {/* Right Column - Create Account Form with Progress Indicator */}
          <div className="bg-white p-2 rounded-lg max-h-96">
            {/* Placeholder for Create Account Form */}
            <div>
              <div className="px-2">
                <StepIndicator
                  steps={[
                    "Create account",
                    "Product analysis",
                    "Keyword configuration",
                    "Search configuration",
                  ]}
                  currentStep={currentStep}
                />
              </div>
              <div className="py-20 -mt-16 mx-36 px-16 max-w-3xl">
                {renderStepContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
