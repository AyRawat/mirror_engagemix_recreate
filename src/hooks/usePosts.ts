import { api } from "@/apis";
import { PostResponseDto } from "@/apis/types";
// src/hooks/usePosts.ts
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async (projectId: string): Promise<PostResponseDto[]> => {
  return await api.projects.getPostsOnProject(projectId);
};

export const usePosts = (projectId: string) => {
  return useQuery({
    queryKey: ["posts", projectId],
    queryFn: () => fetchPosts(projectId),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
