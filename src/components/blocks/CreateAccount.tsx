import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SocialSignupButton } from "@/components/blocks/SocialSignUpButton";
import { useNavigate } from "react-router-dom";

const CreateAccount = ({ onNext }: { onNext: () => void }) => {
  const navigate = useNavigate();

  return (
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
            variant="secondary"
            style={{
              background:
                "linear-gradient(0deg, #1D77E1, #1D77E1), linear-gradient(180deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(210, 56%, 48%, 0.2) 100%)",
              border: "transparent",
              borderRadius: "10px",
            }}
            className="text-white w-full"
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
