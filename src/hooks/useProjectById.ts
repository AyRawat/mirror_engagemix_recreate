import { api } from '@/apis';
import { ProjectDto } from '@/apis/types';
// src/hooks/useProject.ts
import { useQuery } from '@tanstack/react-query';

const fetchProjects = async (): Promise<ProjectDto[]> => {
  return await api.projects.getAll();
};

export const useProjectById = (projectId: string) => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    select: (projects) => projects.find((project) => project.id === projectId),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
