// src/components/Custom/SocialMediaResults/NoPostsCard.tsx
import React from "react";
import LensPaperIcon from "@/assets/icons/lensPaper.svg";
import { Button } from "@/components/ui/button";
interface NoPostsCardProps {
  headerText: string;
  helperText: string;
  showButton?: boolean;
  buttonText?: string;
  buttonOnClick?: () => void;
}

const NoPostsCard: React.FC<NoPostsCardProps> = ({
  headerText,
  helperText,
  showButton = false,
  buttonText = "Generate Posts",
  buttonOnClick,
}) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-4 m-2 text-center items-center justify-center origin-center">
      <img src={LensPaperIcon} className="h-40 w-40 mb-1 mx-auto" />
      <h2 className="text-xl font-semibold mb-2">{headerText}</h2>
      <p className="text-gray-500">{helperText}</p>
      {showButton && (
        <Button
          onClick={buttonOnClick}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default NoPostsCard;
