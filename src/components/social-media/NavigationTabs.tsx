import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";

const NavigationTabs = ({
  activeTab,
  onTabChange,
  platforms,
  selectedPlatform,
  onPlatformChange,
  selectedTimeFilter,
  onTimeFilterChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
  platforms: { value: string; label: string; icon: string }[];
  selectedPlatform: string | null;
  onPlatformChange: (platform: string) => void;
  selectedTimeFilter: string;
  onTimeFilterChange: (filter: string) => void;
}) => {
  const timeFilters = [
    { value: "day", label: "Last 24 hours" },
    { value: "week", label: "Last week" },
    { value: "month", label: "Last month" },
    { value: "year", label: "Last year" },
    { value: "all", label: "All time" },
  ];

  return (
    <div className="flex justify-between items-center mb-6">
      <Tabs value={activeTab} onValueChange={onTabChange} className="text-left">
        <TabsList>
          <TabsTrigger value="results" className="px-4 py-2 rounded-2xl">
            Results
          </TabsTrigger>
          <TabsTrigger value="configuration" className="px-4 py-2 rounded-2xl">
            Configuration settings
          </TabsTrigger>
          <TabsTrigger value="analytics" className="px-4 py-2 rounded-2xl">
            Analytics
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex space-x-2">
        <Select
          onValueChange={onPlatformChange}
          value={selectedPlatform || "all"}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All platforms" />
          </SelectTrigger>
          <SelectContent>
            {platforms.map((platform) => (
              <SelectItem key={platform.value} value={platform.value}>
                <div className="flex items-center">
                  <img
                    src={platform.icon}
                    alt={platform.label}
                    className="mr-2 h-4 w-4"
                  />
                  {platform.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={onTimeFilterChange} value={selectedTimeFilter}>
          <SelectTrigger className="w-[180px]">
            <Calendar className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            {timeFilters.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default NavigationTabs;
