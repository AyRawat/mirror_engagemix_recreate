import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const SearchFrequencyOptions = [
  {
    value: "realtime",
    label: "Real time",
    description: "Monitor for new content as its published",
  },
  {
    value: "daily",
    label: "Daily",
    description: "Search once a day",
  },
  {
    value: "weekly",
    label: "Weekly",
    description: "Search once a week",
  },
];

const BrandToneOptions = [
  {
    value: "professional",
    label: "Professional",
    emoji: "🧐",
  },
  {
    value: "friendly",
    label: "Friendly",
    emoji: "😊",
  },
  {
    value: "serious",
    label: "Serious",
    emoji: "😐",
  },
];

const SearchConfiguration = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const [searchFrequency, setSearchFrequency] = useState("daily");
  const [brandTone, setBrandTone] = useState("professional");

  return (
    <div className="max-w-2xl text-left mx-auto">
      <h1 className="text-3xl font-bold mb-6">Configure your search</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-2">
            Select platform to track{" "}
            <span className="text-gray-400">(You can select all)</span>
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              "Facebook",
              "Twitter",
              "LinkedIn",
              "Reddit",
              "Quora",
              "Blogs",
            ].map((platform) => (
              <div
                key={platform}
                className="flex items-center justify-between bg-gray-100 border border-gray-300 rounded-lg h-10 px-4 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-blue-500"
              >
                <Label className="text-sm text-gray-700" htmlFor={platform}>
                  {platform}
                </Label>
                <Checkbox
                  id={platform}
                  className="text-blue-600 focus:ring-0 focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-2">
            Search frequency
          </h2>
          <RadioGroup
            value={searchFrequency}
            onValueChange={setSearchFrequency}
            className="space-y-2"
          >
            <div
              className={cn(
                "h-16 flex items-center justify-between rounded-xl py-3 px-4",
                searchFrequency === "realtime"
                  ? "bg-blue-100 border-2 border-blue-500"
                  : "bg-gray-100 border border-gray-300"
              )}
            >
              <div>
                <Label className="font-medium" htmlFor="realtime">
                  Real time
                </Label>
                <p className="text-sm text-gray-500">
                  Monitor for new content as its published
                </p>
              </div>
              <RadioGroupItem value="realtime" id="realtime" />
            </div>
            <div className=" h-16 flex space-x-2">
              {["daily", "weekly"].map((option) => (
                <div
                  key={option}
                  className={cn(
                    "flex-1 flex items-center justify-between rounded-xl py-3 px-4",
                    searchFrequency === option
                      ? "bg-blue-100 border-2 border-blue-500"
                      : "bg-gray-100 border border-gray-300"
                  )}
                >
                  <div>
                    <Label className="font-medium" htmlFor={option}>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </Label>
                    <p className="text-sm text-gray-500">
                      Search once {option === "daily" ? "a day" : "a week"}
                    </p>
                  </div>
                  <RadioGroupItem value={option} id={option} />
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-2">Brand tone</h2>
          <RadioGroup
            value={brandTone}
            onValueChange={setBrandTone}
            className="flex space-x-4"
          >
            {BrandToneOptions.map((option) => (
              <div
                key={option.value}
                className={cn(
                  "flex-1 flex items-center justify-between rounded-xl py-2 px-4",
                  brandTone === option.value
                    ? "bg-blue-100 border-2 border-blue-500"
                    : "bg-gray-100 border border-gray-300"
                )}
              >
                <div className="flex items-center">
                  <span role="img" aria-label={option.value} className="mr-2">
                    {option.emoji}
                  </span>
                  <Label className="font-medium" htmlFor={option.value}>
                    {option.label}
                  </Label>
                </div>
                <RadioGroupItem
                  className="ml-4"
                  value={option.value}
                  id={option.value}
                />
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>
      <div className="flex space-x-4 mt-8">
        <Button
          variant="secondary"
          className="w-full h-12 bg-[#E8E8E8]"
          onClick={onBack}
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
          onClick={onNext}
        >
          Save & continue
        </Button>
      </div>
    </div>
  );
};

export default SearchConfiguration;
