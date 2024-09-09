import { Button } from "@/components/ui/button";
import GoogleButton from "@/assets/CreateAccount/GoogleButton.svg";
import FacebookButton from "@/assets/CreateAccount/FacebookButton.svg";
import InstagramButton from "@/assets/CreateAccount/InstagramButton.svg";

interface SocialSignupButtonProps {
  provider: "google" | "facebook" | "instagram";
  onClick: () => void;
}

export function SocialSignupButton({
  provider,
  onClick,
}: SocialSignupButtonProps) {
  const getIcon = () => {
    switch (provider) {
      case "google":
        return (
          <img
            src={GoogleButton}
            alt="Keyword Reply Card"
            className="w-[748px] h-[52px]"
          />
        );
      case "facebook":
        return (
          <img
            src={FacebookButton}
            alt="Keyword Reply Card"
            className="w-[748px] h-[52px]"
          />
        );
      case "instagram":
        return (
          <img
            src={InstagramButton}
            alt="Keyword Reply Card"
            className="w-[748px] h-[52px]"
          />
        );
    }
  };

  return (
    <Button
      variant="ghost"
      className="w-full justify-start text-black"
      onClick={onClick}
    >
      {getIcon()}
    </Button>
  );
}
