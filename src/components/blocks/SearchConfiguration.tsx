import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { setSearchConfig } from "@/store/formSlice";
import { RootState } from "@/store/store";
import HackernewsIcon from "@/assets/icons/hackernews.svg";
import RedditIcon from "@/assets/icons/redditIcon.svg";
import LinkedInIcon from "@/assets/icons/linkedinIcon.svg";
import QuoraIcon from "@/assets/icons/quora.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";

type Source =
  | "hackernews"
  | "reddit"
  | "linkedin"
  | "twitter"
  | "quora"
  | "facebook";

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

const platformIcons: { [key in Source]: string } = {
  hackernews: HackernewsIcon,
  reddit: RedditIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  quora: QuoraIcon,
  facebook: FacebookIcon,
};

const SearchConfiguration = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const dispatch = useDispatch();
  const searchConfigData = useSelector(
    (state: RootState) => state.form.searchConfig
  );
  const [platforms, setPlatforms] = useState<Source[]>(
    searchConfigData.platforms
  );
  const [searchFrequency, setSearchFrequency] = useState("daily");
  const [brandTone, setBrandTone] = useState("professional");
  const [helpText, setHelpText] = useState("");

  useEffect(() => {
    dispatch(setSearchConfig({ platforms }));
  }, [platforms, dispatch]);

  const handlePlatformChange = (platform: Source) => {
    setPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const handleSelectAllChange = () => {
    if (platforms.length === Object.keys(platformIcons).length) {
      setPlatforms([]);
    } else {
      setPlatforms(Object.keys(platformIcons) as Source[]);
    }
  };

  const handleNext = () => {
    if (platforms.length === 0) {
      setHelpText("Please select at least one platform.");
      return;
    }
    setHelpText("");
    onNext();
  };

  return (
    <div className="max-w-2xl text-left mx-auto">
      <h1 className="text-3xl font-bold mb-6">Configure your search</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            Select platform to track{" "}
            <span className="text-gray-400 ml-2">(You can select all)</span>
            <div className="flex items-center ml-4">
              <Label className="text-sm text-gray-700" htmlFor="selectAll">
                Select All
              </Label>
              <Checkbox
                id="selectAll"
                className="text-blue-600 focus:ring-0 focus:outline-none ml-2"
                checked={platforms.length === Object.keys(platformIcons).length}
                onCheckedChange={handleSelectAllChange}
              />
            </div>
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {Object.keys(platformIcons).map((platform) => (
              <div
                key={platform}
                className="flex items-center justify-between bg-gray-100 border border-gray-300 rounded-2xl h-10 px-4 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-blue-500"
              >
                <div className="flex items-center">
                  <img
                    src={platformIcons[platform as Source]}
                    alt={platform}
                    className="h-5 w-5 mr-2"
                  />
                  <Label className="text-sm text-gray-700" htmlFor={platform}>
                    {platform}
                  </Label>
                </div>
                <Checkbox
                  id={platform}
                  className="text-blue-600 focus:ring-0 focus:outline-none"
                  checked={platforms.includes(platform as Source)}
                  onCheckedChange={() =>
                    handlePlatformChange(platform as Source)
                  }
                />
              </div>
            ))}
          </div>
          {helpText && (
            <p className="text-red-500 text-sm text-left mt-2 bg-red-100 p-2 rounded-md">
              {helpText}
            </p>
          )}
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
          onClick={handleNext}
        >
          Save & continue
        </Button>
      </div>
    </div>
  );
};

export default SearchConfiguration;
