import axiosInstance from "./axios";
import { CreateProjectDto, PostResponseDto, ProjectDto, UpdateProjectDto } from "./types";

const getAll = async (): Promise<ProjectDto[]> => {
  try {
    const { data } = await axiosInstance.get("/projects");
    return data as ProjectDto[];
  } catch {
    throw new Error("Failed to fetch projects");
  }
};

const getPostsOnProject = async (projectId: string): Promise<PostResponseDto[]> => {
  try {
    const { data } = await axiosInstance.get(`/projects/${projectId}/posts`);
    return data as PostResponseDto[];
  } catch {
    throw new Error("Failed to fetch Posts on Project");
  }
}

const create = async (requestDto: CreateProjectDto): Promise<ProjectDto> => {
  try {
    const { data } = await axiosInstance.post("/projects", requestDto);
    return data as ProjectDto;
  } catch {
    throw new Error("Failed to create project");
  }
};

const update = async (id: string, updateProjectDto: UpdateProjectDto): Promise<ProjectDto> => {
  console.log(id, updateProjectDto);
  
  try {
    const { data } = await axiosInstance.put(`/projects/${id}`, updateProjectDto);
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

export const projects = {
  getAll,
  create,
  update,
  delete: deleteProject,
  getPostsOnProject
};