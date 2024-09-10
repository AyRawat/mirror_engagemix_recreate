import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Info } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setKeywords } from "@/store/formSlice";
import { RootState } from "@/store/store";

const KeywordConfiguration = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const dispatch = useDispatch();
  const keywordsData = useSelector((state: RootState) => state.form.keywords);
  const [keywords, setLocalKeywords] = useState<string[]>(keywordsData);
  const [newKeyword, setNewKeyword] = useState("");
  const [helpText, setHelpText] = useState("");

  useEffect(() => {
    dispatch(setKeywords(keywords));
  }, [keywords, dispatch]);

  const addKeyword = () => {
    if (newKeyword && !keywords.includes(newKeyword)) {
      setLocalKeywords([...keywords, newKeyword]);
      setNewKeyword("");
      setHelpText("");
    } else {
      setHelpText(`Keyword ${newKeyword} is already present`);
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setLocalKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  const isHandleNextStep = onNext.name === "handleNextStep";
  const projectNameText = "Project Name";
  const keywordsText =
    "After analysing business info, here are some keywords you should track. Feel free to add more";

  return (
    <div className="text-left">
      <h1 className="text-xl text-[#344054] font-bold mb-6">
        {isHandleNextStep ? projectNameText : keywordsText}
      </h1>
      <p>{isHandleNextStep ? keywordsText : ""}</p>
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-700 mb-2">
          Suggested keywords
        </h2>
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
        {helpText && <p className="text-red-500 text-sm mt-2">{helpText}</p>}
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
          onClick={onNext}
        >
          Save & continue
        </Button>
      </div>
    </div>
  );
};

export default KeywordConfiguration;
