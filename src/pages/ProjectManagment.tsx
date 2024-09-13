// src/pages/ProjectManagment.tsx
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Calendar, Download } from "lucide-react";
import FilterButton from "@/components/Custom/FilterButton";
import ProjectCard from "@/components/blocks/ProjectCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProjectDto } from "@/apis/types";
import { useEffect, useState } from "react";
import { api } from "@/apis";

interface ProjectManagementProps {
  isProjectsSection: boolean;
  projects: ProjectDto[];
}

export default function ProjectManagement({
  isProjectsSection,
  projects,
}: ProjectManagementProps) {
  const navigate = useNavigate();
  const [analyticsData, setAnalyticsData] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      const data: { [key: string]: number } = {};
      for (const project of projects) {
        try {
          const analytics = await api.projects.getProjectAnalytics(project.id);
          data[project.id] = analytics.replies;
          data["posts"] = analytics.posts;
        } catch (error) {
          console.error(
            `Failed to fetch analytics for project ${project.id}:`,
            error
          );
        }
      }
      setAnalyticsData(data);
    };

    fetchAnalyticsData();
  }, [projects]);

  const handleCardClick = (projectId: string) => {
    navigate("/social-media-results", { state: { projectId } });
  };

  // Sort projects based on the processedAt field
  const sortedProjects = [...projects].sort(
    (a, b) =>
      new Date(b.processedAt).getTime() - new Date(a.processedAt).getTime()
  );

  return (
    <div className="w-full max-w-7xl">
      <h2 className="text-2xl font-bold mb-4 text-left">Projects</h2>
      <div className="flex justify-between items-center mb-3">
        <Tabs defaultValue="active" className="w-[600px] text-left">
          <TabsList>
            <TabsTrigger value="active" className="flex-1">
              Active
            </TabsTrigger>
            <TabsTrigger value="archived" className="flex-1">
              Archived
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex space-x-2">
          <FilterButton>
            <Filter className="mr-2 h-4 w-4" />
            All platforms
          </FilterButton>
          <FilterButton>
            <Calendar className="mr-2 h-4 w-4" />
            Last 24 hours
          </FilterButton>
          <FilterButton>
            <Download className="mr-2 h-4 w-4" />
            Import/export
          </FilterButton>
        </div>
      </div>
      <ScrollArea className="border border-gray-300 rounded-2xl max-w-[73rem] w-[73rem]">
        <div
          className={`w-full p-3 ${
            isProjectsSection ? "max-h-[calc(100vh-22.4rem)]" : "max-h-56"
          }`}
        >
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleCardClick(project.id)}
              mentions={analyticsData[project.id] || 0} // Pass mentions prop
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
