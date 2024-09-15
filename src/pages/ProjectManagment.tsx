// src/pages/ProjectManagment.tsx
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ProjectCard from "@/components/project/ProjectCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IProjectAnalytics, ProjectDto } from "@/apis/types";
import { useMemo } from "react";
import NoPostsCard from "@/components/social-media/NoPostsCard";
import Loader from "@/components/common/Loader";
import { useProjectsAnalytics } from "@/hooks/useProjectAnalytics";

interface ProjectManagementProps {
  isProjectsSection: boolean;
  projects: ProjectDto[];
  handleNewProject?: () => void;
}

export default function ProjectManagement({
  isProjectsSection,
  projects,
  handleNewProject,
}: ProjectManagementProps) {
  const navigate = useNavigate();
  const analyticsQueries = useProjectsAnalytics(projects);
  // const isLoading = (analyticsQueries.some((query) => query.isLoading );)
  const isLoading = false;  

  const analyticsData = useMemo(() => {
    return analyticsQueries.reduce((acc, query, index) => {
      if (query.data) {
        acc[projects[index].id] = query.data;
      }
      return acc;
    }, {} as { [key: string]: IProjectAnalytics });
  }, [analyticsQueries, projects]);

  const handleCardClick = (project: ProjectDto) => {
    navigate("/social-media-results", { state: { project } });
  };

  // Sort projects based on the processedAt field
  const sortedProjects = [...projects].sort(
    (a, b) =>
      new Date(b.processedAt).getTime() - new Date(a.processedAt).getTime()
  );

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4 text-left">Projects</h2>
      <div className="flex justify-between items-center mb-3">
        <Tabs defaultValue="active" className="w-[600px] text-left">
          <TabsList>
            <TabsTrigger value="active" className="flex-1 rounded-2xl">
              Active
            </TabsTrigger>
            <TabsTrigger value="archived" className="flex-1 rounded-2xl">
              Archived
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <ScrollArea className="border border-gray-300 rounded-2xl w-full">
        <div
          className={`w-full p-3 ${
            isProjectsSection
              ? "max-h-[calc(100vh-22.4rem)]"
              : "max-h-[calc(100vh-32rem)]"
          }`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <Loader
                text="Loading projects..."
                helperText="Please wait while we fetch the data"
                size="medium"
              />
            </div>
          ) : sortedProjects.length > 0 ? (
            sortedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => handleCardClick(project)}
                analyticsData={analyticsData[project.id] || 0} // Pass mentions prop
              />
            ))
          ) : (
            <NoPostsCard
              headerText="No projects yet"
              helperText="Create your first project to get started"
              showButton={true}
              buttonText="Create Project"
              buttonOnClick={handleNewProject}
            />
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
