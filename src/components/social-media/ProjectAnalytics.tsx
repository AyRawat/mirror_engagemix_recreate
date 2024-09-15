import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/apis";
import StatsComponent from "@/components/common/StatsComponent";
import Banner from "@/components/common/Banner";
import BannerSVG from "@/assets/Analytics/Banner.svg";
import { IProjectAnalytics } from "@/apis/types";
import Loader from "@/components/common/Loader";

interface ProjectAnalyticsProps {
  projectId: string;
}

const useProjectAnalytics = (projectId: string) => {
  return useQuery<IProjectAnalytics, Error>({
    queryKey: ["projectAnalytics", projectId],
    queryFn: () => api.projects.getProjectAnalytics(projectId),
  });
};

const ProjectAnalytics: React.FC<ProjectAnalyticsProps> = ({ projectId }) => {
  const { data: analyticsData, isLoading, error } = useProjectAnalytics(projectId);

  const stats = useMemo(() => {
    if (!analyticsData) return [];
    return [
      { label: "Keywords Tracked", value: analyticsData.keywords.toString() },
      { label: "Mentions", value: analyticsData.posts.toString() },
      { label: "Leads", value: analyticsData.leads.toString() },
      { label: "Link Clicks", value: analyticsData.clicks.toString() },
      { label: "Impressions", value: analyticsData.impressions.toString() },
    ];
  }, [analyticsData]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader text="Loading analytics..." helperText="Please wait while we fetch the data" />
      </div>
    );
  }

  if (error) return <div>Error loading analytics: {error.message}</div>;

  return (
    <div className="gap space-y-14">
      {stats.length > 0 && <StatsComponent stats={stats} />}
      <Banner bannerSvg={BannerSVG} />
    </div>
  );
};

export default ProjectAnalytics;
