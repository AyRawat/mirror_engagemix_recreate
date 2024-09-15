import { useQuery } from '@tanstack/react-query';
import { api } from '@/apis';
import { PostResponseDto } from '@/apis/types';

export const usePosts = (projectId: string) => {
  return useQuery<PostResponseDto[], Error>({
    queryKey: ['posts', projectId],
    queryFn: () => api.projects.getPostsOnProject(projectId),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};