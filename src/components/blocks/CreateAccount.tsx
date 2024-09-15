import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "@/apis";
import { setUser, setToken } from "@/store/authSlice";
import { useMutation } from "@tanstack/react-query";
import { setAccountData } from "@/store/formSlice";
import { RootState } from "@/store/store";
import { RegisterRequestDto, UserDto, LoginRequestDto } from "@/apis/types";
import { useAuth } from "@/contexts/auth/AuthContext";

const CreateAccount = ({ onNext }: { onNext: () => void }) => {
  const dispatch = useDispatch();
  const authContext = useAuth();
  const accountData = useSelector((state: RootState) => state.form.accountData);
  const [email, setEmail] = useState(accountData.email);
  const [password, setPassword] = useState(accountData.password);
  const [firstName, setFirstName] = useState(accountData.firstName);
  const [lastName, setLastName] = useState(accountData.lastName);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isLoginMode, setIsLoginMode] = useState(false);

  const validateEmail = (email: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return "Email is required";
    } else if (!emailRegex.test(email)) {
      return "Invalid email address";
    }
    return null;
  };

  const validatePassword = (password: string): string | null => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 6) {
      return "Password must be at least 6 characters long";
    }
    return null;
  };

  const { mutate: register } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (requestDto: RegisterRequestDto | LoginRequestDto) => {
      if (isLoginMode) {
        return await authContext.login(requestDto as LoginRequestDto);
      } else {
        return await api.user.register(requestDto as RegisterRequestDto);
      }
    },
    onSuccess: (data) => {
      if (isLoginMode) {
        console.log("Login data ", data);
        onNext();
      } else {
        const userData = data as UserDto;
        dispatch(setUser({ email, name: `${firstName} ${lastName}` }));
        dispatch(setToken({ accessToken: "", user: userData }));
        // setIsLoginMode(true);
        onNext();
      }
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  useEffect(() => {
    if (authContext.isAuthenticated) {
      setIsLoginMode(true);
    }
    dispatch(setAccountData({ email, password, firstName, lastName }));
  }, [email, password, firstName, lastName, dispatch]);

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();

    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);

    if (emailValidationError || passwordValidationError) {
      return;
    }

    register({ email, password, name: `${firstName} ${lastName}` });
  };

  return (
    <div className="w-full">
      <h1
        className="text-xl text-left font-semibold letter-spacing mb-7 line-height-[29px]"
        style={{ letterSpacing: "-0.4px" }}
      >
        {isLoginMode ? "Login" : "Create account"}
      </h1>
      <form className="space-y-4" onSubmit={handleRegister}>
        <div>
          <Label
            htmlFor="email"
            className="block text-sm text-left font-medium text-[#2B2B2B] mb-1"
          >
            Email
          </Label>
          <Input
            className="w-full h-[56px] bg-[#FAFAFA] rounded-lg"
            id="email"
            type="email"
            placeholder="Enter email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <p className="text-[#D75959] text-sm text-left mt-2 font-normal">
              {emailError}
            </p>
          )}
        </div>
        {!isLoginMode && (
          <div className="space-y-4">
            <div className="flex-1">
              <Label
                htmlFor="firstName"
                className="block text-sm text-left font-medium text-[#2B2B2B] mb-1"
              >
                First Name
              </Label>
              <Input
                className="w-full h-[56px] bg-[#FAFAFA] rounded-lg"
                id="firstName"
                type="text"
                placeholder="Enter first name here"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Label
                htmlFor="lastName"
                className="block text-sm text-left font-medium text-[#2B2B2B] mb-1"
              >
                Last Name
              </Label>
              <Input
                className="w-full h-[56px] bg-[#FAFAFA] rounded-lg"
                id="lastName"
                type="text"
                placeholder="Enter last name here"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        )}

        <div>
          <Label
            htmlFor="password"
            className="block text-sm text-left font-medium text-[#2B2B2B] mb-1"
          >
            Password
          </Label>
          <Input
            className="w-full h-[56px] bg-[#FAFAFA] rounded-lg"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <p className="text-[#D75959] text-sm mt-2 text-left font-normal">
              {passwordError}
            </p>
          )}
        </div>
        <div className="flex space-x-4">
          <Button
            variant="secondary"
            className="w-full h-12 bg-[#E8E8E8]"
            onClick={() => setIsLoginMode(!isLoginMode)}
          >
            {isLoginMode ? "Switch to Register" : "Switch to Login"}
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
            {isLoginMode ? "Login" : "Register"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
