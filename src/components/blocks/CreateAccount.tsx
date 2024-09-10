// src/pages/CreateAccount.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SocialSignupButton } from "@/components/blocks/SocialSignUpButton";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { api } from "@/apis";
import { setUser, setToken } from "@/store/authSlice";

const CreateAccount = ({
  onNext,
  setAccountData,
}: {
  onNext: () => void;
  setAccountData: (data: { email: string; password: string }) => void;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setEmailError(!email);
    setPasswordError(!password);

    if (!email || !password) {
      return;
    }

    try {
      if (isLoginMode) {
        const requestDto = { email, password };
        const token = await api.auth.login(requestDto);
        console.log("User logged in:", token);
        dispatch(setToken(token));
        dispatch(setUser({ email }));
        navigate("/dashboard");
      } else {
        const requestDto = {
          email,
          password,
          name: "Ritesh Behera", // Hardcoded name
        };
        const user = await api.user.register(requestDto);
        console.log("User registered:", user);
        dispatch(setUser({ email, name: "Ritesh Behera" }));
      }
      setAccountData({ email, password });
      onNext();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl text-left font-bold mb-7">
        {isLoginMode ? "Log in" : "Create account"}
      </h1>
      <form className="space-y-4" onSubmit={handleRegister}>
        <div>
          <Label
            htmlFor="email"
            className="block text-sm text-left font-medium text-gray-700 mb-1"
          >
            Email
          </Label>
          <Input
            className="w-full h-[56px] bg-gray-100"
            id="email"
            type="email"
            placeholder="Enter email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <p className="text-red-500 text-left text-sm">Email is required</p>
          )}
        </div>
        <div>
          <Label
            htmlFor="password"
            className="block text-sm text-left font-medium text-gray-700 mb-1"
          >
            Password
          </Label>
          <Input
            className="w-full h-[56px] bg-gray-100"
            id="password"
            type="password"
            placeholder="Enter password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <p className="text-red-500 text-left text-sm">
              Password is required
            </p>
          )}
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
            type="submit"
          >
            {isLoginMode ? "Log in" : "Sign up"}
          </Button>
        </div>
      </form>
      <p className="text-sm text-center my-4">
        {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
        <a
          href="#"
          className="text-blue-500 hover:underline"
          onClick={() => setIsLoginMode(!isLoginMode)}
        >
          {isLoginMode ? "Sign up" : "Log in"}
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
