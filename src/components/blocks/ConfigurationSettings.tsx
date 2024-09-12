import React from "react";
import KeywordConfiguration from "./KeywordConfiguration";
import ProductAnalysis from "./ProductAnalysis";
import SearchConfiguration from "./SearchConfiguration";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const ConfigurationSettings = () => {
  const handleNext = () => {
    // Handle next action
  };

  const handleBack = () => {
    // Handle back action
  };

  return (
    <ScrollArea>
      <div className="flex gap-2 p-4 text-white text-left min-h-screen">
        <div className="flex-1 space-y-2">
          <div className="bg-white text-black rounded-lg p-6 max-h-[40vh]">
            <h2 className="text-2xl font-bold mb-4">Keywords</h2>
            <KeywordConfiguration onNext={handleNext} onBack={handleBack} />
          </div>
          <div className="bg-white text-black rounded-lg p-6 max-h-[40vh]">
            <h2 className="text-2xl font-bold mb-4">Business info</h2>
            <ProductAnalysis onNext={handleNext} onBack={handleBack} />
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white text-black rounded-lg p-6 ">
            <h2 className="text-2xl font-bold mb-4">Search configuration</h2>
            <SearchConfiguration onNext={handleNext} onBack={handleBack} />
          </div>
        </div>
        <Button
          className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white"
          onClick={handleNext}
        >
          Save
        </Button>
      </div>
    </ScrollArea>
  );
};

export default ConfigurationSettings;
