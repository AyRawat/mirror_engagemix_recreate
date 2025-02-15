// src/pages/SocialMediaResults.tsx
import { useState, useMemo } from "react";
import Header from "@/components/layout/Header";
import NavigationTabs from "@/components/social-media/NavigationTabs";
import SocialMediaCounts from "@/components/social-media/SocialMediaCounts";
import PostCard from "@/components/social-media/PostCard";
import NoPostsCard from "@/components/social-media/NoPostsCard";
import InviteMemberModal from "@/components/project/InviteMember";
import ConfigurationSettings from "@/components/blocks/ConfigurationSettings";
import { PostResponseDto, ProjectDto } from "@/apis/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocation } from "react-router-dom";
import ProjectAnalytics from "@/components/social-media/ProjectAnalytics";
import { useAuth } from "@/contexts/auth/AuthContext";
import { usePosts } from "@/hooks/usePosts";
import { PostSource } from "@/apis/types"; // Add this import

import Loader from "@/components/common/Loader";
import RedditIcon from "@/assets/icons/redditIcon.svg";
import LinkedinIcon from "@/assets/icons/linkedinIcon.svg";
import HackernewsIcon from "@/assets/icons/hackernews.svg";
import TwitterIcon from "@/assets/icons/twitter.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstragramIcon from "@/assets/icons/instagram.svg";
import QuoraIcon from "@/assets/icons/quora.svg";
import FilterIcon from "@/assets/icons/filtericon.svg";

