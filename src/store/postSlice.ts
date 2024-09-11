// src/store/postsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { projects } from '@/apis/projects';
import { PostResponseDto } from '@/apis/types';

interface PostsState {
  posts: PostResponseDto[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  keywordMatches: { [postId: string]: number };
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
  keywordMatches: {},
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (projectId: string) => {
    const response = await projects.getPostsOnProject(projectId);
    return response;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setKeywordMatches(state, action: PayloadAction<{ postId: string; count: number }>) {
      state.keywordMatches[action.payload.postId] = action.payload.count;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch posts';
      });
  },
});

export const { setKeywordMatches } = postsSlice.actions;

export default postsSlice.reducer;