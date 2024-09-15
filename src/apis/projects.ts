import axiosInstance from "./axios";
import {
  CreateProjectDto,
  PostResponseDto,
  ProjectDto,
  UpdateProjectDto,
  AnalyticsDto,
  IProjectAnalytics,
} from "./types";

const getAll = async (): Promise<ProjectDto[]> => {
  try {
    const { data } = await axiosInstance.get("/projects");
    return data as ProjectDto[];
  } catch {
    throw new Error("Failed to fetch projects");
  }
};

const getPostsOnProject = async (
  projectId: string
): Promise<PostResponseDto[]> => {
  try {
    const { data } = await axiosInstance.get(`/projects/${projectId}/posts`);
    return data as PostResponseDto[];
  } catch {
    throw new Error("Failed to fetch Posts on Project");
  }
};

const create = async (requestDto: CreateProjectDto): Promise<ProjectDto> => {
  try {
    const { data } = await axiosInstance.post("/projects", requestDto);
    return data as ProjectDto;
  } catch {
    throw new Error("Failed to create project");
  }
};

const update = async (
  id: string,
  updateProjectDto: UpdateProjectDto
): Promise<ProjectDto> => {
  console.log(id, updateProjectDto);

  try {
    const { data } = await axiosInstance.put(
      `/projects/${id}`,
      updateProjectDto
    );
    return data as ProjectDto;
  } catch {
    throw new Error("Failed to update project");
  }
};

const deleteProject = async (id: string): Promise<void> => {
  try {
    await axiosInstance.delete(`/projects/${id}`);
  } catch {
    throw new Error("Failed to delete project");
  }
};

const getSuggestedKeywords = async (
  projectDescription: string
): Promise<string[]> => {
  try {
    const { data } = await axiosInstance.get(
      `/projects/generate-suggested-keywords`,
      {
        params: { projectDescription },
      }
    );
    return data as string[];
  } catch {
    throw new Error("Failed to fetch suggested keywords");
  }
};

// New methods for analytics
const getAnalytics = async (): Promise<AnalyticsDto> => {
  try {
    const { data } = await axiosInstance.get("/projects/analytics");
    return data as AnalyticsDto;
  } catch {
    throw new Error("Failed to fetch analytics");
  }
};

const getProjectAnalytics = async (
  projectId: string
): Promise<IProjectAnalytics> => {
  try {
    const { data } = await axiosInstance.get(
      `/projects/${projectId}/analytics`
    );
    return data as IProjectAnalytics;
  } catch {
    throw new Error("Failed to fetch project analytics");
  }
};

export const projects = {
  getAll,
  create,
  update,
  delete: deleteProject,
  getPostsOnProject,
  getSuggestedKeywords,
  getAnalytics,
  getProjectAnalytics,
};
