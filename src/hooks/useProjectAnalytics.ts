// src/hooks/useProjectsAnalytics.ts
import { useQueries } from '@tanstack/react-query';
import { api } from '@/apis';
import { ProjectDto } from '@/apis/types';

export const useProjectsAnalytics = (projects: ProjectDto[]) => {
  return useQueries({
    queries: projects.map(project => ({
      queryKey: ['projectAnalytics', project.id],
      queryFn: () => api.projects.getProjectAnalytics(project.id),
      staleTime: 1000 * 60 * 5, // 5 minutes
    })),
  });
};