/* eslint-disable react-hooks/exhaustive-deps */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductData } from "@/store/formSlice";
import { RootState } from "@/store/store";
import { CompanyDto } from "@/apis/types";
import { api } from "@/apis";
import { useAuth } from "@/contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";

const ProductAnalysis = ({
  onNext,
  onBack,
  isConfigSetting = false,
  company 
  //= useAuth().user?.company,
}: {
  onNext: () => void;
  onBack: () => void;
  isConfigSetting?: boolean;
  company?: CompanyDto;
}) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();
  const productData = useSelector((state: RootState) => state.form.productData);
  const [companyName, setCompanyName] = useState(
    productData.companyName || company?.name
  );
  const [companyDomain, setCompanyDomain] = useState(
    productData.companyDomain || company?.domain
  );
  const [companyDescription, setCompanyDescription] = useState(
    productData.companyDescription || company?.description
  );
  const [companyNameError, setCompanyNameError] = useState<string | null>(null);
  const [companyDomainError, setCompanyDomainError] = useState<string | null>(
    null
  );
  const [companyDescriptionError, setCompanyDescriptionError] = useState<
    string | null
  >(null);
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateCompanyName = (name: string): string | null => {
    if (!name) {
      return "Company name is required";
    }
    return null;
  };

  const validateCompanyDomain = (domain: string): string | null => {
    try {
      new URL(domain);
      return null;
    } catch {
      return "URL not valid";
    }
  };

  const validateCompanyDescription = (description: string): string | null => {
    if (!description.trim()) {
      return "Company description is required";
    }
    return null;
  };

  useEffect(() => {
    if (company) {
      setIsFormValid(true);
    }
    const nameError = validateCompanyName(companyName || "");
    const domainError = validateCompanyDomain(companyDomain || "");
    const descriptionError = validateCompanyDescription(
      companyDescription || ""
    );

    setIsFormValid(!nameError && !domainError && !descriptionError);

    dispatch(
      setProductData({
        companyName: companyName || "",
        companyDomain: companyDomain || "",
        companyDescription: companyDescription || "",
      })
    );
  }, [companyName, companyDomain, companyDescription, dispatch]);

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    const nameError = validateCompanyName(companyName || "");
    const domainError = validateCompanyDomain(companyDomain || "");
    const descriptionError = validateCompanyDescription(
      companyDescription || ""
    );

    setCompanyNameError(nameError);
    setCompanyDomainError(domainError);
    setCompanyDescriptionError(descriptionError);

    if (!nameError && !domainError && !descriptionError) {
      if (user?.isOnboardingDone) {
        navigate("/dashboard");
      } else {
        onNext();
      }
    } else {
      if (!nameError && !domainError && !descriptionError) {
        onNext();
      }
    }
  };

  const handleGenerateDescription = async () => {
    setIsGeneratingDescription(true);
    try {
      if (companyDomain) {
        const description = await api.company.getDescriptionFromUrl(
          companyDomain
        );
        setCompanyDescription(description);
        setCompanyDescriptionError(null);
      }
    } catch (error) {
      console.error("Failed to generate description", error);
    } finally {
      setIsGeneratingDescription(false);
    }
  };

  const updateFormValidity = (
    nameError: string | null,
    domainError: string | null,
    descriptionError: string | null
  ) => {
    setIsFormValid(!nameError && !domainError && !descriptionError);
  };

  return (
    <div className="w-full">
      {!isConfigSetting && (
        <div className="flex flex-col justify-start mb-7">
        <h1
          className="text-xl text-left font-semibold letter-spacing mb-1 line-height-[25px] "
          style={{ letterSpacing: "-0.4px" }}
        >
         Input your website link 
        </h1>
        <span className="flex justify-start text-base text-[#666666] leading-[23.2px] tracking-[-0.02em] font-normal">Our AI will analyse your link and give a description</span>
        </div>
      )}
      <form className="space-y-4">
        <div>
          <Label
            htmlFor="name"
            className="block text-sm text-left font-medium text-gray-700 mb-1"
          >
            Company Name
          </Label>
          <Input
            className="w-full h-[56px] bg-gray-100"
            id="name"
            type="text"
            placeholder="Company name"
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
              const error = validateCompanyName(e.target.value);
              setCompanyNameError(error);
              updateFormValidity(
                error,
                companyDomainError,
                companyDescriptionError
              );
            }}
          />
          {companyNameError && (
            <p className="text-[#D75959] text-sm text-left mt-2 font-normal">
              {companyNameError}
            </p>
          )}
        </div>
        <div>
          <Label
            htmlFor="domain"
            className="block text-sm text-left font-medium text-gray-700 mb-1"
          >
            Company domain
          </Label>
          <div className="flex items-center space-x-2">
            <Input
              className="w-full h-[56px] bg-gray-100"
              id="domain"
              type="url"
              placeholder="https://"
              value={companyDomain}
              onChange={(e) => {
                setCompanyDomain(e.target.value);
                const error = validateCompanyDomain(e.target.value);
                setCompanyDomainError(error);
                updateFormValidity(
                  companyNameError,
                  error,
                  companyDescriptionError
                );
              }}
            />
            <Button
              variant="secondary"
              className="h-[56px] bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleGenerateDescription}
              disabled={isGeneratingDescription || !companyDomain}
            >
              {isGeneratingDescription ? "Generating..." : "Generate"}
            </Button>
          </div>
          {companyDomainError && (
            <p className="text-[#D75959] text-sm text-left mt-2 font-normal">
              {companyDomainError}
            </p>
          )}
        </div>
        <div>
          <Label
            htmlFor="description"
            className="block text-sm text-left font-medium text-gray-700 mb-1"
          >
            Company description
          </Label>
          <Textarea
            id="description"
            placeholder="Autogenerated by AI"
            className="h-40"
            value={companyDescription}
            onChange={(e) => {
              setCompanyDescription(e.target.value);
              const error = validateCompanyDescription(e.target.value);
              setCompanyDescriptionError(error);
              updateFormValidity(companyNameError, companyDomainError, error);
            }}
          />
          {companyDescriptionError && (
            <p className="text-[#D75959] text-sm text-left mt-2 font-normal">
              {companyDescriptionError}
            </p>
          )}
        </div>
        {!isConfigSetting && (
          <div className="flex space-x-4">
            <Button
              variant="secondary"
              className="w-full h-12 bg-[#E8E8E8]"
              onClick={onBack}
            >
              Go back
            </Button>
            <Button
              variant="secondary"
              style={{
                background:
                  "linear-gradient(0deg, #1D77E1, #2B73C8), linear-gradient(180deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(210, 56%, 48%, 0.2) 100%)",
                border: "transparent",
                borderRadius: "10px",
              }}
              className="text-white w-full h-12"
              onClick={handleNext}
              disabled={!isFormValid}
            >
              Continue
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProductAnalysis;
