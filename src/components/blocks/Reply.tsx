import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, Send, Twitter } from "lucide-react";

export default function Reply({ onClose }: { onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(true);
  const [customInstruction, setCustomInstruction] = useState("");
  const [reply, setReply] = useState("");

  const handleSendReply = () => {
    console.log("Reply sent:", reply);
    setIsOpen(false);
    onClose();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-6 rounded-lg">
        <div className="flex items-start space-x-3 mb-4">
          <Twitter className="h-4 w-4 text-blue-400 mr-2" />
          <div className="flex-1">
            <p className="font-semibold text-sm">@AlienKing04</p>
            <p className="text-xs text-gray-500">12 minutes ago</p>
          </div>
        </div>
        <p className="text-sm mb-6">
          Kaijego specializes in organizing group trips and providing
          comprehensive travel planning services. Whether you're looking to join
          a group trip, seek personal travel advice, or explore destinations,
          Kaijego aims to make travel planning hassle-free and enjoyable....
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-md p-2">
            <Globe className="text-gray-500" size={18} />
            <Input
              placeholder="Custom instruction"
              value={customInstruction}
              onChange={(e) => setCustomInstruction(e.target.value)}
              className="flex-1 border-none bg-transparent placeholder:text-gray-400"
            />
          </div>
          <Textarea
            placeholder="Compose reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="w-full min-h-[100px] resize-none"
          />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <Select>
            <SelectTrigger className="w-[180px] bg-gray-100 text-gray-600 border-none">
              <SelectValue placeholder="Select a goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="goal1">Goal 1</SelectItem>
              <SelectItem value="goal2">Goal 2</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="px-4 py-2 text-gray-600"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white"
              onClick={handleSendReply}
            >
              Send reply
              <Send size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
