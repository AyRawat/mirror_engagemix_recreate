import React, { useState } from "react";
import { Twitter, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const PostCard = ({
  username,
  time,
  content,
  onReplyClick,
}: {
  username: string;
  time: string;
  content: string;
  onReplyClick: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const contentToShow = isExpanded ? content : content.slice(0, 250);

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="flex items-center">
            <Twitter className="h-4 w-4 text-blue-400 mr-2" />
            <span className="font-semibold">{username}</span>
          </div>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={onReplyClick}>
            Reply
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <ScrollArea>
        <div className="text-sm mb-2 text-left max-h-40">
          {contentToShow}
          {content.length > 250 && (
            <Button
              variant="link"
              size="sm"
              className="text-blue-500 p-0"
              onClick={toggleExpand}
            >
              {isExpanded ? "...Show less" : "... Show more"}
            </Button>
          )}
        </div>
      </ScrollArea>
      <div className="flex flex-wrap gap-2">
        {[
          "Group ticket",
          "Group ticket",
          "Group ticket",
          "Group ticket",
          "Group ticket",
          "Group ticket",
        ].map((label, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
          >
            {label}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-2">
        <Button variant="link" size="sm" className="text-blue-500 p-0">
          Show less posts like this
        </Button>
        <span className="text-sm text-gray-500">Relevance score: 5</span>
      </div>
    </div>
  );
};

export default PostCard;
