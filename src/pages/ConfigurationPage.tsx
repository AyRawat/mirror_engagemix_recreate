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

type Source = "hackernews" | "reddit" | "linkedin" | "twitter" | "quora";

export function ConfigurationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const [accountData, setAccountData] = useState({ email: "", password: "" });
  const [productData, setProductData] = useState({
    companyName: "",
    companyDomain: "",
    companyDescription: "",
  });
  const [keywords, setKeywords] = useState<string[]>([]);
  const [searchConfig, setSearchConfig] = useState<{ platforms: Source[] }>({
    platforms: [],
  });

  const handleNext = async () => {
    if (currentStep === 4) {
      // Collect all data and make the API call
      const projectData = {
        name: "Get Leads", // Hardcoded name
        companyDomain: productData.companyDomain,
        companyDescription: productData.companyDescription,
        companyName: productData.companyName,
        keywords,
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
        return (
          <CreateAccount
            onNext={() => setCurrentStep(2)}
            setAccountData={setAccountData}
          />
        );
      case 2:
        return (
          <ProductAnalysis
            onNext={() => setCurrentStep(3)}
            onBack={() => setCurrentStep(1)}
            setProductData={setProductData}
          />
        );
      case 3:
        return (
          <KeywordConfiguration
            onNext={() => setCurrentStep(4)}
            onBack={() => setCurrentStep(2)}
            setKeywords={setKeywords}
          />
        );
      case 4:
        return (
          <SearchConfiguration
            onNext={handleNext}
            onBack={() => setCurrentStep(3)}
            setSearchConfig={setSearchConfig}
          />
        );
      default:
        navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="h-[96vh] flex py-10 justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_6fr] gap-8 w-full max-w-screen-3xl max-h-screen overflow-hidden">
          {/* Left Column - Social Media Post Card */}
          <div
            className="bg-gradient-to-br p-4 rounded-lg shadow-lg relative"
            style={{
              backgroundImage: `url(${KeywordCardBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <KeywordCard />
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
