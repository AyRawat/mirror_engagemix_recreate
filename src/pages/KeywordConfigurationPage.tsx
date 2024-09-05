import { useState } from "react";
import { StepIndicator } from "@/components/blocks/StepIndicator";
import KeywordCard from "@/components/blocks/KeywordCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export function KeywordConfigurationPage() {
  const steps = [
    "Create account",
    "Product analysis",
    "Keyword & search configuration",
  ];
  const [keywords, setKeywords] = useState<string[]>([
    "Travel",
    "Travel insurance",
    "Group trip",
    "Group ticket",
    "Itinerary",
  ]);
  const [newKeyword, setNewKeyword] = useState("");

  const addKeyword = () => {
    if (newKeyword && !keywords.includes(newKeyword)) {
      setKeywords([...keywords, newKeyword]);
      setNewKeyword("");
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8">
      <StepIndicator steps={steps} currentStep={3} />
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-12">
        <div className="relative">
          <KeywordCard />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-6">
            After analysing business info, here are some keywords you should
            track. Feel free to add more
          </h1>
          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-700 mb-2">
              Suggested keywords
            </h2>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <Badge
                  key={keyword}
                  variant="secondary"
                  className="px-3 py-1 pr-1 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-1 inline"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {keyword}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-1 h-auto p-0 hover:bg-transparent"
                    onClick={() => removeKeyword(keyword)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </Badge>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-700 mb-2">
              Add keyword
            </h2>
            <div className="flex space-x-2">
              <Input
                placeholder="Type keyword here"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    addKeyword();
                  }
                }}
              />
              <Button onClick={addKeyword}>Add</Button>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button variant="secondary" className="w-full">
              Go back
            </Button>
            <Button className="w-full">Save & continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
