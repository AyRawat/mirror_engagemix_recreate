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
    <div className="max-w-xl mx-auto p-3 space-y-6">
      <h2 className="text-2xl font-semibold mb-6">Set goals</h2>

      <div className="space-y-4">
        <div>
          <Label
            htmlFor="goal"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Goal
          </Label>
          <Select>
            <SelectTrigger id="goal" className="w-full">
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
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Channel
          </Label>
          <Select defaultValue="twitter">
            <SelectTrigger id="channel" className="w-full">
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

        <Button className="w-full bg-[#1DA1F2] hover:bg-[#1a91da] text-white">
          <Twitter className="mr-2 h-4 w-4" />
          Connect twitter
        </Button>

        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2">Mode</Label>
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
            <Label
              htmlFor="copilot"
              className={`flex-1 text-center py-1 px-3 rounded-full cursor-pointer text-sm ${
                true ? "bg-white shadow" : ""
              }`}
            >
              Copilot
            </Label>
            <Label
              htmlFor="auto-pilot"
              className={`flex-1 text-center py-1 px-3 rounded-full cursor-pointer text-sm ${
                false ? "bg-white shadow" : ""
              }`}
            >
              Auto-pilot
            </Label>
            <Switch id="mode" className="hidden" />
          </div>
        </div>

        <p className="text-sm text-gray-500">
          AI will autonomously post content for you
        </p>

        <div>
          <Label
            htmlFor="review-period"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            Review period
          </Label>
          <Input
            id="review-period"
            type="text"
            placeholder="0 mins"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex space-x-4 mt-6">
        <Button variant="outline" className="flex-1">
          Go back
        </Button>
        <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
          Save & continue
        </Button>
      </div>
    </div>
  );
}
