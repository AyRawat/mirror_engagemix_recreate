// src/pages/SocialMediaResults.tsx
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "@/hooks/DispatchHook";
import { RootState } from "@/store/store";
import { fetchPosts } from "@/store/postSlice";
import Header from "@/components/Custom/SocialMediaResults/Header";
import NavigationTabs from "@/components/Custom/SocialMediaResults/NavigationTabs";
import SocialMediaCounts from "@/components/Custom/SocialMediaResults/SocialMediaCounts";
import PostCard from "@/components/Custom/SocialMediaResults/PostCard";
import NoPostsCard from "@/components/Custom/SocialMediaResults/NoPostsCard";
import InviteMemberModal from "@/components/blocks/InviteMember";
import ConfigurationSettings from "@/components/blocks/ConfigurationSettings";
import { PostResponseDto } from "@/apis/types";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocation } from "react-router-dom";
import ProjectAnalytics from "@/components/Custom/SocialMediaResults/ProjectAnalytics"; // Import the new component

export default function SocialMediaResults() {
  const location = useLocation();
  const projectId = location.state?.projectId;

  const [progress, setProgress] = useState(10);
  const [isInviteModalOpen, setInviteModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("results");
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null); // Add state for selected platform
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

  const handlePlatformClick = (platform: string) => {
    setSelectedPlatform(platform);
  };

  // Calculate the counts for each source
  const sourceCounts = posts.reduce(
    (counts, post) => {
      counts[post.source] = (counts[post.source] || 0) + 1;
      return counts;
    },
    {
      twitter: 0,
      facebook: 0,
      linkedin: 0,
      instagram: 0,
      quora: 0,
      reddit: 0,
      hackernews: 0,
    }
  );

  // Filter posts based on the selected platform
  const filteredPosts = selectedPlatform
    ? posts.filter((post) => post.source === selectedPlatform)
    : posts;

  return (
    <div className="mx-auto pt-6 px-6 max-h-screen max-w-[95vw] w-[95vw] h-[95vh]">
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
              <SocialMediaCounts
                redditCount={sourceCounts.reddit}
                twitterCount={sourceCounts.twitter}
                facebookCount={sourceCounts.facebook}
                linkedinCount={sourceCounts.linkedin}
                instagramCount={sourceCounts.instagram}
                quoraCount={sourceCounts.quora}
                hackernewsCount={sourceCounts.hackernews}
                onPlatformClick={handlePlatformClick} // Pass the handler
              />
              <ScrollArea className="max-h-[64vh] border border-gray-300 rounded-2xl">
                <div className="p-3 h-[64vh]">
                  {filteredPosts.length === 0 ? (
                    <NoPostsCard
                      headerText="No posts yet"
                      helperText={
                        "There are no posts to display" +
                        (selectedPlatform ? ` for ${selectedPlatform}.` : ".")
                      }
                    />
                  ) : (
                    filteredPosts
                      .filter((post: PostResponseDto) => post.text.length > 0)
                      .map((post: PostResponseDto) => (
                        <div key={post.id}>
                          <PostCard
                            post={post}
                            keywords={keywords}
                            onReplyClick={() => {}}
                          />
                        </div>
                      ))
                  )}
                </div>
              </ScrollArea>
            </div>
          )}
          {activeTab === "configuration" && <ConfigurationSettings />}
          {activeTab === "analytics" && (
            <ProjectAnalytics projectId={projectId} />
          )}{" "}
          {/* Render ProjectAnalytics when the tab is active */}
          {isInviteModalOpen && (
            <InviteMemberModal onClose={handleCloseModal} />
          )}
        </>
      )}
    </div>
  );
}
