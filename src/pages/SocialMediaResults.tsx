// src/pages/SocialMediaResults.tsx
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
import { Progress } from "@/components/ui/progress"; // Import ProgressBar
import { ScrollArea } from "@/components/ui/scroll-area"; // Import ScrollArea
import { replies } from "@/apis/replies"; // Import the replies API
import { useLocation } from "react-router-dom"; // Import useLocation

export default function SocialMediaResults() {
  const location = useLocation(); // Initialize useLocation
  const projectId = location.state?.projectId; // Get projectId from state

  const [progress, setProgress] = useState(10);
  const [isInviteModalOpen, setInviteModalOpen] = useState(false);
  const [isReplyOpen, setReplyOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("results");
  const [selectedPost, setSelectedPost] = useState<PostResponseDto | null>(
    null
  );
  const [generatedReply, setGeneratedReply] = useState<string | null>(null);
  const [isReplySent, setIsReplySent] = useState(false);
  const posts = useSelector((state: RootState) => state.posts.posts);
  const postsStatus = useSelector((state: RootState) => state.posts.status);
  const projects = useSelector((state: RootState) => state.projects.projects);
  const project = projects.find((project) => project.id === projectId);
  const keywords = project?.keywords || [];

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => setProgress((prev) => prev + 40), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts(projectId));
    }
  }, [postsStatus, dispatch, projectId]);

  const handleInviteClick = () => {
    setInviteModalOpen(true);
  };

  const handleCloseModal = () => {
    setInviteModalOpen(false);
  };

  const handleReplyClick = (post: PostResponseDto) => {
    if (generatedReply !== null) {
      setGeneratedReply(null);
    }
    setSelectedPost(post);
    setReplyOpen(true);
    setIsReplySent(false);
  };

  const handleCloseReply = () => {
    setReplyOpen(false);
    // setSelectedPost(null);
    // setGeneratedReply(null);
  };

  const handleGenerateReply = async (customInstruction: string) => {
    if (selectedPost) {
      const requestDto = {
        postId: selectedPost.id,
        instruction: customInstruction,
      };
      try {
        const response = await replies.generate(requestDto);
        setGeneratedReply(response.reply);
      } catch (error) {
        console.error("Failed to generate reply:", error);
      }
    }
  };

  const handleSendReply = () => {
    setReplyOpen(false);
    setIsReplySent(true);
  };

  return (
    <div className="mx-auto pt-6 px-6 max-h-screen">
      {postsStatus === "loading" ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="flex flex-col items-center">
            <Progress className="w-full mb-4" value={progress} />
            <p>Loading posts...</p>
          </div>
        </div>
      ) : (
        <>
          <Header onInviteClick={handleInviteClick} />
          <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {activeTab === "results" && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-left">Results</h2>
              <SocialMediaCounts />
              <ScrollArea className="max-h-[64vh] border border-gray-300 rounded-lg">
                <div className="p-3 h-[64vh]">
                  {posts.map((post: PostResponseDto) => (
                    <div key={post.id}>
                      <PostCard
                        post={post}
                        keywords={keywords}
                        onReplyClick={handleReplyClick}
                      />
                      {isReplySent && selectedPost?.id === post.id && (
                        <ReplySent reply={generatedReply || ""} />
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
          {activeTab === "configuration" && <ConfigurationSettings />}
          {isInviteModalOpen && (
            <InviteMemberModal onClose={handleCloseModal} />
          )}
          {isReplyOpen && selectedPost && (
            <Reply
              post={selectedPost}
              onClose={handleCloseReply}
              onGenerateReply={handleGenerateReply}
              generatedReply={generatedReply}
              onSendReply={handleSendReply}
            />
          )}
        </>
      )}
    </div>
  );
}
