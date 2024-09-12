// src/store/projectsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ProjectDto } from '@/apis/types';
import { api } from '@/apis';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  const projects = await api.projects.getAll();
  return projects;
});

interface ProjectsState {
  projects: ProjectDto[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProjectsState = {
  projects: [] as ProjectDto[],
  status: 'idle',
  error: null,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch projects';
      });
  },
});

export default projectsSlice.reducer;