import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Twitter } from "lucide-react";

export default function GoalSettingForm() {
  return (
    <div className="max-w-xl mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Set goals</h2>

      <div className="space-y-6">
        <div>
          <Label
            htmlFor="goal"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Goal
          </Label>
          <Select>
            <SelectTrigger
              id="goal"
              className="w-full bg-white border border-gray-300 rounded-2xl h-[3rem]"
            >
              <SelectValue placeholder="Select your goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="goal1">Goal 1</SelectItem>
              <SelectItem value="goal2">Goal 2</SelectItem>
              <SelectItem value="goal3">Goal 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label
            htmlFor="channel"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Channel
          </Label>
          <Select defaultValue="twitter">
            <SelectTrigger
              id="channel"
              className="w-full bg-white border border-gray-300 rounded-2xl h-[3rem]"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="twitter">
                <div className="flex items-center">
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-1/2 bg-[#1DA1F2] hover:bg-[#1a91da] text-white font-semibold py-3 rounded-2xl h-[3rem]">
          <Twitter className="mr-2 h-5 w-5" />
          Connect twitter
        </Button>

        <div>
          <Label className="block text-sm font-medium text-gray-700 mb-2">
            Mode
          </Label>
          <div className="flex items-center bg-gray-100 rounded-full p-1 h-[3rem] w-1/2">
            <Label
              htmlFor="copilot"
              className={`flex-1 text-center py-2 px-4 rounded-full cursor-pointer text-sm font-medium ${
                true ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              Copilot
            </Label>
            <Label
              htmlFor="auto-pilot"
              className={`flex-1 text-center py-2 px-4 rounded-full cursor-pointer text-sm font-medium ${
                false ? "bg-white shadow" : "text-gray-600"
              }`}
            >
              Auto-pilot
            </Label>
            <Switch id="mode" className="hidden" />
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-2">
          AI will autonomously post content for you
        </p>

        <div>
          <Label
            htmlFor="review-period"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Review period
          </Label>
          <Input
            id="review-period"
            type="text"
            placeholder="0 mins"
            className="w-full bg-white border border-gray-300 rounded-2xl h-[3rem]"
          />
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <Button
          variant="outline"
          className="flex-1 py-3 border-gray-300 text-gray-700 font-semibold h-[3rem]"
        >
          Go back
        </Button>
        <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-2xl h-[3rem]">
          Save & continue
        </Button>
      </div>
    </div>
  );
}
