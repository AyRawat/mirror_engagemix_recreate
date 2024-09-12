import { api } from "@/apis";
import { ProjectDto } from "@/apis/types";
// src/hooks/useProjects.ts
import { useQuery } from "@tanstack/react-query";

const fetchProjects = async (): Promise<ProjectDto[]> => {
  return await api.projects.getAll();
};

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
