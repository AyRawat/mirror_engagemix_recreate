import { StepIndicator } from "@/components/blocks/StepIndicator";
import KeywordCard from "@/components/blocks/KeywordCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SocialSignupButton } from "@/components/blocks/SocialSignUpButton";
import { useNavigate } from "react-router-dom";

export function CreateAccountPage() {
  const navigate = useNavigate();
  const steps = [
    "Create account",
    "Website analysis",
    "Keyword & search configuration",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      <StepIndicator steps={steps} currentStep={1} />
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-12">
        <div className="relative">
          <KeywordCard />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-6">Create account</h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter email here" />
            </div>
            <div className="flex space-x-4">
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => navigate("/")}
              >
                Go back
              </Button>
              <Button
                style={{
                  background:
                    "linear-gradient(0deg, #1D77E1, #1D77E1), linear-gradient(180deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(210, 56%, 48%, 0.2) 100%)",
                  border: "transparent",
                  borderRadius: "10px",
                }}
                className="text-white w-full"
                variant="outline"
                onClick={() => navigate("/product-analysis")}
              >
                Sign up
              </Button>
            </div>
          </form>
          <p className="text-sm text-center my-4">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
          <div className="text-center text-sm text-gray-500 my-4">Or</div>
          <div className="space-y-2">
            <SocialSignupButton provider="google" onClick={() => {}} />
            <SocialSignupButton provider="facebook" onClick={() => {}} />
            <SocialSignupButton provider="instagram" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
