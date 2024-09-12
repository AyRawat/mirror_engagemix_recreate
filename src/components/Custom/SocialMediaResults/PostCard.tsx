// src/components/Custom/SocialMediaResults/PostCard.tsx
import React, { useState } from "react";
import { Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PostResponseDto } from "@/apis/types";
import { formatDistanceToNow } from "date-fns";
import TwitterIcon from "@/assets/icons/twitter.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import LinkedInIcon from "@/assets/icons/linkedinIcon.svg";
import RedditIcon from "@/assets/icons/redditIcon.svg";
// Import other icons as needed

interface PostCardProps {
  post: PostResponseDto;
  keywords: string[];
  onReplyClick: (post: PostResponseDto) => void;
}

const sourceIconMap: { [key: string]: string } = {
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  reddit: RedditIcon,
  // Add other sources and their corresponding icons here
};

const PostCard: React.FC<PostCardProps> = ({
  post,
  keywords,
  onReplyClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const contentToShow = isExpanded ? post.text : post.text.slice(0, 250);

  const handleExternalLinkClick = () => {
    window.open(post.url, "_blank");
  };

  const IconComponent = sourceIconMap[post.source] || TwitterIcon; // Default to TwitterIcon if source is not found

  return (
    <div className="border border-gray-200 rounded-lg p-4 m-2 ">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="flex items-center">
            <img src={IconComponent} className="h-6 w-6 mr-2" />
            <span className="font-semibold">{post.authorName}</span>
          </div>
          <span className="text-sm text-gray-500">
            {post.createdAt &&
              formatDistanceToNow(new Date(post.createdAt * 1000), {
                addSuffix: true,
              })}
          </span>
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onReplyClick(post)}
          >
            Reply
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleExternalLinkClick}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <ScrollArea>
        <div className="text-sm mb-2 text-left max-h-40">
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
        </div>
      </ScrollArea>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
          >
            {keyword}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center mt-2">
        <Button variant="link" size="sm" className="text-blue-500 p-0">
          Show less posts like this
        </Button>
        <span className="text-sm text-gray-500">
          Relevance score: {post.semanticScore?.sbert}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
