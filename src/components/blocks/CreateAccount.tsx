import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SocialSignupButton } from "@/components/blocks/SocialSignUpButton";
import { useNavigate } from "react-router-dom";

const CreateAccount = ({ onNext }: { onNext: () => void }) => {
  const navigate = useNavigate();

  return (
    <div className="px-12 w-full py-24">
      <h1 className="text-3xl text-left font-bold mb-7">Create account</h1>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-left font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <Input
            className="w-full h-[56px] bg-gray-100"
            id="email"
            type="email"
            placeholder="Enter email here"
          />
        </div>
        <div className="flex space-x-4">
          <Button
            variant="secondary"
            className="w-full h-12 bg-[#E8E8E8]"
            onClick={() => navigate("/")}
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
            onClick={() => onNext()}
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
  );
};

export default CreateAccount;
