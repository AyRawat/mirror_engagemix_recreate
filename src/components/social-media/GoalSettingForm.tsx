import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RedditIcon from "@/assets/icons/redditIcon.svg";
import LinkedinIcon from "@/assets/icons/linkedinIcon.svg";
import HackernewsIcon from "@/assets/icons/hackernews.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstragramIcon from "@/assets/icons/instagram.svg";
import QuoraIcon from "@/assets/icons/quora.svg";
import { useState } from "react";

export default function GoalSettingForm() {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [mode, setMode] = useState<"copilot" | "auto-pilot">("copilot");

  const channels = [
    { value: "twitter", label: "Twitter", icon: TwitterIcon },
    { value: "facebook", label: "Facebook", icon: FacebookIcon },
    { value: "linkedin", label: "LinkedIn", icon: LinkedinIcon },
    { value: "reddit", label: "Reddit", icon: RedditIcon },
    { value: "hackernews", label: "Hackernews", icon: HackernewsIcon },
    { value: "instagram", label: "Instagram", icon: InstragramIcon },
    { value: "quora", label: "Quora", icon: QuoraIcon },
  ];

  const getConnectButton = () => {
    if (!selectedChannel) return null;

    const channel = channels.find((c) => c.value === selectedChannel);
    if (!channel) return null;

    return (
      <Button className="w-1/2 bg-[#3283E1] hover:bg-[#1a91da] text-white font-semibold py-3 rounded-xl h-[3.4rem]">
        <img src={channel.icon} alt={channel.label} className="mr-2 h-5 w-5" />
        Connect {channel.label}
      </Button>
    );
  };

  return (
    <div className="max-w-xl mx-auto p-2 space-y-4">
      <h2
        className="text-xl font-semibold text-[#1D2739] mb-8"
        style={{ letterSpacing: "-0.4px", lineHeight: "24px" }}
      >
        Set goals
      </h2>

      <div className="space-y-4">
        <div>
          <Label
            htmlFor="goal"
            className="block text-sm text-left font-medium text-[#2B2B2B] mb-2 "
          >
            Goal
          </Label>
          <Select>
            <SelectTrigger
              id="goal"
              className="w-full border border-gray-300 rounded-lg h-[3.4rem] bg-[#FAFAFA]"
            >
              <SelectValue placeholder="Select your goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Grow website traffic">
                Grow website traffic
              </SelectItem>
              <SelectItem value="Get new leads">Get new leads</SelectItem>
              <SelectItem value="Engage customers">Engage customers</SelectItem>
              <SelectItem value="Build community">Build community</SelectItem>
              <SelectItem value="Increase brand awareness">
                Increase brand awareness
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label
            htmlFor="channel"
            className="block text-sm text-left font-medium text-[#2B2B2B] mb-2"
          >
            Channel
          </Label>
          <Select onValueChange={(value) => setSelectedChannel(value)}>
            <SelectTrigger
              id="channel"
              className="w-full border border-gray-300 rounded-lg h-[3.4rem] bg-[#FAFAFA]"
            >
              <SelectValue placeholder="Select a channel" />
            </SelectTrigger>
            <SelectContent>
              {channels.map((channel) => (
                <SelectItem key={channel.value} value={channel.value}>
                  <div className="flex items-center">
                    <img
                      src={channel.icon}
                      alt={channel.label}
                      className="mr-2 h-4 w-4"
                    />
                    {channel.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {getConnectButton()}

        <div>
          <Label className="block text-sm text-left font-medium text-[#2B2B2B] mb-2">
            Mode
          </Label>
          <div className="flex items-center bg-[#F0F2F5] rounded-full p-1 h-[3.4rem] w-[13rem]">
            <Label
              htmlFor="copilot"
              className={`flex-1 text-center py-2 px-4 rounded-full cursor-pointer text-sm font-medium ${
                mode === "copilot" ? "bg-white shadow" : "text-gray-600"
              }`}
              onClick={() => setMode("copilot")}
            >
              Copilot
            </Label>
            <Label
              htmlFor="auto-pilot"
              className={`flex-1 text-center py-2 px-4 rounded-full cursor-pointer text-sm font-medium ${
                mode === "auto-pilot" ? "bg-white shadow" : "text-gray-600"
              }`}
              onClick={() => setMode("auto-pilot")}
            >
              Auto-pilot
            </Label>
          </div>
        </div>

        <p className="text-base text-[#696969] font-normal mt-2">
          {mode === "auto-pilot"
            ? "AI will autonomously post content for you"
            : "AI will assist you in creating content"}
        </p>

        <div>
          <Label
            htmlFor="review-period"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Review period
          </Label>
          <Input
            id="review-period"
            type="text"
            placeholder="0 mins"
            className="w-full border border-gray-300 rounded-lg h-[3.4rem] bg-[#FAFAFA]"
          />
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <Button
          variant="outline"
          className="flex-1 py-3 border-gray-300 text-gray-700 font-semibold h-[3.4rem] bg-[#E8E8E8] rounded-xl"
        >
          Go back
        </Button>
        <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl h-[3.4rem]">
          Save & continue
        </Button>
      </div>
    </div>
  );
}
