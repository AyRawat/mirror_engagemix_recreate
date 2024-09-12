// src/components/Custom/SocialMediaResults/NoPostsCard.tsx
import React from "react";
import LensPaperIcon from "@/assets/icons/lensPaper.svg";

interface NoPostsCardProps {
  headerText: string;
  helperText: string;
}

const NoPostsCard: React.FC<NoPostsCardProps> = ({
  headerText,
  helperText,
}) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-4 m-2 text-center items-center justify-center origin-center">
      <img src={LensPaperIcon} className="h-48 w-48 mb-2 mx-auto" />
      <h2 className="text-xl font-semibold mb-2">{headerText}</h2>
      <p className="text-gray-500">{helperText}</p>
    </div>
  );
};

export default NoPostsCard;
