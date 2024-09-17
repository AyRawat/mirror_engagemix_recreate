import { useState } from "react";
import CreateAccount from "@/components/blocks/CreateAccount";
import ProductAnalysis from "@/components/forms/ProductAnalysis";
import SearchConfiguration from "@/components/forms/SearchConfiguration";
import KeywordConfiguration from "@/components/forms/KeywordConfiguration";
import { StepIndicator } from "@/components/forms/StepIndicator";
import { useNavigate } from "react-router-dom";
import { api } from "@/apis";
import { CompanyDto, Source } from "@/apis/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import KeywordCardBackground from "@/assets/Background/KeywordCardBackground.svg";
import Loader from "@/components/common/Loader";
import { useDispatch } from "@/hooks/DispatchHook";
import { setProductData } from "@/store/formSlice";
import { useAuth } from "@/contexts/auth/AuthContext";

export function ConfigurationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const productData = useSelector((state: RootState) => state.form.productData);
  const keywordsData = useSelector((state: RootState) => state.form.keywords);
  const projectName = useSelector((state: RootState) => state.form.projectName);
  const searchConfig = useSelector(
    (state: RootState) => state.form.searchConfig
  );
  const projectDescription = useSelector(
    (state: RootState) => state.form.projectDescription
  );

  const handleNext = async (skipTo?: number) => {
    if (currentStep >= 1) {
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
        if (skipTo) {
          setCurrentStep(skipTo);
        } else if (currentStep === 4) {
          handleFinalStep();
        } else {
          setCurrentStep(currentStep + 1);
        }
      }, 2000); // Show loader for 2 seconds
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleFinalStep = async () => {
    const companyData = {
      domain: productData.companyDomain,
      description: productData.companyDescription,
      name: productData.companyName,
    };

    try {
      const createdCompany = await api.company.create(companyData);
      console.log("Created Company", createdCompany);

      const projectData = {
        companyId: createdCompany.id,
        name: projectName,
        description: projectDescription,
        keywords: keywordsData,
        sources: searchConfig.platforms.map(
          (str) => str.toLowerCase() as Source
        ),
      };

      const createdProject = await api.projects.create(projectData);
      console.log("Created Project", createdProject);

      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to create company or project:", error);
    }
  };

  const getTextForStep = (step: number): string => {
    const texts = [
      "Setting up your account...",
      "Analysing your website information to be able to suggest key themes and keywords...",
      "Generating your project...",
      "Setting up search configuration...",
      "Generating results based on your search...",
    ];
    return texts[step - 1] || "Processing...";
  };

  const renderStepContent = () => {
    if (showLoader) {
      return (
        <div className="flex justify-center items-center h-64">
          <Loader
            text={getTextForStep(currentStep)}
            helperText="This will only take a few seconds.."
          />
        </div>
      );
    }

    switch (currentStep) {
      case 1:
        return <CreateAccount onNext={handleNext} />;
      case 2:
        return (
          <ProductAnalysis
            onNext={handleNext}
            onBack={() => setCurrentStep(1)}
          />
        );
      case 3:
        return (
          <KeywordConfiguration
            onNext={handleNext}
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

  const prefillProductAnalysis = (company: CompanyDto) => {
    dispatch(
      setProductData({
        companyName: company.name || "",
        companyDomain: company.domain || "",
        companyDescription: company.description || "",
      })
    );
  };

  return (
    <>
      <div className="h-[96vh] flex pb-2 justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_8fr] gap-8 w-full max-w-[1920px]">
          {/* Left Column - Social Media Post Card */}
          <div
            className="bg-gradient-to-br p-4 rounded-2xl shadow-2xl relative w-[34rem]"
            style={{
              backgroundImage: `url(${KeywordCardBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Right Column - Create Account Form with Progress Indicator */}
          <div className="bg-white p-2 rounded-2xl max-h-96">
            {/* Placeholder for Create Account Form */}
            <div>
              <div className="px-4">
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
              <div
                className={`mx-auto px-16 ${
                  currentStep === 1 || currentStep === 3 || currentStep === 4
                    ? "max-w-2xl pt-5"
                    : "max-w-xl py-20"
                }`}
              >
                {renderStepContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
