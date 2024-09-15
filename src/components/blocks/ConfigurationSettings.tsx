import KeywordConfiguration from "../forms/KeywordConfiguration";
import ProductAnalysis from "../forms/ProductAnalysis";
import SearchConfiguration from "../forms/SearchConfiguration";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProjectDto } from "@/apis/types";

const ConfigurationSettings = ({ project }: { project: ProjectDto }) => {
  const handleNext = () => {
    // Handle next action
  };

  const handleBack = () => {
    // Handle back action
  };

  return (
    <ScrollArea>
      <div className="flex gap-2 pt-2 text-white text-left -mt-6">
        <div className="flex-1 max-h-[50vh]">
          <div className="bg-white text-black rounded-2xl p-3 max-h-[40vh]">
            <h2 className="text-xl font-medium mb-2">Keywords</h2>
            <div className="border border-gray-300 rounded-2xl p-6 pb-1">
              <KeywordConfiguration
                onNext={handleNext}
                onBack={handleBack}
                isConfigSetting={true}
              />
            </div>
          </div>

          <div className="bg-white text-black rounded-2xl p-3 max-h-[40vh]">
            <h2 className="text-xl font-medium mb-2">Business info</h2>
            <ScrollArea>
              <div className="border border-gray-300 rounded-2xl p-6">
                <ProductAnalysis
                  onNext={handleNext}
                  onBack={handleBack}
                  isConfigSetting={true}
                />
              </div>
            </ScrollArea>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white text-black rounded-2xl p-3 max-h-[100vh] h-[80vh]">
            <h2 className="text-xl font-medium mb-2">Search configuration</h2>
            <div className="border border-gray-300 rounded-2xl p-6">
              <SearchConfiguration
                onNext={handleNext}
                onBack={handleBack}
                isConfigSetting={true}
              />
            </div>
          </div>
        </div>
        <Button
          className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white h-14 w-44 mr-16"
          style={{
            background:
              "linear-gradient(0deg, #1D77E1, #2B73C8), linear-gradient(180deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(210, 56%, 48%, 0.2) 100%)",
            border: "transparent",
            borderRadius: "10px",
          }}
          onClick={handleNext}
        >
          Save
        </Button>
      </div>
    </ScrollArea>
  );
};

export default ConfigurationSettings;
