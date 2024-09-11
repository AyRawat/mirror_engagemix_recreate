import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductData } from "@/store/formSlice";
import { RootState } from "@/store/store";
import { company } from "@/apis/company";

const ProductAnalysis = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const dispatch = useDispatch();
  const productData = useSelector((state: RootState) => state.form.productData);
  const [companyName, setCompanyName] = useState(productData.companyName);
  const [companyDomain, setCompanyDomain] = useState(productData.companyDomain);
  const [companyDescription, setCompanyDescription] = useState(
    productData.companyDescription ||
      "Travelcoup specializes in organizing group trips and providing comprehensive travel planning services. Whether you're looking to join a group trip, seek personal travel advice, or explore destinations, Kaijago aims to make travel planning hassle-free and enjoyable..."
  );
  const [companyNameError, setCompanyNameError] = useState<string | null>(null);
  const [companyDomainError, setCompanyDomainError] = useState<string | null>(
    null
  );
  const [isGeneratingDescription, setIsGeneratingDescription] = useState(false);

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

  useEffect(() => {
    dispatch(
      setProductData({ companyName, companyDomain, companyDescription })
    );
  }, [companyName, companyDomain, companyDescription, dispatch]);

  const handleNext = () => {
    const companyNameValidationError = validateCompanyName(companyName);
    const companyDomainValidationError = validateCompanyDomain(companyDomain);

    setCompanyNameError(companyNameValidationError);
    setCompanyDomainError(companyDomainValidationError);

    if (companyNameValidationError || companyDomainValidationError) {
      return;
    } else {
      onNext();
    }
  };

  const handleGenerateDescription = async () => {
    setIsGeneratingDescription(true);
    try {
      const description = await company.getDescriptionFromUrl(companyDomain);
      setCompanyDescription(description);
    } catch (error) {
      console.error("Failed to generate description", error);
    } finally {
      setIsGeneratingDescription(false);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl text-left font-bold mb-7">
        Tell us about your business
      </h1>
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
            onChange={(e) => setCompanyName(e.target.value)}
          />
          {companyNameError && (
            <p className="text-red-500 text-sm mt-2">{companyNameError}</p>
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
                setCompanyDomainError(validateCompanyDomain(e.target.value));
              }}
            />
            {companyDomainError === null && companyDomain && (
              <Button
                variant="secondary"
                className="h-[56px]"
                onClick={handleGenerateDescription}
                disabled={isGeneratingDescription}
              >
                {isGeneratingDescription
                  ? "Generating..."
                  : "Generate Description"}
              </Button>
            )}
          </div>
          {companyDomainError && (
            <p className="text-red-500 text-sm mt-2">{companyDomainError}</p>
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
            onChange={(e) => setCompanyDescription(e.target.value)}
          />
        </div>
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
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProductAnalysis;
