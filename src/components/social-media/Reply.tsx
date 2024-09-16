// src/components/Custom/Reply.tsx
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import FeatherIcon from "@/assets/icons/feather.svg";
import { Label } from "@/components/ui/label";
import { Send, X } from "lucide-react";
import { PostResponseDto } from "@/apis/types";
import RegenerateIcon from "@/assets/icons/regenerateicon";
import WhiteRegenerateIcon from "@/assets/icons/whiteregenerate.svg";
import RedditIcon from "@/assets/icons/redditIcon.svg";
import LinkedinIcon from "@/assets/icons/linkedinIcon.svg";
import HackernewsIcon from "@/assets/icons/hackernews.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstragramIcon from "@/assets/icons/instagram.svg";
import QuoraIcon from "@/assets/icons/quora.svg";
import FilterIcon from "@/assets/icons/filtericon.svg";

const platformIcons: { [key: string]: string } = {
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  reddit: RedditIcon,
  hackernews: HackernewsIcon,
  instagram: InstragramIcon,
  quora: QuoraIcon,
};

interface ReplyProps {
  post: PostResponseDto;
  onClose: () => void;
  onGenerateReply: (customInstruction: string) => void;
  generatedReply: string | null;
  onSendReply: () => void;
}

const Reply: React.FC<ReplyProps> = ({
  post,
  onClose,
  onGenerateReply,
  generatedReply,
  onSendReply,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [customInstruction, setCustomInstruction] = useState("");
  const [reply, setReply] = useState("");
  const [showCustomInstruction, setShowCustomInstruction] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const contentToShow = isExpanded ? post.text : post.text.slice(0, 250);

  useEffect(() => {
    if (generatedReply) {
      setReply(generatedReply);
    }
  }, [generatedReply]);

  const handleGenerateReply = () => {
    setShowCustomInstruction(true);
  };

  const handleCustumInstructionGeneration = () => {
    onGenerateReply(customInstruction);
  };
  const handleSendReply = () => {
    onSendReply();
    setIsOpen(false);
    onClose();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-6 rounded-2xl">
        <div className="flex items-start space-x-3 mb-4">
          <img
            src={platformIcons[post.source] || FilterIcon}
            alt={post.source}
            className="h-4 w-4 mr-2"
          />
          <div className="flex-1">
            <p className="font-semibold text-sm">@{post.authorName}</p>
            <p className="text-xs text-gray-500">12 minutes ago</p>
          </div>
        </div>
        <ScrollArea>
          <p className="text-sm mb-6 max-h-40">
            {contentToShow}
            {post.text.length > 250 && (
              <Button
                variant="link"
                size="sm"
                className="text-blue-500 p-0"
                onClick={toggleExpand}
              >
                {isExpanded ? "...Show less" : "... Show more"}
              </Button>
            )}
          </p>
        </ScrollArea>
        <div className="space-y-4">
          <Label className="flex text-sm text-left text-[#344054]">
            Compose Reply <img src={FeatherIcon} className="h-5 w-5 ml-2" />{" "}
          </Label>
          <Textarea
            placeholder="Compose reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="w-full min-h-[150px] resize-none"
          />
          {showCustomInstruction && (
            <div className="w-1/2">
              <Button
                className="border border-[#80BBFF] text-sm text-[#475367] rounded-lg"
                onClick={() => {
                  setShowCustomInstruction(false);
                  setCustomInstruction("");
                }}
              >
                Type instruction below <X className="h-4 w-4 ml-4" />
              </Button>
            </div>
          )}
          {showCustomInstruction && (
            <div className="text-sm text-left text-[#344054]">
              <div className="items-center">
                <Label>Custom Instructions</Label>
                <div className="flex">
                  <Input
                    placeholder="Type Instructions here"
                    value={customInstruction}
                    onChange={(e) => setCustomInstruction(e.target.value)}
                    className="flex-1 border-none bg-transparent bg-[#FAFAFA] placeholder:text-gray-400 h-[3rem]"
                  />
                  <Button
                    variant="secondary"
                    className="px-4 py-2 mx-3 text-white bg-[#3383E1] flex items-center justify-center h-[3rem] w-[4rem] hover:bg-[#3383E1]"
                    onClick={handleCustumInstructionGeneration}
                  >
                    <img src={WhiteRegenerateIcon} />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {!showCustomInstruction && (
            <Button
              variant="default"
              className="px-4 py-2 text-[#475367] flex items-center justify-center rounded-lg border border-[#80BBFF]"
              onClick={handleGenerateReply}
            >
              Generate a different reply with new instructions
              <span className="ml-2 pl-2">
                <RegenerateIcon />
              </span>
            </Button>
          )}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 w-full">
            <Button
              variant="outline"
              className="px-4 py-2 text-gray-600 w-1/2 h-[3rem] bg-[#E8E8E8]"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white w-1/2 h-[3rem]"
              onClick={handleSendReply}
              disabled={!reply.trim()} // Disable button if reply is empty or only whitespace
            >
              Send reply
              <Send size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Reply;
