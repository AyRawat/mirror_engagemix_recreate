import React from "react";
import LinkedInIcon from "@/assets/icons/linkedinIcon.svg";
import RedditIcon from "@/assets/icons/redditIcon.svg";
import HackernewsIcon from "@/assets/icons/hackernews.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstragramIcon from "@/assets/icons/instagram.svg";
import QuoraIcon from "@/assets/icons/quora.svg";

interface SocialMediaCountsProps {
  twitterCount: number;
  facebookCount: number;
  linkedinCount: number;
  instagramCount: number;
  quoraCount: number;
  redditCount: number;
  hackernewsCount: number;
  onPlatformClick: (platform: string) => void;
  selectedPlatform: string | undefined;
}

const SocialMediaCounts: React.FC<SocialMediaCountsProps> = ({
  twitterCount,
  facebookCount,
  linkedinCount,
  instagramCount,
  quoraCount,
  redditCount,
  hackernewsCount,
  onPlatformClick,
  selectedPlatform,
}) => {
  const handlePlatformClick = (name: string) => {
    onPlatformClick(name.toLowerCase());
  };

  const platforms = [
    {
      icon: TwitterIcon,
      name: "twitter",
      count: twitterCount,
      color: "text-[#475367]",
    },
    {
      icon: FacebookIcon,
      name: "facebook",
      count: facebookCount,
      color: "text-[#475367]",
    },
    {
      icon: RedditIcon,
      name: "reddit",
      count: redditCount,
      color: "text-[#475367]",
    },
    {
      icon: LinkedInIcon,
      name: "linkedin",
      count: linkedinCount,
      color: "text-[#475367]",
    },
    {
      icon: HackernewsIcon,
      name: "hackernews",
      count: hackernewsCount,
      color: "text-[#475367]",
    },
    {
      icon: InstragramIcon,
      name: "instagram",
      count: instagramCount,
      color: "text-[#475367]",
    },
    {
      icon: QuoraIcon,
      name: "quora",
      count: quoraCount,
      color: "text-[#475367]",
    },
  ];

  return (
    <div className="flex space-x-2 mb-6 bg-[#F6F6F6] rounded-2xl p-2 w-fit">
      {platforms.map(
        (
          { icon: Icon, name, count, color } // Update color for selection
        ) => (
          <div
            key={name}
            className={`flex items-center rounded-full px-3 py-1.5 shadow-sm cursor-pointer ${
              selectedPlatform === name ? "bg-white" : "bg-[#F0F2F5]"
            }`}
            onClick={() => handlePlatformClick(name)} // Handle click event
          >
            <img
              src={name === "Hackernews" ? HackernewsIcon : Icon?.toString()}
              className="h-4 w-4 mr-2 rounded-full"
            />
            <span className={`text-sm font-medium mr-2 ${color}`}>{name}</span>
            <span
              className={`text-sm font-semibold  rounded-2xl p-px px-2 ${
                selectedPlatform === name
                  ? "text-[#F56630] bg-[#FFECE5]"
                  : "text-gray-500 bg-[#E4E7EC]"
              }`}
            >
              {count}
            </span>
          </div>
        )
      )}
    </div>
  );
};

export default SocialMediaCounts;
