// src/pages/SocialMediaResults.tsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  ArrowLeft,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
  Share2,
  ExternalLink,
  Plus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InviteMemberModal from "@/components/blocks/InviteMember";
import Reply from "@/components/Custom/Reply"; // Import the Reply component
import { useNavigate } from "react-router-dom";
import ReplySent from "@/components/Custom/ReplySent";
import ConfigurationSettings from "@/components/blocks/ConfigurationSettings"; // Import ConfigurationSettings
import { PostResponseDto } from "@/apis/types";
import { formatDistanceToNow } from "date-fns";

const Header = ({ onInviteClick }: { onInviteClick: () => void }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="mr-2"
          onClick={handleBackClick}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-lg font-semibold">Www.Homelade.io</h1>
      </div>
      <div className="flex -space-x-2">
        <Avatar className="h-8 w-8">
          <AvatarFallback>OK</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white w-8 h-8">
          <AvatarImage src="/placeholder-avatar-1.jpg" />
          <AvatarFallback>U1</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-white w-8 h-8">
          <AvatarImage src="/placeholder-avatar-2.jpg" />
          <AvatarFallback>U2</AvatarFallback>
        </Avatar>
        <Avatar
          className="border-2 border-white w-8 h-8 cursor-pointer"
          onClick={onInviteClick}
        >
          <Plus className="h-7 w-7 text-white bg-black" />
        </Avatar>
      </div>
    </div>
  );
};

const Navigation = ({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) => (
  <Tabs
    value={activeTab}
    onValueChange={onTabChange}
    className="mb-6 text-left"
  >
    <TabsList>
      <TabsTrigger value="results" className="px-4 py-2">
        Results
      </TabsTrigger>
      <TabsTrigger value="configuration" className="px-4 py-2">
        Configuration settings
      </TabsTrigger>
      <TabsTrigger value="analytics" className="px-4 py-2">
        Analytics
      </TabsTrigger>
    </TabsList>
  </Tabs>
);

const SocialMediaCounts = () => {
  const platforms = [
    { icon: Twitter, name: "Twitter", count: 3, color: "text-blue-400" },
    { icon: Facebook, name: "Facebook", count: 0, color: "text-blue-600" },
    { icon: Linkedin, name: "LinkedIn", count: 0, color: "text-blue-700" },
    { icon: Instagram, name: "Instagram", count: 0, color: "text-gray-700" },
    { icon: MessageCircle, name: "Quora", count: 0, color: "text-red-500" },
  ];

  return (
    <div className="flex space-x-2 mb-6 bg-gray-100 rounded-lg p-2 w-fit">
      {platforms.map(({ icon: Icon, name, count, color }) => (
        <div
          key={name}
          className="flex items-center bg-white rounded-full px-3 py-1.5 shadow-sm"
        >
          <Icon className={`h-4 w-4 ${color} mr-2`} />
          <span className="text-sm font-medium mr-2">{name}</span>
          <span
            className={`text-sm font-semibold ${
              count > 0 ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {count}
          </span>
        </div>
      ))}
    </div>
  );
};

const TwitterPost = ({
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
    <div className="border-b border-gray-200 py-4">
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
      <div className="text-sm mb-2 text-left max-h-40 overflow-auto">
        {contentToShow}
        {content.length > 250 && (
          <Button
            variant="link"
            size="sm"
            className="text-blue-500 p-0"
            onClick={toggleExpand}
          >
            {isExpanded ? "Show less" : "Show more"}
          </Button>
        )}
      </div>
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

export default function SocialMediaResults() {
  const [isInviteModalOpen, setInviteModalOpen] = useState(false);
  const [isReplyOpen, setReplyOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("results");
  const posts = useSelector((state: RootState) => state.posts.posts);

  const handleInviteClick = () => {
    setInviteModalOpen(true);
  };

  const handleCloseModal = () => {
    setInviteModalOpen(false);
  };

  const handleReplyClick = () => {
    setReplyOpen(true);
  };

  const handleCloseReply = () => {
    setReplyOpen(false);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto p-6 max-h-scre">
      <Header onInviteClick={handleInviteClick} />
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === "results" && (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-left">Results</h2>
          <SocialMediaCounts />
          {posts.map((post: PostResponseDto) => (
            <div
              key={post.id}
              className="border border-gray-300 rounded p-2 mb-2"
            >
              <TwitterPost
                username={post.authorName}
                time={
                  post.createdAt &&
                  formatDistanceToNow(new Date(post.createdAt * 1000), {
                    addSuffix: true,
                  })
                }
                content={post.text}
                onReplyClick={handleReplyClick}
              />
              {/* <ReplySent /> */}
            </div>
          ))}
        </div>
      )}
      {activeTab === "configuration" && <ConfigurationSettings />}
      {isInviteModalOpen && <InviteMemberModal onClose={handleCloseModal} />}
      {isReplyOpen && <Reply onClose={handleCloseReply} />}
    </div>
  );
}
