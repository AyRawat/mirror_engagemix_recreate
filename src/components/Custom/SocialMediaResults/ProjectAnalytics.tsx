import React, { useEffect, useState, useRef } from "react";
import { api } from "@/apis";
import StatsComponent from "@/components/Custom/StatsComponent";
import Banner from "@/components/Custom/Banner";
import BannerSVG from "@/assets/Analytics/Banner.svg";

interface AnalyticsData {
  keywords: number;
  mentions: number;
  leads: number;
  clicks: number;
  impressions: number;
}

interface ProjectAnalyticsProps {
  projectId: string;
}

const ProjectAnalytics: React.FC<ProjectAnalyticsProps> = ({ projectId }) => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
    null
  );
  const hasFetchedData = useRef(false);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const data = await api.projects.getProjectAnalytics(projectId);
        setAnalyticsData(data);
      } catch (error) {
        console.error("Failed to fetch project analytics:", error);
      }
    };

    if (!hasFetchedData.current) {
      fetchAnalyticsData();
      hasFetchedData.current = true;
    }
  }, [projectId]);

  const stats = analyticsData
    ? [
        {
          label: "Keywords Tracked",
          value: analyticsData?.keywords.toString() || "0",
        },
        {
          label: "Mentions",
          value: analyticsData?.mentions?.toString() || "0",
        },
        { label: "Leads", value: analyticsData?.leads.toString() || "0" },
        {
          label: "Link Clicks",
          value: analyticsData?.clicks.toString() || "0",
        },
        {
          label: "Impressions",
          value: analyticsData?.impressions.toString() || "0",
        },
      ]
    : [
        { label: "Keywords Tracked", value: "0" },
        { label: "Mentions", value: "0" },
        { label: "Leads", value: "0" },
        { label: "Link Clicks", value: "0" },
        { label: "Impressions", value: "0" },
      ];

  return (
    <div className="gap space-y-14">
      {stats.length > 0 && <StatsComponent stats={stats} />}
      <Banner bannerSvg={BannerSVG} />
    </div>
  );
};

export default ProjectAnalytics;
