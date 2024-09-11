import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@/hooks";
import { RootState } from "@/store/store";
import { fetchPosts } from "@/store/postSlice";
import Header from "@/components/Custom/SocialMediaResults/Header";
import NavigationTabs from "@/components/Custom/SocialMediaResults/NavigationTabs";
import SocialMediaCounts from "@/components/Custom/SocialMediaResults/SocialMediaCounts";
import PostCard from "@/components/Custom/SocialMediaResults/PostCard";
import InviteMemberModal from "@/components/blocks/InviteMember";
import Reply from "@/components/Custom/Reply";
import ReplySent from "@/components/Custom/ReplySent";
import ConfigurationSettings from "@/components/blocks/ConfigurationSettings";
import { PostResponseDto } from "@/apis/types";
import { formatDistanceToNow } from "date-fns";
import { Progress } from "@/components/ui/progress"; // Import ProgressBar
import { ScrollArea } from "@/components/ui/scroll-area"; // Import ScrollArea

export default function SocialMediaResults() {
  const [progress, setProgress] = useState(10);
  const [isInviteModalOpen, setInviteModalOpen] = useState(false);
  const [isReplyOpen, setReplyOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("results");
  const posts = useSelector((state: RootState) => state.posts.posts);
  const postsStatus = useSelector((state: RootState) => state.posts.status);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => setProgress((prev) => prev + 40), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

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
    <div className="mx-auto pt-6 px-6 max-h-screen">
      <Header onInviteClick={handleInviteClick} />
      <NavigationTabs activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === "results" && (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-left">Results</h2>
          <SocialMediaCounts />
          <ScrollArea className="max-h-[64vh] border border-gray-300 rounded-lg">
            <div className="p-3 h-[64vh]">
              {postsStatus === "loading" ? (
                <div className="flex flex-col items-center">
                  <Progress className="w-full mb-4" value={progress} />
                  <p>Loading posts...</p>
                </div>
              ) : (
                posts.map((post: PostResponseDto) => (
                  <PostCard
                    className="border border-gray-300 rounded p-4 mb-2"
                    key={post.id}
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
                  // <ReplySent />
                ))
              )}
            </div>
          </ScrollArea>
        </div>
      )}
      {activeTab === "configuration" && <ConfigurationSettings />}
      {isInviteModalOpen && <InviteMemberModal onClose={handleCloseModal} />}
      {isReplyOpen && <Reply onClose={handleCloseReply} />}
    </div>
  );
}
