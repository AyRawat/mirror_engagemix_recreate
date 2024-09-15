import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NavigationTabs = ({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) => (
  <Tabs
    value={activeTab}
    onValueChange={onTabChange}
    className="mb-6 text-left"
  >
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
);

export default NavigationTabs;
