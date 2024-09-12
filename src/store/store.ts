import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import projectsReducer from './projectsSlice';
import authReducer from './authSlice';
import postReducer from './postSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    projects: projectsReducer,
    auth: authReducer,
    posts: postReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
