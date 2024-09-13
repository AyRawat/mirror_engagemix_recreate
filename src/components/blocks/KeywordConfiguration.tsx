import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Info } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setKeywords,
  setProjectName,
  setProjectDescription,
} from "@/store/formSlice";
import { RootState } from "@/store/store";
import { projects } from "@/apis/projects";

const KeywordConfiguration = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const dispatch = useDispatch();
  const keywordsData = useSelector((state: RootState) => state.form.keywords);
  const projectNameData = useSelector(
    (state: RootState) => state.form.projectName
  );
  const projectDescriptionData = useSelector(
    (state: RootState) => state.form.projectDescription
  );
  const [keywords, setLocalKeywords] = useState<string[]>(keywordsData);
  const [newKeyword, setNewKeyword] = useState("");
  const [helpText, setHelpText] = useState("");
  const [projectName, setLocalProjectName] = useState(projectNameData);
  const [projectDescription, setLocalProjectDescription] = useState(
    projectDescriptionData
  );
  const [isFetchingKeywords, setIsFetchingKeywords] = useState(false);

  useEffect(() => {
    dispatch(setKeywords(keywords));
  }, [keywords, dispatch]);

  useEffect(() => {
    dispatch(setProjectName(projectName));
  }, [projectName, dispatch]);

  useEffect(() => {
    dispatch(setProjectDescription(projectDescription));
  }, [projectDescription, dispatch]);

  const addKeyword = () => {
    if (!newKeyword) {
      setHelpText("Keyword cannot be empty.");
      return;
    }
    if (keywords.includes(newKeyword)) {
      setHelpText(`Keyword "${newKeyword}" is already present.`);
      return;
    }
    setLocalKeywords([...keywords, newKeyword]);
    setNewKeyword("");
    setHelpText("");
  };

  const removeKeyword = (keywordToRemove: string) => {
    setLocalKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  const handleNext = () => {
    if (!projectName) {
      setHelpText("Project name cannot be empty.");
      return;
    }
    setHelpText("");
    onNext();
  };

  const handleGetSuggestedKeywords = async () => {
    setIsFetchingKeywords(true);
    try {
      const suggestedKeywords = await projects.getSuggestedKeywords(
        projectDescription
      );
      setLocalKeywords([...keywords, ...suggestedKeywords]);
    } catch (error) {
      console.error("Failed to fetch suggested keywords", error);
    } finally {
      setIsFetchingKeywords(false);
    }
  };

  return (
    <div className="text-left">
      <h1 className="text-xl text-[#344054] font-bold mb-6">
        Keyword Configuration
      </h1>
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-700 mb-2">Project Name</h2>
        <Input
          className="w-full h-[56px] bg-gray-100"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setLocalProjectName(e.target.value)}
        />
        {helpText && !projectName && (
          <p className="text-red-500 text-sm text-left mt-2 bg-red-100 p-2 rounded-md">
            {helpText}
          </p>
        )}
      </div>
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-700 mb-2">
          Project Description
        </h2>
        <Textarea
          className="w-full h-[56px] bg-gray-100"
          placeholder="Enter project description"
          value={projectDescription}
          onChange={(e: any) => setLocalProjectDescription(e.target.value)}
        />
        {projectDescription && (
          <Button
            variant="secondary"
            className="mt-2"
            onClick={handleGetSuggestedKeywords}
            disabled={isFetchingKeywords}
          >
            {isFetchingKeywords ? "Fetching..." : "Get Suggested Keywords"}
          </Button>
        )}
      </div>
      <div className="mb-6">
        {keywords.length > 0 && (
          <h2 className="text-sm font-medium text-gray-700 mb-2">Keywords</h2>
        )}
        <div className="overflow-auto max-h-32">
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <Badge
                key={keyword}
                variant="secondary"
                className="px-3 py-1 pr-1 p-2 flex items-center rounded-full bg-transparent border border-gray-300 text-gray-500"
              >
                <Info className="size-4" />
                <span className="px-1">{keyword}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2 h-auto p-0 hover:bg-transparent"
                  onClick={() => removeKeyword(keyword)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-700 mb-2">Add keyword</h2>
        <div className="flex space-x-2">
          <Input
            className="w-full h-[56px] bg-gray-100"
            placeholder="Type keyword here"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                addKeyword();
              }
            }}
          />
          <Button
            style={{
              background:
                "linear-gradient(0deg, #1D77E1, #1D77E1), linear-gradient(180deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(210, 56%, 48%, 0.2) 100%)",
              border: "transparent",
              borderRadius: "10px",
            }}
            className="text-white h-[56px] w-24"
            onClick={addKeyword}
          >
            Add
          </Button>
        </div>
        {helpText && newKeyword && (
          <p className="text-red-500 text-sm text-left mt-2 bg-red-100 p-2 rounded-md">
            {helpText}
          </p>
        )}
      </div>
      <div className="flex space-x-4">
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

export default KeywordConfiguration;
