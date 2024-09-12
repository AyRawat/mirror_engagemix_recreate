import React from "react";
import LinkedInIcon from "@/assets/icons/linkedinIcon.svg";
import RedditIcon from "@/assets/icons/redditIcon.svg";
import HackernewsIcon from "@/assets/icons/hackernews.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstragramIcon from "@/assets/icons/instagram.svg";
import QuoraIcon from "@/assets/icons/quora.svg";

import { count } from "console";

interface SocialMediaCountsProps {
  twitterCount: number;
  facebookCount: number;
  linkedinCount: number;
  instagramCount: number;
  quoraCount: number;
  redditCount: number;
  hackernewsCount: number;
}

const SocialMediaCounts: React.FC<SocialMediaCountsProps> = ({
  twitterCount,
  facebookCount,
  linkedinCount,
  instagramCount,
  quoraCount,
  redditCount,
  hackernewsCount,
}) => {
  const platforms = [
    {
      icon: TwitterIcon,
      name: "Twitter",
      count: twitterCount,
      color: "text-blue-400",
    },
    {
      icon: FacebookIcon,
      name: "Facebook",
      count: facebookCount,
      color: "text-blue-600",
    },
    {
      icon: RedditIcon,
      name: "Reddit",
      count: redditCount,
      color: "text-blue-500",
    },
    {
      icon: LinkedInIcon,
      name: "LinkedIn",
      count: linkedinCount,
      color: "text-blue-700",
    },
    {
      icons: HackernewsIcon,
      name: "Hackernews",
      count: hackernewsCount,
      color: "text-blue-700",
    },
    {
      icon: InstragramIcon,
      name: "Instagram",
      count: instagramCount,
      color: "text-gray-700",
    },
    {
      icon: QuoraIcon,
      name: "Quora",
      count: quoraCount,
      color: "text-gray-700",
    },
  ];

  return (
    <div className="flex space-x-2 mb-6 bg-gray-100 rounded-lg p-2 w-fit">
      {platforms.map(({ icon: Icon, name, count, color }) => (
        <div
          key={name}
          className="flex items-center bg-white rounded-full px-3 py-1.5 shadow-sm"
        >
          <img src={Icon?.toString()} className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium mr-2">{name}</span>
          <span
            className={`text-sm font-semibold ${
              count > 0 ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaCounts;