export default function SocialMediaResults() {
  const location = useLocation();
  const project = location.state?.project as ProjectDto;
  const { user } = useAuth();
  const [isInviteModalOpen, setInviteModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("results");
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const [repliesSent, setRepliesSent] = useState<{
    [postId: string]: string[];
  }>({});
  const [showAllReplies, setShowAllReplies] = useState<{
    [postId: string]: boolean;
  }>({});
  const [page, setPage] = useState(1);

  const POSTS_PER_PAGE = 10;

  const { data: posts, isLoading } = usePosts(project?.id);

  const [selectedTimeFilter, setSelectedTimeFilter] = useState("week");

  const filterPostsByTime = (posts: PostResponseDto[], timeFilter: string) => {
    const now = new Date().getTime() / 1000; // Current time in seconds
    return posts.filter((post) => {
      const postTime = post.createdAt || 0;
      const timeDiff = now - postTime;
      switch (timeFilter) {
        case "day":
          return timeDiff <= 24 * 60 * 60;
        case "week":
          return timeDiff <= 7 * 24 * 60 * 60;
        case "month":
          return timeDiff <= 30 * 24 * 60 * 60;
        case "year":
          return timeDiff <= 365 * 24 * 60 * 60;
        default:
          return true;
      }
    });
  };

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    let filtered = selectedPlatform
      ? posts.filter((post) => post.source === selectedPlatform)
      : posts;
    return filterPostsByTime(filtered, selectedTimeFilter);
  }, [posts, selectedPlatform, selectedTimeFilter]);

  const paginatedPosts = useMemo(() => {
    return filteredPosts.slice(0, page * POSTS_PER_PAGE);
  }, [filteredPosts, page]);

  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleInviteClick = () => {
    setInviteModalOpen(true);
  };

  const handleCloseModal = () => {
    setInviteModalOpen(false);
  };

  const handlePlatformClick = (platform: string) => {
    setSelectedPlatform(platform === "all" ? null : platform);
  };

  const handleReplySent = (postId: string, reply: string) => {
    setRepliesSent((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), reply],
    }));
  };

  const handleToggleShowAllReplies = (postId: string) => {
    setShowAllReplies((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const sourceCounts = useMemo(() => {
    const unfilteredCounts: Record<PostSource, number> = {
      twitter: 0,
      facebook: 0,
      linkedin: 0,
      instagram: 0,
      quora: 0,
      reddit: 0,
      hackernews: 0,
    };

    const filteredCounts: Record<PostSource, number> = { ...unfilteredCounts };

    posts?.forEach((post) => {
      unfilteredCounts[post.source] = (unfilteredCounts[post.source] || 0) + 1;

      if (filterPostsByTime([post], selectedTimeFilter).length > 0) {
        filteredCounts[post.source] = (filteredCounts[post.source] || 0) + 1;
      }
    });
    return { unfilteredCounts, filteredCounts };
  }, [posts, selectedTimeFilter]);

  const keywords = project?.keywords || [];

  const platforms = [
    { value: "all", label: "All platforms", icon: FilterIcon },
    { value: "twitter", label: "Twitter", icon: TwitterIcon },
    { value: "facebook", label: "Facebook", icon: FacebookIcon },
    { value: "linkedin", label: "LinkedIn", icon: LinkedinIcon },
    { value: "reddit", label: "Reddit", icon: RedditIcon },
    { value: "hackernews", label: "Hackernews", icon: HackernewsIcon },
    { value: "instagram", label: "Instagram", icon: InstragramIcon },
    { value: "quora", label: "Quora", icon: QuoraIcon },
  ];

  return (
    <div className="flex flex-col h-screen pt-5 pb-6">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="flex flex-col items-center">
            <Loader
              text="Loading posts..."
              helperText="Please wait while we fetch the data"
            />
          </div>
        </div>
      ) : (
        <>
          <Header
            projectName={project?.name}
            onInviteClick={handleInviteClick}
            showBackButton={true}
          />
          <NavigationTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            platforms={platforms}
            selectedPlatform={selectedPlatform}
            onPlatformChange={handlePlatformClick}
            selectedTimeFilter={selectedTimeFilter}
            onTimeFilterChange={setSelectedTimeFilter}
          />
          {activeTab === "results" && (
            <div className="flex flex-col flex-grow overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <SocialMediaCounts
                  redditCount={sourceCounts.filteredCounts.reddit}
                  twitterCount={sourceCounts.filteredCounts.twitter}
                  facebookCount={sourceCounts.filteredCounts.facebook}
                  linkedinCount={sourceCounts.filteredCounts.linkedin}
                  instagramCount={sourceCounts.filteredCounts.instagram}
                  quoraCount={sourceCounts.filteredCounts.quora}
                  hackernewsCount={sourceCounts.filteredCounts.hackernews}
                  onPlatformClick={handlePlatformClick}
                  selectedPlatform={selectedPlatform?.toLowerCase()}
                />
              </div>
              <ScrollArea className="flex-grow border border-gray-300 rounded-2xl">
                <div className="p-3">
                  {paginatedPosts.length === 0 ? (
                    <NoPostsCard
                      headerText="No posts yet"
                      helperText={
                        "There are no posts to display" +
                        (selectedPlatform ? ` for ${selectedPlatform}.` : ".")
                      }
                    />
                  ) : (
                    <>
                      {paginatedPosts
                        .filter((post: PostResponseDto) => post.text.length > 0)
                        .map((post: PostResponseDto) => (
                          <div key={post.id}>
                            <PostCard
                              post={post}
                              keywords={keywords}
                              onReplyClick={() => {}}
                              repliesSent={repliesSent[post.id] || []}
                              showAllReplies={showAllReplies[post.id] || false}
                              onReplySent={(reply) =>
                                handleReplySent(post.id, reply)
                              }
                              onToggleShowAllReplies={() =>
                                handleToggleShowAllReplies(post.id)
                              }
                            />
                          </div>
                        ))}
                      {paginatedPosts.length < filteredPosts.length && (
                        <button onClick={loadMorePosts}>Load More</button>
                      )}
                    </>
                  )}
                </div>
              </ScrollArea>
            </div>
          )}
          {activeTab === "configuration" && user?.company && (
            <ConfigurationSettings project={project} company={user.company} />
          )}
          {activeTab === "analytics" && (
            <ProjectAnalytics projectId={project?.id} />
          )}
          {isInviteModalOpen && (
            <InviteMemberModal
              onClose={handleCloseModal}
              companyDomain={user?.company?.domain || ""}
            />
          )}
        </>
      )}
    </div>
  );
}
