import KeywordConfiguration from "../forms/KeywordConfiguration";
import ProductAnalysis from "../forms/ProductAnalysis";
import SearchConfiguration from "../forms/SearchConfiguration";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProjectDto } from "@/apis/types";
import { api } from "@/apis";
import { CompanyDto } from "@/apis/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ConfigurationSettings = ({
  project,
  company,
}: {
  project: ProjectDto;
  company: CompanyDto;
}) => {
  const handleSave = async () => {
    try {
      const updatedProject = await api.projects.update(project.id, project);
      console.log(updatedProject);
    } catch (error) {
      console.error("Failed to update project:", error);
    }
  };
  const handleNext = () => {
    // Handle next action
  };

  const handleBack = () => {
    // Handle back action
  };

  return (
    <ScrollArea>
      <div className="flex gap-2 pt-2 text-white text-left">
        <div className="flex-1 space-y-6 mb-16">
          <Tabs defaultValue="keywords" className="w-full rounded-2xl">
            <TabsList>
              <TabsTrigger value="keywords" className="rounded-2xl">
                Keywords
              </TabsTrigger>
              <TabsTrigger value="business-info" className="rounded-2xl">
                Business Info
              </TabsTrigger>
            </TabsList>
            <TabsContent value="keywords">
              <div className="bg-white text-black rounded-2xl p-3 max-h-[55vh]">
                <h2 className="text-xl font-medium mb-2">Keywords</h2>
                <div className="border border-gray-300 rounded-2xl p-6 pb-1">
                  <KeywordConfiguration
                    onNext={handleNext}
                    onBack={handleBack}
                    isConfigSetting={true}
                    project={project}
                    existingKeywords={project?.keywords || []}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="business-info">
              <div className="bg-white text-black rounded-2xl p-3 max-h-[40vh]">
                <h2 className="text-xl font-medium mb-2">Business info</h2>
                <ScrollArea>
                  <div className="border border-gray-300 rounded-2xl p-6">
                    <ProductAnalysis
                      onNext={handleNext}
                      onBack={handleBack}
                      isConfigSetting={true}
                      company={
                        company || { name: "", domain: "", description: "" }
                      }
                    />
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex-1">
          <div className="bg-white text-black rounded-2xl p-3 max-h-[100vh] h-[80vh]">
            <h2 className="text-xl font-medium mb-2">Search configuration</h2>
            <div className="border border-gray-300 rounded-2xl p-6">
              <SearchConfiguration
                onNext={handleNext}
                onBack={handleBack}
                isConfigSetting={true}
                project={project}
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
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </ScrollArea>
  );
};

export default ConfigurationSettings;
