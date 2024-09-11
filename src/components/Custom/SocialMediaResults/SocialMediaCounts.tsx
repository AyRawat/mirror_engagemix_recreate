import React from "react";
import {
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const SocialMediaCounts = () => {
  const platforms = [
    { icon: Twitter, name: "Twitter", count: 3, color: "text-blue-400" },
    { icon: Facebook, name: "Facebook", count: 0, color: "text-blue-600" },
    { icon: Linkedin, name: "LinkedIn", count: 0, color: "text-blue-700" },
    { icon: Instagram, name: "Instagram", count: 0, color: "text-gray-700" },
    { icon: MessageCircle, name: "Quora", count: 0, color: "text-red-500" },
  ];

  return (
    <div className="flex space-x-2 mb-6 bg-gray-100 rounded-lg p-2 w-fit">
      {platforms.map(({ icon: Icon, name, count, color }) => (
        <div
          key={name}
          className="flex items-center bg-white rounded-full px-3 py-1.5 shadow-sm"
        >
          <Icon className={`h-4 w-4 ${color} mr-2`} />
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
