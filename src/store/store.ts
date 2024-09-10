import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import projectsReducer from './projectsSlice';
import authReducer from './authSlice';




const store = configureStore({
  reducer: {
    form: formReducer,
    projects: projectsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
