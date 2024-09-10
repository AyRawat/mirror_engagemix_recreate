// src/store/authSlice.ts
import { TokenDto } from '@/apis/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: { email: string; name?: string } | null;
  token: TokenDto | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ email: string; name?: string }>) {
      state.user = action.payload;
    },
    setToken(state, action: PayloadAction<TokenDto>) {
      state.token = action.payload;
    },
    clearAuth(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, setToken, clearAuth } = authSlice.actions;
export default authSlice.reducer;